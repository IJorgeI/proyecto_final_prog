import FilterInput from "./FilterInput";
import { useState } from "react";
import FilterButton from "./FilterButton";
import Table from "../Table/index.jsx";
import "./index.css";

const Filter = ({ data }) => {
  const [filter, setFilter] = useState("");
  const [players, setPlayers] = useState(data);

  const handleChange = (e) => {
    setFilter(e.target.value);
    const filteredPlayers = data.filter((player) =>
      player.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setPlayers(filteredPlayers);
  };

  const filterPairs = () => {
    const pairs = data.filter((player) => player.number % 2 === 0);
    setPlayers(pairs);
  };

  const filterOdds = () => {
    const odds = data.filter((player) => player.number % 2 !== 0);
    setPlayers(odds);
  };

  const firstTen = () => {
    const firstTen = data.slice(0, 10);
    setPlayers(firstTen);
  };

  const secondTen = () => {
    const secondTen = data.slice(10, 20);
    setPlayers(secondTen);
  };

  const all = () => {
    setPlayers(data);
  };

  return (
    <>
      <div className="filter-container">
        <h2>ROSTER</h2>
        <FilterInput value={filter} onChange={handleChange} />
        <div className="filter-buttons">
          <FilterButton onClick={filterPairs} text="Pintar pares" />
          <FilterButton onClick={filterOdds} text="Pintar impares" />
          <FilterButton onClick={firstTen} text="Traer de 1 a 10" />
          <FilterButton onClick={secondTen} text="Traer de 11 a 20" />
          <FilterButton onClick={all} text="Lista completa" />
        </div>
        <Table players={players} />
      </div>
    </>
  );
};

export default Filter;
