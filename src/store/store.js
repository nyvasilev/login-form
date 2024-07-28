import { createContext, useContext, useState } from "react";
import i18n from "i18next";
import { userLogin } from "../services";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Default language is 'English'
  const [language, setLanguage] = useState("en");

  const login = async (userData) => {
    const { email, password } = userData;

    const response = await userLogin();

    // check if the user exists in the database
    const isValidUser =
      response.findIndex(
        (el) => el.email === email && el.password === password
      ) > -1;

    setUser(isValidUser ? userData : { email: null, password: null });
    return isValidUser;
  };

  const logout = () => {
    setUser(null);
  };

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        login,
        logout,
        language,
        changeLanguage,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useStore = () => useContext(GlobalContext);
