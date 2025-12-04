import React from "react";
import { useParams, Link } from "react-router-dom";

function Post() {
    const { slug } = useParams();

    const posts = {
        "my-first-website": {
            title: "my-first-website",
            date: "2025-02-04",
            content: (
                <>
                    <p>
                        This is my first website.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                        I'm excited to share my thoughts and
                        projects with you. Stay tuned for more updates.
                    </p>
                </>
            ),

            // ⭐ NEW SECTION (rendered at bottom)
            references: [

                {
                    label: "My First Website",
                    url: "https://bishnuneupane0.kesug.com/",
                },
            ],
        },
    };

    const post = posts[slug];

    const glassCard = {
        background: "rgba(255, 255, 255, 0.02)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        borderRadius: "4px",
        padding: "2rem",
    };

    const command = {
        color: "#0f0",
        fontWeight: "bold",
        fontSize: "1.1rem",
        marginBottom: "1rem",
    };

    const output = {
        color: "#fff",
        paddingLeft: "1rem",
    };

    // ================================
    // FILE NOT FOUND
    // ================================
    if (!post) {
        return (
            <div style={glassCard}>
                <p style={command}>$ cat {slug}.md</p>
                <p style={{ ...output, color: "#f44" }}>error: file not found</p>
                <Link
                    to="/"
                    style={{
                        color: "#0f0",
                        marginTop: "1rem",
                        display: "inline-block",
                        fontWeight: "bold",
                    }}
                >
                    $ cd ~
                </Link>
            </div>
        );
    }

    // ================================
    // RENDER POST
    // ================================
    return (
        <article style={glassCard}>
            <p style={{ color: "#666", marginBottom: "1rem" }}>[{post.date}]</p>

            <p style={command}>$ cat {slug}.md</p>

            <h1
                style={{
                    ...output,
                    fontSize: "1.4rem",
                    marginBottom: "1.5rem",
                    fontWeight: "bold",
                }}
            >
                {post.title}
            </h1>

            <section style={{ ...output, color: "#ccc", lineHeight: "1.8" }}>
                {post.content}
            </section>

            {/* ========================= */}
            {/* REFERENCES SECTION (links) */}
            {/* ========================= */}
            {post.references && (
                <section style={{ marginTop: "2rem", ...output }}>
                    <h2 style={{ fontWeight: "bold", marginBottom: "0.8rem", fontSize: "1.1rem" }}>
                        References
                    </h2>

                    <ul style={{ listStyle: "square", paddingLeft: "1.2rem", color: "#ccc" }}>
                        {post.references.map((ref, index) => (
                            <li key={index} style={{ marginBottom: "0.6rem" }}>
                                <a
                                    href={ref.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#0f0", fontWeight: "bold" }}
                                >
                                    {ref.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* BACK LINK */}
            <div
                style={{
                    marginTop: "2rem",
                    paddingTop: "1rem",
                    borderTop: "1px dashed #333",
                }}
            >
                <Link to="/" style={{ color: "#0f0", fontWeight: "bold" }}>
                    $ cd ~
                </Link>
            </div>
        </article>
    );
}

export default Post;
