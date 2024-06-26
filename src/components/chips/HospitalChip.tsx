import { Box, Button, Icon, Typography } from "@mui/material";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ApartmentSharpIcon from "@mui/icons-material/ApartmentSharp";
interface Props {
  title?: string;
  address?: string;
  phone?: any;
  image?: any;
  assignedDoctor?: number;
  onClick?: (value?: any) => void;
  onTitleClick?: (value?: any) => void;
}
const HospitalChip = ({
  title,
  address,
  phone,
  image,
  assignedDoctor,
  onClick,
  onTitleClick,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: { sm: "320px", md: "53vw" },
        backgroundColor: "white",
        borderRadius: 2,
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", sm: "center", md: "start" },
        boxShadow: 2,
        margin: 2,
      }}
    >
      <Box
        component={"img"}
        src={image}
        draggable={false}
        sx={{
          width: { xs: "10vw", md: "100px" },
          height: { xs: "10vw", md: "100px" },
          margin: 2,

          borderRadius: 15,
        }}
      />

      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flex: 1,
          overflow: "clip",
          flexDirection: "column",
          alignItems: { xs: "center", md: "start" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px" },
            fontWeight: "bold",
            color: "#007292",
            margin: { xs: 0, md: 1 },
            cursor: "pointer",

            "&:hover": {
              textDecoration: "underline",
              cursor: "pointer",
              textDecorationColor: "#007292",
            },
          }}
          onClick={onTitleClick}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px" },
            fontWeight: { xs: "bold", md: "normal" },
            color: "#007292",
            margin: { xs: 0, md: 1 },
          }}
        >
          {assignedDoctor} Qualified doctors
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Box>
            <Box
              sx={{ display: "flex", marginTop: "1vh", alignItems: "center" }}
            >
              <Icon>
                <ApartmentSharpIcon
                  sx={{ height: "20px", width: "20px", color: "#007292" }}
                />
              </Icon>
              <Typography
                sx={{
                  overflow: "scroll",
                  fontSize: { xs: "12px", md: "14px" },
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                  width: { xs: "15vw", md: "20vw" },
                  marginLeft: 0.5,
                  color: "#007292",
                  marginBlock: { xs: 0, md: 0.5 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {address}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{ display: "flex", marginTop: "1vh", alignItems: "center" }}
            >
              <Icon>
                <LocalPhoneIcon
                  sx={{ height: "20px", width: "20px", color: "#007292" }}
                />
              </Icon>
              <Box
                sx={{
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "start",
                }}
              >
                <Typography
                  sx={{
                    overflow: "scroll",
                    fontSize: { xs: "12px", md: "14px" },
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    marginLeft: 0.5,
                    color: "#007292",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {phone}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { sm: "100%", md: "100%" },
            // flex:1,
            backgroundColor: "grey",
            height: { md: "1px" },
            borderRadius: 10,
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "center", md: "end" },
            width: "100%",
            // flex:1,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              margin: 1,
              display: "flex",
            }}
            onClick={onClick}
          >
            View More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HospitalChip;
