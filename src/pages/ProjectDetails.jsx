import { Link, useParams } from "react-router-dom";
import {  useGetSingleProjectQuery } from "../services/api/apiSlice";
import { Col, Container,  Row } from "react-bootstrap";
import Footer from "../components/Footer";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import {IoArrowBack} from "react-icons/io5"


const ProjectDetails = () => {
  const { id } = useParams();
   const {data} = useGetSingleProjectQuery(id);
   const technologiesArray = data?.data?.Technologies?.split(", ").map(item => item.trim());
  
  return (
    <div className="project-detail-root">
    <Container className="pt-4">
      <div className="d-flex justify-content-between align-items-center">
      <Link to="/" className="d-flex text-white text-decoration-none">
        <h3 className="logo name">MoA..</h3>
      </Link>
      <Link to="/">
        {/* <IoArrowBack size={48} className="me-2 text-white text-center"/> */}
      </Link>
      <Link to="/" className="text-decoration-none">
        <h4 className="text-white ">Back To Home</h4>
      </Link>
      </div>
      <Row className="justify-content-center my-1">
        {/* Left Side - Image */}
        <Col xs={12} md={6} lg={5} className="mb-4 mb-md-0 d-flex justify-content-center align-items-center">
          <img
            src={data?.data?.image}
            alt={data?.data?.title}
            className="project-detail-img img-fluid rounded shadow"
          />
        </Col>

        {/* Right Side - Project Info */}
        <Col xs={12} md={6} lg={5} className="text-white p-4">
          <h3 className="text-4xl font-extrabold mb-4">Project Description:</h3>
          <p className="mr-4 text-lg text-white-600 leading-relaxed mb-4">{data?.data?.Description}</p>

          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white-800">Technologies Used:</h4>
            <Row className="justify-content-center py-3">
              {technologiesArray?.map((item, i) => (
                <Col key={i} xs={6} sm={4} md={2} className="tech-icons">
                  <p>{item}</p>
                </Col>
              ))}
            </Row>
          </div>

          {/* Links */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white-800">Links:</h4>
            <div className="d-flex gap-3">
              <a
                href={data?.data?.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-4 py-2"
              >
                 <CgWebsite /> &nbsp;
                Live Demo
              </a>
              <a
                href={data?.data?.Github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark px-4 py-2"
              >
                 <BsGithub /> &nbsp;
                GitHub
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <div className="d-flex justify-content-between align-items-center pb-4">
      <Link to="/" className="d-flex text-white text-decoration-none pb-4">
        {/* <h3 className="logo name">MoA..</h3> */}
      </Link>
      <Link to="/">
        <IoArrowBack size={48} className="me-2 text-white text-center"/>
      </Link>
      <Link to="/" className="text-decoration-none">
        {/* <h4 className="text-white ">Back To Home</h4> */}
      </Link>
      </div>
    <Footer />
  </div>
  );
};

export default ProjectDetails;
