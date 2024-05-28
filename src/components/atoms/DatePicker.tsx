import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers";
interface Props {
  label?: string;
  value?: any;
  setValue?: any;
  width?: string | number;
  style?: any;
}
const DatePickerValue = ({
  label,
  value,
  width = "100%",
  style,
  setValue,
}: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        label={label}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        format="DD-MMM-YYYY"
        sx={{ width, ...style }}
      />
    </LocalizationProvider>
  );
};
export default DatePickerValue;
