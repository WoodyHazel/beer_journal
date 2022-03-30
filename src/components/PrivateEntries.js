import Entry from "./Entry";

export default function PrivateReviews(props) {
  const entries = props.entriesArray.map((entry) => (
    <Entry key={entry.name} items={entry} />
  ));

  return (
    <div className="private-entries">
      <h3>Your Reviews</h3>
      <div className="flex">{entries}</div>
    </div>
  );
}
