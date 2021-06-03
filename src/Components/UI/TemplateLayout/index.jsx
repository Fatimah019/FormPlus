import React, { useEffect, useState } from "react";
import TemplateCard from "../../TemplateCard";
import Home from "../../Home";
import { useDispatch, useSelector } from "react-redux";
import TemplateService from "../../../ReduxSetup/HttpServices/templates";

import "./index.css";

// template data
const RenderTemplatesData = ({ templatesInfo }) => {
  // show loader
  const showErrorMessage = () => {
    return (
      <div className="error_page">
        <b>An Error Occurred while fetching Template</b>
      </div>
    );
  };

  return templatesInfo.error ? (
    showErrorMessage()
  ) : (
    <div className="template-layout-container">
      {templatesInfo.map((template, index) => (
        <div key={index}>
          <TemplateCard
            name={template.name}
            bodyContent={template.description}
            footerText={template.link}
          />
        </div>
      ))}
    </div>
  );
};

const TemplateLayout = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [templatePerPage] = useState(30);
  const templatesInfo = useSelector((state) => state.templatesData);

  const indexOfLastTemplate = currentPage * templatePerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatePerPage;
  const totalPages = Math.ceil(
    templatesInfo.templatesList.length / templatePerPage
  );

  // slice templates and show current templates
  const currentTemplates = templatesInfo.templatesList.slice(
    indexOfFirstTemplate,
    indexOfLastTemplate
  );

  useEffect(() => {
    TemplateService.loadTemplates(dispatch);
  }, [dispatch]);

  // show loader
  const showLoader = () => {
    return (
      <div className="loader">
        <b> Loading...</b>
      </div>
    );
  };

  // go to next page
  const goToNextPage = () => {
    setCurrentPage((prevVal) =>
      prevVal === totalPages ? prevVal : prevVal + 1
    );
  };

  // go to previous page
  const goToPrevPage = () => {
    setCurrentPage((prevVal) => (prevVal === 1 ? prevVal : prevVal - 1));
  };

  return (
    <div>
      <Home />
      {templatesInfo.loading ? (
        showLoader()
      ) : (
        <div>
          <RenderTemplatesData templatesInfo={currentTemplates} />
          <div className="paginate_footer">
            <button onClick={() => goToPrevPage()} className="prev_btn">
              Previous
            </button>
            <p className="page_indicators">
              <span className="current_page_indicator">{currentPage}</span> of{" "}
              <span className="total_page_indicator"> {totalPages}</span>
            </p>
            <button onClick={() => goToNextPage()} className="next_btn">
              Next <i className="fa fa-angle-right"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateLayout;
