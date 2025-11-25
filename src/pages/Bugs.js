
import Navbar from "../components/navbar.js";
import Footer from "../components/Footer.js";


function Bugs() {
    return (
        <div className="App">
            <Navbar />

            <div className="page-content">
                <div className="section-header">
                    <h1>Bugs &amp; Vulnerabilities</h1>
                    <p>My bug bounty journey - what I'm learning and what I've found.</p>
                </div>

                {/* What I'm Learning Section */}
                <div className="bugs-subsection">
                    <div className="subsection-title">
                        <span className="subsection-icon">📚</span>
                        <h2>What I'm Learning</h2>
                    </div>
                    <p className="subsection-desc" style={{ fontSize: "1.5rem" }}>
                        Current topics I'm studying and skills I'm developing in bug bounty hunting.
                    </p>

                    <div className="empty-state">
                        <div className="empty-icon" style={{ fontSize: "3rem", margin: "-4rem 0 0 -1rem" }}>🎓</div>
                        <h3 style={{
                            fontSize: "3rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem",
                            marginBottom: "1rem", textDecoration: "underline #fbeacaff 10px", fontWeight: "bold", fontStyle: "oblique", fontFamily: "monospace"
                        }}>How to find bugs</h3>
                        <p style={{ fontSize: "1.5rem" }}>Learning how to find bugs and vulnerabilities in web applications.</p>
                        <button className="hero-btn">Learn More</button>
                    </div>
                </div>

                {/* What I Found Section */}
                <div className="bugs-subsection">
                    <div className="subsection-title">
                        <span className="subsection-icon">🔍</span>
                        <h2>What I Found</h2>
                    </div>
                    <p className="subsection-desc" style={{ fontSize: "1.5rem" }}>
                        Bugs and vulnerabilities I've discovered during my bug bounty hunting.
                    </p>

                    <div className="empty-state">
                        <div className="empty-icon" style={{ fontSize: "3rem", margin: "-4rem 0 0 -1rem" }}>🐛</div>
                        <h3 style={{
                            fontSize: "3rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem",
                            marginBottom: "1rem", textDecoration: "underline #fbeacaff 10px", fontWeight: "bold", fontStyle: "oblique", fontFamily: "monospace"
                        }}>Found Bugs</h3>
                        <p style={{ fontSize: "1.5rem" }}>Discovered bugs and vulnerabilities in web applications.</p>
                        <button className="hero-btn">Learn More</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Bugs;
