import React from "react";
import { ambulancesRead } from "../../apis/ambulance";
import { Box } from "@mui/material";
interface Props {}
const AmbulanceDetails = ({}: Props) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [ambulances, setAmbulances] = React.useState<[]>([]);
  React.useEffect(() => {
    setLoading(true);
    ambulancesRead()
      .then((res) => setAmbulances(res?.data))
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
      <Box sx={{ display: "flex", flex: 1, }}>

      </Box>
    </Box>
  );
};

export default AmbulanceDetails;
