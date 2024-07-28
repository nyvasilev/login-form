import { useState } from "react";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { validateEmail } from "../utils/validations";

export const EmailInput = (props) => {
  const { onChange, id } = props;
  const { t } = useTranslation();
  const [emailError, setEmailError] = useState(null);

  const handleOnChange = (e) => {
    const target = e.target;

    setEmailError(validateEmail(target.value));
    onChange(target, target.value);
  };

  return (
    <TextField
      error={!!emailError?.length ? true : false}
      required
      id={id}
      placeholder={t("typeEmail")}
      label={`Email`}
      type={`Email`}
      helperText={!!emailError?.length && t(emailError)}
      onChange={handleOnChange}
    />
  );
};
