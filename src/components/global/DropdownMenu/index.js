import React, { useState } from "react";
import cn from "classnames";
import useStyles from "./styles";

const DropdownMenu = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className={cn(classes.dropdownMenu, className)}>
      <button onClick={() => setIsOpen(!isOpen)} className={classes.dropbtn}>
        SELECT YOUR GENDER
      </button>
      <div
        id="myDropdown"
        className={cn(classes.content, { [classes.isContentVisible]: isOpen })}
      >
        <div>
          <span>MALE</span>
        </div>
        <div>
          <span>FEMALE</span>
        </div>
        <div>
          <span>PREFER NOT TO ANSWER</span>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
