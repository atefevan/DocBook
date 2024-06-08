import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import { svg } from "../../assets";
import Footer from "../Footer";
import Background from "../../components/Background";
import { orderList } from "../../apis/order";
import OrdersCard from "../../components/cards/OrderCard";

interface Props {}
const OrderList = ({}: Props) => {
  const [orders, setOrders] = React.useState<[]>([]);
  const userId = localStorage.getItem("DOCBOOK_USER_ID");
  const [loading, setLoading] = React.useState<boolean>(false);
  const consultPhone = "02 981 4246";

  React.useEffect(() => {
    setLoading(true);
    orderList(userId)
      .then((res) => {
        setOrders(res?.data);
      })
      .finally(() => setLoading(false));
  }, []);
  console.log(orders);
  return (
    <Background>
      <Box sx={{ marginInline: "5vw" }}>
        <Typography sx={{ fontSize: "16px", marginTop: "10vh",marginLeft:"1vw" }}>
          All orders in one place
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", sm: "100%", md: "70%" },
              // backgroundColor: "white",
              flexDirection: "column",
              overflow: "scroll",
              height: "85vh",
            }}
          >
            {!loading ? (
              orders?.map((order) => (
                <OrdersCard
                  item={order}
                  // image={ambulance?.image_url}
                  // title={ambulance?.title}
                  // desciption={ambulance?.description}
                  // phone={ambulance?.contact}
                />
              ))
            ) : (
              <Box>
                {[1, 2, 3, 4].map(() => (
                  <Skeleton
                    sx={{
                      width: { xs: "45vw", sm: "320px", md: "61vw" },
                      height: { xs: "50vh", sm: "30vh", md: "26vh" },
                      borderRadius: 2,
                      margin: 0.5,
                    }}
                  />
                ))}
              </Box>
            )}
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              width: "30%",
              backgroundColor: "white",
              height: "40vh",
              justifyContent: "center",
              alignItems: "center",
              // boxShadow: 1,
              border: ".5px solid black",
              borderRadius: 3,
            }}
          >
            <Box
              component={"img"}
              src={svg.need_help}
              draggable={false}
              sx={{
                width: { xs: "90%", md: "90%" },
                height: { xs: "80%", md: "70%" },
                borderRadius: 2,
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                fontFamily: "Arial",
                fontSize: "16px",
                color: "#e9ad0f",
                marginBottom: "8vh",
              }}
            >
              Consult Problem
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                fontSize: "16px",
                fontFamily: "Arial",
                marginBottom: "2vh",
                cursor: "pointer",
              }}
              onClick={() => window.open(`tel:${consultPhone}`)}
            >
              {consultPhone}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Background>
  );
};

export default OrderList;
