import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    email: null
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: initialValues,
    reducers: {
        reducerSetLogin: (state, action) => {
            state.email = action.payload.email
        }
    }
})

export const {reducerSetLogin} = loginSlice.actions

export default loginSlice.reducer
