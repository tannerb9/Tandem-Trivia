import { Route, withRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DataManager from "../modules/DataManager";
import QuestionCard from "./QuestionCard";
// import NavBar from "./NavBar";

const AppViews = () => {
  const [questions, setQuestions] = useState();
  const [isMounted, setIsMounted] = useState(false);
  const [answers, setAnswers] = useState();

  const getQuestionAnswers = () => {
    DataManager.getQuestionAnswers(1).then((returnedAnswers) => {
      setAnswers(returnedAnswers);
      console.log(returnedAnswers);
    });
  };

  useEffect(getQuestionAnswers, []);

  const getTenQuestions = () => {
    DataManager.getQuestionsOrHighscores("questions").then(
      (returnedQuestions) => {
        setQuestions(returnedQuestions);
        setIsMounted(true);
        console.log(returnedQuestions);
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
              <QuestionCard
                questions={questions}
                answers={answers}
                {...props}
              />
            ) : null}
          </>
        );
      }}
    />
  );
};

export default withRouter(AppViews);
