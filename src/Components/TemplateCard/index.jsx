import React from "react";
import Proptypes from "prop-types";

import "./index.css";

const TemplateCard = ({ name, bodyContent, footerText }) => {
  return (
    <div>
      <div className="template-card">
        <div className="template-card-main">
          <h3 className="template-card-name">{name}</h3>
          <div className="template-card-body">{bodyContent}</div>
        </div>
        <div className="template-card-footer">
          <a href={footerText}>Use Template</a>
        </div>
      </div>
    </div>
  );
};

TemplateCard.propTypes = {
  name: Proptypes.string.isRequired,
  bodyContent: Proptypes.string.isRequired,
  footerText: Proptypes.string.isRequired,
};

TemplateCard.defaultProps = {
  name: "sss",
  bodyContent: "",
  footerText: "",
};

export default TemplateCard;