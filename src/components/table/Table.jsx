import "./Table.css";

const dummyData = [
  { column1: " 1-1", column2: "Data 1-2", column3: "Data 1-3" },
  { column1: " 2-1", column2: "Data 2-2", column3: "Data 2-3" },
  { column1: " 3-1", column2: "Data 3-2", column3: "Data 3-3" },
  { column1: " 4-1", column2: "Data 4-2", column3: "Data 4-3" },
  { column1: " 5-1", column2: "Data 5-2", column3: "Data 5-3" },
  { column1: " 6-1", column2: "Data 6-2", column3: "Data 6-3" },
  { column1: " 7-1", column2: "Data 7-2", column3: "Data 7-3" },
  { column1: " 8-1", column2: "Data 8-2", column3: "Data 8-3" },
  { column1: " 9-1", column2: "Data 9-2", column3: "Data 9-3" },
  { column1: " 10-1", column2: "Data 10-2", column3: "Data 10-3" },
  { column1: " 1-1", column2: "Data 1-2", column3: "Data 1-3" },
  { column1: " 2-1", column2: "Data 2-2", column3: "Data 2-3" },
  { column1: " 3-1", column2: "Data 3-2", column3: "Data 3-3" },
  { column1: " 4-1", column2: "Data 4-2", column3: "Data 4-3" },
  { column1: " 5-1", column2: "Data 5-2", column3: "Data 5-3" },
  { column1: " 6-1", column2: "Data 6-2", column3: "Data 6-3" },
  { column1: " 7-1", column2: "Data 7-2", column3: "Data 7-3" },
  { column1: " 8-1", column2: "Data 8-2", column3: "Data 8-3" },
  { column1: " 9-1", column2: "Data 9-2", column3: "Data 9-3" },
  { column1: " 10-1", column2: "Data 10-2", column3: "Data 10-3" },
  { column1: " 1-1", column2: "Data 1-2", column3: "Data 1-3" },
  { column1: " 2-1", column2: "Data 2-2", column3: "Data 2-3" },
  { column1: " 3-1", column2: "Data 3-2", column3: "Data 3-3" },
  { column1: " 4-1", column2: "Data 4-2", column3: "Data 4-3" },
  { column1: " 5-1", column2: "Data 5-2", column3: "Data 5-3" },
  { column1: " 6-1", column2: "Data 6-2", column3: "Data 6-3" },
  { column1: " 7-1", column2: "Data 7-2", column3: "Data 7-3" },
  { column1: " 8-1", column2: "Data 8-2", column3: "Data 8-3" },
  { column1: " 9-1", column2: "Data 9-2", column3: "Data 9-3" },
  { column1: " 10-1", column2: "Data 10-2", column3: "Data 10-3" },
  { column1: " 1-1", column2: "Data 1-2", column3: "Data 1-3" },
  { column1: " 2-1", column2: "Data 2-2", column3: "Data 2-3" },
  { column1: " 3-1", column2: "Data 3-2", column3: "Data 3-3" },
  { column1: " 4-1", column2: "Data 4-2", column3: "Data 4-3" },
  { column1: " 5-1", column2: "Data 5-2", column3: "Data 5-3" },
  { column1: " 6-1", column2: "Data 6-2", column3: "Data 6-3" },
  { column1: " 7-1", column2: "Data 7-2", column3: "Data 7-3" },
  { column1: " 8-1", column2: "Data 8-2", column3: "Data 8-3" },
  { column1: " 9-1", column2: "Data 9-2", column3: "Data 9-3" },
  { column1: " 10-1", column2: "Data 10-2", column3: "Data 10-3" },
];

function Table() {
  return (
    <div id="table-wrapper">
      <div id="table-wrapper-x">
        <table id="top-ranking">
          <thead>
            <tr>
              <th>Co 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody id="table-body">
            {dummyData.map((data, index) => (
              <tr key={index}>
                <td>{data.column1}</td>
                <td>{data.column2}</td>
                <td>{data.column3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
