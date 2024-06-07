import React from "react";
import Background from "../../components/Background";
interface Props {}
const Payment = ({}: Props) => {
  return (
    <Background>
      <center>
        <div
          style={{
            display: "flex",
            flex: 1,
            height: "100%",
            backgroundColor: "blue",
          }}
        >
          THIS IS Payment CARD
        </div>
      </center>
    </Background>
  );
};

export default Payment;
