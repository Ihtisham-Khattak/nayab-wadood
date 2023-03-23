import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  darkmode: JSON.parse(localStorage.getItem("theme")) || false,
};

const themeSlice = new createSlice({
  
  name: "theme",
  initialState,

  reducers: {
    setDarkMode: (state) => {
        state.darkmode = !state.darkmode;
        localStorage.setItem("theme", JSON.parse(state.darkmode))
      },
  },
});


export const {setDarkMode, setDefualtMode} = themeSlice.actions;
export default themeSlice.reducer;
