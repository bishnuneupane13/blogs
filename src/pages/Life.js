import Navbar from "../components/navbar.js";
import Footer from "../components/Footer.js";

function Life() {
    return (
        <div className="App">
            <Navbar />
            <div className="page-content">
                <div className="section-header">
                    <h1>Life & Thoughts</h1>
                    <p>Personal stories, career advice, and random musings.</p>
                </div>

                <div className="empty-state">
                    <div className="empty-icon">🌱</div>
                    <h3>Coming Soon</h3>
                    <p>I haven't written anything here yet. Check back later!</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Life;
