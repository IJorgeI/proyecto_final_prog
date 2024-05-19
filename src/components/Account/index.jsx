import { IoIosSearch } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { CiLogin } from "react-icons/ci";

import "./index.css";

const Account = () => {
  return (
    <>
      <div className="account-container">
        <button className="account-button">
          <CiLogin />
        </button>
        <button className="account-button">
          <IoIosSearch />
        </button>
        <button className="account-button">
          <TiShoppingCart />
        </button>
      </div>
    </>
  );
};

export default Account;
