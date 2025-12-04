import React from 'react';
import { useParams, Link } from 'react-router-dom';

function WriteupDetail() {
    const { slug } = useParams();

    const glassCard = {
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '4px',
        padding: '2rem',
        marginBottom: '1.5rem',
    };

    const sectionTitle = {
        color: '#0f0',
        fontWeight: 'bold',
        marginBottom: '0.8rem',
        borderBottom: '1px dashed #333',
        paddingBottom: '0.5rem',
    };

    return (
        <div>
            {/* Title */}
            <div style={glassCard}>
                <h1 style={{ color: '#fff', fontSize: '1.5rem' }}>IDOR Vulnerability Discovery</h1>
            </div>

            {/* Summary */}
            <div style={glassCard}>
                <p style={sectionTitle}>## Summary</p>
            </div>

            {/* Steps */}
            <div style={glassCard}>
                <p style={sectionTitle}>## Steps to Reproduce</p>
            </div>

            {/* Impact */}
            <div style={glassCard}>
                <p style={sectionTitle}>## Impact</p>
            </div>

            {/* Screenshots */}
            <div style={glassCard}>
                <p style={sectionTitle}>## Screenshots</p>
            </div>

            {/* References */}
            <div style={glassCard}>
                <p style={sectionTitle}>## References</p>
            </div>

            {/* Timeline */}
            <div style={glassCard}>
                <p style={sectionTitle}>## Timeline</p>
            </div>

            {/* Back */}
            <div style={{ marginTop: '1rem' }}>
                <Link to="/writeups" style={{ color: '#0f0', fontWeight: 'bold' }}>$ cd ../writeups</Link>
            </div>
        </div>
    );
}

export default WriteupDetail;
