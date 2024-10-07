import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../../assets/img/logo.png";
import IGIcon from "../../../assets/icons/IGIcon";
import FBIcon from "../../../assets/icons/FBIcon"
import LinkedinIcon from "../../../assets/icons/LinkedinIcon"
import { Badge } from "reactstrap";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-container"]}>
        {/* Logo and Location */}
        <div className={styles["footer-section"]}>
          <img
            src={logo}
            alt="automa logo"
            style={{ height: "40px", marginBottom: "16px" }}
          />
          <p className={styles["footer-location"]}>Jakarta, Indonesia</p>
          <p className={styles["footer-company"]}>
            &copy; 2024 PT Sentra Solusi Automa
          </p>
          <p className={styles["footer-follow-us"]}>Follow Us</p>
          <div className={styles["social-media"]}>
            <Badge color="primary" className={styles["instagram-icon"]}>
              <IGIcon color="#FFFF" width="20px" height="18px" />
            </Badge>
            <Badge color="primary" className={styles["instagram-icon"]}>
              <FBIcon color="#FFFF" width="20px" height="18px" />
            </Badge>
            <Badge color="primary" className={styles["instagram-icon"]}>
              <LinkedinIcon color="#FFFF" width="16px" height="16px" />
            </Badge>
          </div>
        </div>

        {/* Company Section */}
        <div className={styles["company-section"]}>
          <h4 className={styles["title"]}>Company</h4>
          <ul className={styles["custom-ul"]}>
            <li className={styles["custom-li"]}>
              <a className={styles["custom-a"]} href="/">
                Home
              </a>
            </li>
            <li className={styles["custom-li"]}>
              <a className={styles["custom-a"]} href="/about-us">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Our Solutions Section */}
        <div className={styles["our-solutions-section"]}>
          <h4 className={styles["title"]}>Our Solutions</h4>
          <ul className={styles["custom-ul"]}>
            <li className={styles["custom-li"]}>
              <a className={styles["custom-a"]} href="/transport-management-system">
                Transportation Management System
              </a>
            </li>
            <li className={styles["custom-li"]}>
              <a className={styles["custom-a"]} href="/carbon-tracking">
                Carbon Tracking
              </a>
            </li>
            <li className={styles["custom-li"]}>
              <a className={styles["custom-a"]} href="/energy-modeling">
                Energy Modeling
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className={styles["resources-section"]}>
          <h4 className={styles["title"]}>Resources</h4>
          <ul className={styles["custom-ul"]}>
            <li className={styles["custom-li"]}>
              <a className={styles["custom-a"]} href="/updates">
                Updates
              </a>
            </li>
            <li className={styles["custom-li"]}>
              <a className={styles["custom-a"]} href="/faq">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
