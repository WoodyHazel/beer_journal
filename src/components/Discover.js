import React from "react";
import PublicEntries from "./PublicEntries";
import Breweries from "./Breweries";

export default function Discover() {
  return (
    <section id="discover" className="discover flex-col">
      <header>
        <h2 className="fs-lg text-center">Discover</h2>
        <p>
          Find new beers and breweries. See what people are drinking and read
          what they have to say about it.
        </p>
      </header>
      <PublicEntries />
      <Breweries />
    </section>
  );
}
