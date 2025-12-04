import React from 'react';

function Contact() {
    const glassCard = {
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '4px',
        padding: '2rem',
    };

    const command = {
        color: '#0f0',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        marginBottom: '1rem',
    };

    const output = {
        color: '#fff',
        paddingLeft: '1rem',
        marginBottom: '0.5rem',
    };

    const link = {
        color: '#fff',
        textDecoration: 'underline',
    };

    return (
        <div style={glassCard}>
            <p style={command}>$ cat contact.txt</p>

            <div style={output}>
                <p style={{ marginBottom: '1rem' }}>
                    <span style={{ color: '#888' }}>Email:</span>{' '}
                    <a href="mailto:gwbishnu@gmail.com" style={link}>gwbishnu@gmail.com</a>
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    <span style={{ color: '#888' }}>GitHub:</span>{' '}
                    <a href="https://github.com/bishnuneupane13" target="_blank" rel="noopener noreferrer" style={link}>@bishnuneupane13</a>
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    <span style={{ color: '#888' }}>Twitter:</span>{' '}
                    <a href="https://twitter.com/bishnuneupane13" target="_blank" rel="noopener noreferrer" style={link}>@bishnu</a>
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    <span style={{ color: '#888' }}>LinkedIn:</span>{' '}
                    <a href="https://linkedin.com/bishnuneupane13" target="_blank" rel="noopener noreferrer" style={link}>Bishnu Neupane</a>
                </p>
            </div>

            <p style={{ ...command, marginTop: '2rem' }}>$ echo "Let's connect!"</p>
            <p style={{ ...output, color: '#aaa' }}>
                Feel free to reach out for collaborations, bug bounty tips, or just to say hi!
            </p>
        </div>
    );
}

export default Contact;
