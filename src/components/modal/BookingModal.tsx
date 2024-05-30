import React from "react";
import Alert from "../atoms/Alert";
import { Button, Typography } from "@mui/material";
import IconBtn from "../atoms/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TxtField from "../atoms/TxtField";
import AutoComplete from "../atoms/AutoComplete";
interface Props {
  data?: any;
  open?: boolean;
  setOpen?: (value?: any) => void;
}
const BookingModal = ({ data, open, setOpen }: Props) => {
  const [formData, setFormData] = React.useState<any>({});
  const [slot, setSlot] = React.useState<string>("");
  //   const [paymentMethod, setPaymentMethod] = React.useState<string>("Bank");
  const handleFormDataInput = (e: any) => {
    e.preventDefault();
    let obj: any = {};
    const key: string = e.target.id ? e.target.id : e.target.name;
    obj[key] = e.target.value;
    setFormData({ ...formData, ...obj });
  };

  const handleSubmit = () => {};
  return (
    <Alert
      open={open}
      width="45vw"
      height="30vh"
      setOpen={() => setOpen(true)}
      children={
        <>
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "white",
              flexDirection: "column",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "7%" }} />
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "black",
                  marginTop: "1vh",
                }}
              >
                Confirm Booking
              </Typography>

              <IconBtn
                style={{ margin: 1 }}
                muiIcon={<CloseIcon />}
                onClick={() => setOpen(!open)}
              />
            </div>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#ff6247",
                marginTop: "1vh",
                marginBottom: "2vh",
                alignSelf: "center",
              }}
            >
              * Carefully Fill / Check all the information *
            </Typography>
            <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  height: "60px",
                  alignItems: "center",
                  paddingInline: "10px",
                  marginBottom: "2vh",
                }}
              >
                <div style={{ display: "flex", flex: 1, marginInline: "1%" }}>
                  <TxtField
                    // _disabled
                    id="user_email"
                    name="user_email"
                    label="User Email"
                    labelFontSize={"14px"}
                    key={"user_email"}
                    size="small"
                    fontSize={"12px"}
                    placeHolder="User Email"
                    fontColor={"black"}
                    value={data?.user?.email}
                    focuseBorderColor={"black"}
                    focuseColor={"black"}
                    // fieldOnChange={handleFormDataInput}
                    isReadOnly
                  />
                </div>

                <div style={{ display: "flex", flex: 1, marginInline: "1%" }}>
                  <TxtField
                    // _disabled
                    id="doctor_name"
                    name="doctor_name"
                    label="Doctor"
                    labelFontSize={"14px"}
                    key={"doctor_name"}
                    size="small"
                    fontSize={"12px"}
                    placeHolder="Doctor Name"
                    fontColor={"black"}
                    value={data?.doctor?.name}
                    focuseBorderColor={"black"}
                    focuseColor={"black"}
                    // fieldOnChange={handleFormDataInput}
                    isReadOnly
                  />
                </div>
              </div>
              <div style={{ display: "flex", flex: 1, marginInline: "2.2%" }}>
                <AutoComplete
                  options={data?.slots}
                  value={slot}
                  id={"slot"}
                  fontColor="black"
                  focuseColor="black"
                  outlineColor="black"
                  focuseBorderColor="black"
                  label={"Slots"}
                  setValue={setSlot}
                  // style={{ marginLeft: "5vw" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  //   flex: 1,
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#90D26D",
                    width: "10vw",
                    marginBottom: "1vh",
                    color: "black",
                  }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </>
      }
      style={{ backgroundColor: "transparent" }}
    />
  );
};

export default BookingModal;
