import React from "react";
import CardComponent from "./CardComponent"; // Importing the card component

// Data for the cards
const values = [
  {
    name: "Mr. Santosh",
    NetValue: 10000,
    GrossValue: 40000,
    SRM: "Ashsih",
    Date:"11 jan 2025",
    revision:{
      status:true,
      revisions:
      [
        {
          GrossValue:10000,
          NetValue:2000,
        },
        {
          GrossValue:10000,
          NetValue:2000,
        }
      ]
    }
  },
  {
    name: "Mr. Sachit",
    NetValue: 17000,
    GrossValue: 40000,
    SRM: "Manjunath",
    Date:"1 jan 2025",
    revision:{
      status:false,
      revisions:
      []
    }
  },
  {
    name: "Mr. Dhruva",
    NetValue: 17000,
    GrossValue: 70000,
    SRM: "Ashsih",
    Date:"11 jan 2025",
    revision:{
      status:true,
      revisions:
      [
        {
          GrossValue:8500,
          NetValue:28000,
        },
      ]
    }
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
