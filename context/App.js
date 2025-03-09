import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import styled, { ThemeProvider as StyledThemeProvider } from "styled-components";

const lightTheme = {
  background: "#f9f9f9",
  text: "#000",
};

const darkTheme = {
  background: "#1e1e1e",
  text: "#fff",
};

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

const DarkModeToggle = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background: #ffb400;
  border: none;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const App = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <DarkModeToggle onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode ☀" : "Dark Mode 🌙"}
        </DarkModeToggle>
        <h1>Demon Panel</h1>
      </Container>
    </StyledThemeProvider>
  );
};

const RootApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default RootApp;
