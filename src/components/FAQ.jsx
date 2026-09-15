import "./FAQ.css";

export default function FAQ({ items }) {
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details className="faq-item" key={i} open={i === 0}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
