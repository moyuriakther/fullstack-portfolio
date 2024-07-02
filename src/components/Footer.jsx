import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
// import { SiShowwcase } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Moyuri Akther</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/moyuriakther"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/moyuri-akther/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:akthermoyuri@gmail.com?subject=Portfolio Inquiry"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://medium.com/@akthermoyuri"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsMedium />
              </a>
            </li>
           
            <li className="social-icons">
              <a
                href="https://akthermoyuri.showwcase.com/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <SiShowwcase  /> */}
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
