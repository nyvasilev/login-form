import { Button } from "@mui/material";

export const MainButton = (props) => {
  const config = {
    type: props.type || "button",
    variant: props.variant || "contained",
    onClick: props.onClick,
    disabled: props.disabled || false,
    link: props.link || false,
    color: props.color || "success",
    size: props.size || "medium",
    icon: props.icon || null,
  };

  return <Button {...config}>{props.children}</Button>;
};
