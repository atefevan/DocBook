import { Box, Button, Typography } from "@mui/material";
import { jpeg } from "../assets";
import React from "react";
import { enqueueSnackbar } from "notistack";
import TxtField from "../components/atoms/TxtField";

const Login = () => {
  const [formData, setFormData] = React.useState<any>({});
  const [hasAccount, setHasAccount] = React.useState<boolean>(true);
  const handleFormDataInput = (e: any) => {
    e.preventDefault();
    let obj: any = {};
    const key: string = e.target.id ? e.target.id : e.target.name;
    obj[key] = e.target.value;
    setFormData({ ...formData, ...obj });
  };
  const handleLogin = async () => {
    if (!formData?.email || !formData?.password) {
      return enqueueSnackbar("Fill the Input Values !", {
        variant: "error",
      });
    }
    // leaveTypeAdd(formData).then((res: any) => {
    //   enqueueSnackbar(res.message, {
    //     variant: res.status,
    //   });
    // });
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        padding: 0,
        margin: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={jpeg.banner} style={{ height: "99.2vh", width: "50vw" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingInline: "10vw",
        }}
      >
        <Typography
          sx={{
            alignSelf: "center",
            fontSize: "42px",
            fontWeight: "bold",
            fontFamily: "Arial",
            marginBlock: 2
          }}
        >
          {hasAccount ? `Welcome Back :)` : `Create an account`}
        </Typography>
        <TxtField
          id="email"
          name="email"
          key={"email"}
          value={Object.keys(formData).length ? formData?.email : ""}
          fontColor="black"
          focuseColorUnderline="black"
          focuseColor="black"
          focuseBorderColor="black"
          label="Email"
          variant="outlined"
          placeHolder="Type Registered Email"
          fieldOnChange={handleFormDataInput}
          style={{ marginBlock: 1 }}
        />
        <TxtField
          id="password"
          name="password"
          key={"password"}
          value={Object.keys(formData).length ? formData?.password : ""}
          fontColor="black"
          focuseColorUnderline="black"
          focuseColor="black"
          focuseBorderColor="black"
          label="Password"
          variant="outlined"
          style={{ marginBlock: 1 }}
          placeHolder="Type Registered Pass"
          fieldOnChange={handleFormDataInput}
        />
        <Button
          onClick={handleLogin}
          variant="contained"
          sx={{ alignSelf: "center", width: "100%",marginBlock: 1 }}
        >
          Login
        </Button>
        <Button
          onClick={() => setHasAccount(!hasAccount)}
          variant="text"
          sx={{ alignSelf: "center", width: "100%", marginBlock: 1 }}
        >
          {!hasAccount ? `Already Have An Account ?` : `Don't have an account ?`}
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
