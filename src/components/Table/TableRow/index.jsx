const TableRow = ({ player }) => {
  return (
    <tr>
      <td>{player.number}</td>
      <td>{player.name}</td>
      <td>{player.team}</td>
      <td>{player.position}</td>
    </tr>
  );
};

export default TableRow;
