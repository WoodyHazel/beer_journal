import { useState, useEffect } from "react";
import EntryForm from "./EntryForm";
import PrivateEntries from "./PrivateEntries";

export default function CreateEntry() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    company: "",
    author: "",
    date: "",
    description: "",
    imageUrl:
      "https://images.unsplash.com/photo-1593375547549-29fe3bf5c94f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2206&q=80",
  });

  const [entriesArray, setEntriesArray] = useState(() => {
    return [
      {
        name: "Hazy Little Thing",
        type: "IPA",
        company: "Sierra Nevada",
        author: "Woody Hazel",
        date: "2022-03-09",
        description:
          "This is one of my favorite beers. It's juicy, hoppy, and delicious!",
        imageUrl:
          "https://images.unsplash.com/photo-1593375547549-29fe3bf5c94f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2206&q=80",
      },
      {
        name: "Two Hearted Ale",
        type: "IPA",
        company: "Bell's",
        author: "Woody Hazel",
        date: "2022-03-30",
        description:
          "This is another one of my favorites. It's amber in color with a strong hop presence.",
        imageUrl:
          "https://images.unsplash.com/photo-1593375547549-29fe3bf5c94f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2206&q=80",
      },
    ];
  });

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEntriesArray((prevArray) => [...prevArray, formData]);
    setFormData({
      name: "",
      type: "",
      company: "",
      author: "",
      date: "",
      description: "",
    });
  }

  return (
    <section id="create" className="create flex-col">
      <header>
        <h2 className="text-center m-1 fs-lg">Create Your Own Review</h2>
        <p className="lh-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam
          veritatis, blanditiis quo repellendus vitae ut, totam alias eos eius
          tempora nobis fugit omnis quasi aspernatur deleniti minima voluptatem
          unde.
        </p>
      </header>
      <EntryForm
        handleSubmit={handleSubmit}
        handleFormChange={handleFormChange}
        formData={formData}
      />
      <PrivateEntries entriesArray={entriesArray} />
    </section>
  );
}
