import Link from "./MenuItem/index.jsx";
import { FaDollarSign } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaBasketball } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";
import "./index.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link path="#" icon={<FaHome />} text="HOME" />
        <Link path="#" icon={<FaFolderOpen />} text="PAGES" list={true} />
        <Link path="#" icon={<FaBasketball />} text="SPORTSPRESS" list={true} />
        <Link path="#" icon={<FaShoppingBasket />} text="SHOP" list={true} />
        <Link path="#" icon={<FaDollarSign />} text="PURCHASE" />
      </ul>
    </nav>
  );
};

export default Navbar;
