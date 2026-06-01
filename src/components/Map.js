import { useEffect, useRef, useState } from "react";
import { load } from "@2gis/mapgl";

import { useMap } from "../contexts/MapContext";

import { accidentsLayer, heatmapLayer } from "../layers";

const MAP_CENTER = [82.942926, 55.01446];

export const Map = ({ showAccidents, showHeatmap }) => {
  const { setMap } = useMap();

  const mapRef = useRef(null);

  const [geoData, setGeoData] = useState(null);
  const [styleLoaded, setStyleLoaded] = useState(false);

  useEffect(() => {
    fetch("/VLSU-GeoTech-MapGL/data/novosibirsk_1000.json")
      .then((response) => response.json())
      .then(setGeoData)
      .catch(console.error);
  }, []);

  useEffect(() => {
    let map;
    let cancelled = false;

    load().then((mapglAPI) => {
      if (cancelled) return;

      map = new mapglAPI.Map("map-container", {
        center: MAP_CENTER,
        zoom: 11,
        key: "0e501c0b-df43-4ead-b5f5-bf69b0ce7b97",
        style: "74e05e54-cd73-455d-8a2d-fbe0a33e1ad0",
      });

      mapRef.current = map;

      map.on("styleload", () => {
        setStyleLoaded(true);
      });

      setMap(map);
    });

    return () => {
      cancelled = true;

      map?.destroy();

      mapRef.current = null;

      setMap(null);
    };
  }, [setMap]);

  useEffect(() => {
    const map = mapRef.current;

    if (!map || !styleLoaded || !geoData) {
      return;
    }

    const source = new window.mapgl.GeoJsonSource(map, {
      data: geoData,
      attributes: {
        visible: true,
      },
    });

    return () => {
      source.destroy();
    };
  }, [styleLoaded, geoData]);

  useEffect(() => {
    const map = mapRef.current;

    if (!map || !styleLoaded) {
      return;
    }

    try {
      map.removeLayer("dtp-data-layer");
    } catch {}

    if (showAccidents) {
      map.addLayer(accidentsLayer);
    }
  }, [showAccidents, styleLoaded]);

  useEffect(() => {
    const map = mapRef.current;

    if (!map || !styleLoaded) {
      return;
    }

    try {
      map.removeLayer("dtp-heatmap-layer");
    } catch {}

    if (showHeatmap) {
      map.addLayer(heatmapLayer);
    }
  }, [showHeatmap, styleLoaded]);

  return <div id="map-container" />;
};
