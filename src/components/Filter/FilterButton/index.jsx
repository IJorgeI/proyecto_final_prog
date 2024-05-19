import "./index.css";

const FilterButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className="filter-button">
      {text}
    </button>
  );
};

export default FilterButton;
