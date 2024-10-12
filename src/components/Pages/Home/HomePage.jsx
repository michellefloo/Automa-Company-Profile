import React, { useContext, useState } from "react";
import styles from "./HomePage.module.scss";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import locationIcon from "../../../assets/img/HomePage/location-icon.png";
import operationalIcon from "../../../assets/img/HomePage/operational-icon.png";
import fuelConsumptionIcon from "../../../assets/img/HomePage/fuel-consumption-icon.png";
import proofOfDeliveryIcon from "../../../assets/img/HomePage/proof-of-delivery-icon.png";
import ArrowLeftIcon from "../../../assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "../../../assets/icons/ArrowRightIcon";
import {
  carouselData,
  homePageCardData,
  homePageTexts,
  routeMapping,
} from "../../constant/helper";
import { LanguageContext } from "../../../contexts/LanguageContexts";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  // Function to handle left arrow click
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData[language].length - 1 : prevIndex - 1
    );
  };

  // Function to handle right arrow click
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData[language].length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleButtonTalkToUsClick = () => {
    navigate("/contact-us");
  };

  const handleButtonCarouselClick = () => {
    const currentTitle = carouselData[language][currentIndex].title;
    const route = routeMapping[currentTitle];
    if (route) {
      navigate(route);
    }
  };

  return (
    <>
      <div className={styles["homepage-header-section"]}>
        <h1 className={styles["title"]}>
          {homePageTexts[language].headerTitle}
        </h1>
        <p className={styles["subtitle"]}>
          {homePageTexts[language].headerSubtitle}
        </p>
        <div className={styles["button-container"]}>
          <Button
            color="primary"
            className={`${styles["talk-to-us-button"]}`}
            onClick={handleButtonTalkToUsClick}
          >
            {homePageTexts[language].talkToUs}
          </Button>
          <Button color="secondary" className={`${styles["free-try-button"]}`}>
            {homePageTexts[language].tryForFree}
          </Button>
        </div>
      </div>

      <div className={styles["what-do-we-track-section"]}>
        <h1 className={styles["title"]}>
          {homePageTexts[language].trackTitle}
        </h1>
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
                {homePageTexts[language].location.title}
              </CardTitle>
              <CardText className={styles["card-text"]}>
                {homePageTexts[language].location.description}
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
                {homePageTexts[language].operational.title}
              </CardTitle>
              <CardText className={styles["card-text"]}>
                {homePageTexts[language].operational.description}
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
                {homePageTexts[language].fuel.title}
              </CardTitle>
              <CardText className={styles["card-text"]}>
                {homePageTexts[language].fuel.description}
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
                {homePageTexts[language].proof.title}
              </CardTitle>
              <CardText className={styles["card-text"]}>
                {homePageTexts[language].proof.description}
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div
          className={styles["carousel-container"]}
          style={{
            backgroundImage: `url(${carouselData[language][currentIndex].imgSrc})`, // Use language to select the correct data
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
                {carouselData[language][currentIndex].title}
              </h1>
              <div className={styles["button-container"]}>
                <Button
                  variant="secondary"
                  className={styles["click-here-button"]}
                  onClick={handleButtonCarouselClick}
                >
                  <div className={styles["button-text"]}>
                    {homePageTexts[language].clickHereButton}
                  </div>
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
          {homePageCardData[language].map((card, index) => (
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
    </>
  );
};

export default HomePage;
