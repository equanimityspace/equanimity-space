function Card(
  header: string,
  title: string,
  text: string,
  url: string,
  url_location: string,
) {
  <div className="card">
    <div className="card-header">{header}</div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href={url} className="btn btn-primary">
        {url_location}
      </a>
    </div>
  </div>;
}

export default Card;
