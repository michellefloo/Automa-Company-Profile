import React, { useState } from "react";
import styles from "./EnergyModeling.module.scss";
import { useNavigate } from "react-router-dom";
import { cardEnermoData, featuresEnermoData } from "../../../constant/helper";
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

const EnergyModeling = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

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
        <h1 className={styles["title"]}>Energy Modelling</h1>
        <p className={styles["subtitle"]}>
          Get insight about how you could consume less with Metering, Energy
          Modelling, and Audit.
        </p>
      </div>

      <div className={styles["what-are-the-definition-section"]}>
        <h1 className={styles["title"]}>What Are The Definition?</h1>
        <div className={styles["card-container"]}>
          {cardEnermoData.map((card, index) => (
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
            <span className={styles["no-highlighted"]}>Main</span>
            <span className={styles["highlighted"]}>Features</span>
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
        <h1 className={styles["title"]}>Book Your Trial</h1>
        <div className={styles["button-container"]}>
          <Button
            variant="secondary"
            className={styles["click-here-button"]}
            onClick={handleButtonClick}
          >
            <div className={styles["button-text"]}>Click Here</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnergyModeling;
