import React, { useState, useRef, useEffect } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";

import useStyles from "./styles";

const Map = () => {
  const classes = useStyles();
  const mapElement = useRef();
  const [mapLongitude] = useState(-121.91599);
  const [mapLatitude] = useState(37.36765);
  const [mapZoom] = useState(13);

  useEffect(() => {
    const map = tt.map({
      key: process.env.REACT_APP_API_KEY_MAP,
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });
    return () => map.remove();
  }, []);

  return (
    <div>
      <div ref={mapElement} className={classes.map}></div>
    </div>
  );
};

export default Map;
