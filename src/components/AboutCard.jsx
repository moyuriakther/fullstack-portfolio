import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Moyuri Akther </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br /> I am CSE Graduate
            <br />
            Additionally, I am currently working as a software developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
              Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading and Writing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {` "Strive to build things that make a difference!"`}
          </p>
          <footer className="blockquote-footer">moyuri</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
