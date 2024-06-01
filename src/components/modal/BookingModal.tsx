import React from "react";
import Alert from "../atoms/Alert";
import { Button, Typography } from "@mui/material";
import IconBtn from "../atoms/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TxtField from "../atoms/TxtField";
import AutoComplete from "../atoms/AutoComplete";
import { appointmentAdd } from "../../apis/appoinment";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
interface Props {
  data?: any;
  open?: boolean;
  setOpen?: (value?: any) => void;
}
const BookingModal = ({ data, open, setOpen }: Props) => {
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = React.useState<string>("");
  const [paymentMethod, setPaymentMethod] = React.useState<string>("Bkash");
  const [amount, setAmount] = React.useState<string>("");
  const handleSubmit = () => {
    if (!data?.user?.id) {
      // enqueueSnackbar("Login to Continue !", {
      //   variant: "error",
      // });
      //
    }
    const slot = data?.slots?.find((slot) =>
      slot?.slot === selectedSlot ? slot?._id : ""
    );
    appointmentAdd({
      user_id: data?.user?.id,
      doctor_id: data?.doctor?.id,
      slot_id: slot?._id,
    }).then((res) => {
      setOpen(false);
      navigate("/login");
      return enqueueSnackbar(res?.message, {
        variant: res?.status,
      });
    });
  };
  return (
    <Alert
      open={open}
      width="45vw"
      height="37vh"
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
                  fontSize: "28px",
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
                fontSize: "14px",
                fontWeight: "bold",
                color: "#ff6247",
                marginBottom: "1vh",
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
                  marginBottom: "1vh",
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
                  options={data?.rawSlots}
                  value={selectedSlot}
                  id={"slot"}
                  fontColor="black"
                  focuseColor="black"
                  outlineColor="black"
                  focuseBorderColor="black"
                  label={"Slots"}
                  setValue={setSelectedSlot}
                  // style={{ marginLeft: "5vw" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  marginInline: "2.2%",
                  marginBlock: "2vh",
                }}
              >
                <AutoComplete
                  options={["Bkash"]}
                  value={paymentMethod}
                  id={"slot"}
                  fontColor="black"
                  focuseColor="black"
                  outlineColor="black"
                  focuseBorderColor="black"
                  label={"Payment Method"}
                  setValue={setPaymentMethod}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  marginInline: "2.2%",
                }}
              >
                <TxtField
                  id="amount"
                  name="amount"
                  label="Amount"
                  labelFontSize={"14px"}
                  key={"amount"}
                  fontSize={"12px"}
                  placeHolder={"Amount"}
                  fontColor={"black"}
                  value={amount}
                  focuseBorderColor={"black"}
                  focuseColor={"black"}
                  fieldOnChange={(event) => setAmount(event?.target.value)}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#90D26D",
                    width: "10vw",
                    marginBlock: "1vh",
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
