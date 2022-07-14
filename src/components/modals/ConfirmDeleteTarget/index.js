import React from "react";

import { buttonStyles } from "constants/styleTypes";
import Button from "components/global/Button";
import useModal from "hooks/useModal";
import useStyles from "./styles";

const ConfirmDeleteTarget = ({ onConfim }) => {
  const classes = useStyles();
  const { closeModal } = useModal();

  return (
    <>
      <div className={classes.answer}>Are you sure to delete this target?</div>
      <div className={classes.buttons}>
        <Button onClick={onConfim} styleType={buttonStyles.remove}>
          YES
        </Button>
        <Button onClick={closeModal}>NO</Button>
      </div>
    </>
  );
};

export default ConfirmDeleteTarget;
