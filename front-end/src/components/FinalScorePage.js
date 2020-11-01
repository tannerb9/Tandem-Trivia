import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";

const FinalScorePage = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader>Your Score!</ModalHeader>
    </Modal>
  );
};

export default FinalScorePage;
