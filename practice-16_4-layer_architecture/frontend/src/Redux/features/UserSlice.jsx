import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../../services/api";

export const fetchUserData = createAsyncThunk('/fetch/user', async () => {
   return await fetchUser();
});

 const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        loading: false,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.pending, (state) => {
            state.loading = true;
            state.error = false;
            state.data = null;
        });
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUserData.rejected, (state, action) => {
            state.loading = true;
            state.error = true;
            state.data = action.payload;
        });
    }
});

export default userSlice.reducer;
