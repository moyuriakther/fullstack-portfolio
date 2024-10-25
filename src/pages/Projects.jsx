import { Container, Row } from "react-bootstrap";
import Project from "../components/Project";
import Particle from "../components/Particle";
import { useGetAllProjectsQuery } from "../services/api/apiSlice";
// import { projectsInfos } from "../data/projects";

function Projects() {
  const {data: projects} = useGetAllProjectsQuery()
//  console.log(projectsInfos)
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          {` Here are a few projects I've worked on recently.`}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects?.data?.map((project) => (
            // <Col md={4} className="project-card">
            <Project project={project} key={project.id} />
            // </Col>
          ))}
        </Row>
        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsInfos?.map((project) => (
            // <Col md={4} className="project-card">
            <Project project={project} key={project.id} />
            // </Col>
          ))}
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
