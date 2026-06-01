import { createContext, useContext, useState } from "react";
import { accidentsLayer } from "../layers";

const MapContext = createContext(null);

export const useMap = () => useContext(MapContext);

export const MapProvider = ({ children }) => {
  const [map, setMap] = useState(null);

  const toggleLayer = (layerId, visible) => {
    if (!map) return;

    switch (layerId) {
      case "dtp-data-layer": {
        if (visible) {
          try {
            map.addLayer(accidentsLayer);
          } catch (e) {}
        } else {
          try {
            map.removeLayer("dtp-data-layer");
          } catch (e) {}
        }
        break;
      }

      default:
        console.warn("Неизвестный слой:", layerId);
    }
  };

  return <MapContext.Provider value={{ map, setMap, toggleLayer }}>{children}</MapContext.Provider>;
};
