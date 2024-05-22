import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { png } from "../assets";
import { pages } from "../mock/strings";
interface Props {
  handleLogin?: (value?: any) => void;
  handleFindDoc?: (value?: any) => void;
  handleHospital?: (value?: any) => void;
  handleAmbulance?: (value?: any) => void;
  handleServices?: (value?: any) => void;
}
const ButtonAppBar = ({
  //   handleAmbulance,
  //   handleFindDoc,
  //   handleHospital,
  handleLogin,
}: //   handleServices,
Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        key={"Core Bar"}
        position="absolute"
        sx={{
          backgroundColor: "white",
          //   width: {
          //     // xs:,
          //     // sm:,
          //     // md:,
          //     // lg:,
          //     // xl:,
          //   },
        }}
      >
        <Toolbar>
          <div
            style={{ flexGrow: 1, display: "flex", flex: 1 }}
            key={"toolbar"}
          >
            <Typography variant="h6" component="div">
              <Avatar
                alt="Remy Sharp"
                src={png.logo}
                component={"div"}
                onClick={() => (window.location.href = `/`)}
              ></Avatar>
            </Typography>
            <div style={{ display: "flex", flexGrow: 1 }} key={"pages"}>
              {pages.map((page) => (
                <div style={{ display: "flex" }} key={page}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "black",
                      marginInline: "10px",
                      borderColor: "transparent",
                      fontSize: "12px",
                    }}
                    onClick={() => {
                      window.location.href = `/${page.toLowerCase()}`;
                    }}
                  >
                    {page}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outlined"
            sx={{ color: "black", fontSize: "12px" }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
