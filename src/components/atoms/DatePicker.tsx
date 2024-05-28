import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
interface Props {
  label?: string;
  value?: any;
  setValue?: any;
  style?: any;
}
const DatePickerValue = ({ label, value, style, setValue }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          label={label}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          format="DD-MMM-YYYY"
          sx={{ ...style }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
export default DatePickerValue;
