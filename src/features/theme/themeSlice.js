import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    dark:false,
    light:true,
}
const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        themeToogler:(state,action)=>{
                // Toggle between dark and light themes
                console.log(state)
            state.dark = !state.dark;
            state.light = !state.dark; // Inverse of state.dark
        }
    }
})
export const{themeToogler}=themeSlice.actions;
export default themeSlice.reducer;