import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/Logo.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/feri-ginanjar-ferytell">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/feryfox.bhc">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/ferytell_">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
          </Col>
          <p style={{ textAlign: "center" }}>
            Copyright 2023. All Rights Reserved
          </p>
        </Row>
      </Container>
    </footer>
  );
};
