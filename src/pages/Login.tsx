import { Box, Button, Typography } from "@mui/material";
import { jpeg } from "../assets";
import React from "react";
import { enqueueSnackbar } from "notistack";
import TxtField from "../components/atoms/TxtField";

const Login = () => {
  const [formData, setFormData] = React.useState<any>({});
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
        <img src={jpeg.banner} style={{ width: "100%" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "end",
        }}
      >
        <Typography
          sx={{
            alignSelf: "center",
            fontSize: "42px",
            fontWeight: "bold",
            fontFamily: "Arial",
            margin: 2,
          }}
        >
          Welcome Back :)
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
          style={{ margin: 1 }}
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
          style={{ margin: 1 }}
          placeHolder="Type Registered Pass"
          fieldOnChange={handleFormDataInput}
        />
        <Button
          onClick={handleLogin}
          variant="contained"
          sx={{ alignSelf: "center", width: "100%", marginLeft: 2 }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
