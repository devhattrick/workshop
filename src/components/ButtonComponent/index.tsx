import React from "react";
import styles from "./index.module.scss";
import Button from "@mui/material/Button";

interface Props {
  _text: string;
  _functionOnClick?: any;
  _colorBG:
    | "success"
    | "error"
    | "primary"
    | "gentle"
    | "warning"
    | "info"
    | "pink"
    | "black"
    | "white";
  _colorText:
    | "success"
    | "error"
    | "primary"
    | "gentle"
    | "warning"
    | "info"
    | "pink"
    | "black"
    | "white";
  _variant: "text" | "outlined" | "contained";
}

const listColor: any = [
  {
    name: "success",
    code: "#26b700",
  },
  {
    name: "error",
    code: "#ee1e1e",
  },
  {
    name: "primary",
    code: "#2181ed",
  },
  {
    name: "gentle",
    code: "#26b700",
  },
  {
    name: "warning",
    code: "#fffa17",
  },
  {
    name: "info",
    code: "#0db4b9",
  },
  {
    name: "pink",
    code: "#ffd4e3",
  },
  {
    name: "black",
    code: "#000000",
  },
  {
    name: "white",
    code: "#ffffff",
  },
];
const ButtonComponent: React.FC<Props> = (props: Props): JSX.Element => {
  const codeBG: string = listColor.find(
    (element: any) => element.name === props._colorBG
  ).code
  const codeText: string = listColor.find(
    (element: any) => element.name === props._colorText
  ).code
  return (
    <Button
      fullWidth
      variant={props._variant}
      onClick={() => props._functionOnClick()}
      style={{
        backgroundColor: codeBG,
        color: codeText,
        height: "inherit",
        borderColor: codeText,
      }}
    >
      <span className={styles.text}>{props._text}</span>
    </Button>
  );
};
export default ButtonComponent;
