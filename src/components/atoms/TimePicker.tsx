import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileTimePicker } from "@mui/x-date-pickers";
interface Props {
  value?: any;
  label?: string;
  style?: any;
  width?: string | number;
  variant?: "mobile" | "responsive" | "default";
  setValue?: (value?: any) => void;
}
const PickTime = ({
  width = "100%",
  style,
  label,
  value,
  variant,
  setValue,
}: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {variant === "mobile" ? (
        <MobileTimePicker
          label={label}
          value={value}
          format="hh:mm:ss"
          sx={{ width: width, ...style }}
          onChange={(newValue) => setValue(newValue)}
        />
      ) : (
        <TimePicker
          label={label}
          value={value}
          format="hh:mm:ss"
          sx={{ width: width, ...style }}
          onChange={(newValue) => setValue(newValue)}
        />
      )}
    </LocalizationProvider>
  );
};

export default PickTime;
