import "./App.css";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home";
import AllArticles from "./pages/AllArticles";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import FavoritesArticles from "./pages/FavoritesArticles";
import Search from "./pages/Search";
import SearchResult from './pages/SearchResult';
import { Header } from "./components/Header";
import Article from "./pages/Article";
import CreateArticle from "./pages/CreateArticle";
import LikedArticles from "./pages/LikedArticles";
import Profile from "./pages/Profile";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/articles" element={<AllArticles />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/sign-up" element={<SignUp />}/>
                <Route path="/favorites-articles" element={<FavoritesArticles />}/>
                <Route path="/search" element={<Search />}/>
                <Route path="/search-results" element={<SearchResult />}/>
                <Route path="/articles/:id" element={<Article />}/>
                <Route path="/create-article" element={<CreateArticle />}/>
                <Route path="/liked-articles" element={<LikedArticles />}/>
                <Route path="/profile" element={<Profile />}/> 
            </Routes>
        </>
    )
}

export default App;
