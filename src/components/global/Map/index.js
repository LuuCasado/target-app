import React, { useState, useRef, useEffect } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";
import cn from "classnames";

import useStyles from "./styles";

const mapZoom = 13;
const startingLatitude = 37.36765;
const startingLongitude = -121.91599;

const createMarker = ({ lng, lat, className, map, icon, onClick }) => {
  if (!map?.on) return;

  const element = document.createElement("div");

  element.onclick = onClick;

  if (icon) {
    const iconElement = document.createElement("div");

    iconElement.style.backgroundImage = `url(${icon})`;

    element.appendChild(iconElement);
  }

  className.split(" ").forEach((elem) => {
    element.classList.add(elem);
  });

  return new tt.Marker({ element }).setLngLat([lng, lat]).addTo(map);
};

const Map = ({
  onCoordChange,
  startEditingTarget,
  editingTargetId,
  initialPreviewMarker,
  targets = [],
  topics = [],
}) => {
  const classes = useStyles();
  const mapElement = useRef();
  const [mapLongitude, setLongitude] = useState(startingLongitude);
  const [mapLatitude, setLatitude] = useState(startingLatitude);
  const [map, setMap] = useState({});
  const [previewMarker, setPreviewMarker] = useState();
  const [startingPreviewMarker, setStartingPreviewMarker] = useState();
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const map = tt.map({
      key: process.env.REACT_APP_API_KEY_MAP,
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });

    const currentMarker = createMarker({
      lng: mapLongitude,
      lat: mapLatitude,
      className: classes.currentMarker,
      map,
    });

    initialPreviewMarker &&
      setStartingPreviewMarker(
        createMarker({
          lng: initialPreviewMarker.mapLongitude,
          lat: initialPreviewMarker.mapLatitude,
          className: classes.previewMarker,
          map,
        })
      );

    setMap(map);

    navigator.geolocation?.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        currentMarker.remove();
        createMarker({
          lat: latitude,
          lng: longitude,
          className: classes.currentMarker,
          map,
        });
        setLatitude(latitude);
        setLongitude(longitude);
      }
    );

    return () => {
      if (currentMarker) currentMarker.remove();
      markers.forEach((marker) => marker.remove());
      map.remove();
    };
  }, []);

  useEffect(() => {
    if (!map?.on) return;

    const clickListener = ({ lngLat }) => {
      onCoordChange && onCoordChange(lngLat);

      setPreviewMarker(
        createMarker({
          lng: lngLat.lng,
          lat: lngLat.lat,
          className: classes.previewMarker,
          map,
        })
      );
    };

    map.on("click", clickListener);

    return () => {
      map.off("click", clickListener);
      if (previewMarker) previewMarker.remove();
      if (startingPreviewMarker) startingPreviewMarker.remove();
    };
  }, [
    map,
    classes,
    previewMarker,
    startingPreviewMarker,
    onCoordChange,
    setPreviewMarker,
  ]);

  useEffect(() => {
    if (map.setCenter) {
      map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
    }
  }, [map, mapLongitude, mapLatitude]);

  useEffect(() => {
    console.log(targets);
    if (!map?.on) return;
    if (!targets.length || !topics.length) return;

    targets.forEach(({ lat, lng, topic_id, title, radius, id }) => {
      if (
        markers.find(
          ({ _lngLat: markerCoord }) =>
            markerCoord.lat === lat && markerCoord.lng === lng
        )
      )
        return;

      const topic = topics.find(({ id }) => id === topic_id);

      const marker = createMarker({
        lng,
        lat,
        className: cn(classes.targetMarker, {
          [classes.targetClicked]: id === editingTargetId,
        }),

        map,
        icon: topic.icon,
        onClick: () => {
          startEditingTarget(id);
        },
      });

      setMarkers([...markers, marker]);
    });
  }, [
    classes,
    map,
    targets,
    topics,
    editingTargetId,
    startEditingTarget,
    setMarkers,
  ]);

  return <div ref={mapElement} className={classes.map} />;
};

export default Map;
