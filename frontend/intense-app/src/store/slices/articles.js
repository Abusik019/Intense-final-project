import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import Cookies from 'js-cookie';

export const API_URL = "http://127.0.0.1:8000/api";

const initialState = {
    list: [],
    top_three_list: [],
    my_info: {},
    categories: [],
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

export const getMyInfo = createAsyncThunk("articles/getMyInfo", async () => {
    const response = await axios.get(`${API_URL}/v1/users/me/`, {
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
        }
    });

    if (response.status !== 200) {
        throw "Ошибка при получении данных о себе";
    }

    return await response.data;
});

export const getLikedArticles = createAsyncThunk("articles/getLikedArticles", async () => {
    const response = await axios.get(`${API_URL}/v1/posts/my_liked/`, {
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
        }
    });

    if (response.status !== 200) {
        throw "Ошибка при получении постов";
    }

    return await response.data;
});

export const createArticle = createAsyncThunk('articles/createArticle', async (article) => {
    const formData = new FormData();

    formData.append('title', article.title);
    formData.append('desc', article.desc);
    formData.append('time_to_read', article.time_to_read);
    formData.append('category_id', article.category_id);
    formData.append('image', article.image);

    const response = await axios.post(`${API_URL}/v1/posts/`, formData, {
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
        }
    });

    if (response.status !== 200) {
        throw "Ошибка при добавлении поста";
    }

    return await response.data;
})

export const getCategories = createAsyncThunk("articles/getCategories", async () => {
    const response = await axios.get(`${API_URL}/v1/posts/get_categories`);

    if (response.status !== 200) {
        throw "Ошибка при получении категорий";
    }

    return await response.data;
});

export const getMyPosts = createAsyncThunk("articles/getMyPosts", async () => {
    const response = await axios.get(`${API_URL}/v1/posts/my_posts/`, {
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
        }
    });

    if (response.status !== 200) {
        throw "Ошибка при получении постов";
    }

    return await response.data;
});

export const getArticle = createAsyncThunk("articles/getArticle", async (id) => {
    const response = await axios.get(`${API_URL}/v1/posts/${id}`);

    if (response.status !== 200) {
        throw "Ошибка при получении поста";
    }

    return await response.data;
});

export const changeArticle = createAsyncThunk('articles/changeArticle', async ({ article, articleID }) => {
    const formData = new FormData();

    formData.append('title', article.title);
    formData.append('desc', article.desc);
    formData.append('time_to_read', article.time[0]);
    formData.append('author', article.author);
    formData.append('category_id', JSON.stringify(article.category_id));

    if(article.image){
        formData.append('image', article.image);
    }

    const response = await axios.patch(`${API_URL}/v1/posts/${articleID}/`, formData, {
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`,
        },
    });

    if (response.status !== 200) {
        throw new Error("Ошибка при изменении поста");
    }

    return response.data;
});

export const addToFavoriteArticle = createAsyncThunk("articles/addToFavoriteArticle", async (id) => {
    const response = await axios.post(`${API_URL}/v1/posts/${id}/favorite/`, {}, {
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
        }
    });

    if (response.status !== 200) {
        throw "Ошибка при добавлении поста в избранные";
    }

    return await response.data;
});

export const addToLikedArticle = createAsyncThunk("articles/addToLikedArticle", async (id) => {
    const response = await axios.post(`${API_URL}/v1/posts/${id}/like/`, {}, {
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
        }
    });

    if (response.status !== 200) {
        throw "Ошибка при добавлении поста в лайкнутые";
    }

    return await response.data;
});

export const deleteArticle = createAsyncThunk("articles/deleteArticle", async (id) => {
    const response = await axios.delete(`${API_URL}/v1/posts/${id}/`, {
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
        }
    });

    if (response.status !== 200) {
        throw "Ошибка при удалении поста";
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

        // getMyInfo
        builder.addCase(getMyInfo.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getMyInfo.fulfilled, (state, action) => {
            state.my_info = action.payload;

            state.loading = false;
            state.error = null;
        });

        builder.addCase(getMyInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // getLikedArticles
        builder.addCase(getLikedArticles.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getLikedArticles.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
            state.error = null;
        });

        builder.addCase(getLikedArticles.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // createArticle
        builder.addCase(createArticle.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(createArticle.fulfilled, (state) => {
            state.loading = false;
            state.error = null;
        });

        builder.addCase(createArticle.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // getCategories
        builder.addCase(getCategories.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload;

            state.loading = false;
            state.error = null;
        });

        builder.addCase(getCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // getMyPosts
        builder.addCase(getMyPosts.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getMyPosts.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
            state.error = null;
        });

        builder.addCase(getMyPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // getArticle
        builder.addCase(getArticle.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getArticle.fulfilled, (state, action) => {
            state.list = action.payload;

            state.loading = false;
            state.error = null;
        });

        builder.addCase(getArticle.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // changeArticle
        builder.addCase(changeArticle.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(changeArticle.fulfilled, (state) => {
            state.loading = false;
            state.error = null;
        });

        builder.addCase(changeArticle.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // addToFavoriteArticle
        builder.addCase(addToFavoriteArticle.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(addToFavoriteArticle.fulfilled, (state) => {
            state.loading = false;
            state.error = null;
        });

        builder.addCase(addToFavoriteArticle.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // addToLikedArticle
        builder.addCase(addToLikedArticle.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(addToLikedArticle.fulfilled, (state) => {
            state.loading = false;
            state.error = null;
        });

        builder.addCase(addToLikedArticle.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        // deleteArticle
        builder.addCase(deleteArticle.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(deleteArticle.fulfilled, (state) => {
            state.loading = false;
            state.error = null;
        });

        builder.addCase(deleteArticle.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    },
});

export const { setArticles } = articlesSlice.actions;

export default articlesSlice.reducer;