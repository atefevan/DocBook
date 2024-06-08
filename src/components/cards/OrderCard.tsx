import { Box, Skeleton, Typography } from "@mui/material";
interface Prop {
  item?: any;
}
const OrdersCard = ({ item }: Prop) => {
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
        textAlign: { xs: "center", md: "start" },
        overflow: "clip",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "60%",
          // backgroundColor: "blue",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontStyle: "italic",
            fontWeight: "bold",
            m: 1,
            color: item?.status === "Processing" ? "#DC5F00" : "#97BE5A",
          }}
        >
          {item?.status}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            // fontWeight: "bold",
            m: 1,
          }}
        >
          Username : {item?.name}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            m: 1,
          }}
        >
          Email : {item?.email}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            m: 1,
          }}
        >
          Phone : {item?.phone_no}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            m: 1,
          }}
        >
          Payment On : {item?.payment_method}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            m: 1,
          }}
        >
          {item?.payment_method === "Bank" ? "Bank Acc No." : "Account No."} :{" "}
          {item?.transaction_id}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            m: 1,
          }}
        >
          Address : {item?.address}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            m: 1,
          }}
        >
          Total : {item?.total_price} BDT
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "40%",
          // backgroundColor: "green",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "300px",
            overflow: "scroll",
            m: 1,
            borderRadius: 2,
            // backgroundColor: "orange",
            flexDirection: "column",
            alignItems: "center",
            border:"1px solid black",
            paddingInline:1
          }}
        >
          <Typography sx={{ m: 0.2, fontSize: "24px", fontWeight: "bold" }}>
            Products
          </Typography>
          {Object.keys(item?.products).map((key, index) => (
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#A7E6FF",
                height: "70px",
                width: "100%",
                paddingTop: 1,
                borderRadius:2,
                margin:1,
                flexDirection: "column",
              }}
            >
              <Typography>
                {index + 1} .{item?.products[key]?.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "space-between",
                  paddingInline:1,
                  paddingBottom:1
                }}
              >
                <Typography>Quantity : {item?.products[key]?.quantity}</Typography>
                <Typography>{item?.products[key]?.price} BDT</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OrdersCard;
/* 

        {
            "_id": "6664a327843675517c260faa",
            "user_id": "6652e9e39cef0628f9ba06ac",
            "products": {
                "66634f5754fe4b274fe209d4": {
                    "medicine_id": "66634f5754fe4b274fe209d4",
                    "price": 500,
                    "name": "Insulin Syringe 100IU",
                    "iamge_url": "https://medeasy.health/_next/image?url=https%3A%2F%2Fapi.medeasy.health%2Fmedia%2Fmedicines%2FIMG-20231029-WA0077.jpg&w=750&q=75",
                    "quantity": 1
                }
            },
            "total_price": 500,
            "status": "Processing",
            "name": "atefevan",
            "email": "atefevan1020@gmail.com",
            "address": "Flat - 201, Anamikha bHaban, Tongi, Gazipur",
            "payment_method": "Bkash",
            "transaction_id": "01521568018",
            "phone_no": "01521568018",
            "createdAt": "2024-06-08T18:29:59.746Z",
            "updatedAt": "2024-06-08T18:29:59.746Z",
            "__v": 0
        }
     */
