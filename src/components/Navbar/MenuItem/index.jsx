import "./index.css";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Link = ({ path, icon, text, list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li>
        <a href={path} onClick={list ? toggleAccordion : undefined}>
          <i className="nav-icon">{icon}</i>
          {text}
          {list && <IoIosArrowDown />}
        </a>
        {list && isOpen && (
          <ul className="submenu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        )}
      </li>
    </>
  );
};

export default Link;
