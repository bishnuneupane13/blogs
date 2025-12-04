import React from 'react';
import { Link } from 'react-router-dom';

const writeups = [
    {
        date: '2025-11-20',
        title: 'IDOR Vulnerability Discovery',
        slug: 'idor-discovery',
        severity: 'High',
        target: 'Private Program',
    },
];

function Writeups() {
    const glassCard = {
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '4px',
        padding: '1.2rem',
        marginBottom: '0.8rem',
    };

    const command = {
        color: '#0f0',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        marginBottom: '1rem',
    };

    return (
        <div>
            <p style={command}>$ ls ./writeups/</p>

            <ul style={{ listStyle: 'none', padding: 0, paddingLeft: '1rem' }}>
                {writeups.map((writeup) => (
                    <li key={writeup.slug}>
                        <Link to={`/writeup/${writeup.slug}`} style={{ textDecoration: 'none' }}>
                            <div style={glassCard}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    <div>
                                        <p style={{ color: '#fff', fontWeight: '600' }}>{writeup.title}</p>
                                        <p style={{ color: '#666', fontSize: '0.85rem' }}>{writeup.target}</p>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <span style={{ color: '#f90', fontWeight: 'bold' }}>[{writeup.severity}]</span>
                                        <p style={{ color: '#555', fontSize: '0.8rem' }}>{writeup.date}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Writeups;
