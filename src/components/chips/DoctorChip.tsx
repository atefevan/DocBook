import { Box, Button, Icon, Typography } from "@mui/material";
import ApartmentSharpIcon from "@mui/icons-material/ApartmentSharp";
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";
import { jpeg } from "../../assets";

interface Props {
  title?: string;
  degree?: string;
  image?: any;
  exp?: string;
  dept?: string;
  avaiableIn?: string;
  availability?: any;
  address?: string;
  onClick?: (value?: any) => void;
  onTitleClick?: (value?: any) => void;
}
const DoctorChip = ({
  title,
  degree,
  image,
  address,
  exp,
  dept,
  availability,
  onClick,
  onTitleClick,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: { xs: "70vw", sm: "70vw", md: "60vw" },
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
        src={image ? image : jpeg.doctor_skeleton}
        sx={{
          width: { xs: "11vw", md: "90px" },
          height: { xs: "11vw", md: "90px" },
          margin: 2,
          borderRadius: 1,
        }}
      />
      <Box sx={{ display: "flex", flex: 1 }}>
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: { xs: "center", md: "start" },
          }}
        >
          <Typography
            sx={{
              "&:hover": {
                textDecoration: "underline",
                cursor: "pointer",
                textDecorationColor: "#007292",
              },
              fontSize: { xs: "14px", md: "18px" },
              fontWeight: { xs: "bold", md: "normal" },
              color: "#007292",
              margin: { xs: 0, md: 1 },
            }}
            onClick={onTitleClick}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "14px" },
              color: "#007292",
              marginLeft: { xs: 0, md: 1 },
            }}
          >
            {degree}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "14px" },
              color: "#007292",
              marginLeft: { xs: 0, md: 1 },
              marginBlock: { xs: 0, md: 0.2 },
            }}
          >
            {dept}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "14px" },
              color: "#007292",
              marginLeft: { xs: 0, md: 1 },
              marginBlock: { xs: 0, md: 0.5 },
            }}
          >
            {exp} Years of Experience Overall
          </Typography>
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
                  marginLeft: 0.5,
                  color: "#007292",
                  marginBlock: { xs: 0, md: 0.5 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Available in :
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "10px", md: "12px" },
              color: "#007292",
              marginLeft: { xs: 0, md: 1 },
              marginBlock: { xs: 0, md: 0.5 },
              textAlign: { xs: "center", md: "start" },
              paddingInline: { xs: "2vw", md: "0vw" },
            }}
          >
            {address}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flex: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column", marginBottom: 1 }}>
          <Box
            sx={{ display: "flex", marginBlock: "1vh", alignItems: "start" }}
          >
            <Icon>
              <AccessTimeSharpIcon
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
                Availability
              </Typography>
              {availability?.map((available: any) => (
                <Typography
                  sx={{
                    overflow: "scroll",
                    fontSize: "13px",
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    marginLeft: 0.5,
                    color: "#007292",
                    margin: 1,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {available?.day} - {available?.start} - {available?.end}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          alignSelf: { xs: "center", md: "end" },
          margin: 1,
          backgroundColor: "#007292",
        }}
        onClick={onClick}
      >
        Details
      </Button>
    </Box>
  );
};

export default DoctorChip;
