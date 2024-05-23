import { IconButton, SxProps, Theme } from "@mui/material";
import { ReactElement } from "react";
interface Props {
  muiIcon: ReactElement<any, any>;
  hoverColor?: any;
  height?: string | number;
  bgColor?: string;
  style?: SxProps<Theme>;
  width?: string | number;
  onClick?: (e?: any) => void;
}
const IconBtn = ({
  muiIcon,
  height = "40px",
  width = "40px",
  hoverColor = "#C7C8CC",
  bgColor = "#DDDDDD",
  style,
  onClick,
}: Props) => {
  return (
    <>
      <IconButton
        sx={{
          bgcolor: bgColor,
          height: height,
          width: width,
          "&:hover, &.Mui-focusVisible": {
            backgroundColor: hoverColor,
          },
          ...style,
        }}
        onClick={onClick}
      >
        {muiIcon}
      </IconButton>
    </>
  );
};

export default IconBtn;
