import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import { MainButton, EmailInput, PasswordInput } from "../../components";
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Home = () => {
  const { t } = useTranslation();
  const { login, setUser, user } = useStore();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const isSuccess = await login({ ...user });

    return navigate(isSuccess ? "/loginSuccess" : "/loginFailed");
  };

  const handleOnChange = (target, value) => {
    setUser((prev) => ({ ...prev, [target.id]: value }));
  };

  const handleForgotPassword = () => {
    setUser({ email: "", password: "" });
    navigate("/forgotPassword");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">{t("welcome")}</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        autoComplete="off"
      >
        <div className="home-inputs">
          <EmailInput id="email" onChange={handleOnChange} />
          <PasswordInput id="password" onChange={handleOnChange} />
        </div>
      </Box>
      <div className="home-actions-container">
        <MainButton size="large" variant="contained" onClick={handleLogin}>
          {t("login")}
        </MainButton>
        <MainButton
          size="small"
          variant="text"
          color="info"
          onClick={handleForgotPassword}
        >
          {t("forgotPassword")}
        </MainButton>
      </div>
    </div>
  );
};
