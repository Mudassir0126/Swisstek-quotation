import React from "react";

const QuotationTable = () => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Sl.No</th>
            <th scope="col">RSM</th>
            <th scope="col">Description</th>
            <th scope="col">Quotation No</th>
            <th scope="col">Date</th>
            <th scope="col">Gross Value</th>
            <th scope="col">Net Value</th>
            <th scope="col">Total Area in Sqft</th>
            <th scope="col">Average Sqft Rate</th>
            <th scope="col">Status</th>
            <th scope="col">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-primary">
            <th scope="row">Active</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default QuotationTable;
