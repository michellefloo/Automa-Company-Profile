import React, { useContext } from "react";
import styles from "./CarbonTracking.module.scss";
import {
  carbonTrackingTexts,
  cardCarbonTrackingModulesData,
  cardCarbonTrackingData,
} from "../../../constant/helper";
import { LanguageContext } from "../../../../contexts/LanguageContexts";

const CarbonTracking = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <div className={styles["carbon-tracking-header-section"]}>
        <h1 className={styles["title"]}>
          {carbonTrackingTexts[language].headerTitle}
        </h1>
        <p className={styles["subtitle"]}>
          {carbonTrackingTexts[language].headerSubtitle}
        </p>
      </div>

      <div className={styles["how-we-do-it-section"]}>
        <h1 className={styles["title"]}>
          {carbonTrackingTexts[language].hwdiTitle}
        </h1>
        <div className={styles["card-container"]}>
          {cardCarbonTrackingData[language].map((card) => (
            <div className={styles["card"]} key={card.id}>
              <img
                src={card.image}
                alt={card.title}
                className={styles["card-image"]}
              />
              <div className={styles["icon-container"]}>
                <img
                  src={card.icon}
                  alt={card.title}
                  className={styles["card-icon"]}
                />
              </div>
              <div className={styles["card-title-desc-container"]}>
                <h3 className={styles["card-title"]}>{card.title}</h3>
                <p className={styles["card-description"]}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles["our-modules-section"]}>
        <h1 className={styles["modules-title"]}>
          <span className={styles["line"]}></span>
          <span className={styles["no-highlighted"]}>
            {carbonTrackingTexts[language].mainText}
          </span>
          <span className={styles["highlighted"]}>
            {carbonTrackingTexts[language].subText}
          </span>
          <span className={styles["line"]}></span>
        </h1>
        <div className={styles["modules-card-container"]}>
          {cardCarbonTrackingModulesData[language].map((modulesCard) => (
            <div
              className={styles["modules-card-wrapper"]}
              key={modulesCard.id}
            >
              <div className={styles["blue-card"]}></div>
              <div className={styles["white-card"]}>
                <div className={styles["modules-card-icon"]}>
                  <img
                    src={modulesCard.icon}
                    alt={modulesCard.title}
                    style={{
                      width: modulesCard.width,
                      height: modulesCard.height,
                    }}
                  />
                </div>
                <div className={styles["modules-card-content"]}>
                  <h3 className={styles["modules-card-title"]}>
                    {modulesCard.title}
                  </h3>
                  <p className={styles["modules-card-description"]}>
                    {modulesCard.description}
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

export default CarbonTracking;
