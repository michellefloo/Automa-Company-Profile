import React, { useContext, useState } from "react";
import styles from "./FAQ.module.scss";
import { LanguageContext } from "../../../contexts/LanguageContexts";
import {
  businessFAQDropdownData,
  technicalFAQDropdownData,
  faqTexts,
} from "../../constant/helper";
import { Button, Card, CardBody, CardHeader, Collapse } from "reactstrap";
import MinusIcon from "../../../assets/icons/MinusIcon";
import PlusIcon from "../../../assets/icons/PlusIcon";

const FAQ = () => {
  const { language } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState("business");
  const [activeIndex, setActiveIndex] = useState(0); // Buka dropdown pertama secara default

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Ganti tab dan selalu buka dropdown pertama
    setActiveIndex(0); // Biar dropdown pertama di tab baru langsung terbuka
  };

  const toggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Kalau klik dropdown yang sama, tutup aja
    } else {
      setActiveIndex(index); // Kalau beda, buka dropdown yang diklik
    }
  };

  return (
    <div>
      <div className={styles["faq-header-section"]}>
        <h1 className={styles["title"]}>{faqTexts[language].headerTitle}</h1>
        <p className={styles["subtitle"]}>
          {faqTexts[language].headerSubtitle}
        </p>
      </div>

      <div className={styles["faq-business-technical-section"]}>
        <div className={styles["faq-business-technical-text-container"]}>
          <p className={styles["faq-business-technical-headline"]}>
            <span className={styles["line"]}></span>
            <span className={styles["text-headline"]}>
              {faqTexts[language].headlineText}
            </span>
          </p>
          <h1 className={styles["faq-business-technical-title"]}>
            <span className={styles["highlighted"]}>
              {activeTab === "business"
                ? faqTexts[language].businessTitle
                : faqTexts[language].technicalTitle}
            </span>{" "}
            <span className={styles["no-highlighted"]}>
              {faqTexts[language].headlineText}
            </span>
          </h1>
        </div>
        <div className={styles["tab-buttons"]}>
          <Button
            className={
              activeTab === "business"
                ? `${styles["business-tab-primary"]}`
                : `${styles["business-tab-secondary"]}`
            }
            color={activeTab === "business" ? "primary" : "secondary"}
            onClick={() => handleTabClick("business")}
          >
            {faqTexts[language].businessTabText}
          </Button>
          <Button
            className={
              activeTab === "technical"
                ? `${styles["technical-tab-primary"]}`
                : `${styles["technical-tab-secondary"]}`
            }
            onClick={() => handleTabClick("technical")}
          >
            {faqTexts[language].technicalTabText}
          </Button>
        </div>
        {activeTab === "business" ? (
          <div className={styles["faq-card-container"]}>
            {businessFAQDropdownData[language].map((faq, index) => (
              <Card className={styles["faq-card"]} key={index}>
                <CardHeader
                  onClick={() => toggle(index)}
                  className={
                    activeIndex === index
                      ? `${styles["faq-card-active-header"]}`
                      : `${styles["faq-card-header"]}`
                  }
                >
                  <div className={styles["faq-title-icon-container"]}>
                    <span>{faq.title}</span>
                    {activeIndex === index ? (
                      <MinusIcon height={24} width={24} color="#fff" />
                    ) : (
                      <PlusIcon height={24} width={24} color="#1C406C" />
                    )}
                  </div>
                </CardHeader>
                <Collapse isOpen={activeIndex === index}>
                  <CardBody className={styles["faq-card-body"]}>
                    {faq.content}
                  </CardBody>
                </Collapse>
              </Card>
            ))}
          </div>
        ) : (
          <div className={styles["faq-card-container"]}>
            {technicalFAQDropdownData[language].map((faq, index) => (
              <Card className={styles["faq-card"]} key={index}>
                <CardHeader
                  onClick={() => toggle(index)}
                  className={
                    activeIndex === index
                      ? `${styles["faq-card-active-header"]}`
                      : `${styles["faq-card-header"]}`
                  }
                >
                  <div className={styles["faq-title-icon-container"]}>
                    <span>{faq.title}</span>
                    {activeIndex === index ? (
                      <MinusIcon height={24} width={24} color="#fff" />
                    ) : (
                      <PlusIcon height={24} width={24} color="#1C406C" />
                    )}
                  </div>
                </CardHeader>
                <Collapse isOpen={activeIndex === index}>
                  <CardBody className={styles["faq-card-body"]}>
                    {faq.content}
                  </CardBody>
                </Collapse>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
