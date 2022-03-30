export default function ReviewForm(props) {
  return (
    <div className="entry-form">
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="name">Beer Name</label>
        <input
          required
          type="text"
          id="name"
          name="name"
          value={props.formData.name}
          onChange={props.handleFormChange}
        />
        <label htmlFor="type">Beer Type</label>
        <input
          required
          type="text"
          id="type"
          name="type"
          value={props.formData.type}
          onChange={props.handleFormChange}
        />
        <label htmlFor="company">Beer Company</label>
        <input
          required
          type="text"
          id="company"
          name="company"
          value={props.formData.company}
          onChange={props.handleFormChange}
        />
        <label htmlFor="author">Your Name</label>
        <input
          required
          type="text"
          id="author"
          name="author"
          value={props.formData.author}
          onChange={props.handleFormChange}
        />
        <label htmlFor="date">Today's Date</label>
        <input
          required
          type="date"
          id="date"
          name="date"
          value={props.formData.date}
          onChange={props.handleFormChange}
        />
        <label htmlFor="description">Comments</label>
        <textarea
          required
          id="description"
          name="description"
          value={props.formData.description}
          onChange={props.handleFormChange}
          rows="5"
        ></textarea>
        <button>Create</button>
      </form>
      <div className="entry">
        <img
          src="https://images.unsplash.com/photo-1593375547549-29fe3bf5c94f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2206&q=80"
          alt=""
        />
        <h4 className="title">
          {props.formData.name}
          <span>{props.formData.type}</span>
        </h4>
        <h5 className="company">{props.formData.company}</h5>
        <div className="author flex">
          <p>{props.formData.author}</p>
          <p>{props.formData.date}</p>
        </div>
        <p className="description">{props.formData.description}</p>
      </div>
    </div>
  );
}
