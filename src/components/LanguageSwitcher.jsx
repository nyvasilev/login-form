import { useStore } from "../store";
import { MainButton } from "../components";
import usFlag from "../assets/icons/us.svg";
import bgFlag from "../assets/icons/bg.svg";
import "./styles.css";

export const LanguageSwitcher = () => {
  const { language, changeLanguage } = useStore();

  return (
    <div className="languageContainer">
      <MainButton
        size="small"
        onClick={() => changeLanguage("en")}
        disabled={language === "en"}
      >
        <img src={usFlag} alt="US flag" />
        EN
      </MainButton>
      <MainButton
        size="small"
        onClick={() => changeLanguage("bg")}
        disabled={language === "bg"}
      >
        <img src={bgFlag} alt="BG flag" />
        БГ
      </MainButton>
    </div>
  );
};
