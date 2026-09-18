import { useParams, Link } from "react-router-dom";
import { getPostBySlug, BLOG_POSTS } from "../data/blog";
import WhatsAppCTA from "../components/WhatsAppCTA";
import NotFound from "./NotFound";
import "./BlogPost.css";

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <NotFound />;

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="section blog-post-section">
        <div className="container blog-post-inner">
          <Link to="/blog" className="blog-back">
            ← Volver al blog
          </Link>
          <span className="blog-category">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="blog-post-meta">
            {formatDate(post.date)} · {post.readTime}
          </p>

          <div className="blog-post-image">
            <img src={post.image} alt={post.title} />
          </div>

          <div className="blog-post-content">
            {post.content.map((block, i) => {
              if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
              if (block.type === "ul")
                return (
                  <ul key={i}>
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{block.text}</p>;
            })}
          </div>
        </div>
      </article>

      <section className="section final-cta">
        <div className="container final-cta-inner">
          <h2>¿Hablamos de tu próxima celebración?</h2>
          <p className="hero-text">Cuéntanos qué estáis preparando y te ayudamos a darle forma.</p>
          <WhatsAppCTA label="Escribir por WhatsApp" />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section blog-related">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Sigue leyendo</span>
              <h2>Más ideas para tu celebración</h2>
            </div>
            <div className="blog-related-grid">
              {related.map((p) => (
                <Link to={`/blog/${p.slug}`} className="blog-related-card" key={p.slug}>
                  <img src={p.image} alt={p.title} />
                  <div>
                    <span className="blog-category">{p.category}</span>
                    <h4>{p.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
