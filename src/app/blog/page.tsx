
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(blogPosts.map((post) => post.category))),
  ];

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const searchableText = [
        post.title,
        post.excerpt,
        post.category,
        ...post.tools,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!query || searchableText.includes(query));
    });
  }, [search, activeCategory]);

  const featuredPost = blogPosts[0];

  return (
    <main className="blog-page">
      <header className="blog-nav">
        <div className="blog-container blog-nav-inner">
          <Link href="/" className="blog-brand">
            <span className="blog-brand-mark">K</span>
            Kingsley Valerian
          </Link>

          <nav aria-label="Blog navigation">
            <Link href="/">Portfolio</Link>
            <a href="#articles">Articles</a>
            <Link href="/#contact" className="blog-nav-cta">
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      </header>

      <section className="blog-hero">
        <div className="blog-hero-glow" aria-hidden="true" />
        <div className="blog-container blog-hero-content">
          <p className="blog-eyebrow">
            THE WORK · THE PROCESS · THE LESSONS
          </p>

          <h1>
            Behind the build.
            <br />
            <span>Beyond the screen.</span>
          </h1>

          <p className="blog-hero-description">
            A closer look at the products I build, the problems I work
            through, the tools I use, and the lessons I learn along the way.
          </p>

          <div className="blog-hero-actions">
            <a href="#articles" className="blog-button blog-button-primary">
              Explore the stories <span aria-hidden="true">↓</span>
            </a>
            <Link href="/" className="blog-button blog-button-secondary">
              Back to portfolio <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="blog-hero-bottom">
            <span>INDEPENDENT PROJECT JOURNAL</span>
            <span>{String(blogPosts.length).padStart(2, "0")} PROJECT STORIES</span>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="blog-featured-section">
          <div className="blog-container">
            <div className="blog-section-heading">
              <p className="blog-eyebrow">START HERE</p>
              <h2>The story behind the product.</h2>
            </div>

            <article className="blog-featured-card">
              <div className="blog-featured-art" aria-hidden="true">
                <span className="blog-art-orbit blog-art-orbit-one" />
                <span className="blog-art-orbit blog-art-orbit-two" />
                <span className="blog-art-monogram">MD</span>
                <span className="blog-art-caption">PRODUCT JOURNAL / 001</span>
              </div>

              <div className="blog-featured-copy">
                <span className="blog-category">{featuredPost.category}</span>
                <p className="blog-post-meta">
                  {featuredPost.readTime} <span>·</span> Featured story
                </p>
                <h3>{featuredPost.title}</h3>
                <p>{featuredPost.excerpt}</p>

                <div className="blog-tag-list">
                  {featuredPost.tools.slice(0, 4).map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>

                <div className="blog-card-actions">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="blog-button blog-button-primary"
                  >
                    Read the story <span aria-hidden="true">↗</span>
                  </Link>
                  <a
                    href={featuredPost.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-text-link"
                  >
                    Visit live project <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      <section id="articles" className="blog-articles-section">
        <div className="blog-container">
          <div className="blog-section-heading blog-articles-heading">
            <div>
              <p className="blog-eyebrow">THE PROJECT ARCHIVE</p>
              <h2>Projects, explained.</h2>
              <p>
                Read the thinking behind each build, explore the tools, and
                visit the live work.
              </p>
            </div>
            <span className="blog-archive-count">
              {String(filteredPosts.length).padStart(2, "0")} ARTICLES
            </span>
          </div>

          <label className="blog-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search projects, tools, or topics..."
              aria-label="Search blog articles"
            />
            {search && (
              <button type="button" onClick={() => setSearch("")}>
                Clear
              </button>
            )}
          </label>

          <div className="blog-categories" aria-label="Filter by category">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "blog-category-button active"
                    : "blog-category-button"
                }
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="blog-post-grid">
              {filteredPosts.map((post, index) => (
                <article className="blog-post-card" key={post.slug}>
                  <div className={`blog-post-art blog-post-art-${index % 5}`}>
                    <span className="blog-post-art-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="blog-post-art-category">
                      {post.category}
                    </span>
                    <span className="blog-post-art-symbol" aria-hidden="true">
                      {index === 0
                        ? "MD"
                        : index === 1
                          ? "FT"
                          : index === 2
                            ? "KB"
                            : index === 3
                              ? "FD"
                              : "AT"}
                    </span>
                  </div>

                  <div className="blog-post-card-content">
                    <div className="blog-post-card-meta">
                      <span>{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p>{post.excerpt}</p>

                    <div className="blog-tag-list">
                      {post.tools.slice(0, 3).map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>

                    <div className="blog-post-card-actions">
                      <Link href={`/blog/${post.slug}`}>
                        Read article <span aria-hidden="true">↗</span>
                      </Link>
                      <a
                        href={post.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${post.projectLabel} in a new tab`}
                      >
                        Live project ↗
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="blog-empty-state">
              <h3>No matching stories yet.</h3>
              <p>Try another search term or choose a different category.</p>
              <button
                type="button"
                className="blog-button blog-button-primary"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Show all articles
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="blog-closing-section">
        <div className="blog-container blog-closing-inner">
          <p className="blog-eyebrow">EVERY BUILD TEACHES SOMETHING</p>
          <h2>
            The best part of building
            <br />
            <span>is getting better at it.</span>
          </h2>
          <p>
            Follow the work, explore the projects, or get in touch about
            something worth building together.
          </p>
          <div className="blog-hero-actions">
            <Link href="/" className="blog-button blog-button-primary">
              Explore my portfolio <span aria-hidden="true">↗</span>
            </Link>
            <a
              href="mailto:kingsleyvalerian6@gmail.com?subject=Portfolio%20Inquiry"
              className="blog-button blog-button-secondary"
            >
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="blog-footer">
        <div className="blog-container blog-footer-inner">
          <Link href="/" className="blog-brand">
            <span className="blog-brand-mark">K</span>
            Kingsley Valerian
          </Link>
          <p>Built with curiosity. Documented through experience.</p>
          <Link href="/">Return to portfolio ↑</Link>
        </div>
      </footer>
    </main>
  );
}
