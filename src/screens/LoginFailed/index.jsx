import { useTranslation } from "react-i18next";
import { MainButton } from "../../components";
import { useStore } from "../../store";
import thumb from "../../assets/icons/thumb.svg";
import "./styles.css";

export const LoginFailed = () => {
  const { t } = useTranslation();
  const { logout } = useStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1 className="failedLogin-title">{t("loginFailed")}</h1>
      <img src={thumb} alt="failed login" className="failedLogin-icon" />
      <MainButton
        size="large"
        color="info"
        variant="contained"
        onClick={handleLogout}
      >
        {t("back")}
      </MainButton>
    </div>
  );
};
