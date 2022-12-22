import React from "react";

const PrimaryButton = ({ childern }) => {
  return (
    <div>
      <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">{childern}</button>
    </div>
  );
};

export default PrimaryButton;
