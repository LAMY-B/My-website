import { useTheme, ThemeContext } from "./ThemeContext";

function ThemeButton() {
  const { theme, setTheme } = useTheme(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Current Theme: {theme}
    </button>
  );
}

export default ThemeButton;
