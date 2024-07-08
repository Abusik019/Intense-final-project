import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import Cookies from 'js-cookie';

export const API_URL = "https://2acc-185-244-21-96.ngrok-free.app/api";

const initialState = {
    list: [],
    top_three_list: [],
    loading: false,
    error: null,
};

// middleware (thunk)
export const getArticles = createAsyncThunk("articles/getArticles", async () => {
    const response = await axios.get(`${API_URL}/v1/posts/`);

    if (response.status !== 200) {
        throw new Error("Ошибка при получении постов");
    }

    return await response.data;
});

export const getToken = createAsyncThunk("articles/getToken", async (user) => {

    const response = await axios.post(`${API_URL}/token/`, {
        username: user.username,
        password: user.password
    });

    if (response.status !== 200) {
        throw new Error("Ошибка при получении токена");
    }

    const { data } = response;
    const token = data.access; 

    Cookies.set('token', token);

    return token; 
})

export const getFavoriteArticles = createAsyncThunk("articles/getFavoriteArticles", async () => {
    const response = await axios.get(`${API_URL}/v1/posts/my_favorite/`, {
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
        }
    });

    if (response.status !== 200) {
        throw "Ошибка при получении постов";
    }

    return await response.data;
});

export const getTopThreeArticles = createAsyncThunk("articles/getTopThreeArticles", async () => {
    const response = await axios.get(`${API_URL}/v1/posts/top3/`);

    if (response.status !== 200) {
        throw "Ошибка при получении постов";
    }

    return await response.data;
});


const articlesSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
        setArticles: (state, action) => {
            state.list = action.payload;
        },
        setTopThreeArticles: (state, action) => {
            state.top_three_list = action.payload;
        }
    },
    extraReducers: (builder) => {
        // getArticles
        builder.addCase(getArticles.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getArticles.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
            state.error = null;
        });

        builder.addCase(getArticles.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // getFavoriteArticles
        builder.addCase(getFavoriteArticles.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getFavoriteArticles.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
            state.error = null;
        });

        builder.addCase(getFavoriteArticles.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
        
        // getTopThreeArticles
        builder.addCase(getTopThreeArticles.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getTopThreeArticles.fulfilled, (state, action) => {
            state.top_three_list = action.payload;
            state.loading = false;
            state.error = null;
        });

        builder.addCase(getTopThreeArticles.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
        
        // getToken
        builder.addCase(getToken.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getToken.fulfilled, (state) => {
            state.loading = false;
            state.error = null;
        });

        builder.addCase(getToken.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    },
});

export const { setArticles } = articlesSlice.actions;

export default articlesSlice.reducer;