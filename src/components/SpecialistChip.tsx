import { Avatar, Button, Typography } from "@mui/material";
import { png } from "../assets";

interface Props {
  image?: any;
  title?: string;
  price?: string;
  onClick?: (value?: any) => void;
}
const SpecialistChip = ({ image, title, price, onClick }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        width: "10%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: 8,
        flexDirection: "column",
        alignItems: "center",
        marginInline: 5,
      }}
    >
      <Avatar
        src={image}
        sx={{ height: "90px", width: "90px", marginBlock: ".8vh" }}
      />

      <Typography style={{overflow:"clip"}}>{title}</Typography>
      <Typography style={{marginBlock:".5vh",color:"#5AB2FF"}}>{price}</Typography>
      <Button variant="outlined" onClick={onClick} > Consult Now </Button>
    </div>
  );
};

export default SpecialistChip;
