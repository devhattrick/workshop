import React, { useState,useEffect } from "react";
import styles from "./index.module.scss";
import Button from "@mui/material/Button";
import { ModalAlert, Buttons, ButtonComponent } from "../../components";

const NameComponent: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <>
      <div>
        <ModalAlert
          openModal={open}
          topic="กรุณากรอกข้อมูล"
          setOpenModal={() => setOpen(false)}
        />
        <p>test {count} </p>
        <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
        <Buttons
          _text="Open"
          _variant="contained"
          _onClick={() => setOpen(true)}
        />
        <ButtonComponent
          _text="Open"
          _variant="contained"
          _colorBG="info"
          _colorText="white"
          _functionOnClick={() => setOpen(true)}
        />
      </div>
    </>
  );
};
export default NameComponent;
