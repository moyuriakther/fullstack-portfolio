import { useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import contactImg from "../assets/images/contact-img.svg"
import 'animate.css';
import emailjs from '@emailjs/browser';

import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const form = useRef();
  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }
  // console.log(formInitialDetails)
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [status, setStatus] = useState('')

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
    .sendForm('service_v4vpy14', 'template_2ell9pq', form.current, {
      publicKey: 'R6koMoy6NXTpVxct2',
    })
    .then(
      (result) => {
        // console.log(result)
        setStatus(result)
        console.log('SUCCESS!');
        setFormDetails(formInitialDetails);
      },
      (error) => {
        setStatus(error)
        console.log('FAILED...', error);
      },
    );
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit} ref={form}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.name} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <Button type="submit" variant="primary"style={{ marginLeft: "10px" }}>send</Button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                    {
                      status.status == 200 &&
                   
                        <p className="success">Successfully send</p>
                 
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}