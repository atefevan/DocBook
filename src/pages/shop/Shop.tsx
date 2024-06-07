import { Box, Grid, Skeleton, Typography } from "@mui/material";
import Background from "../../components/Background";
import React from "react";
import { medicinesRead } from "../../apis/medicine";
import MedicineCard from "../../components/cards/MedicineCard";
interface Prop {}
const Shop = ({}: Prop) => {
  const [medicines, setMedicines] = React.useState<[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    medicinesRead()
      .then((res) => {
        setMedicines(res?.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Background>
      <Typography variant="h6" sx={{ mt: 10, fontWeight: "bold", ml: 5 }}>
        One stop shop for your daily medicine needs
      </Typography>
      {/* <center> */}
      <Box
        sx={{
          width: "100%",
          height: "40%",
          padding: 2,
          display: "flex",
        }}
      >
        {medicines.length > 0 ? (
          medicines?.map((item, index) => (
            <MedicineCard
              title={item?.name}
              unit={item?.unit}
              img={item?.image_url}
              price={item?.price}
              key={index}
              remedy={item?.remedy}
            />
          ))
        ) : (
          <Box sx={{ display: "flex", width: "85vw" }}>
            {[1, 2, 3, 4, 5].map(() => (
              <Skeleton
                variant="rectangular"
                width={"30vw"}
                height={"20vh"}
                sx={{ margin: 3, borderRadius: 5 }}
              />
            ))}
          </Box>
        )}
      </Box>
      {/* </center> */}
    </Background>
  );
};

export default Shop;

/*

{medicines.length > 0 ? (
          <Grid container spacing={2} mt={2} mb={5}>
            {medicines?.map((item, index) => (
              <Grid item key={index}>
               <Box
                  sx={{ height: 350, width: 370 }}
                  onClick={() => {
                    setOpen(!open);
                    setSelectedItem(item);
                    console.log(item?.name);
                  }}
                >
                  <ImgMediaCard props={item} />
                </Box> 
                <Typography>{item.toString()}</Typography>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={2} mt={2} mb={5}>
            {new Array(6).fill(0).map((item, index) => (
              <Grid>
                <Skeleton animation="wave" />
              </Grid>
            ))}
          </Grid>
        )}
*/
