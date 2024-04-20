import React from "react";
import { ThemeProvider } from "./context/Theme";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual theme change

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <h1 className="p-4 bg-pink-600 text-3xl">Chai </h1>
    </ThemeProvider>
  );
};

export default App;
