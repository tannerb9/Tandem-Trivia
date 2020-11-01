import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import DataManager from "../modules/DataManager";
import AnswerSection from "./AnswerSection";
import QuestionCard from "./Question";
import { Button, Form, FormGroup } from "reactstrap";

const TriviaFormLayout = (props) => {
  const [currentQuestionCard, setCurrentQuestionCard] = useState(0);
  const [question, setQuestion] = useState({});
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [defaultData, setDefaultData] = useState({
    questions: [],
    answers: [],
  });
  const [answers, setAnswers] = useState([]);

  const loadFirstQuestion = () => {
    setQuestion(props.questions[0]);
    setCurrentQuestionCard(1);
  };

  useEffect(loadFirstQuestion, [props.questions]);

  const getQuestionAnswers = () => {
    DataManager.getQuestionAnswers(question.id).then(
      (returnedAnswers) => {
        setAnswers(returnedAnswers);
      }
    );
  };

  useEffect(getQuestionAnswers, [question.id]);

  console.log("answers", answers);
  // const _next = () => {
  //   let currentStep = this.state.currentStep;
  //   currentStep = currentStep >= 5 ? 6 : currentStep + 1;
  //   this.setState({
  //     currentStep: currentStep,
  //   });
  // };

  // const nextQuestionCard = () => {
  //   {
  //     currentQuestionCard >= 9
  //       ? setCurrentQuestionCard(currentQuestionCard + 1)
  //       : null;
  //   }

  // const nextButton = () => {
  //   if (currentQuestionCard < 10) {
  //     return <Button onClick={nextQuestionCard}>Next</Button>;
  //   }
  //   // return null;
  // };

  const submitButton = () => {
    if (currentQuestionCard === 10) {
      return <Button>Submit</Button>;
    }
    // return null;
  };

  const checkAnswer = (event) => {
    let choseAnswer = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentQuestionCard === 10) {
      <Redirect to="/finalscore" />;
    }

    if (correct) {
      setScore(score + 10);
    }
  };

  return (
    <>
      <Form>
        {currentQuestionCard === 1 ? (
          <>
            <QuestionCard question={props.questions[0]} />
            <AnswerSection answers={answers} />
          </>
        ) : null}
        {currentQuestionCard === 2 ? (
          <>
            <QuestionCard question={props.questions[1]} />
            <AnswerSection answers={answers} />
          </>
        ) : null}
        {currentQuestionCard === 3 ? (
          <>
            <QuestionCard question={props.questions[2]} />
            <AnswerSection answers={answers} />
          </>
        ) : null}
        {currentQuestionCard === 4 ? (
          <>
            <QuestionCard question={props.questions[3]} />
            <AnswerSection answers={answers} />
          </>
        ) : null}
        {currentQuestionCard === 5 ? (
          <>
            <QuestionCard question={props.questions[4]} />
            <AnswerSection answers={answers} />
          </>
        ) : null}
        {currentQuestionCard === 6 ? (
          <>
            <QuestionCard question={props.questions[5]} />
            <AnswerSection answers={answers} />
          </>
        ) : null}
        {currentQuestionCard === 7 ? (
          <>
            <QuestionCard question={props.questions[6]} />
            <AnswerSection answers={answers} />
          </>
        ) : null}
        {currentQuestionCard === 8 ? (
          <>
            <QuestionCard question={props.questions[7]} />
            <AnswerSection answers={answers} />
          </>
        ) : null}
        {currentQuestionCard === 9 ? (
          <>
            <QuestionCard question={props.questions[8]} />
            <AnswerSection answers={answers} />
          </>
        ) : null}
        {currentQuestionCard === 10 ? (
          <>
            <QuestionCard question={props.questions[9]} />
            <AnswerSection answers={answers} />
          </>
        ) : null}
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  );
};

export default TriviaFormLayout;
