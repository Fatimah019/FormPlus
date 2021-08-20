import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedWord } from "../../ReduxSetup/HttpServices/search_word";
// import Dropdown from "../Dropdown";

const Header = ({ searchWord }) => {
  // const options = {
  //   categories: ["Agriculture", "Finance"],
  //   date: ["oldest", "newer"],
  // };
  const dispatch = useDispatch();

  const res = useSelector(({ searchQuery }) => {
    return searchQuery;
  });

  const handleWordChanged = (e) => {
    dispatch(setSearchedWord(e.target.value));
  };

  return (
    <div className="header_container">
      <div className="header">
        {/* search field */}
        <label className="search-label">
          <input
            type="text"
            placeholder="Search Templates"
            value={res.searchWord}
            onChange={handleWordChanged}
          />
          <i className="fa fa-search"></i>
        </label>

        {/* <div className="sortings">
          <div className="sorting-dropdown-1">
            <p> Sort By: </p>
            <p>
              <Dropdown defaultName={"All"} options={options.categories} />
            </p>
          </div>
          <Dropdown defaultName={"Default"} options={options.categories} />
          <Dropdown defaultName={"Default"} options={options.categories} />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
