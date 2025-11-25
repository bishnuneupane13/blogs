function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Blogs of my life. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://twitter.com/bishnuneupane13" className="social-link">Twitter</a>
                    <a href="https://www.linkedin.com/in/bishnuneupane13/" className="social-link">LinkedIn</a>
                    <a href="https://github.com/bishnuneupane13" className="social-link">GitHub</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
