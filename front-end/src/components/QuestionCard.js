import React from "react";
import AnswerSection from "./AnswerSection";
import { Button } from "reactstrap";
// import DataManager from "../modules/DataManager";

const QuestionCard = (props) => {
  return (
    <>
      {props.questions.map((question, index) => (
        <>
          <legend key={`questions-${index}`}>
            {question.question_text}
          </legend>
          <AnswerSection
            key={index}
            answers={props.answers}
            index={index}
          />
        </>
      ))}
      <Button>Submit</Button>
    </>
  );
};

export default QuestionCard;
