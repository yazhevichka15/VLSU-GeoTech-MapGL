export const MapCheckbox = ({ label, checked, onChange }) => {
  return (
    <label className="map-checkbox">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  );
};
