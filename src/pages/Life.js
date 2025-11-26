import React from "react";
import "./life.css";
import Navbar from "../components/navbar.js";
import Footer from "../components/Footer.js";
import img1 from "./images/social-service/img1.png";
import img2 from "./images/social-service/img2.png";
import img3 from "./images/social-service/img3.png";
import img4 from "./images/social-service/img4.png";

const lifeSections = [
    {
        title: "1) Social Service I - Temple Cleaning",
        description: "As a Class 12 student, I went with my friends to a local temple in Kirtipur as part of our CCA activities. We spent the day cleaning the temple premises, arranging the flowers, and helping visitors who came to the temple. It was a wonderful experience because we not only contributed to the community but also got to spend quality time together. We laughed, shared stories, and worked as a team, which made the day even more enjoyable. This visit taught me the importance of giving back, maintaining our surroundings, and appreciating cultural and religious places in our community.",
        images: [
            img1,
            img2,
            img3,
            img4
        ],
        time: "-26 OCT 2025",

        sectionVideo: "https://www.youtube.com/watch?v=ZHzTI5YCksY"
    },
];


function Life() {
    return (
        <div className="App">
            <Navbar />

            <div className="page-content">
                {/* Page Header */}
                <h1 className="page-title">Life & Daily Vlogs</h1>
                <p className="page-subtitle">Daily life experiences and personal stories.</p>

                {/* Sections */}
                {lifeSections.map((section, time, index) => (
                    <div className="life-section" key={index}>
                        <h2 className="section-title">{section.title}</h2>
                        <h1 className="time"> {section.time}
                        </h1>
                        <p>{section.description}</p>

                        {/* Images */}
                        <div className="image-scroll">
                            {section.images.map((img, i) => (
                                <img src={img} alt={`${section.title} ${i + 1}`} className="images" key={i} />
                            ))}
                        </div>

                        {/* Video */}
                        {section.sectionVideo && (
                            <div className="video-container">
                                <iframe
                                    src={section.sectionVideo.replace("watch?v=", "embed/")}
                                    title={section.title}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>
                ))}

            </div>

            <Footer />
        </div>
    );
}

export default Life;
