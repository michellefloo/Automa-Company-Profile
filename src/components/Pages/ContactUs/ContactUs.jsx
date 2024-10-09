import React, { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContexts";
import { cardContactInfoData, contactUsTexts } from "../../constant/helper";
import styles from "./ContactUs.module.scss";
import PhoneIcon from "../../../assets/icons/PhoneIcon";
import EmailIcon from "../../../assets/icons/EmailIcon";
import InstagramIcon from "../../../assets/icons/InstagramIcon";

const ContactUs = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <div className={styles["contact-us-header-section"]}>
        <h1 className={styles["title"]}>
          {contactUsTexts[language].headerTitle}
        </h1>
        <p className={styles["subtitle"]}>
          {contactUsTexts[language].headerSubtitle}
        </p>
      </div>

      <div className={styles["contact-info-section"]}>
        <h1 className={styles["contact-info-title"]}>
          <span className={styles["no-highlighted"]}>
            {contactUsTexts[language].contentTitleMainText}&nbsp;
          </span>
          <span className={styles["highlighted"]}>
            {contactUsTexts[language].contentTitleSubText}
          </span>
        </h1>

        <p className={styles["contact-info-subtitle"]}>
          {contactUsTexts[language].contentSubtitle}
        </p>

        <div className={styles["contact-info-card-container"]}>
          {cardContactInfoData[language].map((card) => (
            <div className={styles["contact-info-card-wrapper"]} key={card.id}>
              <div className={styles["white-card"]}>
                <div className={styles["contact-info-card-icon"]}>
                  {card.icons.includes("phone") && (
                    <PhoneIcon width={52} height={52} />
                  )}
                  {card.icons.includes("email") && (
                    <EmailIcon width={52} height={52} />
                  )}
                  {card.icons.includes("ig") && (
                    <InstagramIcon width={52} height={52} />
                  )}
                </div>
                <div className={styles["contact-info-card-content"]}>
                  <h3 className={styles["contact-info-card-title"]}>
                    {card.title}
                  </h3>
                  <p className={styles["contact-info-card-description"]}>
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
