import { useTranslation } from "react-i18next";
import { MainButton } from "../../components";
import { useStore } from "../../store";
import mail from "../../assets/icons/mail.svg";
import "./styles.css";

export const ForgotPassword = () => {
  const { t } = useTranslation();
  const { logout } = useStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1 className="forgotPassword-title">{t("passwordHasBeenSent")}</h1>
      <img src={mail} alt="password sent" className="forgotPassword-icon" />
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
