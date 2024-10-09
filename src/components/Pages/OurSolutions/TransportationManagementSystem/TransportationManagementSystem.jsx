import React, { useContext, useState } from "react";
import styles from "./TransportationManagementSystem.module.scss";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardHeader,
  Collapse,
  CardBody,
  Button,
} from "reactstrap";
import { cardTrackData, featuresTrackData, trackTexts } from "../../../constant/helper";
import ArrowDropUpIcon from "../../../../assets/icons/ArrowDropUpIcon";
import ArrowDropdownIcon from "../../../../assets/icons/ArrowDropdownIcon";
import { LanguageContext } from "../../../../contexts/LanguageContexts";

const TransportationManagementSystem = () => {
  const [activeIndex, setActiveIndex] = useState(0); 
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  const toggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const handleButtonClick = () => {
    navigate("/contact-us");
  };
  return (
    <div>
      <div className={styles["tms-header-section"]}>
        <h1 className={styles["title"]}>{trackTexts[language].headerTitle}</h1>
        <p className={styles["subtitle"]}>
          {trackTexts[language].headerSubtitle}
        </p>
      </div>

      <div className={styles["what-do-we-track-section"]}>
        <h1 className={styles["title"]}>{trackTexts[language].wdwtTitle}</h1>
        <div className={styles["card-container"]}>
          {cardTrackData[language].map((card, index) => (
            <Card
              className={styles["custom-card"]}
              key={index}
              style={{
                backgroundImage: `url(${card.imgSrc})`,
              }}
            >
              <CardTitle className={styles["card-title"]}>
                {card.title}
              </CardTitle>
              <CardSubtitle className={styles["card-subtitle"]}>
                {card.subtitle}
              </CardSubtitle>
            </Card>
          ))}
        </div>

        <div className={styles["main-features-container"]}>
          <h1 className={styles["feature-title"]}>
            <span className={styles["line"]}></span>
            <span className={styles["no-highlighted"]}>
              {trackTexts[language].mainText}
            </span>
            <span className={styles["highlighted"]}>
              {trackTexts[language].subText}
            </span>
            <span className={styles["line"]}></span>
          </h1>
          <div className={styles["feature-card-container"]}>
            {featuresTrackData.map((feature, index) => (
              <Card className={styles["feature-card"]} key={index}>
                <CardHeader
                  onClick={() => toggle(index)}
                  className={styles["feature-card-header"]}
                >
                  <div className={styles["feature-title-icon-container"]}>
                    <span>{feature.title}</span>
                    {activeIndex === index ? (
                      <ArrowDropdownIcon height={24} width={24} color="#fff" />
                    ) : (
                      <ArrowDropUpIcon height={24} width={24} color="#fff" />
                    )}
                  </div>
                </CardHeader>
                <Collapse isOpen={activeIndex === index}>
                  <CardBody className={styles["feature-card-body"]}>
                    {(feature.content && feature.content.includes(".jpg")) ||
                    feature.content.includes(".png") ? (
                      <img
                        src={feature.content}
                        alt={feature.title}
                        className={styles["feature-image"]}
                      />
                    ) : (
                      feature.content
                    )}
                  </CardBody>
                </Collapse>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className={styles["book-your-trial-section"]}>
        <h1 className={styles["title"]}>
          {trackTexts[language].bookYourTrialText}
        </h1>
        <div className={styles["button-container"]}>
          <Button
            variant="secondary"
            className={styles["click-here-button"]}
            onClick={handleButtonClick}
          >
            <div className={styles["button-text"]}>
              {trackTexts[language].clickHereText}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransportationManagementSystem;
