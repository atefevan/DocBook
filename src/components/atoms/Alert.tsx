import { Dialog, SxProps, Theme } from "@mui/material";
interface Props {
  title?: string;
  open?: any;
  component?: any;
  width?: string;
  height?: string;
  style?: SxProps<Theme>;
  children?: React.ReactNode;
  setOpen?: (value: any) => void;
}
const Alert = ({
  open,
  component,
  children,
  setOpen,
  style,
  width,
  height,
}: Props) => {
  //   const { colorscheme } = useColorScheme();
  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={setOpen}
          component={component}
          PaperProps={{
            elevation: 0,
            sx: {
              backgroundColor: "transparent",
            },
          }}
          sx={{
            "& .MuiDialog-paper": {
              backgroundColor: "transparent",
              minWidth: width,
              minHeight: height,
            },
            ...style,
          }}
        >
          {children}
        </Dialog>
      </div>
    </>
  );
};

export default Alert;
