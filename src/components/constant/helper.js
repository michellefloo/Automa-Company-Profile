import carouselImageOne from "../../assets/img/HomePage/background-carbon-tracking.png";
import carouselImageTwo from "../../assets/img/HomePage/background-tms.png";
import carouselImageThree from "../../assets/img/HomePage/background-energy-modeling.png";
import distributionSolution from "../../assets/img/HomePage/background-distribution-solution.png";
import thirdPartyLogistic from "../../assets/img/HomePage/background-third-party-logistic.png";
import coldStorageSolution from "../../assets/img/HomePage/background-cold-storage-solution.png";
import carbonTrackingSolution from "../../assets/img/HomePage/background-carbon-tracking-solution.png";

// TMS
import cardTrackImageOne from "../../assets/img/TMS/background-real-time-location.png";
import cardTrackImageTwo from "../../assets/img/TMS/background-operational-KPI.png";
import cardTrackImageThree from "../../assets/img/TMS/background-fuel-consumption.png";
import cardTrackImageFour from "../../assets/img/TMS/background-proof-of-delivery.png";
import sensorOptionsTruckImage from "../../assets/img/TMS/sensor-options-truck.png";
import scorDashboardImage from "../../assets/img/TMS/scors-dashboard-image.png";
import fleetsManagementImage from "../../assets/img/TMS/fleets-management-image.png";
import fuelManagementImage from "../../assets/img/TMS/fuel-management-image.png";
import customerPlaceImage from "../../assets/img/TMS/customer-place-image.png";
import DOImage from "../../assets/img/TMS/do-image.png";
import sharedTrackerImage from "../../assets/img/TMS/shared-tracker-image.png";
import emailWAReportImage from "../../assets/img/TMS/email-report-whatsapp-image.png";
import thirdPartySupportImage from "../../assets/img/TMS/3pl-image.png";

// Carbon Tracking
import visibilityIcon from "../../assets/img/CarbonTracking/visibility-icon.png"
import integrityIcon from "../../assets/img/CarbonTracking/integrity-icon.png"
import allianceIcon from "../../assets/img/CarbonTracking/alliance-icon.png"
import visibilityImage from "../../assets/img/CarbonTracking/visibility-image.png"
import integrityImage from "../../assets/img/CarbonTracking/integrity-image.png"
import allianceImage from "../../assets/img/CarbonTracking/alliance-image.png"
import tmsIcon from "../../assets/img/CarbonTracking/tms-icon.png"
import energyModelingIcon from "../../assets/img/CarbonTracking/energy-modeling-icon.png"
import stockerIcon from "../../assets/img/CarbonTracking/stocker-icon.png"
import pointHubIcon from "../../assets/img/CarbonTracking/point-hub-icon.png"

export const cardData = [
  { title: "Distribution Solution", imgSrc: distributionSolution },
  { title: "3rd Party Logistic", imgSrc: thirdPartyLogistic },
  { title: "Cold Storage Solution", imgSrc: coldStorageSolution },
  { title: "Carbon Tracking", imgSrc: carbonTrackingSolution },
];

export const carouselData = [
  {
    title: "Carbon Tracking",
    imgSrc: carouselImageOne,
  },
  {
    title: "Transportation Management System",
    imgSrc: carouselImageTwo,
  },
  {
    title: "Energy Modeling",
    imgSrc: carouselImageThree,
  },
];

export const cardTrackData = [
  {
    title: "Real Time Location",
    subtitle:
      "Your fleet(s) progress open to you transparently 24/7. Any changes on the road will be recorded inch to inch.",
    imgSrc: cardTrackImageOne,
  },
  {
    title: "Operational KPI",
    subtitle:
      "Implementing SCOR based dashboard, giving KPI reference to help you operate an effective and efficient supply chain operation",
    imgSrc: cardTrackImageTwo,
  },
  {
    title: "Fuel Consumption",
    subtitle:
      "Support fuel leveling history, fill alert, theft alert, and geotagging. You could verify fleet(s) fuel bills if needed",
    imgSrc: cardTrackImageThree,
  },
  {
    title: "Proof of Delivery",
    subtitle:
      "Manage your delivery waypoint(s) with precise ETA and waypoint(s) optimization. Audit each delivery trips and store the proof of delivery",
    imgSrc: cardTrackImageFour,
  },
];

export const featuresData = [
  {
    title: "Sensor System",
    content: sensorOptionsTruckImage,
  },
  {
    title: "500R Board Dashboard",
    content: scorDashboardImage,
  },
  {
    title: "Fleets Management",
    content: fleetsManagementImage,
  },
  {
    title: "Fuel Management",
    content: fuelManagementImage,
  },
  {
    title: "Customers and Places",
    content: customerPlaceImage,
  },
  {
    title: "Delivery Orders Management",
    content: DOImage,
  },
  {
    title: "Shared Tracker",
    content: sharedTrackerImage,
  },
  {
    title: "Email & WhatsApp Support",
    content: emailWAReportImage,
  },
  {
    title: "3PL Support",
    content: thirdPartySupportImage,
  },
];

export const cardCarbonTrackingData = [
  {
    id: 1,
    title: "Visibility",
    description:
      "Track using our platform and operate your supply chain collaboratively with your vendors.",
    icon: visibilityIcon,
    image: visibilityImage,
  },
  {
    id: 2,
    title: "Integrity",
    description:
      "Report activity using automated emission invoice and Carbon Dashboarding. Verify your vendor’s report or yours using our On Demand Verification from curated professionals.",
    icon: integrityIcon,
    image: integrityImage,
  },
  {
    id: 3,
    title: "Alliance",
    description: "Connect Emission Invoices with external portals.",
    icon: allianceIcon,
    image: allianceImage,
  },
];

export const cardCarbonTrackignModulesData = [
  {
    id: 1,
    title: "TMS",
    description:
      "Plan, operate, and evaluate your miles with us. Increase customer satisfaction and reduce frauds with perfect ETA and perfect order fulfillment",
    icon: tmsIcon,
    width: 30,
    height: 40,
  },
  {
    id: 2,
    title: "Energy Modelling",
    description:
      "Do energy modelling, metering, and audit. Get insight about how you could consume less!",
    icon: energyModelingIcon,
    width: 30,
    height: 40,
  },
  {
    id: 3,
    title: "Stocker",
    description:
      "Functioning as a simple warehouse application, this module can perform stock recording and order process synchronization.",
    icon: stockerIcon,
    width: 30,
    height: 30,
  },
  {
    id: 4,
    title: "Point Hub",
    description:
      "Save your customer geolocation data and use our KYB verification to check them!",
    icon: pointHubIcon,
    width: 30,
    height: 40,
  },
];
