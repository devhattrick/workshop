import React from "react";
import styles from "./index.module.scss";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
  _text: string;
  _functionOnClick?: any;
  _isIcon?: "add" | "delete" | "edit"
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
  _type?: "button" | "submit"
}

const listColor: any = [
  {
    name: "success",
    code: "#8AC82D",
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
    code: "	#bdc6c3",
  },
  {
    name: "warning",
    code: "#f7943a",
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
      type={props._type}
      fullWidth
      variant={props._variant}
      onClick={() => props._functionOnClick()}
      style={{
        backgroundColor: codeBG,
        color: codeText,
        height: "inherit",
        borderColor: codeText,
      }}
      startIcon={
        props._isIcon === "add"  ? <AddCircleOutlineIcon /> 
        : props._isIcon === "delete" ? <ClearIcon /> 
        : props._isIcon === "edit" ? <EditIcon /> 
        : <></>
      }
    >
      <span className={styles.text}>{props._text}</span>
    </Button>
  );
};
export default ButtonComponent;
