import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main, Header, ATP, Contact } from "./components";

interface IThemeContext {
  isLightTheme: boolean;
  toggleDark: () => void;
  lightBackgroundColor: string;
  lightColor: string;
  darkBackgroundColor: string;
  darkColor: string;
}

const defaultState = {
  isLightTheme: true,
  toggleDark: () => {},
  lightBackgroundColor: "hsl(0, 0%, 100%)",
  lightColor: "hsl(0, 0%, 10%)",
  darkBackgroundColor: "hsl(0, 0%, 20%)",
  darkColor: "hsl(0, 0%, 85%)",
};

export const UserContext = React.createContext<IThemeContext>(defaultState);

const App = () => {
  const [lightTheme, setLightTheme] = React.useState<boolean>(
    defaultState.isLightTheme
  );

  const toggleDark = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <UserContext.Provider
      value={{
        isLightTheme: lightTheme,
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
