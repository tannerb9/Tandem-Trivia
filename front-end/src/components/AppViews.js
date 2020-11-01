import { Route, withRouter } from "react-router-dom";
import React, { useState } from "react";
import DataManager from "../modules/DataManager";
import QuestionCard from "./QuestionCard";
// import NavBar from "./NavBar";

const AppViews = () => {
  const [questions, setQuestions] = useState();

  return (
    <Route
      path="/"
      render={() => {
        return <QuestionCard />;
      }}
    />
  );
};

export default withRouter(AppViews);
