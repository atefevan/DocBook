import * as React from "react";

interface Prop {
  height?: string | number;
  width?: string | number;
  url: string;
}

const MapView: React.FC<Prop> = ({ height = "10vw", width = "20vw", url }) => {
  return (
    <iframe
      title="Map Preview"
      src={url}
      style={{ height: height, width: width }}
    />
  );
};

export default MapView;
