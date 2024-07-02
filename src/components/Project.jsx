import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const Project = (props) => {
  const { image, title, Description, Github, isBlog, live } =
    props.project;
  return (
    <Col md={4} className="project-card">
      <Card className="project-card-view">
        <Card.Img variant="top" src={image} alt="card-img" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>{Description}</Card.Text>
          <Button variant="primary" href={Github} target="_blank">
            <BsGithub /> &nbsp;
            {isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!isBlog && live && (
            <Button
              variant="primary"
              href={live}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Project;
