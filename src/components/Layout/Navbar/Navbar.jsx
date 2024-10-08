import React, { useContext, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Button,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "../../../assets/img/logo.png";
import USFlag from "../../../assets/img/USFlag.png";
import IDFlag from "../../../assets/img/IDFlag.png";
import { LanguageContext } from "../../../contexts/LanguageContexts";
import { navbarTexts } from "../../constant/helper";


const NavbarCompanyProfile = () => {
  const { language, switchLanguage } = useContext(LanguageContext); 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <Navbar color="dark" dark expand="md" className={styles["navbar-custom"]}>
      <div className={styles["navbar-container"]}>
        {/* Logo Section */}
        <NavbarBrand href="/">
          <img src={logo} alt="automa logo" style={{ height: "40px" }} />
        </NavbarBrand>

        {/* Toggler button for small screens */}
        <NavbarToggler
          onClick={toggle}
          className={styles["navbar-toggler-right"]}
        />

        {/* Collapse menu */}
        <Collapse
          isOpen={isOpen}
          navbar
          className={`${styles["nav-collapse"]} ${isOpen ? "open" : ""}`}
        >
          <Nav className={styles["nav-item-container"]} navbar>
            <NavItem>
              <RouterNavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                {navbarTexts[language].home}
              </RouterNavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {navbarTexts[language].solutions.title}
              </DropdownToggle>
              <DropdownMenu className={styles["dropdown-nav-item"]}>
                <DropdownItem>
                  <RouterNavLink
                    to="/transport-management-system"
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active" : "dropdown-item"
                    }
                  >
                    {navbarTexts[language].solutions.tms}
                  </RouterNavLink>
                </DropdownItem>
                <DropdownItem>
                  <RouterNavLink
                    to="/carbon-tracking"
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active" : "dropdown-item"
                    }
                  >
                    {navbarTexts[language].solutions.carbonTracking}
                  </RouterNavLink>
                </DropdownItem>
                <DropdownItem>
                  <RouterNavLink
                    to="/energy-modeling"
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active" : "dropdown-item"
                    }
                  >
                    {navbarTexts[language].solutions.energyModeling}
                  </RouterNavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <RouterNavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                {navbarTexts[language].aboutUs}
              </RouterNavLink>
            </NavItem>
            <NavItem>
              <RouterNavLink
                to="/updates"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                {navbarTexts[language].updates}
              </RouterNavLink>
            </NavItem>
            <NavItem>
              <RouterNavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                {navbarTexts[language].faq}
              </RouterNavLink>
            </NavItem>
            <NavItem>
              <RouterNavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                {navbarTexts[language].contactUs}
              </RouterNavLink>
            </NavItem>
          </Nav>

          {/* Language and Buttons */}
          <Nav className={styles["language-button-container"]} navbar>
            {/* Language Selector */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <img
                  src={language === "EN" ? USFlag : IDFlag}
                  alt="language"
                  style={{ width: "20px", marginRight: "8px" }}
                />
                {language}
              </DropdownToggle>
              <DropdownMenu className={styles["dropdown-menu-custom"]}>
                {language === "EN" ? (
                  <DropdownItem
                    className={styles["dropdown-item-custom"]}
                    onClick={() => switchLanguage("ID")}
                  >
                    <img
                      src={IDFlag}
                      alt="language"
                      style={{ width: "20px", marginRight: "8px" }}
                    />
                    ID
                  </DropdownItem>
                ) : (
                  <DropdownItem
                    className={styles["dropdown-item-custom"]}
                    onClick={() => switchLanguage("EN")}
                  >
                    <img
                      src={USFlag}
                      alt="language"
                      style={{ width: "20px", marginRight: "8px" }}
                    />
                    EN
                  </DropdownItem>
                )}
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* Buttons */}
            <NavItem className="mx-2">
              <Button
                color="primary"
                className={`${styles["member-area-button"]}`}
              >
                {navbarTexts[language].memberArea}
              </Button>
            </NavItem>
            <NavItem>
              <Button
                color="secondary"
                className={`${styles["get-demo-button"]}`}
                outline
              >
                {navbarTexts[language].getDemo}
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarCompanyProfile;
