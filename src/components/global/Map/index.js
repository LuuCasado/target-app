import React, { useState, useRef, useEffect } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";

import useStyles from "./styles";

const Map = () => {
  const classes = useStyles();
  const mapElement = useRef();
  const [mapLongitude, setLongitude] = useState(-121.91599);
  const [mapLatitude, setLatitude] = useState(37.36765);
  const [map, setMap] = useState({});
  const [mapZoom] = useState(13);

  useEffect(() => {
    const map = tt.map({
      key: process.env.REACT_APP_API_KEY_MAP,
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });

    setMap(map);

    navigator.geolocation?.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setLatitude(latitude);
        setLongitude(longitude);
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
