import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../data/who.json"

const whoSlice = createSlice({                      // create slice
    name: "who",                                           // name reducer
    initialState: whoArray                                 // initialize reducer's state
});

export default whoSlice.reducer;                           // export reducer
