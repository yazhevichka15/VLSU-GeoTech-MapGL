import { useEffect, useRef, useState } from "react";
import { load } from "@2gis/mapgl";

import { MapWrapper } from "./MapWrapper";
import { accidentsLayer } from "../layers";
import { useMap } from "../contexts/MapContext";

const MAP_CENTER = [82.942926, 55.01446];

export const Map = () => {
  const mapRef = useRef(null);
  const mapglRef = useRef(null);

  const { setMap } = useMap();

  const [geoData, setGeoData] = useState(null);
  const [mapReady, setMapReady] = useState(false);

  // Загрузка GeoJSON
  useEffect(() => {
    fetch("/VLSU-GeoTech-MapGL/data/novosibirsk_1000.json")
      .then((r) => r.json())
      .then((data) => {
        console.log("GeoJSON loaded");
        setGeoData(data);
      })
      .catch(console.error);
  }, []);

  // Создание карты
  useEffect(() => {
    let destroyed = false;

    load()
      .then((mapglAPI) => {
        if (destroyed) return;

        const map = new mapglAPI.Map("map-container", {
          center: MAP_CENTER,
          zoom: 11,
          key: "0e501c0b-df43-4ead-b5f5-bf69b0ce7b97",
          style: "74e05e54-cd73-455d-8a2d-fbe0a33e1ad0",
        });

        mapRef.current = map;
        mapglRef.current = mapglAPI;

        setMap(map);

        map.on("styleload", () => {
          setMapReady(true);
        });
      })
      .catch(console.error);

    return () => {
      destroyed = true;

      if (mapRef.current) {
        mapRef.current.destroy();
        mapRef.current = null;
      }
    };
  }, []);

  // Добавление GeoJSON на карту
  useEffect(() => {
    if (!mapReady || !geoData || !mapRef.current || !mapglRef.current) return;

    const map = mapRef.current;
    const mapglAPI = mapglRef.current;

    const source = new mapglAPI.GeoJsonSource(map, {
      data: geoData,
      attributes: {
        visible: true,
      },
    });

    map.addLayer(accidentsLayer);

    return () => {
      try {
        map.removeLayer("dtp-data-layer");
      } catch {}

      source.destroy();
    };
  }, [mapReady, geoData]);

  return <MapWrapper />;
};
