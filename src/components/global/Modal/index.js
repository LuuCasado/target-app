import React, { useContext } from "react";

import { modalContext } from "./ModalProvider";
import { ReactComponent as CrossIcon } from "assets/icons/close.svg";
import useStyles from "./styles";

const Modal = () => {
  const classes = useStyles();
  const { isOpen, closeModal, content } = useContext(modalContext);

  if (!isOpen) return null;

  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <CrossIcon onClick={closeModal} className={classes.close} />
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
