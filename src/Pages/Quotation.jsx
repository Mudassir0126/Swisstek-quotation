import React, { useState, useEffect } from "react";

function Dropdown({ value, onChange }) {
  return (
    <select className="form-select" value={value} onChange={onChange}>
      <option value="">Please select a value</option>
      <option value="Action1">Action 1</option>
      <option value="Action2">Action 2</option>
      <option value="Action3">Action 3</option>
    </select>
  );
}

function Quotation() {
  const [rows, setRows] = useState([
    { width: "", height: "", designLabel: "", sum: 0 }, // Initial row
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;

    if (field === "width" || field === "height") {
      const width = parseFloat(updatedRows[index].width) || 0;
      const height = parseFloat(updatedRows[index].height) || 0;
      updatedRows[index].sum = width * height;
    }

    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([
      ...rows,
      { width: "", height: "", designLabel: "", sum: 0 }, // New empty row
    ]);
  };

  const firstCellStyle = {
    width: "100px", // Smaller width for the first column
    padding: "16px",
    fontSize: "16px",
    textAlign: "center",
    verticalAlign: "middle",
  };

  const cellStyle = {
    width: "300px", // Default width for other columns
    padding: "16px",
    fontSize: "16px",
    textAlign: "center",
    verticalAlign: "middle",
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        paddingTop: "10px",
      }}
    >
      <div className="container text-center">
        <h2 className="mb-4">Schedule</h2>
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              overflowX: "auto", // Enable horizontal scrolling for the table only
            }}
          >
            <table
              className="table table-hover table-bordered"
              style={{
                minWidth: "1500px", // Ensure table is wide enough
                tableLayout: "fixed", // Fix column widths
              }}
            >
              <thead className="table-dark">
                <tr>
                  <th style={firstCellStyle}>#</th>
                  <th style={cellStyle}>Width</th>
                  <th style={cellStyle}>Height</th>
                  <th style={cellStyle}>Total Sqft</th>
                  <th style={cellStyle}>Design Label</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td style={firstCellStyle}>{index + 1}</td>
                    <td style={cellStyle}>
                      <input
                        type="number"
                        className="form-control"
                        value={row.width}
                        onChange={(e) =>
                          handleInputChange(index, "width", e.target.value)
                        }
                        placeholder="Enter Width"
                      />
                    </td>
                    <td style={cellStyle}>
                      <input
                        type="number"
                        className="form-control"
                        value={row.height}
                        onChange={(e) =>
                          handleInputChange(index, "height", e.target.value)
                        }
                        placeholder="Enter Height"
                      />
                    </td>
                    <td style={cellStyle}>{row.sum}</td>
                    <td style={cellStyle}>
                      <Dropdown
                        value={row.designLabel}
                        onChange={(e) =>
                          handleInputChange(index, "designLabel", e.target.value)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            className="btn btn-primary mt-3"
            onClick={addRow}
          >
            Add Row
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quotation;
