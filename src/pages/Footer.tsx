import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "5%",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ color: "white", fontSize: "14px" }}>
        copyright © 2024 All rights reserved to DocBook E.Corp
      </Typography>
    </Box>
  );
};

export default Footer;
