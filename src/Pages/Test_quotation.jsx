import React, { useState } from "react";
import CardComponent from "./CardComponent";

const values = [
  {
    name: "Mr. Santosh",
    NetValue: 10000,
    GrossValue: 40000,
    SRM: "Ashish",
    Date: "11 Jan 2025",
    revision: {
      status: true,
      revisions: [{ GrossValue: 10000, NetValue: 2000 }],
    },
  },
  {
    name: "Mr. Sachit",
    NetValue: 17000,
    GrossValue: 40000,
    SRM: "Manjunath",
    Date: "1 Jan 2025",
    revision: { status: false, revisions: [] },
  },
];

const Quotation = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    NetValue: "",
    GrossValue: "",
    SRM: "",
    Date: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Quotation:", formData);
    setShowModal(false);
  };

  return (
    <div className="container mt-4">
      {/* Button with margin-bottom for spacing */}
      <button className="btn btn-primary mb-4" onClick={() => setShowModal(true)}>
        <i className="fa fa-plus"></i> Add Quotation
      </button>

      {/* Display Existing Quotations */}
      {values.map((person, index) => (
        <CardComponent key={index} person={person} index={index} />
      ))}

      {/* Bootstrap Modal with Fade Animation */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ animation: "fadeIn 0.3s ease-in-out" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Quotation</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Net Value</label>
                    <input type="number" name="NetValue" className="form-control" value={formData.NetValue} onChange={handleInputChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Gross Value</label>
                    <input type="number" name="GrossValue" className="form-control" value={formData.GrossValue} onChange={handleInputChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">SRM</label>
                    <input type="text" name="SRM" className="form-control" value={formData.SRM} onChange={handleInputChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input type="date" name="Date" className="form-control" value={formData.Date} onChange={handleInputChange} required />
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-success">Save</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Backdrop */}
      {showModal && <div className="modal-backdrop fade show"></div>}

      {/* CSS Animation for Modal */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default Quotation;
