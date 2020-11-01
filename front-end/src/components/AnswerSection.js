import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const AnswerSection = (props) => {
  return (
    <>
      {props.answers.map((answer, index) => (
        <FormGroup key={index} tag="fieldset">
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio"
                value={answer.answer_text}
              />
              {answer.answer_text}
            </Label>
          </FormGroup>
        </FormGroup>
      ))}
    </>
  );
};

export default AnswerSection;
