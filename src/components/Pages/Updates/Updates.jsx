import React, { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContexts";
import styles from "./Updates.module.scss";
import {
    homePagecardData,
  updatesCardData,
  updatesTexts,
  updatesWWECard,
} from "../../constant/helper";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import wweImage from "../../../assets/img/Updates/truck-image.png";

const Updates = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <div className={styles["updates-header-section"]}>
        <h1 className={styles["title"]}>
          {updatesTexts[language].headerTitle}
        </h1>
        <p className={styles["subtitle"]}>
          {updatesTexts[language].headerSubtitle}
        </p>
      </div>

      <div className={styles["one-ecosystem-multi-module-section"]}>
        <h1 className={styles["one-ecosystem-multi-module-title"]}>
          <span className={styles["line"]}></span>
          <span className={styles["no-highlighted"]}>
            {updatesTexts[language].oemmText}
          </span>
          <span className={styles["highlighted"]}>
            {updatesTexts[language].oemmSubText}
          </span>
          <span className={styles["line"]}></span>
        </h1>
        <div className={styles["card-container"]}>
          {updatesCardData[language].map((card, index) => (
            <Card className={styles["custom-card"]} key={index}>
              <CardImg top width="100%" src={card.imgSrc} alt={card.title} />
              <CardBody className={styles["card-body"]}>
                <CardTitle className={styles["card-title"]}>
                  {card.title}
                </CardTitle>
              </CardBody>
            </Card>
          ))}
        </div>
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
                {updatesTexts[language].headlineText}
              </span>
            </p>
            <h1 className={styles["wwe-title"]}>
              <span className={styles["no-highlighted"]}>
                {updatesTexts[language].oemmFirstText}{" "}
              </span>
              <span className={styles["highlighted"]}>
                {updatesTexts[language].oemmSecondText}
              </span>
              <span className={styles["no-highlighted"]}>
                {updatesTexts[language].oemmThirdText}{" "}
              </span>
              <span className={styles["highlighted"]}>
                {updatesTexts[language].oemmFourthText}{" "}
              </span>
              <span className={styles["no-highlighted"]}>
                {updatesTexts[language].oemmFifthText}{" "}
              </span>
            </h1>
            <div className={styles["wwe-card-wrapper"]}>
              <div className={styles["blue-card"]}></div>
              <div className={styles["white-card"]}>
                <div className={styles["wwe-card-content"]}>
                  <p className={styles["wwe-card-description"]}>
                    <span>{updatesWWECard[language].descriptionOne}</span>
                    <span>{updatesWWECard[language].descriptionTwo}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["supply-chain-exist-section"]}>
        <h1 className={styles["supply-chain-exist-title"]}>
          <span className={styles["no-highlighted"]}>
            {updatesTexts[language].sceFirstText}{" "}
          </span>
          <span className={styles["highlighted"]}>
            {updatesTexts[language].sceSecondText}{" "}
          </span>
          <span className={styles["no-highlighted"]}>
            {updatesTexts[language].sceThirdText}
          </span>
        </h1>
        <div className={styles["card-container"]}>
          {homePagecardData[language].map((card, index) => (
            <Card className={styles["custom-card"]} key={index}>
              <CardImg top width="100%" src={card.imgSrc} alt={card.title} />
              <CardBody className={styles["card-body"]}>
                <CardTitle className={styles["card-title"]}>
                  {card.title}
                </CardTitle>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Updates;
