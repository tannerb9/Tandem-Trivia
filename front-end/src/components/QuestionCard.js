import React from "react";
import AnswerOption from "./AnswerOption";
import { FormGroup, Label, Input, Button } from "reactstrap";

const QuestionCard = (props) => {
  return (
    <>
      {props.questions.map((question, index) => (
        <>
          <legend>{question.question}</legend>
          <AnswerOption key={index} question={question} index={index} />
        </>
      ))}
      <Button>Submit</Button>
    </>
  );
};

export default QuestionCard;
