import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

const WhiteBox = () => {
  return (
    <div className="App">
      <Rnd
        style={style}
        default={{
          x: 0,
          y: 0,
          width: 320,
          height: 200,
        }}
      >
        Rnd
      </Rnd>
    </div>
  );
};

export default WhiteBox;
