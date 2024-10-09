import React, { useContext } from "react";
import styles from "./AboutUs.module.scss";
import wweImage from "../../../assets/img/AboutUs/why-we-exist-image.png";
import {
  aboutUsTexts,
  missionCard,
  visionCard,
  wweCard,
} from "../../constant/helper";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import { LanguageContext } from "../../../contexts/LanguageContexts";

const AboutUs = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <div className={styles["about-us-header-section"]}>
        <h1 className={styles["title"]}>
          {aboutUsTexts[language].headerTitle}
        </h1>
        <p className={styles["subtitle"]}>
          {aboutUsTexts[language].headerSubtitle}
        </p>
      </div>

      <div className={styles["why-we-exist-section"]}>
        <div className={styles["why-we-exist-container"]}>
          <img
            src={wweImage}
            alt="Why We Exist"
            className={styles["wwe-image"]}
          />
          <div className={styles["wwe-text-container"]}>
            <p className={styles["wwe-headline"]}>
              <span className={styles["line"]}></span>
              <span className={styles["text-headline"]}>
                {aboutUsTexts[language].headlineText}
              </span>
            </p>
            <h1 className={styles["wwe-title"]}>
              <span className={styles["no-highlighted"]}>
                {aboutUsTexts[language].wweMainText}
              </span>
              <span className={styles["highlighted"]}>
                {aboutUsTexts[language].wweSubText}
              </span>
            </h1>
            <div className={styles["wwe-card-wrapper"]}>
              <div className={styles["blue-card"]}></div>
              <div className={styles["white-card"]}>
                <div className={styles["wwe-card-content"]}>
                  <h3 className={styles["wwe-card-title"]}>
                    {wweCard[language].title}
                  </h3>
                  <p className={styles["wwe-card-description"]}>
                    <span>{wweCard[language].descriptionOne}</span>
                    <span>{wweCard[language].descriptionTwo}</span>
                    <span>{wweCard[language].descriptionThree}</span>
                    <span>{wweCard[language].descriptionFour}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["vision-and-mission-section"]}>
        <h1 className={styles["vision-mission-title"]}>
          <span className={styles["line"]}></span>
          <span className={styles["no-highlighted"]}>
            {aboutUsTexts[language].visionText}&nbsp;
          </span>
          <span className={styles["highlighted"]}>
            {aboutUsTexts[language].missionText}
          </span>
          <span className={styles["line"]}></span>
        </h1>
        <div className={styles["card-container"]}>
          <Card className={styles["custom-card"]}>
            <CardImg
              style={{ borderRadius: "8px 8px 0 0" }}
              top
              width="100%"
              src={visionCard[language].imgSrc}
              alt={visionCard[language].title}
            />
            <CardBody className={styles["card-body"]}>
              <CardTitle className={styles["card-title"]}>
                {visionCard[language].title}
              </CardTitle>
              <CardSubtitle className={styles["card-subtitle"]}>
                {visionCard[language].subtitle}
              </CardSubtitle>
            </CardBody>
          </Card>

          <Card className={styles["custom-card"]}>
            <CardBody className={styles["card-body"]}>
              <CardTitle className={styles["card-title"]}>
                {missionCard[language].title}
              </CardTitle>
              <CardSubtitle className={styles["card-subtitle"]}>
                {missionCard[language].subtitle}
              </CardSubtitle>
            </CardBody>
            <CardImg
              style={{ borderRadius: "0 0 8px 8px" }}
              top
              width="100%"
              src={missionCard[language].imgSrc}
              alt={missionCard[language].title}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
