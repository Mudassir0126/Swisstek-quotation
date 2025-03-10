import React from "react";

const CardComponent = ({ person, index }) => {
  return (
    <div className="card border-dark mb-3" style={{ maxWidth: "90vw" }}>
      <div className="card-header" style={{ padding: "4px 2px 4px 8px" }}>
        {person.name}
      </div>

      {/* Display values */}
      <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "4px 2px 4px 8px" }}>
        <div style={{ display: "flex", justifyContent: "space-between"}}>
          <p style={{ padding: "0" }}>Net Value: {person.NetValue || 0}</p>
          <p style={{ padding: "0" }}>Gross Value: {person.GrossValue || 0}</p>
          <p style={{ padding: "0" }}>Sales Manager: {person.SRM}</p>
          <p style={{ padding: "0" }}>Date: {person.Date}</p>
          <p style={{ padding: "0" }}>
            Total: {(person.NetValue || 0) + (person.GrossValue || 0)}
          </p>
        </div>
      </div>

      {/* Bootstrap Accordion */}
      <div className="accordion" id={`accordion-${index}`}>
        <div className="accordion-item">
          <h2 className="accordion-header" id={`heading-${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded="false"
              aria-controls={`collapse-${index}`}
            >
              Revisions
            </button>
          </h2>
          <div id={`collapse-${index}`} className="accordion-collapse collapse" aria-labelledby={`heading-${index}`}>
            <div className="accordion-body">
              {/* Conditional Rendering */}
              {person.revision?.status === false ? (
                <p>No Revisions</p>
              ) : (
                person.revision?.revisions?.map((val, idx) => (
                  <div key={idx} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <strong>Revision {idx+1}</strong>
                    <p>Net Value: {val.NetValue}</p>
                    <p>Gross Value: {val.GrossValue}</p>
                    <p>Total Value: {val.GrossValue+val.NetValue}</p>
                    <p>Remarks: Blah blah blah</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
