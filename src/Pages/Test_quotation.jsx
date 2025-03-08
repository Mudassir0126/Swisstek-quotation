import React from "react";
import CardComponent from "./CardComponent"; // Importing the card component

// Data for the cards
const values = [
  {
    name: "Raj",
    NetValue: 10000,
    GrossValue: 40000,
  },
  {
    name: "Peter",
    NetValue: 17000,
    GrossValue: 40000,
  },
  {
    name: "Griffin",
    NetValue: 17000,
    GrossValue: 70000,
  }
];

const Quotation = () => {
  return (
    <>
      {values.map((person, index) => (
        <CardComponent key={index} person={person} index={index} />
      ))}
    </>
  );
};

export default Quotation;
