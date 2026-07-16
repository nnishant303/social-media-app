import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Header = () => {
  const { theme, SetTheme } = useContext(ThemeContext);

  const handle_click = () => {
    SetTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header className="app-header d-flex justify-content-between align-items-center p-3 border-bottom">
        <h2 className="m-0">
          <i className="bi bi-messenger"></i>
        </h2>

        <button
          className={`btn ${
            theme === "dark" ? "btn-outline-light" : "btn-outline-primary"
          }`}
          onClick={handle_click}
        >
          <i
            className={`bi ${
              theme === "dark" ? "bi-sun-fill" : "bi-moon-fill"
            }`}
          ></i>
          <span className="ms-2">{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
      </header>
    </>
  );
};

export default Header;
