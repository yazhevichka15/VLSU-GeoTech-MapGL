export const MapCheckbox = ({ label, checked, onChange }) => {
  return (
    <label className="map-checkbox">
      <input type="checkbox" checked={checked} onChange={() => onChange((value) => !value)} />
      {label}
    </label>
  );
};
