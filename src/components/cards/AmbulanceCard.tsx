import { Box, Button, Icon, Typography } from "@mui/material";
import { jpeg } from "../../assets";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
interface Prop {
  image?: any;
  title?: string;
  desciption?: string;
  phone?: string | number;
  onClick?: (value?: any) => void;
  onTitleClick?: (value?: any) => void;
}
const AmbulanceCard = ({
  image,
  title,
  desciption,
  phone,
  onClick,
  onTitleClick,
}: Prop) => {
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
        textAlign:{xs:"center",md:"start"}
      }}
    >
      <Box
        sx={{ display: "flex", height: "100%" }}
      >
        <Box
          component={"img"}
          src={image ? image : jpeg.car_skeleton}
          sx={{
            width: { xs: "14vw", md: "180px" },
            height: { xs: "14vw", md: "150px" },
            margin: 2,
            borderRadius: 1,
          }}
        />
      </Box>
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
            {desciption}
          </Typography>
          <Box>
            <Box
              sx={{ display: "flex", marginTop: "1vh", alignItems: "center" }}
            >
              <Icon sx={{ height: "30px", width: "30px" }}>
                <LocalPhoneIcon
                  sx={{ height: "25px", width: "25px", color: "#007292" }}
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
                  cursor: "pointer",
                }}
                onClick={() => window.open(`tel:${phone}`)}
              >
                {phone}
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
            {}
          </Typography>
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

export default AmbulanceCard;
