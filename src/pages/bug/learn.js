import React from "react";
import Navbar from "../../components/navbar.js";
import Footer from "../../components/Footer.js";
import "./bug.css";

function BugBountyLearning() {
    // Array of learning topics, each with title, description, and resources
    const learningTopics = [
        {
            title: "Subdomain Enumeration",
            icon: "🔍",
            description: "Finding all subdomains of a target domain to expand the attack surface and discover hidden endpoints.",
            resources: [
                {
                    name: "Subfinder",
                    url: "https://github.com/projectdiscovery/subfinder",
                    icon: "🛠️",
                    description: "Fast passive subdomain enumeration tool"
                },
                {
                    name: "Amass",
                    url: "https://github.com/OWASP/Amass",
                    icon: "🔎",
                    description: "In-depth attack surface mapping and asset discovery"
                },
                {
                    name: "Sublist3r",
                    url: "https://github.com/aboul3la/Sublist3r",
                    icon: "📋",
                    description: "Python tool for enumerating subdomains using OSINT"
                },
                {
                    name: "Assetfinder",
                    url: "https://github.com/tomnomnom/assetfinder",
                    icon: "🎯",
                    description: "Find domains and subdomains related to a given domain"
                }
            ]

        }
    ];

    return (
        <div className="App">
            <Navbar />

            <div className="page-content">
                <div className="section-header">
                    <h1>🎓 Learning Bug Bounty</h1>
                    <p>My journey learning how to find bugs and vulnerabilities in web applications.</p>
                </div>

                {/* Render each topic as a separate section */}
                {learningTopics.map((topic, topicIndex) => (
                    <div className="bugs-subsection" key={topicIndex}>
                        <div className="subsection-title">
                            <span className="subsection-icon">{topic.icon}</span>
                            <h2>{topic.title}</h2>
                        </div>
                        <p className="subsection-desc">{topic.description}</p>

                        <div className="resources-grid">
                            {topic.resources.map((resource, index) => (
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
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default BugBountyLearning;
