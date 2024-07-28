import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./locales/i18n";
import { Home, LoginSuccess, LoginFailed, ForgotPassword } from "./screens";
import { PrivateRoute, LanguageSwitcher } from "./components";
import { GlobalProvider } from "./store";
import { GlobalStyles } from "./assets/globalStyles";
import "./app.css";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <GlobalProvider>
        <main className="main">
          <LanguageSwitcher />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/loginSuccess"
                element={
                  <PrivateRoute>
                    <LoginSuccess />
                  </PrivateRoute>
                }
              />
              <Route
                path="/loginFailed"
                element={
                  <PrivateRoute>
                    <LoginFailed />
                  </PrivateRoute>
                }
              />
              <Route
                path="/forgotPassword"
                element={
                  <PrivateRoute>
                    <ForgotPassword />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Router>
        </main>
      </GlobalProvider>
    </>
  );
};

export default App;
