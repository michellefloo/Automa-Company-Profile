import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TitleUpdater from "./TitleUpdater";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Navbar = React.lazy(() => import("./components/Layout/Navbar/Navbar"));

// Main Content
const HomePage = React.lazy(() => import("./components/Pages/Home/HomePage"));
const TransportationManagementSystem = React.lazy(() =>
  import(
    "./components/Pages/OurSolutions/TransportationManagementSystem/TransportationManagementSystem"
  )
);
const CarbonTracking = React.lazy(() =>
  import("./components/Pages/OurSolutions/CarbonTracking/CarbonTracking")
);
const EnergyModeling = React.lazy(() =>
  import("./components/Pages/OurSolutions/EnergyModeling/EnergyModeling")
);
const AboutUs = React.lazy(() => import("./components/Pages/About/AboutUs"));

const Footer = React.lazy(() => import("./components/Layout/Footer/Footer"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <TitleUpdater />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/transport-management-system"
                element={<TransportationManagementSystem />}
              />
              <Route path="/carbon-tracking" element={<CarbonTracking />} />
              <Route path="/energy-modeling" element={<EnergyModeling />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/updates" element={<div>Updates Page</div>} />
              <Route path="/faq" element={<div>FAQ Page</div>} />
              <Route path="/contact-us" element={<div>Contact Us Page</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
