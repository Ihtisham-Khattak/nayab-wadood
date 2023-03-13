import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  darkmode: false,
};

const themeSlice = new createSlice({
  
  name: "theme",
  initialState,

  reducers: {
    setDarkMode: (state) => {
        state.darkmode = !state.darkmode;
    },
  },
});

export const asyncToggleTheme = () => (dispatch) => {

  const isDarkMode = !!JSON.parse(localStorage.getItem("darkMode"));
  localStorage.setItem("darkMode", !isDarkMode);
  dispatch(setDarkMode());
};

export const {setDarkMode, setDefualtMode} = themeSlice.actions;
export default themeSlice.reducer;
