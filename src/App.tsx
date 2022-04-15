import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main, Header, ATP, Contact } from "./components";

interface IThemeContext {
  theme: string;
  toggleDark: (param: string) => void;
  lightBackgroundColor: string;
  lightColor: string;
  darkBackgroundColor: string;
  darkColor: string;
}

const defaultState = {
  theme: "light",
  toggleDark: () => {},
  lightBackgroundColor: "hsl(0, 0%, 100%)",
  lightColor: "hsl(0, 0%, 10%)",
  darkBackgroundColor: "hsl(0, 0%, 20%)",
  darkColor: "hsl(0, 0%, 85%)",
};

export const UserContext = React.createContext<IThemeContext>(defaultState);

const App = () => {
  const [theme, setTheme] = React.useState<string>(
    localStorage.getItem("theme") || defaultState.theme
  );

  const toggleDark = (themeProp: string) => {
    setTheme(themeProp);
    localStorage.setItem("theme", themeProp);
  };

  React.useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", theme);
    }
  });

  return (
    <UserContext.Provider
      value={{
        theme,
        toggleDark,
        lightBackgroundColor: defaultState.lightBackgroundColor,
        lightColor: defaultState.lightColor,
        darkBackgroundColor: defaultState.darkBackgroundColor,
        darkColor: defaultState.darkColor,
      }}
    >
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <Header />
                  <Main />
                </React.Fragment>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/atp" element={<ATP />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
};

App.displayName = "App";

export default App;
