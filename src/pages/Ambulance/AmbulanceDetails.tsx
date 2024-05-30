import React from "react";
import { ambulanceRead, ambulancesRead } from "../../apis/ambulance";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import { Box, Button, Icon, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { jpeg } from "../../assets";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { areas } from "../../mock/strings";
import AutoComplete from "../../components/atoms/AutoComplete";
interface Props {}
const AmbulanceDetails = ({}: Props) => {
  const { ambulanceId } = useParams();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [location, setLocation] = React.useState<string>(areas[0]);
  const [details, setDetails] = React.useState<[]>([]);
  React.useEffect(() => {
    setLoading(true);
    ambulanceRead({ id: ambulanceId })
      .then((res) => setDetails(res?.data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        height: "100%",
        backgroundColor: "#F2F2F2",
        position: "absolute",
        padding: 0,
        margin: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            height: "50vh",
            width: "70vw",
            backgroundColor: "white",
            marginTop: "10vh",
            borderRadius: 2,
            boxShadow: 1,
            marginLeft: "2vw",
            overflow: "clip",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  overflow: "scroll",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    width: { xs: "70vw", md: "25vw" },
                    display: "flex",
                    justifyContent: { xs: "center" },
                    // backgroundColor: "lightblue",
                  }}
                >
                  <Box
                    component={"img"}
                    draggable={false}
                    src={
                      details?.image_url
                        ? details?.image_url
                        : jpeg.car_skeleton
                    }
                    sx={{
                      width: { xs: "30vw", md: "280px" },
                      height: { xs: "25vw", md: "240px" },
                      margin: 2,
                      borderRadius: 1,
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: { xs: "70vw", md: "50vw" },
                      // backgroundColor: "lightpink",
                      flexDirection: "column",
                      alignItems: { xs: "center", md: "start" },
                    }}
                  >
                    <Typography
                      sx={{
                        // display: "flex",
                        fontSize: { xs: "24px", md: "28px" },
                        marginInline: 1,
                        marginBlock: 2,
                        width: { xs: "45vw", md: "25vw" },
                        color: "#007292",
                      }}
                    >
                      {details?.title || <Skeleton />}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "11px", md: "18px" },
                        marginInline: 1,
                        textAlign: { xs: "center", md: "start" },
                        color: "#007292",
                      }}
                    >
                      {details?.description || <Skeleton count={5} />}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "63vw",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: { xs: "center", md: "space-between" },
                  marginInline: "5vw",
                }}
              >
                <Box
                  sx={{
                    alignItems: { xs: "center", md: "start" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      margin: 2,
                    }}
                  >
                    <Icon
                      sx={{ height: "30px", width: "30px", marginTop: ".5vh" }}
                    >
                      <LocalPhoneIcon
                        sx={{ height: "30px", width: "30px", color: "#007292" }}
                      />
                    </Icon>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontSize: { xs: "12px", md: "18px" },
                          wordWrap: "break-word",
                          whiteSpace: "normal",
                          marginLeft: 0.5,
                          color: "#007292",
                          marginBlock: { xs: 0, md: 0.5 },
                          textAlign: { xs: "center", md: "left" },
                          cursor: "pointer",
                        }}
                      >
                        On Emergency
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "12px", md: "18px" },
                          wordWrap: "break-word",
                          whiteSpace: "normal",
                          marginLeft: 0.5,
                          color: "#007292",
                          marginBlock: { xs: 0, md: 0.5 },
                          textAlign: { xs: "center", md: "left" },
                          cursor: "pointer",
                        }}
                        onClick={() => window.open(`tel:${details?.contact}`)}
                      >
                        {details?.contact || <Skeleton />}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: { xs: "center", md: "start" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      margin: 2,
                    }}
                  >
                    <Icon
                      sx={{ height: "30px", width: "30px", marginTop: ".5vh" }}
                    >
                      <PlaceIcon
                        sx={{ height: "30px", width: "30px", color: "#007292" }}
                      />
                    </Icon>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontSize: { xs: "12px", md: "18px" },
                          wordWrap: "break-word",
                          whiteSpace: "normal",
                          marginLeft: 0.5,
                          color: "#007292",
                          marginBlock: { xs: 0, md: 0.5 },
                          textAlign: { xs: "center", md: "left" },
                          cursor: "pointer",
                        }}
                      >
                        Location
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "12px", md: "18px" },
                          wordWrap: "break-word",
                          whiteSpace: "normal",
                          marginLeft: 0.5,
                          color: "#007292",
                          marginBlock: { xs: 0, md: 0.5 },
                          textAlign: { xs: "center", md: "left" },
                          cursor: "pointer",
                        }}
                        onClick={() => window.open(`tel:${details?.contact}`)}
                      >
                        {}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "35vh",
            width: "70vw",
            backgroundColor: "white",
            marginTop: "3vh",
            borderRadius: 2,
            boxShadow: 1,
            marginLeft: "2vw",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ margin: 3, fontFamily: "Arial", fontSize: "28px" }}>
            Our Services
          </Typography>
          <Typography sx={{ margin: 2, fontFamily: "Arial", fontSize: "18px" }}>
            Get ambulance within 30 minutes*
          </Typography>
          <Typography sx={{ margin: 2, fontFamily: "Arial", fontSize: "18px" }}>
            24/7 affordable quality service
          </Typography>
          <Typography sx={{ margin: 2, fontFamily: "Arial", fontSize: "18px" }}>
            We are just a call away: 01405600700
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "25vw",
          height: "88vh",
          marginTop: "10vh",
          marginLeft: "2vw",
          borderRadius: 2,
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ fontSize: "24px", fontFamily: "Arial", color: "#007292" }}
        >
          On Emergency
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "80%",
            height: "43%",
            paddingInline: "2vw",
            marginBlock: "1vh",
            borderRadius: 2,
            boxShadow: 1,
            backgroundColor: "white",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ marginTop: "2vh", fontSize: "24px", fontFamily: "Arial" }}
          >
            Location
          </Typography>
          <AutoComplete
            options={areas}
            label={"Area"}
            value={location}
            setValue={setLocation}
            focuseBorderColor="black"
            fontColor="black"
            focuseColor="black"
            outlineColor="black"
            // style={{ marginLeft: "5vw" }}
          />
          <Typography
            sx={{ marginTop: "2vh", fontSize: "24px", fontFamily: "Arial" }}
          >
            {location}'s provider
          </Typography>
          <Typography
            sx={{ marginTop: "2vh", fontSize: "24px", fontFamily: "Arial" }}
          >
            0101010101
          </Typography>

          <Button
            variant="contained"
            sx={{ marginTop: 2, width: "90%" }}
            onClick={() => window.open(`tel:${"0101010101"}`)}
          >
            Call
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AmbulanceDetails;
