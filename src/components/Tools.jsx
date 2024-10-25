import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiVercel,
  SiDiscord 
} from "react-icons/si";

function Tools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>VsCode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub  />
        <p>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord />
        <p>Discord</p>
      </Col>
    </Row>
  );
}

export default Tools;
