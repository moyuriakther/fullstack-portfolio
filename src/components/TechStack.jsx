import { Col } from "react-bootstrap";

function TechStack({skill}) {
  return (
      <Col xs={4} md={2} className="tech-icons">
        <p>{skill?.skill}</p>
      </Col>
  );
}

export default TechStack;
