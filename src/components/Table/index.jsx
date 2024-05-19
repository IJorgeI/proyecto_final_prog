import TableRow from "./TableRow";
import "./index.css";

const Table = ({ players }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Player</th>
          <th>Team</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <TableRow key={index} player={player} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
