import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prevMenu) => !prevMenu);
  }

  const style = {
    width: isOpen ? "100vw" : "0",
  };

  return (
    <nav>
      <div className="open-menu-btn flex-col" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul style={style} className="menu flex-col">
        <div className="close-menu-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
        </div>
        <li>
          <a onClick={toggleMenu} href="#discover">
            Discover
          </a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#create">
            Create
          </a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#learn">
            Learn
          </a>
        </li>
        <li>
          <a onClick={toggleMenu} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
