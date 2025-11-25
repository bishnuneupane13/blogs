import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="navbar">
            <Link to="/" className="logo-link">
                <h1 className="title">Blogs</h1>
            </Link>

            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/bugs" className="nav-link">Bugs</Link>
                <Link to="/life" className="nav-link">Life</Link>
                <a href="https://github.com/bishnuneupane13" className="nav-link">GitHub</a>
            </div>

            <div className="time-display">
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
        </div>
    )
}

export default Navbar;
