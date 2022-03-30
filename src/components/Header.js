import Menu from "./Menu";

export default function Header() {
  return (
    <header className="main-header">
      <h2>
        <a className="brand" href="index.html">
          <span>the </span>Beer Journal
        </a>
      </h2>
      <Menu />
    </header>
  );
}
