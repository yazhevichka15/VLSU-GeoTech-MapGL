import { useState } from "react";
import { MapCheckbox } from "./MapCheckbox";
import { useMap } from "../contexts/MapContext";

export const MapSettings = () => {
  const { toggleLayer } = useMap();

  const [dtpVisible, setDtpVisible] = useState(true);

  const handleDtp = (value) => {
    setDtpVisible(value);

    toggleLayer("dtp-data-layer", value);
  };

  return (
    <div className="settings-container">
      <h3>Настройки отображения карты</h3>
      <div className="map-settings">
        <MapCheckbox label="Показывать ДТП" checked={dtpVisible} onChange={handleDtp} />
      </div>
    </div>
  );
};
