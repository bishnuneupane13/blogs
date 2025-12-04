import React from 'react';

function Footer() {
    return (
        <footer style={{
            marginTop: 'auto',
            paddingTop: '2rem',
            borderTop: '1px dashed #333',
            textAlign: 'center',
            color: '#555',
            fontSize: '0.9rem',
        }}>
            <p>© {new Date().getFullYear()} Bishnu Neupane</p>
        </footer>
    );
}

export default Footer;
