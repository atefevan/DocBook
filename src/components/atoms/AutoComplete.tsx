import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
interface Props {
  options?: any;
  focuseColor?: string;
  focuseColorUnderline?: string;
  fontColor?: string;
  focuseBorderColor?: string;
  label?: string;
  outlineColor?: string;
  setValue?: (value?: any) => void;
  value?: any;
}
const AutoComplete = ({
  options,
  focuseColor = "white",
  focuseColorUnderline = "white",
  fontColor = "white",
  outlineColor = "white",
  focuseBorderColor = "white",
  label = "demo",
  value,
  setValue,
}: Props) => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      //   sx={{ width: 300 }}
      value={value}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      sx={{
        width: "100%",
        height: "30%",
        "& label.Mui-focused": {
          color: focuseColor,
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: focuseColorUnderline,
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: focuseBorderColor,
            // fontSize: labelFontSize,
          },
          "&:hover fieldset": {
            borderColor: focuseBorderColor,
          },
          "&.Mui-focused fieldset": {
            borderColor: focuseBorderColor,
            color: "white",
          },
        },
        ".MuiInputLabel-root": {
          color: focuseColor,
        },
        // ...style,
        zIndex: 0,
        color: outlineColor,
        "& .MuiSvgIcon-root": {
          color: outlineColor,
        },
        "& .Mui-focused.MuiAutocomplete-input": {
          color: outlineColor,
        },
        "&.MuiAutocomplete-inputRoot": {
          color: outlineColor,
        },
      }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
    // <Autocomplete

    //     id="controllable-states-demo"
    //     options={options}
    //     sx={{ width: 300 }}
    //     renderInput={(params) => <TextField {...params} label="Controllable" />}
    //   />
  );
};

export default AutoComplete;
