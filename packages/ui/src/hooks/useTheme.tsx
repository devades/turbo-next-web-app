"use client";
import {
  useContext,
  useState,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";
import { ThemeType } from "../_interfaces/theme.type";

export interface ThemeState {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

// create a context for authentication
const ThemeContext = createContext<ThemeState>({
  theme: "dark",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<ThemeType>("dark");

  const value = {
    theme,
    setTheme,
  };

  // use a provider to pass down the value
  return (
    <ThemeContext.Provider value={value}>
      {/* Do not add loading && ... here as it breaks SSR */}
      {children}
    </ThemeContext.Provider>
  );
};

// export the useTheme hook
export const useTheme = () => {
  return useContext(ThemeContext);
};
