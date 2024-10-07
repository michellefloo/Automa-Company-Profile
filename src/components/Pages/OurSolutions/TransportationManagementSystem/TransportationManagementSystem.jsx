import React, { useState } from "react";
import styles from "./TransportationManagementSystem.module.scss";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardHeader,
  Collapse,
  CardBody,
  Button,
} from "reactstrap";
import { cardTrackData, featuresData } from "../../../constant/helper";
import ArrowDropUpIcon from "../../../../assets/icons/ArrowDropUpIcon";
import ArrowDropdownIcon from "../../../../assets/icons/ArrowDropdownIcon";

const TransportationManagementSystem = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div>
      <div className={styles["tms-header-section"]}>
        <h1 className={styles["title"]}>Track X</h1>
        <p className={styles["subtitle"]}>
          We know managing fleets manually could be a stress-inducing task. Let
          us do it for you! Our Track X platform’s designed to help you manage
          your vehicles – to track locations, velocity, fleet condition, and
          statistics in real-time.
        </p>
      </div>

      <div className={styles["what-do-we-track-section"]}>
        <h1 className={styles["title"]}>What Do We Track?</h1>
        <div className={styles["card-container"]}>
          {cardTrackData.map((card, index) => (
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
            {featuresData.map((feature, index) => (
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
          <Button variant="secondary" className={styles["click-here-button"]}>
            <div className={styles["button-text"]}>Click Here</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransportationManagementSystem;
