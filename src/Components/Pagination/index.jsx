import React from "react";
import Proptypes from "prop-types";

import "./index.css";

const Pagination = ({ templatePerPage, totalTemplates, handlePagination }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTemplates / templatePerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="paginate_container">
      {pageNumbers.map((numbers) => {
        return (
          <li key={numbers}>
            <span onClick={() => handlePagination(numbers)}>{numbers}</span>
          </li>
        );
      })}
    </div>
  );
};

Pagination.propTypes = {
  templatePerPage: Proptypes.number.isRequired,
  totalPages: Proptypes.number.isRequired,
  handlePagination: Proptypes.func,
};

Pagination.defaultProps = {
  handlePagination: () => {},
};

export default Pagination;
