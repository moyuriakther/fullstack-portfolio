import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
// import Calender from "../components/Calender";
import TechStack from "../components/TechStack";
import AboutCard from "../components/AboutCard";
import laptopImg from "../assets/images/about.png";
import Tools from "../components/Tools";
import { useGetAllSkillsQuery } from "../services/api/apiSlice";
import { skillsInfos } from "../data/skills";

function About() {
  const {data, isLoading} = useGetAllSkillsQuery();
  console.log(data, isLoading)
  console.log(data)
  return (
    <Container fluid className="about-section" id="aboutMe">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "10px" }}>
              Know Who <strong className="purple">{`I'M`}</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "30px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        {/* <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {
          data?.data?.map((skill) =><TechStack key={skill.id} skill={skill}/>)
        }
         </Row>  */}
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        {
          skillsInfos?.map((skill) =><TechStack key={skill.id} skill={skill}/>)
        }
         </Row> 
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Tools />

        {/* <Calender /> */}
      </Container>
    </Container>
  );
}

export default About;
