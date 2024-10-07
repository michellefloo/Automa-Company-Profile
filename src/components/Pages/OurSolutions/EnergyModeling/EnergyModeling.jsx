import React from "react";
import styles from "./EnergyModeling.module.scss";

const EnergyModeling = () => {
  return (
    <div>
      <div className={styles["energy-modeling-header-section"]}>
        <h1 className={styles["title"]}>Energy Modelling</h1>
        <p className={styles["subtitle"]}>
          Get insight about how you could consume less with Metering, Energy
          Modelling, and Audit.
        </p>
      </div>
    </div>
  );
};

export default EnergyModeling;
