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
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [sum, setSum] = useState(0);

  // Effect to update the sum whenever inputValue1 or inputValue2 changes
  useEffect(() => {
    const num1 = parseFloat(inputValue1) || 0;
    const num2 = parseFloat(inputValue2) || 0;
    setSum(num1 + num2);
  }, [inputValue1, inputValue2]);

  const handleInputChange1 = (e) => {
    setInputValue1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
  };

  // Cell style for consistent width
  const cellStyle = {
    width: "300px",
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }} // Wrapper background
    >
      <div className="container text-center">
        <h2 className="mb-4">Schedule</h2>
        <div
          style={{
            backgroundColor: "#ffffff", // Table background color
            padding: "20px",
            borderRadius: "8px", // Optional: adds rounded corners to the table
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: adds a subtle shadow
          }}
        >
          <table className="table table-hover table-bordered">
            <thead className="table-dark">
              <tr>
                <th style={cellStyle}>#</th>
                <th style={cellStyle}>Width</th>
                <th style={cellStyle}>Height</th>
                <th style={cellStyle}>Total Sqft</th>
                <th style={cellStyle}>Design Label</th>
                <th style={cellStyle}>Window Colour</th>
                <th style={cellStyle}>Glass</th>
                <th style={cellStyle}>Accessories</th>
                <th style={cellStyle}>Mesh Type</th>
                <th style={cellStyle}>Frame</th>
                <th style={cellStyle}>Handle Type</th>
                <th style={cellStyle}>Handle Colour</th>
                <th style={cellStyle}>Handle Height</th>
                <th style={cellStyle}>Opening Direction</th>
                <th style={cellStyle}>Locking Type</th>
                <th style={cellStyle}>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={cellStyle}>1</td>
                <td style={cellStyle}>
                  <input
                    type="number"
                    className="form-control"
                    value={inputValue1}
                    onChange={handleInputChange1}
                    placeholder="Enter Width"
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="number"
                    className="form-control"
                    value={inputValue2}
                    onChange={handleInputChange2}
                    placeholder="Enter Height"
                  />
                </td>
                <td style={cellStyle}>{sum}</td>
                <td style={cellStyle}><Dropdown /></td>
                <td style={cellStyle}><Dropdown /></td>
                <td style={cellStyle}><Dropdown /></td>
                <td style={cellStyle}><Dropdown /></td>
                <td style={cellStyle}><Dropdown /></td>
                <td style={cellStyle}><Dropdown /></td>
                <td style={cellStyle}><Dropdown /></td>
                <td style={cellStyle}><Dropdown /></td>
                <td style={cellStyle}><Dropdown /></td>
                <td style={cellStyle}><Dropdown /></td>
                <td style={cellStyle}><Dropdown /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Quotation;
