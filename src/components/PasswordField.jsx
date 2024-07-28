import { useState } from "react";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { validatePassword } from "../utils/validations";

export const PasswordInput = (props) => {
  const { onChange, id } = props;
  const { t } = useTranslation();
  const [passwordError, setPasswordError] = useState(null);

  const handleOnChange = (e) => {
    const target = e.target;

    setPasswordError(validatePassword(target.value));
    onChange(target, target.value);
  };

  return (
    <TextField
      error={!!passwordError?.length ? true : false}
      required
      id={id}
      placeholder={t("typePassword")}
      label={`Password`}
      type={`password`}
      helperText={!!passwordError?.length && t(passwordError)}
      onChange={handleOnChange}
    />
  );
};
