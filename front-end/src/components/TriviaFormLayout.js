import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import DataManager from "../modules/DataManager";
import AnswerSection from "./AnswerSection";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const TriviaFormLayout = (props) => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(props.questions[0]);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const questions = props.questions;

  const getQuestionAnswers = () => {
    DataManager.getQuestionAnswers(question.id).then(
      (returnedAnswers) => {
        setAnswers(returnedAnswers);
        console.log("question id", question.id);
      }
    );
  };

  useEffect(getQuestionAnswers, [question]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (index === 9) {
      <Redirect to="/finalscore" />;
    } else {
      setQuestion(questions[index + 1]);
      setIsDisabled(!isDisabled);
    }
  };

  return (
    <Form className="justify-content-center">
      <FormGroup className="center">
        <Label for="question">{question.question_text}</Label>
      </FormGroup>
      <AnswerSection
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
        answers={answers}
        questions={questions}
        setQuestion={setQuestion}
        index={index}
        setIndex={setIndex}
        score={score}
        setScore={setScore}
      />
      {index === 9 ? (
        <Button
          disabled={!isDisabled}
          size="lg"
          color="info"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      ) : (
        <Button
          disabled={!isDisabled}
          size="lg"
          color="info"
          onClick={handleSubmit}
        >
          Next
        </Button>
      )}
    </Form>
  );
};

export default TriviaFormLayout;
