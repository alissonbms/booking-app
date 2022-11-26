import "./footer.styles.js";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Footer } from "./footer.styles.js";

const FooterComponent = () => {
  return (
    <Footer>
      <a href="">
        <FaFacebookF size={28} />
      </a>
      <a href="">
        <FaInstagram size={28} />
      </a>
      <a href="">
        <FaLinkedinIn size={28} />
      </a>
      <a href="">
        <FaTwitter size={28} />
      </a>
      <a href="">
        <FaYoutube size={28} />
      </a>

      <hr />
      <p>Copyright © 2022 BookinGood™. All rights reserved.</p>
    </Footer>
  );
};

export default FooterComponent;
