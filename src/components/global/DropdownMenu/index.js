import React, { useState } from "react";
import cn from "classnames";
import useStyles from "./styles";

const DropdownMenu = ({
  className,
  value,
  onChange,
  options,
  title,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className={cn(classes.dropdownMenu, className)}>
      <button onClick={() => setIsOpen(!isOpen)} className={classes.dropbtn}>
        {value ? value : title}
      </button>
      <div
        className={cn(classes.content, { [classes.isContentVisible]: isOpen })}
      >
        {options.map((item) => (
          <div
            key={item}
            onClick={() => {
              setIsOpen(false);
              onChange(item);
            }}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
      {error ? <p className={classes.error}>{error}</p> : null}
    </div>
  );
};

export default DropdownMenu;
