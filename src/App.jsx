import React, { useMemo, useState, useEffect } from "react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CompareArea from "./components/CompareArea";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [compareList, setCompareList] = useState([]);

  // Load from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("compareList");
    if (saved) {
      setCompareList(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever compareProducts changes
  useEffect(() => {
    localStorage.setItem("compareList", JSON.stringify(compareList));
  }, [compareList]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: darkMode ? "#90caf9" : "#1976d2",
          },
        },
        typography: {
          fontFamily: "Roboto, sans-serif",
        },
      }),
    [darkMode]
  );

  const handleToggleCompare = (product) => {
    setCompareList((prev) => {
      if (prev.some((p) => p.id === product.id)) {
        return prev.filter((p) => p.id !== product.id);
      } else if (prev.length < 3) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const handleClearAll = () => setCompareList([]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode(!darkMode)}
      />

      {/* Product List */}
      <ProductList
        products={compareList}
        compareList={compareList}
        onToggleCompare={handleToggleCompare}
      />

      {/* Compare Area */}
      {compareList.length >= 2 && (
        <CompareArea
          products={compareList}
          onToggleCompare={handleToggleCompare}
          onClearAll={handleClearAll}
        />
      )}
    </ThemeProvider>
  );
}
