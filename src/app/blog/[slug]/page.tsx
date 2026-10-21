
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Kingsley Valerian`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="blog-article">
      <nav className="blog-nav">
        <Link href="/" aria-label="Return to portfolio">
          <strong>KINGSLEY VALERIAN</strong>
        </Link>

        <div className="blog-nav-links">
          <Link href="/">Portfolio</Link>
          <Link href="/blog">Articles</Link>
          <a href="mailto:kingsleyvalerian6@gmail.com">Contact</a>
        </div>
      </nav>

      <header className="blog-article-header">
        <div className="blog-container">
          <Link href="/blog" className="blog-back-link">
            ← Back to all articles
          </Link>

          <div>
            <span className="blog-category">{post.category}</span>
          </div>

          <h1>{post.title}</h1>

          <p className="blog-article-excerpt">{post.excerpt}</p>

          <div className="blog-article-meta">
            <span>By Kingsley Valerian</span>
            <span>
              {new Date(`${post.date}T12:00:00`).toLocaleDateString(
                "en-GB",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  timeZone: "UTC",
                }
              )}
            </span>
            <span>{post.readTime} min read</span>
          </div>

          <div className="blog-actions">
            <a
              href={post.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-button"
            >
              Visit {post.projectLabel} ↗
            </a>

            <Link
              href="/blog"
              className="blog-button blog-button-secondary"
            >
              More project stories
            </Link>
          </div>
        </div>
      </header>

      <div className="blog-container blog-article-layout">
        <article className="blog-article-body">
          {post.sections.map((section, index) => (
            <section
              className="blog-article-section"
              key={`${post.slug}-${index}`}
            >
              <h2>{section.heading}</h2>

              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={`${post.slug}-${index}-${paragraphIndex}`}>
                  {paragraph}
                </p>
              ))}

              {section.bullets && section.bullets.length > 0 && (
                <ul>
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={`${post.slug}-${index}-bullet-${bulletIndex}`}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="blog-article-bottom">
            <span className="blog-eyebrow">Explore the project</span>

            <h2>See the work beyond the write-up.</h2>

            <p>
              Read the story, explore the live project, and see how the
              ideas translate into a working digital experience.
            </p>

            <div className="blog-actions">
              <a
                href={post.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-button"
              >
                Open {post.projectLabel} ↗
              </a>

              <Link
                href="/blog"
                className="blog-button blog-button-secondary"
              >
                Read another story
              </Link>
            </div>
          </section>
        </article>

        <aside className="blog-article-sidebar">
          <h3>Project details</h3>

          <p>
            <strong>Category</strong>
            <br />
            {post.category}
          </p>

          <p>
            <strong>Reading time</strong>
            <br />
            {post.readTime} minutes
          </p>

          <h3>Tools and skills</h3>

          <div className="blog-tool-list">
            {post.tools.map((tool) => (
              <span className="blog-tool" key={tool}>
                {tool}
              </span>
            ))}
          </div>

          <a
            href={post.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-button"
          >
            View live project ↗
          </a>
        </aside>
      </div>

      <footer className="blog-footer">
        <span>© {new Date().getFullYear()} Kingsley Valerian</span>
        <Link href="/">Back to portfolio ↑</Link>
      </footer>
    </main>
  );
}
