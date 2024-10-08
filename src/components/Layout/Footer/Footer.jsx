import React, { useContext } from "react";
import styles from "./Footer.module.scss";
import logo from "../../../assets/img/logo.png";
import IGIcon from "../../../assets/icons/IGIcon";
import LinkedinIcon from "../../../assets/icons/LinkedinIcon";
import { Badge } from "reactstrap";
import { LanguageContext } from "../../../contexts/LanguageContexts";
import { footerTexts } from "../../constant/helper";

const Footer = () => {
  const { language } = useContext(LanguageContext);

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
          <p className={styles["footer-follow-us"]}>
            {footerTexts[language].followUs}
          </p>
          <div className={styles["social-media"]}>
            <Badge color="primary" className={styles["instagram-icon"]}>
              <a href="https://www.instagram.com/automa_supply_chain/">
                <IGIcon color="#FFFF" width="20px" height="18px" />
              </a>
            </Badge>
            <Badge color="primary" className={styles["instagram-icon"]}>
              <a href="https://www.linkedin.com/company/automachain/mycompany/">
                <LinkedinIcon color="#FFFF" width="16px" height="16px" />
              </a>
            </Badge>
          </div>
        </div>

        {/* Company Section */}
        <div className={styles["company-section"]}>
          <h4 className={styles["title"]}>
            {footerTexts[language].company.title}
          </h4>
          <ul className={styles["custom-ul"]}>
            <li className={styles["custom-li"]}>
              <a className={styles["custom-a"]} href="/">
                {footerTexts[language].company.home}
              </a>
            </li>
            <li className={styles["custom-li"]}>
              <a className={styles["custom-a"]} href="/about-us">
                {footerTexts[language].company.aboutUs}
              </a>
            </li>
          </ul>
        </div>

        {/* Our Solutions Section */}
        <div className={styles["our-solutions-section"]}>
          <h4 className={styles["title"]}>
            {footerTexts[language].solutions.title}
          </h4>
          <ul className={styles["custom-ul"]}>
            <li className={styles["custom-li"]}>
              <a
                className={styles["custom-a"]}
                href="/transport-management-system"
              >
                {footerTexts[language].solutions.tms}
              </a>
            </li>
            <li className={styles["custom-li"]}>
              <a className={styles["custom-a"]} href="/carbon-tracking">
                {footerTexts[language].solutions.carbonTracking}
              </a>
            </li>
            <li className={styles["custom-li"]}>
              <a className={styles["custom-a"]} href="/energy-modeling">
                {footerTexts[language].solutions.energyModeling}
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className={styles["resources-section"]}>
          <h4 className={styles["title"]}>
            {footerTexts[language].resources.title}
          </h4>
          <ul className={styles["custom-ul"]}>
            <li className={styles["custom-li"]}>
              <a className={styles["custom-a"]} href="/updates">
                {footerTexts[language].resources.updates}
              </a>
            </li>
            <li className={styles["custom-li"]}>
              <a className={styles["custom-a"]} href="/faq">
                {footerTexts[language].resources.FAQ}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
