import React from "react";
import "./index.css";
import Dropdown from "../Dropdown";

const Header = () => {
  const options = {
    categories: ["Agriculture", "Finance"],
    date: ["oldest", "newer"],
  };
  return (
    <div className="header_container">
      <div className="header">
        {/* search field */}
        <label className="search-label">
          <input type="text" placeholder="Search Templates" />
          <i className="fa fa-search"></i>
        </label>

        <div className="sortings">
          <span>Sort By: </span>
          <Dropdown defaultName={"All"} options={options.categories} />
          <Dropdown defaultName={"Default"} options={options.categories} />
          <Dropdown defaultName={"Default"} options={options.categories} />
        </div>
      </div>
    </div>
  );
};

export default Header;
