import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
    { date: '2025-02-04', title: 'my-first-website', slug: 'my-first-website' },
];

function Home() {
    const glassCard = {
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '4px',
        padding: '1rem',
        marginBottom: '0.5rem',
    };

    const command = {
        color: '#0f0',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        marginBottom: '0.8rem',
    };

    const output = {
        color: '#fff',
        paddingLeft: '1rem',
        marginBottom: '0.3rem',
        fontSize: '1rem',
    };

    return (
        <div style={{ flex: 1 }}>
            {/* whoami */}
            <p style={command}>$ whoami</p>
            <p style={output}>Bishnu Neupane</p>
            <p style={{ ...output, color: '#aaa', marginBottom: '2rem' }}>
                Bug bounty hunter | Cybersecurity enthusiast
            </p>

            {/* intro */}
            <p style={command}>$ cat intro.txt</p>
            <p style={output}>
                Welcome to my blog. Find me on{' '}
                <a href="https://github.com/bishnuneupane13" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>.
            </p>

            {/* posts */}
            <p style={{ ...command, marginTop: '2rem' }}>$ ls ./posts/</p>

            <ul style={{ listStyle: 'none', padding: 0, paddingLeft: '1rem' }}>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link to={`/post/${post.slug}`} style={{ textDecoration: 'none' }}>
                            <div style={glassCard}>
                                <span style={{ color: '#666' }}>[{post.date}]</span>
                                <span style={{ color: '#fff', marginLeft: '1rem', fontWeight: '500' }}>
                                    $ nano ./posts/{post.title}.txt
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
