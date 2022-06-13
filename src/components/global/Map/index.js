import React, { useState, useRef, useEffect } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";

import useStyles from "./styles";

const mapZoom = 13;
const startingLatitude = 37.36765;
const startingLongitude = -121.91599;

const createMarker = ({ lng, lat, className, map, icon }) => {
  const element = document.createElement("div");
  if (icon) {
    const iconElement = document.createElement("div");
    iconElement.style.backgroundImage = `url(${icon})`;
    element.appendChild(iconElement);
  }
  element.classList.add(className);
  return new tt.Marker({ element }).setLngLat([lng, lat]).addTo(map);
};

const Map = ({ onCoordChange, targets = [], topics = [] }) => {
  const classes = useStyles();
  const mapElement = useRef();
  const [mapLongitude, setLongitude] = useState(startingLongitude);
  const [mapLatitude, setLatitude] = useState(startingLatitude);
  const [map, setMap] = useState({});
  const [previewMarker, setPreviewMarker] = useState();
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const map = tt.map({
      key: process.env.REACT_APP_API_KEY_MAP,
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });
    const element = document.createElement("div");

    createMarker({
      lng: mapLongitude,
      lat: mapLatitude,
      className: classes.currentMarker,
      map,
    });

    setMap(map);

    onCoordChange &&
      onCoordChange({
        lat: startingLatitude,
        lng: startingLongitude,
      });

    navigator.geolocation?.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setLatitude(latitude);
        setLongitude(longitude);
        onCoordChange && onCoordChange({ lat: latitude, lng: longitude });
      }
    );

    return () => map.remove();
  }, []);

  useEffect(() => {
    if (!map?.on) return;

    const clickListener = ({ lngLat }) => {
      onCoordChange(lngLat);

      previewMarker && previewMarker.remove();

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

    return () => map.off("click", clickListener);
  }, [map, previewMarker]);

  useEffect(() => {
    if (map.setCenter) {
      map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
    }
  }, [map, mapLongitude, mapLatitude]);

  useEffect(() => {
    if (!targets.length || !topics.length) return;

    targets.forEach(({ target: { lat, lng, topic_id } }) => {
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
        className: classes.targetMarker,
        map,
        icon: topic.icon,
      });

      setMarkers([...markers, marker]);
    });
  }, [targets, topics]);

  useEffect(() => {
    if (previewMarker) {
      previewMarker.remove();
      setPreviewMarker();
    }
  }, [targets]);

  return <div ref={mapElement} className={classes.map} />;
};

export default Map;
