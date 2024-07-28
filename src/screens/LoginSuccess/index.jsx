import { useTranslation } from "react-i18next";
import { MainButton } from "../../components";
import { useStore } from "../../store";
import thumb from "../../assets/icons/thumb.svg";
import "./styles.css";

export const LoginSuccess = () => {
  const { t } = useTranslation();
  const { logout } = useStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1 className="successLogin-title">{t("loginSuccess")}</h1>
      <img src={thumb} alt="success login" className="successLogin-icon" />
      <MainButton
        size="large"
        color="info"
        variant="contained"
        onClick={handleLogout}
      >
        {t("logout")}
      </MainButton>
    </div>
  );
};
