import React, { useState } from "react";
import { Modal, ModalBody, Button, Container, Row } from "reactstrap";

const AnswerSection = (props) => {
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const isDisabled = props.isDisabled;
  console.log("disabled?", isDisabled);

  const toggle = () => {
    setModal(!modal);
  };

  let correctAnswer = props.answers.filter(
    (answer) => answer.true_or_false === true
  )[0];

  const handleCorrectAnswer = () => {
    props.setIndex(props.index + 1);
    props.setScore(props.score + 10);
    setModalText("Correct!");
    props.setIsDisabled(!isDisabled);
    toggle();
  };

  const handleWrongAnswer = () => {
    props.setIndex(props.index + 1);
    setModalText(
      `The correct answer was: ${correctAnswer.answer_text}`
    );
    props.setIsDisabled(!isDisabled);
    toggle();
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>{modalText}</ModalBody>
      </Modal>
      <Container>
        <Row>
          {props.answers.map((answer, index) => (
            <>
              <Button
                className="m-1"
                key={index}
                disabled={isDisabled}
                color="secondary"
                onClick={() => {
                  correctAnswer.answer_text === answer.answer_text
                    ? handleCorrectAnswer()
                    : handleWrongAnswer();
                }}
              >
                {answer.answer_text}
              </Button>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AnswerSection;
