interface CardProps {
  header: string;
  description: string;
  text?: string;
  url: string;
  url_label: string;
}

function Card({ header, description, text, url, url_label }: CardProps) {
  return (
    <div className="card text-bg-dark" style={{ width: "25rem" }}>
      <div className="card-header">{header}</div>
      <div className="card-body">
        <h5 className="card-description">{description}</h5>
        <p className="card-text">{text}</p>
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {url_label}
        </a>
      </div>
    </div>
  );
}

export default Card;
