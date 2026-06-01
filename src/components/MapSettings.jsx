import { MapCheckbox } from "./MapCheckbox";

export const MapSettings = ({ showAccidents, setShowAccidents, showHeatmap, setShowHeatmap }) => {
  return (
    <div className="settings-container">
      <h3>Настройки отображения карты</h3>

      <div className="map-settings">
        <MapCheckbox label="Точки ДТП" checked={showAccidents} onChange={setShowAccidents} />
        <MapCheckbox label="Тепловая карта" checked={showHeatmap} onChange={setShowHeatmap} />
      </div>
    </div>
  );
};
