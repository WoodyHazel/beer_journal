export default function Entry(props) {
  return (
    <article className="entry">
      <img src={props.items.imageUrl} alt="beer image" />
      <h4 className="title">
        {props.items.name}
        <span>{props.items.type}</span>
      </h4>
      <h5 className="company">{props.items.company}</h5>
      <div className="author flex">
        <p>{props.items.author}</p>
        <p>{props.items.date}</p>
      </div>
      <p className="description">{props.items.description}</p>
      <a
        className="search"
        target="_blank"
        href={`https://www.google.com/search?q=${props.items.name}+${props.items.type}`}
      >
        Search
      </a>
    </article>
  );
}
