import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TemplateLayout from "./Components/UI/TemplateLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={TemplateLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
