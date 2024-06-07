import "./App.css";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home";
import AllArticles from "./pages/AllArticles";
import Login from "./pages/Login";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/all-articles" element={<AllArticles />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </>
    )
}

export default App;
