import {
  FormControlLabel,
  Switch,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";

interface Props {
  id?: string;
  name?: string;
  label?: string;
  labelAlign?: "top" | "bottom" | "end" | "start";
  color?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  labelFontSize?: string | number;
  isChecked?: boolean;
  // uncheckedIcon?: React.ReactNode;
  // checkedIcon?: React.ReactNode;
  labelColor?: string;
  size?: "small" | "medium";
  mode?: string;
  style?: SxProps<Theme>;
  onChange?: (e: any) => void;
  onFocus?: (value?: any) => void;
}

const SwitcH = ({
  id,
  onFocus,
  name,
  label,
  color = "primary",
  size,
  isDisabled,
  isRequired,
  isChecked,
  // checkedIcon,
  // uncheckedIcon,
  labelColor = "white",
  labelAlign,
  labelFontSize,
  onChange,
  style,
}: Props) => {
  //   const { colorscheme } = useColorScheme();
  return (
    <>
      <FormControlLabel
        control={
          <Switch
            id={id}
            name={name}
            defaultChecked
            size={size}
            onFocus={onFocus}
            required={isRequired}
            disabled={isDisabled}
            checked={isChecked}
            // icon={uncheckedIcon}
            // checkedIcon={checkedIcon}
            onChange={onChange}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: color,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: color,
              },
              ...style,
            }}
          />
        }
        label={
          <Typography sx={{ fontSize: labelFontSize, color: labelColor }}>
            {label}
          </Typography>
        }
        labelPlacement={labelAlign}
      />
    </>
  );
};

export default SwitcH;
