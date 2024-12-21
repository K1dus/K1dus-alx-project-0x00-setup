import React from "react";

interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return <span className="pill">{title}</span>;
};

export default Pill;
