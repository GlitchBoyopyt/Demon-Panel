import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Home /></motion.div>} />
        <Route path="/dashboard" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Dashboard /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
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
    
