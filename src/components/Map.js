import { useEffect, useRef } from "react";
import { load } from "@2gis/mapgl";
import { MapWrapper } from "./MapWrapper";

export const Map = () => {
  const MapCenter = [82.942926, 55.01446];

  const mapRef = useRef(null);

  useEffect(() => {
    let destroyed = false;

    load()
      .then((mapglAPI) => {
        if (destroyed || mapRef.current) {
          return;
        }

        const map = new mapglAPI.Map("map-container", {
          center: MapCenter,
          zoom: 11,
          key: "0e501c0b-df43-4ead-b5f5-bf69b0ce7b97",
          style: "74e05e54-cd73-455d-8a2d-fbe0a33e1ad0",
        });

        mapRef.current = map;
      })
      .catch((error) => {
        console.error("Ошибка загрузки карты:", error);
      });

    return () => {
      destroyed = true;

      if (mapRef.current) {
        mapRef.current.destroy();
        mapRef.current = null;
      }
    };
  }, []);

  return <MapWrapper />;
};
