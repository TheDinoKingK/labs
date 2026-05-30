import { Button, styled, type ButtonProps } from "@mui/material";
import type { LinkProps } from "react-router";


type StyledbuttonProps = ButtonProps & Partial<LinkProps>

const StyledButton = styled(Button)<StyledbuttonProps>(({ theme }) => ({
  '&.Mui-disabled': {
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.text.disabled
  }
}))

export default StyledButton;