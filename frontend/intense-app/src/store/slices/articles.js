import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const API_URL = "https://6582-185-244-21-96.ngrok-free.app/api";

const initialState = {
    list: [],
    loading: false,
    error: null,
};

// middleware (thunk)
export const getArticles = createAsyncThunk("articles/getArticles", async () => {
    const response = await fetch(`${API_URL}/v1/posts/`);

    if (!response.ok) {
        throw "Ошибка при получении постов";
    }

    return await response.json();
});

// export const getFavoriteArticles = createAsyncThunk("articles/getFavoriteArticles", async () => {
//     const response = await fetch(`${API_URL}/posts/my_favorite/`);

//     if (!response.ok) {
//         throw "Ошибка при получении постов";
//     }

//     return await response.json();
// });

export const getToken = createAsyncThunk("articles/getToken", async (user) => {

    const response = await axios.post(`${API_URL}/token/`, {
        username: user.username,
        password: user.password
    });

    if (!response.ok) {
        throw "Ошибка при получении токена";
    }

    return await response.json();
})



// export const deleteArticles = createAsyncThunk("articles/deleteArticles", async (id) => {
//     const response = await fetch(`${API_URL}/articles/${id}`, {
//         method: "DELETE",
//     });

//     if (!response.ok) {
//         throw "Ошибка при удалении поста";
//     }

//     return await response.json();
// });

// export const addNewArticle = createAsyncThunk(
//     "articles/addNewArticle",
//     async (newArticles) => {
//         const response = await fetch(`${API_URL}/articles`, {
//             method: "POST",
//             body: JSON.stringify(newArticles),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });

//         if (!response.ok) {
//             throw "Ошибка при создании поста";
//         }

//         return await response.json();
//     }
// );

// export const editArticle = createAsyncThunk(
//     "articles/editArticle",
//     async (editedArticle) => {
//         const response = await fetch(`${API_URL}/articles/${editedArticle.id}`, {
//             method: "PUT",
//             body: JSON.stringify(editedArticle),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });

//         if (!response.ok) {
//             throw "Ошибка при редактировании поста";
//         }

//         return await response.json();
//     }
// );

// export const getArticleById = createAsyncThunk(
//     "articles/getArticleById",
//     async (articleId) => {
//         const response = await fetch(`${API_URL}/articles/${articleId}`);

//         if (!response.ok) {
//             throw "Ошибка при получении поста";
//         }

//         return await response.json();
//     }
// );

const articlesSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
        setArticles: (state, action) => {
            state.list = action.payload;
        },
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
        // builder.addCase(getFavoriteArticles.pending, (state) => {
        //     state.loading = true;
        // });

        // builder.addCase(getFavoriteArticles.fulfilled, (state, action) => {
        //     state.list = action.payload;
        //     state.loading = false;
        //     state.error = null;
        // });

        // builder.addCase(getFavoriteArticles.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.error;
        // });

        // // deleteArticles
        // builder.addCase(deleteArticles.pending, (state) => {
        //     state.loading = true;
        // });

        // builder.addCase(deleteArticles.fulfilled, (state, action) => {
        //     const deletedArticleId = action.payload.id;

        //     state.list = state.list.filter((article) => {
        //         return article.id !== deletedArticleId;
        //     });

        //     state.loading = false;
        //     state.error = null;
        // });

        // builder.addCase(deleteArticles.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.error;
        // });

        // // addNewArticle
        // builder.addCase(addNewArticle.pending, (state) => {
        //     state.loading = true;
        // });

        // builder.addCase(addNewArticle.fulfilled, (state, action) => {
        //     state.list.push(action.payload);

        //     state.loading = false;
        //     state.error = null;
        // });

        // builder.addCase(addNewArticle.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.error;
        // });

        // // editArticle
        // builder.addCase(editArticle.pending, (state) => {
        //     state.loading = true;
        // });

        // builder.addCase(editArticle.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.error = null;

        //     const editedArticle = action.payload;

        //     state.list = state.list.map((article) => {
        //         if (article.id === editedArticle.id) {
        //             return editedArticle;
        //         }

        //         return article;
        //     });
        // });

        // builder.addCase(editArticle.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.error;
        // });

        // // getArticleById
        // builder.addCase(getArticleById.pending, (state) => {
        //     state.loading = true;
        // });

        // builder.addCase(getArticleById.fulfilled, (state) => {
        //     state.loading = false;
        //     state.error = null;
        // });

        // builder.addCase(getArticleById.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.error;
        // });
        
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