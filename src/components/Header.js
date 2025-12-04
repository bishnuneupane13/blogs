import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const navLink = {
        textDecoration: 'none',
        color: '#888',
        transition: 'color 0.2s',
    };

    return (
        <header style={{ marginBottom: '2rem' }}>
            <div style={{ borderBottom: '1px dashed #333', marginBottom: '0.5rem' }}></div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                {/* Brand */}
                <Link to="/" style={{ textDecoration: 'none', color: '#0f0', fontWeight: 'bold', fontSize: '1.1rem' }}>
                    ~/bishnu@null:~$
                </Link>

                {/* Nav Links */}
                <nav style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
                    <Link to="/" style={navLink}>/home</Link>
                    <a href="https://bishnuneupane13.github.io/" style={{ textDecoration: 'none', color: '#888' }}>/about</a>
                    <Link to="/writeups" style={navLink}>/writeups</Link>
                    <Link to="/contact" style={navLink}>/contact</Link>
                </nav>

                {/* Social */}
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                    <a href="https://github.com/bishnuneupane13" target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'none' }}>[github]</a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'none' }}>[twitter]</a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'none' }}>[linkedin]</a>
                </div>
            </div>

            <div style={{ borderBottom: '1px dashed #333', marginTop: '0.5rem' }}></div>
        </header>
    );
}

export default Header;
