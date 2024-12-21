import React from "react";
import Pill from "@/components/Pill";

const Card = () => {
  return (
    <div className="card">
      <h2>Card Title</h2>
      <Pill title="First Pill" />
      <Pill title="Second Pill" />
      <Pill title="Third Pill" />
    </div>
  );
};

export default Card;

