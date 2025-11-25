import { Link } from 'react-router-dom';

function ContentSection({ title, description, icon, link }) {
    return (
        <div className="content-section">
            <Link to={link} className="section-card-link">
                <div className="section-entry-card">
                    <div className="entry-icon">{icon}</div>
                    <div className="entry-content">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                    <div className="entry-arrow">&rarr;</div>
                </div>
            </Link>
        </div>
    );
}

export default ContentSection;
