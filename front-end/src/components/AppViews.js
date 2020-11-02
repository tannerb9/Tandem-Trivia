import { Route, withRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DataManager from "../modules/DataManager";
import TriviaFormLayout from "./TriviaFormLayout";

const AppViews = () => {
  const [questions, setQuestions] = useState();
  const [isMounted, setIsMounted] = useState(false);

  const getTenQuestions = () => {
    DataManager.getQuestionsOrHighscores("questions").then(
      (returnedQuestions) => {
        setQuestions(returnedQuestions);
        setIsMounted(true);
      }
    );
  };

  useEffect(getTenQuestions, []);

  return (
    <Route
      path="/"
      render={(props) => {
        return (
          <>
            {isMounted ? (
              <TriviaFormLayout questions={questions} {...props} />
            ) : null}
          </>
        );
      }}
    />
  );
};

export default withRouter(AppViews);
