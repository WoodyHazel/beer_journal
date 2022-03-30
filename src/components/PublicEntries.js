import Entry from "./Entry";
import publicEntriesData from "../publicEntriesData";

export default function PublicEntries() {
  const entries = publicEntriesData.map((data) => {
    return <Entry key={data.id} items={data} />;
  });

  return (
    <div className="public-entries">
      <h3 className="m-1 fs-lg">Beers</h3>
      <div className="flex">{entries}</div>
    </div>
  );
}
