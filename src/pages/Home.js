import Navbar from "../components/navbar.js";
import Hero from "../components/Hero.js";
import ContentSection from "../components/BlogList.js";
import TechStack from "../components/TechStack.js";
import Footer from "../components/Footer.js";

function Home() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <div className="sections-wrapper">
                <ContentSection
                    title="Bugs & Vulnerabilities"
                    description="Technical writeups, POCs, and security research findings."
                    icon="🐛"
                    link="/bugs"
                    buttonText="View Bugs"
                />
                <div className="divider"></div>
                <ContentSection
                    title="Life & Thoughts"
                    description="Personal stories, career advice, and random musings."
                    icon="🌱"
                    link="/life"
                    buttonText="Read Blog"
                />


            </div>
            <TechStack />
            <Footer />
        </div>
    );
}

export default Home;
