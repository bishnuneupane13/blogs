function TechStack() {
    const techs = [
        "React",
        "CSS3",
        "JavaScript",
        "HTML5",
        "Git",
        "Node.js"
    ];

    return (
        <div className="tech-stack-section">
            <h2>Built With</h2>
            <div className="tech-grid">

                {techs.map((tech, index) => (
                    <div key={index} className="tech-item">
                        {tech}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechStack;
