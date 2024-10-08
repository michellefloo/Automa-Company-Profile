import React, { useContext, useState } from "react";
import styles from "./EnergyModeling.module.scss";
import { useNavigate } from "react-router-dom";
import { cardEnermoData, enermoTexts, featuresEnermoData } from "../../../constant/helper";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Collapse,
} from "reactstrap";
import ArrowDropdownIcon from "../../../../assets/icons/ArrowDropdownIcon";
import ArrowDropUpIcon from "../../../../assets/icons/ArrowDropUpIcon";
import { LanguageContext } from "../../../../contexts/LanguageContexts";

const EnergyModeling = () => {
  const [activeIndex, setActiveIndex] = useState(null);
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
      <div className={styles["energy-modeling-header-section"]}>
        <h1 className={styles["title"]}>{enermoTexts[language].headerTitle}</h1>
        <p className={styles["subtitle"]}>
          {enermoTexts[language].headerSubtitle}
        </p>
      </div>

      <div className={styles["what-are-the-definition-section"]}>
        <h1 className={styles["title"]}>{enermoTexts[language].watdTitle}</h1>
        <div className={styles["card-container"]}>
          {cardEnermoData[language].map((card, index) => (
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
              {enermoTexts[language].mainText}
            </span>
            <span className={styles["highlighted"]}>
              {enermoTexts[language].subText}
            </span>
            <span className={styles["line"]}></span>
          </h1>
          <div className={styles["feature-card-container"]}>
            {featuresEnermoData.map((feature, index) => (
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
          {enermoTexts[language].bookYourTrialText}
        </h1>
        <div className={styles["button-container"]}>
          <Button
            variant="secondary"
            className={styles["click-here-button"]}
            onClick={handleButtonClick}
          >
            <div className={styles["button-text"]}>
              {enermoTexts[language].clickHereText}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnergyModeling;
