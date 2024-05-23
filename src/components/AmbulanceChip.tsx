import { Box, Icon, Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
interface Props {
  title?: any;
  image?: any;
  details?: any;
  point_1?: string;
  point_2?: string;
  point_3?: string;
}
const AmbulanceChip = ({ title, image, point_1, point_2, point_3 }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        minWidth: { sm: "16vw", md: "18vw" },
        minHeight: { sm: "28vh", md: "18vh" },
        backgroundColor: "white",
        borderRadius: 2,
        flexDirection: "column",
        alignItems: "center",
        marginInline: 1,
        overflow: "clip",
        margin: 2,
        boxShadow: 2,
      }}
    >
      <img
        // src={image}
        src={image}
        width={"80%"}
        height={"80%"}
        style={{ marginBlock: "1vh", borderRadius: ".5vh" }}
        // sx={{
        //   height: { xs: "40px", sm: "65px", md: "90px" },
        //   width: { xs: "40px", sm: "65px", md: "90px" },
        //   marginBlock: { xs: ".4vh", sm: ".6vh", md: ".8vh" },
        // }}
      />

      <Typography
        style={{
          overflow: "scroll",
          paddingInline: "10px",
          wordBreak: "break-word",
          textAlign: "center",
          fontWeight: "bold",
          color: "#174e61",
          fontFamily: "Arial",
          fontSize: "18px",
          alignSelf: "center",
          paddingBlock: "1vh",
        }}
      >
        {title}
      </Typography>
      {/* <Box sx={{ marginBottom: "1px solid black",display:"flex",width:"100%" }}/> */}
      <Box>
        <Box sx={{ display: "flex", marginTop: "1vh", alignItems: "start" }}>
          <Icon>
            <DoneAllIcon sx={{ height: "20px", width: "20px" }} />
          </Icon>
          <Typography
            sx={{
              overflow: "scroll",
              fontSize: "12px",
              wordWrap: "break-word",
              whiteSpace: "normal",
              marginLeft: 0.5,
              color: "#007292",
              textAlign: "left",
            }}
          >
            {point_1}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "1vh",
            alignItems: "start",
          }}
        >
          <Icon>
            <DoneAllIcon sx={{ height: "20px", width: "20px" }} />
          </Icon>
          <Typography
            sx={{
              overflow: "scroll",
              fontSize: "12px",
              wordWrap: "break-word",
              whiteSpace: "normal",
              marginLeft: 0.5,
              color: "#007292",
              textAlign: "left",
              alignSelf: "start",
            }}
          >
            {point_2}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "1vh",
            alignItems: "start",
          }}
        >
          <Icon>
            <DoneAllIcon sx={{ height: "20px", width: "20px" }} />
          </Icon>
          <Typography
            sx={{
              overflow: "scroll",
              fontSize: "12px",
              wordWrap: "break-word",
              whiteSpace: "normal",
              marginLeft: 0.5,
              color: "#007292",
              textAlign: "left",
            }}
          >
            {point_3}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AmbulanceChip;
