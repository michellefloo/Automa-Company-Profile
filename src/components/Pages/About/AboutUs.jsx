import React from "react";
import styles from "./AboutUs.module.scss";
import wweImage from "../../../assets/img/AboutUs/why-we-exist-image.png";
import {
  missionCard,
  visionCard,
  wweCard,
} from "../../constant/helper";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";

const AboutUs = () => {
  return (
    <div>
      <div className={styles["about-us-header-section"]}>
        <h1 className={styles["title"]}>About Us</h1>
        <p className={styles["subtitle"]}>
          Maximize your transportation services efficiency with our planning,
          execution, and assessment services
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
              <span className={styles["text-headline"]}>About Us</span>
            </p>
            <h1 className={styles["wwe-title"]}>
              <span className={styles["no-highlighted"]}>Why We </span>
              <span className={styles["highlighted"]}>Exist?</span>
            </h1>
            <div className={styles["wwe-card-wrapper"]}>
              <div className={styles["blue-card"]}></div>
              <div className={styles["white-card"]}>
                <div className={styles["wwe-card-content"]}>
                  <h3 className={styles["wwe-card-title"]}>{wweCard.title}</h3>
                  <p className={styles["wwe-card-description"]}>
                    <span>{wweCard.descriptionOne}</span>
                    <span>{wweCard.descriptionTwo}</span>
                    <span>{wweCard.descriptionThree}</span>
                    <span>{wweCard.descriptionFour}</span>
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
          <span className={styles["no-highlighted"]}>Vision &</span>
          <span className={styles["highlighted"]}>Mission</span>
          <span className={styles["line"]}></span>
        </h1>
        <div className={styles["card-container"]}>
          <Card className={styles["custom-card"]}>
            <CardImg
              style={{ borderRadius: "8px 8px 0 0" }}
              top
              width="100%"
              src={visionCard.imgSrc}
              alt={visionCard.title}
            />
            <CardBody className={styles["card-body"]}>
              <CardTitle className={styles["card-title"]}>
                {visionCard.title}
              </CardTitle>
              <CardSubtitle className={styles["card-subtitle"]}>
                {visionCard.subtitle}
              </CardSubtitle>
            </CardBody>
          </Card>

          <Card className={styles["custom-card"]}>
            <CardBody className={styles["card-body"]}>
              <CardTitle className={styles["card-title"]}>
                {missionCard.title}
              </CardTitle>
              <CardSubtitle className={styles["card-subtitle"]}>
                {missionCard.subtitle}
              </CardSubtitle>
            </CardBody>
            <CardImg
              style={{ borderRadius: "0 0 8px 8px" }}
              top
              width="100%"
              src={missionCard.imgSrc}
              alt={missionCard.title}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
