import ButtonAppBar from "../components/Appbar";

const Home = () => {
  return (
    <>
      <div
        style={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          position: "absolute",
        }}
      >
        <ButtonAppBar />
      </div>
    </>
  );
};

export default Home;
