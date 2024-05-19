import "./index.css";

const FilterInput = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Buscar por nombre jugador..."
    value={value}
    onChange={onChange}
  />
);

export default FilterInput;
