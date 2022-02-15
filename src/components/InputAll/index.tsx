import React from "react";
import styles from "./index.module.scss";
//Mui
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  _label: string;
  _textHelper: string;
  _menuList: any[];
  _selectData: any;
  _value: any;
}
export const InputSelect: React.FC<Props> = (props: Props): JSX.Element => {
  // const [age, setAge] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    props._selectData(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          id="demo-simple-select-helper-label"
          sx={{
            backgroundColor: "white",
            padding: "0 5px",
            fontFamily: "Kanit",
          }}
        >
          {props._label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={props._value}
          label="Age"
          onChange={handleChange}
        >
          {props._menuList.map((data: any, index: number) => (
            <MenuItem
              key={index}
              value={data.value}
              sx={{ fontFamily: "Kanit" }}
            >
              <span style={{ fontFamily: "Kanit" }}>{data.label}</span>
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{props._textHelper}</FormHelperText>
      </FormControl>
    </>
  );
};
