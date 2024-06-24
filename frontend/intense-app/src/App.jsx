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

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/all-articles" element={<AllArticles />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/sign_up" element={<SignUp />}/>
                <Route path="/favorites-articles" element={<FavoritesArticles />}/>
                <Route path="/search" element={<Search />}/>
                <Route path="/search-results" element={<SearchResult />}/>
            </Routes>
        </>
    )
}

export default App;
