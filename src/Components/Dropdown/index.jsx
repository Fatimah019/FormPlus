import React from "react";
import "./index.css";

const Dropdown = ({ defaultName, options }) => {
  return (
    <div className="dropdown">
      <label>
        <select className="select-field">
          <option selected>{defaultName}</option>
          <option>{options.map((option) => option)}</option>
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
