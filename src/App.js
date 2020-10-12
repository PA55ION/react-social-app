import React from "react";
import Home from "./pages/Home/Home";
import UserDetails from "./pages/UserDetails/UserDetail";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useDarkMode } from "./components/DarkMode/useDarkMode";
import { GlobalStyles } from "./components/DarkMode/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/DarkMode/Theme";
import Header from "./components/Header/Header";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    // use theme provider from styled-component for dark theme 
    <Router>
    <ThemeProvider theme={themeMode}> 
      <GlobalStyles />
      <Header theme={theme} toggleTheme={themeToggler} />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/:userId" component={UserDetails} />
        </Switch>
     
      </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;
