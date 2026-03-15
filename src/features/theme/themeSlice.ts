import { createSlice } from "@reduxjs/toolkit";
import { THEME_KEY } from "../../utils/constants";

type ThemeMode = "light" | "dark";

interface ThemeState {
  mode: ThemeMode;
}

const getInitialTheme = (): ThemeMode => {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const initialState: ThemeState = {
  mode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem(THEME_KEY, state.mode);
      document.documentElement.classList.toggle("dark", state.mode === "dark");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
