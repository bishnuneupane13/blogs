import React from 'react';

function About() {
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

    return (
        <div style={glassCard}>
            <p style={command}>$ cat about.txt</p>

            <div style={output}>
                <p style={{ marginBottom: '1rem' }}>
                    <span style={{ color: '#888' }}>Name:</span> Bishnu Neupane
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    <span style={{ color: '#888' }}>Role:</span> Bug Bounty Hunter | Security Researcher
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    <span style={{ color: '#888' }}>Location:</span> Nepal
                </p>
                <p style={{ marginBottom: '1.5rem', color: '#aaa', lineHeight: '1.8' }}>
                    I'm passionate about cybersecurity, finding vulnerabilities, and making the web safer.
                    I specialize in web application security, bug hunting, and penetration testing.
                </p>
            </div>

            <p style={command}>$ cat skills.txt</p>
            <ul style={{ ...output, listStyle: 'none', color: '#aaa' }}>
                <li>→ Web Application Security</li>
                <li>→ Bug Bounty Hunting</li>
                <li>→ Penetration Testing</li>
                <li>→ OWASP Top 10</li>
                <li>→ Python / JavaScript</li>
            </ul>
        </div>
    );
}

export default About;
