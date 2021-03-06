import React from "react";
import Header from "../Header";
import "./index.css";

const Home = () => {
  return (
    <div>
      <Header />
      <p className="warning">
        <i className="fa fa-warning"></i>
        Tada! Get started with a free template. Can’t find what you are looking
        for? Search from the 1000+ available templates
      </p>
    </div>
  );
};

export default Home;
