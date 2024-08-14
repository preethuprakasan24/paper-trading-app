import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        user: (state, action) => {
            state.push(action.payload)
        }
    }


})

export const { user } = userSlice.actions
export default userSlice.reducer