import React from "react";
import { FormGroup, Label } from "reactstrap";

const Question = (props) => {
  return (
    <>
      <FormGroup>
        <Label for="question">{props.question.question_text}</Label>
      </FormGroup>
    </>
  );
};

export default Question;
