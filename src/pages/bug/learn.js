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
        },
        {
            title: "Web Application Reconnaissance",
            icon: "🌐",
            description: "Gathering information about web applications, technologies, and potential entry points before testing.",
            resources: [
                {
                    name: "Burp Suite",
                    url: "https://portswigger.net/burp",
                    icon: "🔧",
                    description: "Web vulnerability scanner and proxy tool"
                },
                {
                    name: "Wappalyzer",
                    url: "https://www.wappalyzer.com/",
                    icon: "🔍",
                    description: "Identify technologies used on websites"
                },
                {
                    name: "Wayback Machine",
                    url: "https://archive.org/web/",
                    icon: "⏰",
                    description: "Find old versions and hidden endpoints"
                },
                {
                    name: "Shodan",
                    url: "https://www.shodan.io/",
                    icon: "🌍",
                    description: "Search engine for Internet-connected devices"
                }
            ]
        },
        {
            title: "XSS (Cross-Site Scripting)",
            icon: "⚡",
            description: "Learning to find and exploit XSS vulnerabilities by injecting malicious scripts into web applications.",
            resources: [
                {
                    name: "XSS Hunter",
                    url: "https://xsshunter.com/",
                    icon: "🎯",
                    description: "Platform for finding blind XSS vulnerabilities"
                },
                {
                    name: "PortSwigger XSS Labs",
                    url: "https://portswigger.net/web-security/cross-site-scripting",
                    icon: "🧪",
                    description: "Interactive XSS labs and tutorials"
                },
                {
                    name: "XSS Payloads",
                    url: "https://github.com/payloadbox/xss-payload-list",
                    icon: "💉",
                    description: "Collection of XSS payloads for testing"
                },
                {
                    name: "OWASP XSS Guide",
                    url: "https://owasp.org/www-community/attacks/xss/",
                    icon: "📚",
                    description: "Comprehensive XSS documentation"
                }
            ]
        },
        {
            title: "SQL Injection",
            icon: "💉",
            description: "Understanding and exploiting SQL injection vulnerabilities to access or manipulate database information.",
            resources: [
                {
                    name: "SQLMap",
                    url: "https://sqlmap.org/",
                    icon: "🛠️",
                    description: "Automatic SQL injection and database takeover tool"
                },
                {
                    name: "PortSwigger SQL Labs",
                    url: "https://portswigger.net/web-security/sql-injection",
                    icon: "🧪",
                    description: "Interactive SQL injection labs"
                },
                {
                    name: "HackTheBox",
                    url: "https://www.hackthebox.com/",
                    icon: "📦",
                    description: "Practice SQL injection on vulnerable machines"
                },
                {
                    name: "OWASP SQL Injection",
                    url: "https://owasp.org/www-community/attacks/SQL_Injection",
                    icon: "📖",
                    description: "SQL injection prevention cheat sheet"
                }
            ]
        },
        {
            title: "API Security Testing",
            icon: "🔌",
            description: "Testing REST APIs and GraphQL endpoints for authentication, authorization, and data exposure vulnerabilities.",
            resources: [
                {
                    name: "Postman",
                    url: "https://www.postman.com/",
                    icon: "📮",
                    description: "API testing and development platform"
                },
                {
                    name: "OWASP API Security",
                    url: "https://owasp.org/www-project-api-security/",
                    icon: "🔒",
                    description: "API Security Top 10 vulnerabilities"
                },
                {
                    name: "Arjun",
                    url: "https://github.com/s0md3v/Arjun",
                    icon: "🔍",
                    description: "HTTP parameter discovery tool"
                },
                {
                    name: "GraphQL Voyager",
                    url: "https://github.com/APIs-guru/graphql-voyager",
                    icon: "🗺️",
                    description: "Visualize GraphQL API schemas"
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
