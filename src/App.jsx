import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/new post/NewPost.jsx";
import Overview from "./pages/overview/Overview.jsx";
import NotFound from "./pages/notFound/notFound.jsx";
import Navigation from "./components/navigation/Navigation.jsx";

function App() {
    return (
        <>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new-post" element={<NewPost/>}/>
            <Route path="/overview" element={<Overview/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </>
    )
}

export default App
