import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar, Container, IconButton, Menu, MenuItem } from "@mui/material";
import { png } from "../assets";
import { pages } from "../mock/strings";
import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import { rmvNums } from "../utils/parser";

const settings = ["Orders", "Logout"];

const ButtonAppBar = () => {
  const navigate = useNavigate();
  const uToken = localStorage.getItem("DOCBOOK_ACCESS_TOKEN");
  const uEmail = localStorage.getItem("DOCBOOK_USER_EMAIL");
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (value?: any) => {
    if (value === "Logout") {
      localStorage.removeItem("DOCBOOK_ACCESS_TOKEN");
      localStorage.removeItem("DOCBOOK_USER_EMAIL");
      localStorage.removeItem("DOCBOOK_USER_ID");

      setAnchorElNav(null);
      navigate("/login");
    } else {
      setAnchorElNav(null);
      navigate("/orders");
    }
  };

  return (
    <AppBar position="absolute" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Avatar
            alt="Remy Sharp"
            src={png.logo}
            component={"div"}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
            onClick={() => (window.location.href = `/`)}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    window.location.href = `/${page.toLowerCase()}`;
                  }}
                >
                  <Typography textAlign="center" sx={{ color: "black" }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              flex: 1,
            }}
          >
            <Avatar
              src={png.logo}
              component={"div"}
              onClick={() => (window.location.href = `/`)}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  window.location.href = `/${page.toLowerCase()}`;
                }}
                sx={{
                  my: 2,
                  display: "block",
                  color: "black",
                  marginInline: "10px",
                  // border:".1px solid black"
                  // boxShadow:1,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings"> */}

            {!uToken ? (
              <Button
                variant="outlined"
                sx={{ color: "black", fontSize: "12px" }}
                onClick={() => {
                  window.location.href = `/login`;
                }}
              >
                Login
              </Button>
            ) : (
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                    alignItems: "center",
                    // flexDirection: "column",
                  },
                }}
              >
                <Typography
                  sx={{ fontSize: "18px", color: "black", marginRight: "1vw" }}
                >
                  {rmvNums(uEmail?.split("@")[0])}
                </Typography>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src="/broken-image.jpg" />
                </IconButton>
              </Box>
            )}

            {/* </Tooltip> */}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ButtonAppBar;
