import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaRedditSquare } from "react-icons/fa";
import { FaTumblrSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import "./index.css";

const SocialMedia = () => {
  return (
    <div className="social-container">
      <a href="https://x.com" target="blank">
        <i className="icon">
          <FaTwitterSquare color="#2F8AF4" size="2rem" />
        </i>
      </a>
      <a href="https://co.pinterest.com/" target="blank">
        <i>
          <FaPinterestSquare color="#C8010B" size="2rem" />
        </i>
      </a>
      <a href="https://www.reddit.com/" target="blank">
        <i>
          <FaRedditSquare color="#FF0000" size="2rem" />
        </i>
      </a>
      <a href="https://www.tumblr.com/" target="blank">
        <i>
          <FaTumblrSquare color="black" size="2rem" />
        </i>
      </a>
      <a href="https://www.facebook.com" target="blank">
        <i>
          <FaFacebookSquare color="blue" size="2rem" />
        </i>
      </a>
    </div>
  );
};

export default SocialMedia;
