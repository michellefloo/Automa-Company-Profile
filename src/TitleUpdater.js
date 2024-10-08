import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Automa - Green Supply Chain Enabler",
      "/transport-management-system":
        "Transportation Management System - Automa",
      "/carbon-tracking": "Carbon Tracking - Automa",
      "/energy-modeling": "Energy Modeling - Automa",
      "/about-us": "About Us - Automa",
      "/updates": "Updates - Automa",
      "/faq": "FAQ - Automa",
      "/contact-us": "Contact Us - Automa",
    };

    document.title = titles[location.pathname] || "Automa";
  }, [location]);

  return null; 
};

export default TitleUpdater;
