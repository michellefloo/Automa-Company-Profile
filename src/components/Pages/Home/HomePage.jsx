import React, { useState } from "react";
import styles from "./HomePage.module.scss";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
import locationIcon from "../../../assets/img/HomePage/location-icon.png";
import operationalIcon from "../../../assets/img/HomePage/operational-icon.png";
import fuelConsumptionIcon from "../../../assets/img/HomePage/fuel-consumption-icon.png";
import proofOfDeliveryIcon from "../../../assets/img/HomePage/proof-of-delivery-icon.png";
import ArrowLeftIcon from "../../../assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "../../../assets/icons/ArrowRightIcon";
import { cardData, carouselData } from "../../constant/helper";


const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle left arrow click
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  // Function to handle right arrow click
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className={styles["homepage-header-section"]}>
        <h1 className={styles["title"]}>Transportation Management System</h1>
        <p className={styles["subtitle"]}>
          Maximize your transportation services efficiency with our planning,
          execution, and assessment services
        </p>
        <div className={styles["button-container"]}>
          <Button color="primary" className={`${styles["talk-to-us-button"]}`}>
            Talk to Us
          </Button>
          <Button color="secondary" className={`${styles["free-try-button"]}`}>
            Try it For Free
          </Button>
        </div>
      </div>

      <div className={styles["what-do-we-track-section"]}>
        <h1 className={styles["title"]}>What do we track?</h1>
        <div className={styles["card-container"]}>
          <Card
            style={{
              width: "18rem",
              borderRadius: "8px",
            }}
            className={styles["card"]}
          >
            <CardBody className={styles["card-body"]}>
              <img
                alt="locationIcon"
                src={locationIcon}
                style={{ width: "40px", marginBottom: "20px" }}
              />
              <CardTitle className={styles["card-title"]} tag="h5">
                Real Time Location
              </CardTitle>
              <CardText className={styles["card-text"]}>
                Your fleet(s) progress open to you transparently 24/7. Any
                changes on the road will be recorded inch to inch.
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
              borderRadius: "8px",
            }}
            className={styles["card"]}
          >
            <CardBody className={styles["card-body"]}>
              <img
                alt="operationalIcon"
                src={operationalIcon}
                style={{ width: "55px", marginBottom: "20px" }}
              />
              <CardTitle className={styles["card-title"]} tag="h5">
                Operational KPI
              </CardTitle>
              <CardText className={styles["card-text"]}>
                Implementing SCOR based dashboard, giving KPI reference to help
                you operate an effective and efficient supply chain operation
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
              borderRadius: "8px",
            }}
            className={styles["card"]}
          >
            <CardBody className={styles["card-body"]}>
              <img
                alt="fuelConsumptionIcon"
                src={fuelConsumptionIcon}
                style={{ width: "44px", marginBottom: "20px" }}
              />
              <CardTitle className={styles["card-title"]} tag="h5">
                Fuel Consumption
              </CardTitle>
              <CardText className={styles["card-text"]}>
                Support fuel leveling history, fill alert, theft alert, and
                geotagging. You could verify fleet(s) fuel bills if needed
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
              borderRadius: "8px",
            }}
            className={styles["card"]}
          >
            <CardBody className={styles["card-body"]}>
              <img
                alt="proofOfDeliveryIcon"
                src={proofOfDeliveryIcon}
                style={{ width: "89px", marginBottom: "20px" }}
              />
              <CardTitle className={styles["card-title"]} tag="h5">
                Proof of Delivery
              </CardTitle>
              <CardText className={styles["card-text"]}>
                Manage your delivery waypoint(s) with precise ETA and
                waypoint(s) optimization. Audit each delivery trips and store
                the proof of delivery
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div
          className={styles["carousel-container"]}
          style={{
            backgroundImage: `url(${carouselData[currentIndex].imgSrc})`,
          }}
        >
          <div className={styles["carousel-content"]}>
            <Button
              variant="secondary"
              className={styles["arrow-left-button"]}
              onClick={handleLeftClick}
            >
              <div className={styles["arrow-left-icon"]}>
                <ArrowLeftIcon width={20} height={30} color="#1C406C" />
              </div>
            </Button>
            <div className={styles["carbon-tracking-button-title-container"]}>
              <h1 className={styles["title"]}>
                {carouselData[currentIndex].title}
              </h1>
              <div className={styles["button-container"]}>
                <Button
                  variant="secondary"
                  className={styles["click-here-button"]}
                >
                  <div className={styles["button-text"]}>Click Here</div>
                </Button>
              </div>
            </div>
            <Button
              variant="secondary"
              className={styles["arrow-right-button"]}
              onClick={handleRightClick}
            >
              <div className={styles["arrow-right-icon"]}>
                <ArrowRightIcon width={20} height={30} color="#1C406C" />
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div className={styles["solution-section"]}>
        <div className={styles["card-container"]}>
          {cardData.map((card, index) => (
            <Card className={styles["customCard"]} key={index}>
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
    </>
  );
};

export default HomePage;
