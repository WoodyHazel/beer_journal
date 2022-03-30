export default function Brewery(props) {
  return (
    <div className="brewery text-center">
      <h4>{props.items.name}</h4>
      <p>{props.items.street}</p>
      <p>
        {props.items.city}, {props.items.state} {props.items.country}
      </p>
      <p>{props.items.phone}</p>
      <a className="website" target="_blank" href={props.items.website_url}>
        Visit Website
      </a>
      <p></p>
      <a
        className="search"
        target="_blank"
        href={`https://www.google.com/search?q=${props.items.name}+${props.items.city}`}
      >
        Search
      </a>
    </div>
  );
}
