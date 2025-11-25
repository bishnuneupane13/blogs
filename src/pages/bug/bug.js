import React from "react";
import Navbar from "../../components/navbar.js";
import Footer from "../../components/Footer.js";
import "./bug.css";

function FoundBugs() {
    // Section: My Bug Discoveries
    const bugDiscoveries = [
        {
            name: "Coming Soon!",
            icon: "🎯",
            description:
                "I'll be documenting my bug bounty findings here. Stay tuned for updates on vulnerabilities I've discovered and reported.",
            isEmpty: true,
        },
        // Future bug discoveries can be added here
        // {
        //   name: "Bug Name",
        //   icon: "🐛",
        //   description: "Description of the bug and how it was found",
        //   isEmpty: false,
        // }
    ];

    return (
        <div className="app">
            <Navbar />

            <main className="page-content">
                {/* Page Header */}
                <header className="page-header">
                    <h1>🐛 Found Bugs</h1>
                    <p>My bug bounty hunting journey – discoveries, learnings, and resources.</p>
                </header>

                {/* Bug Discoveries Section */}
                <section className="bug-section">
                    <div className="section-header">
                        <span className="section-icon">🔍</span>
                        <h2>My Bug Discoveries</h2>
                    </div>
                    <p className="section-description">
                        Bugs and security vulnerabilities I've found and reported through bug bounty programs.
                    </p>

                    {/* If there are no bugs yet */}
                    {bugDiscoveries[0].isEmpty ? (
                        <div className="empty-state">
                            <div className="empty-icon">{bugDiscoveries[0].icon}</div>
                            <h3>{bugDiscoveries[0].name}</h3>
                            <p>{bugDiscoveries[0].description}</p>
                        </div>
                    ) : (
                        <div className="resources-grid">
                            {bugDiscoveries.map((bug, index) => (
                                <div className="resource-card" key={index}>
                                    <div className="resource-icon">{bug.icon}</div>
                                    <div className="resource-content">
                                        <h3>{bug.name}</h3>
                                        <p>{bug.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default FoundBugs;
