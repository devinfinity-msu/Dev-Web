import React, { useEffect, useState } from "react";
import { PageContainer } from "../../components/layout/PageContainer";
import { X, ArrowUpRight, Clock, Sparkles } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "AI",
    title: "How AI Is Changing the Way We Build",
    readTime: "6 MIN READ",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
    intro:
      "Artificial intelligence is becoming part of the everyday toolkit developers use to design, build, test, and ship software.",
    sections: [
      {
        heading: "The Developer Workflow Is Changing",
        text:
          "AI can now help developers generate boilerplate code, explain unfamiliar codebases, find bugs, write tests, and suggest better approaches to problems. Instead of replacing the development process, AI is becoming a powerful layer inside it.",
      },
      {
        heading: "AI Is a Tool, Not a Replacement",
        text:
          "The strongest developers are not necessarily the ones who write every line of code manually. They are the ones who understand what needs to be built, evaluate AI-generated solutions, and make good technical decisions.",
      },
      {
        heading: "What Developers Should Learn",
        text:
          "Programming fundamentals, data structures, databases, networking, APIs, security, and clean architecture remain essential because AI-generated code still needs human judgment.",
      },
      {
        heading: "The Future of Development",
        text:
          "The future will likely belong to developers who combine strong engineering fundamentals with AI tools. The goal is not to compete against AI, but to learn how to build better and faster with it.",
      },
    ],
  },

  {
    id: 2,
    category: "TOOLS",
    title: "Git vs GitHub: What's Actually the Difference?",
    readTime: "5 MIN READ",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1000&q=80",
    intro:
      "Git and GitHub are often used together, but they are not the same thing. Understanding the difference is one of the first steps toward becoming comfortable with modern development.",
    sections: [
      {
        heading: "What Is Git?",
        text:
          "Git is a distributed version control system. It runs on your computer and keeps track of changes made to your project. You can create commits, branches, merge changes, and return to previous versions.",
      },
      {
        heading: "What Is GitHub?",
        text:
          "GitHub is an online platform that hosts Git repositories. It makes collaboration easier through remote repositories, pull requests, issues, code reviews, and project management features.",
      },
      {
        heading: "A Simple Example",
        text:
          "Imagine Git as the notebook that records every version of your project, while GitHub is the online place where that notebook can be shared with your entire team.",
      },
      {
        heading: "Why Developers Use Both",
        text:
          "Git allows you to manage your code history locally, while GitHub allows you to collaborate with other developers. Together, they form one of the most common workflows in software development.",
      },
    ],
  },

  {
    id: 3,
    category: "FRONTEND",
    title: "Why Great Websites Feel Different",
    readTime: "7 MIN READ",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=80",
    intro:
      "A good website is not simply a collection of beautiful colors and animations. Great interfaces are designed around how people think, explore, and interact.",
    sections: [
      {
        heading: "Design Is More Than Decoration",
        text:
          "Typography, spacing, hierarchy, contrast, and visual rhythm all influence how quickly users understand an interface. Good design makes complicated information feel simple.",
      },
      {
        heading: "The Importance of Visual Hierarchy",
        text:
          "Users should immediately understand what matters most on a page. Headlines, supporting information, buttons, images, and secondary content should all have different visual weights.",
      },
      {
        heading: "Small Details Matter",
        text:
          "Hover effects, transitions, micro-interactions, loading states, and responsive layouts may seem small individually, but together they create a polished experience.",
      },
      {
        heading: "Build for Humans",
        text:
          "The best frontend developers think beyond code. They consider accessibility, readability, usability, performance, and how a real person will experience the interface.",
      },
    ],
  },

  {
    id: 4,
    category: "BACKEND",
    title: "What Actually Happens When You Open a Website?",
    readTime: "8 MIN READ",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
    intro:
      "Typing a URL into your browser looks simple, but behind that single action is an entire chain of systems working together.",
    sections: [
      {
        heading: "The Browser Starts the Journey",
        text:
          "When you enter a website address, your browser needs to discover where that website lives. It begins by resolving the domain name into an IP address.",
      },
      {
        heading: "DNS Finds the Server",
        text:
          "The Domain Name System translates human-readable domains into IP addresses, allowing your browser to locate the correct server.",
      },
      {
        heading: "The Request Reaches the Backend",
        text:
          "The browser sends an HTTP or HTTPS request to the server. The backend processes that request and may communicate with databases, authentication systems, APIs, or other services.",
      },
      {
        heading: "The Browser Builds the Page",
        text:
          "The server sends resources such as HTML, CSS, JavaScript, images, and data back to the browser. The browser processes these resources and renders the final interface.",
      },
    ],
  },

  {
    id: 5,
    category: "WEB DEV",
    title: "React Isn't Magic — Here's What It Actually Does",
    readTime: "6 MIN READ",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80",
    intro:
      "React can seem complicated when you first encounter components, props, state, and hooks. But its core idea is surprisingly simple.",
    sections: [
      {
        heading: "Think in Components",
        text:
          "React allows developers to break an interface into reusable components. A button, navbar, card, form, or complete page can each become a component.",
      },
      {
        heading: "Props Carry Information",
        text:
          "Props allow components to receive information from their parent components. This makes components reusable and flexible.",
      },
      {
        heading: "State Makes Interfaces Interactive",
        text:
          "State allows a component to remember information and update its interface when that information changes. This is one of the foundations of interactive React applications.",
      },
      {
        heading: "Why Developers Like React",
        text:
          "React encourages reusable components and predictable UI development. Once the mental model becomes clear, building complex interfaces becomes much more manageable.",
      },
    ],
  },
];

export const BlogPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedArticle(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedArticle ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedArticle]);

  return (
    <PageContainer>
      <div className="dev-blog">

        {/* ================= HERO ================= */}

        <section className="dev-blog-hero">

          <div className="dev-blog-orbit orbit-one" />
          <div className="dev-blog-orbit orbit-two" />

          <div className="dev-blog-kicker">
            <Sparkles size={14} />
            DEV INFINITY / INSIGHTS
          </div>

          <h1>
            IDEAS WORTH
            <br />
            <em>BUILDING.</em>
          </h1>

          <p>Thoughts • Tutorials • Experiments</p>

          <button
            className="dev-blog-trending"
            onClick={() =>
              document
                .getElementById("dev-blog-articles")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            EXPLORE ARTICLES
            <ArrowUpRight size={16} />
          </button>

        </section>

        {/* ================= ARTICLES ================= */}

        <section
          className="dev-blog-articles"
          id="dev-blog-articles"
        >

          <div className="dev-blog-section-heading">
            <div className="dev-blog-label">
              EXPLORE THE STACK
            </div>

            <h2>
              Find something
              <br />
              worth reading.
            </h2>
          </div>

          <div className="dev-blog-masonry">

            {articles.map((article) => (

              <article
                key={article.id}
                className={`dev-blog-card card-${article.id}`}
                onClick={() => setSelectedArticle(article)}
              >

                {/* IMAGE */}

                <div className="dev-blog-card-image">

                  <img
                    src={article.image}
                    alt={article.title}
                  />

                  <div className="dev-blog-card-overlay">
                    <span>READ ARTICLE</span>
                    <ArrowUpRight size={17} />
                  </div>

                </div>

                {/* CONTENT */}

                <div className="dev-blog-card-content">

                  <div className="dev-blog-card-meta">

                    <span>
                      {article.category}
                    </span>

                    <span>
                      {article.readTime}
                    </span>

                  </div>

                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.intro}
                  </p>

                  <div className="dev-blog-read-more">
                    READ MORE
                    <ArrowUpRight size={15} />
                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* ================= BOTTOM CTA ================= */}

        <section className="dev-blog-cta">

          <div className="dev-blog-label">
            KEEP BUILDING
          </div>

          <h2>
            Ideas are only
            <br />
            the beginning.
          </h2>

          <p>
            Learn something. Build something.
            <br />
            Then build something better.
          </p>

        </section>

        {/* ================= ARTICLE MODAL ================= */}

        {selectedArticle && (

          <div
            className="dev-blog-modal-overlay"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedArticle(null);
              }
            }}
          >

            <div className="dev-blog-modal">

              {/* CLOSE */}

              <button
                className="dev-blog-close"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close article"
              >
                <X size={21} />
              </button>

              {/* IMAGE */}

              <div className="dev-blog-modal-image">

                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                />

              </div>

              {/* ARTICLE */}

              <div className="dev-blog-article">

                <div className="dev-blog-article-meta">

                  <span>
                    {selectedArticle.category}
                  </span>

                  <div>
                    <Clock size={15} />
                    {selectedArticle.readTime}
                  </div>

                </div>

                <h1>
                  {selectedArticle.title}
                </h1>

                <p className="dev-blog-intro">
                  {selectedArticle.intro}
                </p>

                <div className="dev-blog-divider" />

                <div className="dev-blog-body">

                  {selectedArticle.sections.map(
                    (section, index) => (

                      <section key={index}>

                        <h2>
                          {section.heading}
                        </h2>

                        <p>
                          {section.text}
                        </p>

                      </section>

                    )
                  )}

                </div>

                <div className="dev-blog-end">

                  <span>
                    END OF ARTICLE
                  </span>

                  <div />

                  <strong>
                    DEV INFINITY
                  </strong>

                </div>

              </div>

            </div>

          </div>

        )}

        {/* ================= BLOG CSS ================= */}

        <style>{`

          .dev-blog {
            width: 100%;
            min-height: 100vh;
            background: var(--bg-main);
            color: var(--text-main);
            overflow: hidden;
          }

          /* ================= HERO ================= */

          .dev-blog-hero {
            min-height: 62vh;
            padding: 80px 25px 70px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .dev-blog-kicker {
            display: flex;
            align-items: center;
            gap: 7px;
            margin-bottom: 22px;
            color: var(--primary);
            font-size: 0.7rem;
            font-weight: 900;
            letter-spacing: 0.16em;
          }

          .dev-blog-hero h1 {
            margin: 0;
            color: var(--text-contrast);
            font-size: clamp(4rem, 9vw, 8rem);
            line-height: 0.85;
            letter-spacing: -0.075em;
            font-weight: 900;
          }

          .dev-blog-hero h1 em {
            font-style: normal;
            font-weight: 400;
            color: var(--primary);
          }

          .dev-blog-hero p {
            margin: 25px 0;
            color: var(--text-secondary);
            letter-spacing: 0.08em;
          }

          .dev-blog-trending {
            display: flex;
            align-items: center;
            gap: 7px;
            padding: 11px 17px;
            border-radius: 999px;
            border: 1px solid var(--border);
            background: var(--bg-card);
            color: var(--primary);
            cursor: pointer;
            font-size: 0.68rem;
            font-weight: 900;
            letter-spacing: 0.1em;
            transition: 0.25s ease;
          }

          .dev-blog-trending:hover {
            transform: translateY(-3px);
            border-color: var(--primary);
            box-shadow: var(--shadow);
          }

          /* ================= ORBITS ================= */

          .dev-blog-orbit {
            position: absolute;
            border: 1px solid var(--border);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.4;
          }

          .orbit-one {
            width: 420px;
            height: 420px;
            left: -250px;
            top: -180px;
          }

          .orbit-two {
            width: 520px;
            height: 520px;
            right: -300px;
            bottom: -400px;
          }

          /* ================= SECTION ================= */

          .dev-blog-articles {
            width: min(1080px, calc(100% - 40px));
            margin: auto;
            padding-bottom: 80px;
          }

          .dev-blog-section-heading {
            margin-bottom: 35px;
          }

          .dev-blog-label {
            color: var(--primary);
            font-size: 0.68rem;
            font-weight: 900;
            letter-spacing: 0.16em;
          }

          .dev-blog-section-heading h2 {
            margin: 8px 0 0;
            color: var(--text-contrast);
            font-size: clamp(2.4rem, 5vw, 4.5rem);
            line-height: 0.92;
            letter-spacing: -0.065em;
          }

          /* ================= MASONRY ================= */

          .dev-blog-masonry {
            columns: 3 260px;
            column-gap: 18px;
          }

          .dev-blog-card {
            display: inline-block;
            width: 100%;
            margin: 0 0 18px;
            break-inside: avoid;
            overflow: hidden;
            border-radius: 16px;
            background: var(--bg-card);
            border: 1px solid var(--border);
            cursor: pointer;
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease,
              border-color 0.3s ease;
          }

          .dev-blog-card:hover {
            transform: translateY(-6px);
            border-color: var(--primary);
            box-shadow: var(--shadow);
          }

          /* DIFFERENT SIZES */

          .card-1 .dev-blog-card-image {
            height: 170px;
          }

          .card-2 .dev-blog-card-image {
            height: 135px;
          }

          .card-3 .dev-blog-card-image {
            height: 190px;
          }

          .card-4 .dev-blog-card-image {
            height: 145px;
          }

          .card-5 .dev-blog-card-image {
            height: 180px;
          }

          /* ================= CARD IMAGE ================= */

          .dev-blog-card-image {
            position: relative;
            overflow: hidden;
          }

          .dev-blog-card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.5s ease;
          }

          .dev-blog-card:hover .dev-blog-card-image img {
            transform: scale(1.06);
          }

          .dev-blog-card-overlay {
            position: absolute;
            inset: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 7px;
            background: rgba(0, 0, 0, 0.48);
            color: white;
            opacity: 0;
            transition: opacity 0.25s ease;
            font-size: 0.65rem;
            font-weight: 900;
            letter-spacing: 0.12em;
          }

          .dev-blog-card:hover .dev-blog-card-overlay {
            opacity: 1;
          }

          /* ================= CARD CONTENT ================= */

          .dev-blog-card-content {
            padding: 17px;
          }

          .dev-blog-card-meta {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 9px;
            color: var(--primary);
            font-size: 0.62rem;
            font-weight: 900;
            letter-spacing: 0.08em;
          }

          .dev-blog-card-meta span:last-child {
            color: var(--text-muted);
          }

          .dev-blog-card h3 {
            margin: 0 0 9px;
            color: var(--text-contrast);
            font-size: 1.3rem;
            line-height: 1.05;
            letter-spacing: -0.035em;
          }

          .dev-blog-card p {
            margin: 0;
            color: var(--text-secondary);
            font-size: 0.82rem;
            line-height: 1.5;
          }

          .dev-blog-read-more {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-top: 13px;
            color: var(--primary);
            font-size: 0.62rem;
            font-weight: 900;
            letter-spacing: 0.1em;
          }

          /* ================= CTA ================= */

          .dev-blog-cta {
            width: min(900px, calc(100% - 40px));
            margin: auto;
            padding: 80px 20px 120px;
            text-align: center;
          }

          .dev-blog-cta h2 {
            margin: 15px 0;
            color: var(--text-contrast);
            font-size: clamp(3rem, 7vw, 6rem);
            line-height: 0.88;
            letter-spacing: -0.07em;
          }

          .dev-blog-cta p {
            color: var(--text-secondary);
            line-height: 1.7;
          }

          /* ================= MODAL ================= */

          .dev-blog-modal-overlay {
            position: fixed;
            inset: 0;
            z-index: 99999;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.72);
            backdrop-filter: blur(12px);
            animation: blogFade 0.2s ease;
          }

          .dev-blog-modal {
            width: min(900px, 100%);
            max-height: calc(100vh - 40px);
            overflow-y: auto;
            position: relative;
            border-radius: 20px;
            background: var(--bg-card);
            border: 1px solid var(--border);
            box-shadow: var(--shadow);
            animation: blogOpen 0.3s ease;
          }

          /* ================= CLOSE ================= */

          .dev-blog-close {
            position: absolute;
            top: 15px;
            right: 15px;
            z-index: 10;
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255,255,255,0.3);
            border-radius: 50%;
            background: rgba(0,0,0,0.55);
            color: white;
            cursor: pointer;
            backdrop-filter: blur(10px);
            transition: 0.25s ease;
          }

          .dev-blog-close:hover {
            transform: rotate(90deg) scale(1.05);
            background: var(--primary);
          }

          /* ================= MODAL IMAGE ================= */

          .dev-blog-modal-image {
            width: 100%;
            height: 300px;
            overflow: hidden;
          }

          .dev-blog-modal-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          /* ================= ARTICLE ================= */

          .dev-blog-article {
            padding: 45px clamp(25px, 6vw, 65px) 55px;
          }

          .dev-blog-article-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--primary);
            font-size: 0.68rem;
            font-weight: 900;
            letter-spacing: 0.12em;
          }

          .dev-blog-article-meta > div {
            display: flex;
            align-items: center;
            gap: 6px;
            color: var(--text-muted);
          }

          .dev-blog-article h1 {
            max-width: 800px;
            margin: 18px 0;
            color: var(--text-contrast);
            font-size: clamp(2.4rem, 6vw, 5rem);
            line-height: 0.92;
            letter-spacing: -0.065em;
          }

          .dev-blog-intro {
            max-width: 730px;
            color: var(--text-secondary);
            font-size: 1.05rem;
            line-height: 1.7;
          }

          .dev-blog-divider {
            height: 1px;
            margin: 35px 0;
            background: var(--border);
          }

          .dev-blog-body {
            max-width: 720px;
          }

          .dev-blog-body section {
            margin-bottom: 38px;
          }

          .dev-blog-body h2 {
            margin: 0 0 10px;
            color: var(--text-contrast);
            font-size: clamp(1.35rem, 3vw, 2rem);
            line-height: 1.1;
            letter-spacing: -0.04em;
          }

          .dev-blog-body p {
            margin: 0;
            color: var(--text-secondary);
            font-size: 0.98rem;
            line-height: 1.8;
          }

          /* ================= END ================= */

          .dev-blog-end {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-top: 55px;
            color: var(--text-muted);
            font-size: 0.62rem;
            font-weight: 900;
            letter-spacing: 0.12em;
          }

          .dev-blog-end div {
            flex: 1;
            height: 1px;
            background: var(--border);
          }

          .dev-blog-end strong {
            color: var(--primary);
          }

          /* ================= ANIMATIONS ================= */

          @keyframes blogFade {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }

          @keyframes blogOpen {
            from {
              opacity: 0;
              transform: translateY(15px) scale(0.97);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          /* ================= MOBILE ================= */

          @media (max-width: 700px) {

            .dev-blog-hero {
              min-height: 58vh;
              padding: 70px 18px 55px;
            }

            .dev-blog-hero h1 {
              font-size: 18vw;
            }

            .dev-blog-hero p {
              font-size: 0.82rem;
            }

            .dev-blog-articles {
              width: calc(100% - 24px);
            }

            .dev-blog-masonry {
              columns: 2 145px;
              column-gap: 10px;
            }

            .dev-blog-card {
              margin-bottom: 10px;
              border-radius: 12px;
            }

            .card-1 .dev-blog-card-image {
              height: 135px;
            }

            .card-2 .dev-blog-card-image {
              height: 110px;
            }

            .card-3 .dev-blog-card-image {
              height: 150px;
            }

            .card-4 .dev-blog-card-image {
              height: 115px;
            }

            .card-5 .dev-blog-card-image {
              height: 140px;
            }

            .dev-blog-card-content {
              padding: 12px;
            }

            .dev-blog-card h3 {
              font-size: 1rem;
            }

            .dev-blog-card p {
              font-size: 0.73rem;
            }

            .dev-blog-card-meta {
              font-size: 0.55rem;
            }

            .dev-blog-read-more {
              font-size: 0.55rem;
            }

            .dev-blog-modal-overlay {
              padding: 0;
            }

            .dev-blog-modal {
              width: 100%;
              height: 100vh;
              max-height: 100vh;
              border-radius: 0;
            }

            .dev-blog-modal-image {
              height: 250px;
            }

            .dev-blog-article {
              padding: 32px 20px 50px;
            }

            .dev-blog-article-meta {
              align-items: flex-start;
              flex-direction: column;
              gap: 8px;
            }

            .dev-blog-article h1 {
              font-size: 2.5rem;
            }

            .dev-blog-body p {
              font-size: 0.92rem;
            }

          }

        `}</style>

      </div>
    </PageContainer>
  );
};

export default BlogPage;