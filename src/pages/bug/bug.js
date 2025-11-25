import React from "react";
import Navbar from "../../components/navbar.js";
import Footer from "../../components/Footer.js";
import "./bug.css";

function FoundBugs() {
    // Section 1: My Bug Discoveries
    const section1 = {
        title: "My Bug Discoveries",
        description: "Bugs and security vulnerabilities I've found and reported through bug bounty programs.",
        resources: [
            {
                name: "Coming Soon!",
                icon: "🎯",
                description: "I'll be documenting my bug bounty findings here. Stay tuned for updates on vulnerabilities I've discovered and reported.",
                isEmpty: true
            }
        ]
    };

    // Section 2: Useful Resources
    const section2 = {
        title: "Useful Resources",
        description: "Essential resources and platforms for learning and practicing bug bounty hunting.",
        resources: [
            {
                name: "PortSwigger Web Security Academy",
                url: "https://portswigger.net/web-security",
                icon: "📖",
                description: "Free online training for web application security"
            },
            {
                name: "HackerOne",
                url: "https://www.hackerone.com/",
                icon: "🎯",
                description: "Bug bounty platform and community"
            },
            {
                name: "OWASP Top 10",
                url: "https://owasp.org/www-project-top-ten/",
                icon: "🔒",
                description: "Top 10 web application security risks"
            },
            {
                name: "Bug Bounty Bootcamp",
                url: "https://nostarch.com/bug-bounty-bootcamp",
                icon: "📚",
                description: "Comprehensive guide to finding security bugs"
            }
        ]
    };

    return (
        <div className="App">
            <Navbar />

            <div className="page-content">
                <div className="section-header">
                    <h1>🐛 Found Bugs</h1>
                    <p>My bug bounty hunting journey - discoveries, learnings, and resources.</p>
                </div>

                {/* Section 1: My Bug Discoveries */}
                <div className="bugs-subsection">
                    <div className="subsection-title">
                        <span className="subsection-icon">🔍</span>
                        <h2>{section1.title}</h2>
                    </div>
                    <p className="subsection-desc">{section1.description}</p>

                    {section1.resources[0].isEmpty ? (
                        <div className="empty-state">
                            <div className="empty-icon">{section1.resources[0].icon}</div>
                            <h3>{section1.resources[0].name}</h3>
                            <p>{section1.resources[0].description}</p>
                        </div>
                    ) : (
                        <div className="resources-grid">
                            {section1.resources.map((item, index) => (
                                <div className="resource-card" key={index}>
                                    <div className="resource-icon">{item.icon}</div>
                                    <div className="resource-content">
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Section 2: Useful Resources */}
                <div className="bugs-subsection">
                    <div className="subsection-title">
                        <span className="subsection-icon">�</span>
                        <h2>{section2.title}</h2>
                    </div>
                    <p className="subsection-desc">{section2.description}</p>

                    <div className="resources-grid">
                        {section2.resources.map((resource, index) => (
                            <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resource-card"
                                key={index}
                            >
                                <div className="resource-icon">{resource.icon}</div>
                                <div className="resource-content">
                                    <h3>{resource.name}</h3>
                                    <p>{resource.description}</p>
                                </div>
                                <div className="resource-arrow">→</div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default FoundBugs;
