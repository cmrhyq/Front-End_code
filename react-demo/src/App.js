import {Routes, Route, Link} from 'react-router-dom';
import HomePage from "./components/navigate/HomePage";
import AboutPage from "./components/navigate/AboutPage";
import "./App.css"
import ContentPage from "./components/navigate/ContentPage";


function App() {
    return (
        <div>
            <nav className="nav">
                <Link to="/" className="nav-item">Homepage</Link>
                <Link to="/content" className="nav-item">Content</Link>
                <Link to="/about" className="nav-item">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/content" element={<ContentPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </div>
    )
}

export default App;
