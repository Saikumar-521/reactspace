import React from "react";
import useTheme from "./useTheme";

const Toggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="themeSwitch"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <label className="form-check-label" htmlFor="themeSwitch">
        {theme === "light" ? "Dark Mode 🌙" : " Light Mode ☀️"}
      </label>
    </div>
  );
};

export default Toggle;
