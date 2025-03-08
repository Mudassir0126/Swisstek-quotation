import React from "react";

const CardComponent = ({ person, index }) => {
  return (
    <div className="card border-dark mb-3" style={{ maxWidth: "90vw" }}>
      <div className="card-header" style={{ padding: "4px 2px 4px 8px" }}>
        {person.name}
      </div>

      {/* Display values */}
      <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "4px 2px 4px 8px" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <p style={{ padding: "0" }}>Net Value: {person.NetValue}</p>
          <p style={{ padding: "0" }}>Gross Value: {person.GrossValue}</p>
          <p style={{ padding: "0" }}>Total: {person.NetValue + person.GrossValue}</p>
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
          <div id={`collapse-${index}`} className="accordion-collapse collapse" aria-labelledby={`heading-${index}`} data-bs-parent={`#accordion-${index}`}>
            <div className="accordion-body">
              <strong>This is {person.name}'s accordion body.</strong> You can add more details here.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
