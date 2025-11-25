import Navbar from "../components/navbar.js";
import Footer from "../components/Footer.js";

function Bugs() {
    return (
        <div className="App">
            <Navbar />
            <div className="page-content">
                <div className="section-header">
                    <h1>Bugs & Vulnerabilities</h1>
                    <p>Security research, learning resources, and vulnerability findings.</p>
                </div>

                {/* Bug Bounty Learning Section */}
                <div className="bugs-subsection">
                    <div className="subsection-title">
                        <span className="subsection-icon">📚</span>
                        <h2>Bug Bounty Learning</h2>
                    </div>
                    <p className="subsection-desc">Resources, tutorials, and guides for learning bug bounty hunting.</p>

                    <div className="empty-state">
                        <div className="empty-icon">📖</div>
                        <h3>Learning Resources Coming Soon</h3>
                        <p>I'm working on creating educational content about bug bounty hunting and security research.</p>
                    </div>
                </div>

                {/* Bug Hunting Section */}
                <div className="bugs-subsection">
                    <div className="subsection-title">
                        <span className="subsection-icon">🎯</span>
                        <h2>Bug Hunting</h2>
                    </div>
                    <p className="subsection-desc">Technical writeups, POCs, and real-world vulnerability findings.</p>

                    <div className="empty-state">
                        <div className="empty-icon">🐛</div>
                        <h3>No Public Disclosures Yet</h3>
                        <p>I haven't published any writeups yet. Stay tuned for future findings!</p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Bugs;
