import React, { useState, useRef, useEffect } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";

import useStyles from "./styles";

const mapZoom = 13;
const startingLatitude = 37.36765;
const startingLongitude = -121.91599;

const Map = ({ onCoordChange }) => {
  const classes = useStyles();
  const mapElement = useRef();
  const [mapLongitude, setLongitude] = useState(startingLongitude);
  const [mapLatitude, setLatitude] = useState(startingLatitude);
  const [map, setMap] = useState({});

  useEffect(() => {
    const map = tt.map({
      key: process.env.REACT_APP_API_KEY_MAP,
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });

    setMap(map);

    onCoordChange &&
      onCoordChange({
        lat: startingLatitude,
        long: startingLongitude,
      });

    navigator.geolocation?.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setLatitude(latitude);
        setLongitude(longitude);
        onCoordChange && onCoordChange({ lat: latitude, long: longitude });
      }
    );

    return () => map.remove();
  }, []);

  useEffect(() => {
    if (map.setCenter) {
      map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
    }
  }, [map, mapLongitude, mapLatitude]);

  return <div ref={mapElement} className={classes.map} />;
};

export default Map;
