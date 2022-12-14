import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    return (
        <section className='contact' id="contact" >
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col size={12} md={6}>
                        <h2>Get In Touch</h2>
                        <form>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" />
                                </Col>

                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" />
                                </Col>

                                <Col size={12} sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Address" />
                                </Col>

                                <Col size={12} sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." />
                                </Col>

                                <Col size={12} className="px-1">
                                    <textarea rows="6" value={formDetails.message} placeholder="Message" ></textarea>
                                    <button><span>{buttonText}</span></button>
                                </Col>

                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }

                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;