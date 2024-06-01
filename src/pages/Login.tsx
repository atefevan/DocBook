import { Box, Button, Typography } from "@mui/material";
import { jpeg } from "../assets";
import React from "react";
import { enqueueSnackbar } from "notistack";
import TxtField from "../components/atoms/TxtField";
import { signin, signup } from "../apis/user";
import { emailValidator } from "../utils/validator";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<any>({});
  const [hasAccount, setHasAccount] = React.useState<boolean>(true);
  const handleFormDataInput = (e: any) => {
    e.preventDefault();
    let obj: any = {};
    const key: string = e.target.id ? e.target.id : e.target.name;
    obj[key] = e.target.value;
    setFormData({ ...formData, ...obj });
  };
  const handleAuthentication = async () => {
    if (!formData?.email || !formData?.password) {
      return enqueueSnackbar("Fill the Input Values !", {
        variant: "error",
      });
    }

    if (hasAccount) {
      const res = await signin({
        email: formData.email,
        password: formData.password,
      });
      if (res?.token) {
        localStorage.setItem("DOCBOOK_ACCESS_TOKEN", res?.token);
        localStorage.setItem("DOCBOOK_USER_ID", res?.user_id);
      }
      navigate("/");
    } else {
      const res = await signup({
        email: formData.email,
        password: formData.password,
      });
      return enqueueSnackbar(res?.message, {
        variant: res?.status,
      });
    }
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
        component={"img"}
        src={jpeg.banner}
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "30vh", md: "99.2vh" },
          width: { xs: "100vw", md: "51vw" },
        }}
      />
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
            marginBlock: 2,
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
          placeHolder="Email"
          fieldOnChange={handleFormDataInput}
          style={{ marginBlock: 1 }}
          validator={emailValidator(formData?.email)}
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
          placeHolder="Password"
          type="password"
          fieldOnChange={handleFormDataInput}
        />
        <Button
          onClick={handleAuthentication}
          variant="contained"
          sx={{ alignSelf: "center", width: "100%", marginBlock: 1 }}
        >
          {hasAccount ? "Sign In" : "Sign Up"}
        </Button>
        <Button
          onClick={() => setHasAccount(!hasAccount)}
          variant="text"
          sx={{ alignSelf: "center", width: "100%", marginBlock: 1 }}
        >
          {!hasAccount
            ? `Already Have An Account ?`
            : `Don't have an account ?`}
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
