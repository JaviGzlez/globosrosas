import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../data/blog";
import "./Blog.css";

export default function Blog() {
  return (
    <section className="section blog-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Blog</span>
          <div className="divider-heart">♥</div>
          <h1>Ideas y consejos para tu celebración</h1>
          <p className="hero-text" style={{ margin: "14px auto 0" }}>
            Guías prácticas para preparar bodas, bautizos, comuniones y eventos sin agobios,
            estés donde estés en España.
          </p>
        </div>

        <div className="blog-grid">
          {BLOG_POSTS.map((post) => (
            <Link to={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-card-body">
                <span className="blog-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog-meta">{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
