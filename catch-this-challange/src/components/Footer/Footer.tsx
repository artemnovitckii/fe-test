import React from "react";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="content-container">
        <div className="social-media">
          <div className="social-media__icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <YoutubeIcon />
            </a>
          </div>
          <p className="social-media__description">
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh.
          </p>
        </div>
        <div className="information-container">
          <div className="address-details">
            <p className="address-details__heading"> Main Office</p>
            <p>6235 Thalia Terrace Apt. 695</p>
            <p>Frederikfurt</p>
            <p>Jamaica</p>
          </div>
          <div className="contact-details">
            <p>Contact</p>
            <p>735-421-6378</p>
            <a href="mailto:myname@gmail.com">myname@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
