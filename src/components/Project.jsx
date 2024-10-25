import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { wordSplit } from "../utils/textSplit";
import { useNavigate } from "react-router-dom";

const Project = (props) => {
  const navigate = useNavigate()
  const {id, image, title, Description } =
    props.project;
const description = Description && wordSplit(Description);
const handleDetailsClick = () => {
  navigate(`/project/${id}`);
};
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="project-card">
      <Card className="project-card-view">
        <Card.Img variant="top" src={image} alt="card-img" className="card-img"/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
          <Button variant="primary" onClick={handleDetailsClick}>
           Project Detail
          </Button>
          {"\n"}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Project;
