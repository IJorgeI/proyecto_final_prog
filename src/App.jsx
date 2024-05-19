import "./App.css";
import Account from "./components/Account/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import Filter from "./components/Filter/index.jsx";
import { data } from "./components/Table/data.js";
import SocialMedia from "./components/SocialMedia/index.jsx";

function App() {
  return (
    <>
      <Account />
      <Navbar />
      <div className="logo-container">
        <img src="team.svg" alt="Logo" className="logo" />
      </div>
      <Filter data={data} />
      <SocialMedia />
    </>
  );
}

export default App;
