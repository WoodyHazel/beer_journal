import { useEffect, useState } from "react";
import Brewery from "./Brewery";

export default function Breweries() {
  const [breweryData, setBreweryData] = useState([]);

  const [formData, setFormData] = useState({ searchType: "", searchQuery: "" });

  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.openbrewerydb.org/breweries?page=${Math.floor(
        Math.random() * 400
      )}`
    )
      .then((res) => res.json())
      .then((data) => setBreweryData(data));
  }, [count]);

  const breweries = breweryData.map((item) => {
    return <Brewery key={item.id} items={item} />;
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  useEffect(() => {
    fetch(
      `https://api.openbrewerydb.org/breweries?${formData.searchType}=${formData.searchQuery}`
    )
      .then((res) => res.json())
      .then((data) => setBreweryData(data));
  }, [formData.searchQuery]);

  function handleSearch(e) {
    e.preventDefault();
  }

  return (
    <div className="breweries flex-col">
      <h3 className="m-1 fs-lg">Breweries</h3>
      <div className="container">
        <div className="flex-col refresh">
          <p>Click below to see a new page of breweries</p>
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            Refresh
          </button>
        </div>
        <h3>or</h3>
        <form className="breweries-form flex-col" onSubmit={handleSearch}>
          <fieldset>
            <legend>Search for breweries</legend>
            <input
              id="by_name"
              type="radio"
              name="searchType"
              value="by_name"
              checked={formData.searchType === "by_name"}
              onChange={handleInputChange}
            />
            <label htmlFor="by_name">By Name</label>
            <input
              id="by_city"
              type="radio"
              name="searchType"
              value="by_city"
              checked={formData.searchType === "by_city"}
              onChange={handleInputChange}
            />
            <label htmlFor="by_city">By City</label>
            <input
              id="by_state"
              type="radio"
              name="searchType"
              value="by_state"
              checked={formData.searchType === "by_state"}
              onChange={handleInputChange}
            />
            <label htmlFor="by_state">By State</label>
          </fieldset>
          <div>
            <label htmlFor="">Start typing...</label>
            <input
              type="text"
              name="searchQuery"
              id="searchQuery"
              value={formData.searchQuery}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>

      <div className="breweries-slider">{breweries}</div>
    </div>
  );
}
