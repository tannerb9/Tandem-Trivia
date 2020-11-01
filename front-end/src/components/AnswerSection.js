import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const AnswerSection = (props) => {
  return (
    <>
      {props.answers.map((answer) => (
        <FormGroup tag="fieldset">
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio" />
              {answer.answer_text}
            </Label>
          </FormGroup>
        </FormGroup>
      ))}
    </>
  );
};

export default AnswerSection;
