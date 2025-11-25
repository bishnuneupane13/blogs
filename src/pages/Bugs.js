import Navbar from "../components/navbar.js";
import Footer from "../components/Footer.js";

function Bugs() {
    return (
        <div className="App">
            <Navbar />
            <div className="page-content">
                <div className="section-header">
                    <h1>Bugs & Vulnerabilities</h1>
                    <p>Technical writeups, POCs, and security research findings.</p>
                </div>

                <div className="empty-state">
                    <div className="empty-icon">🐛</div>
                    <h3>No Public Disclosures Yet</h3>
                    <p>I haven't published any writeups yet. Stay tuned for future findings!</p>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Bugs;
