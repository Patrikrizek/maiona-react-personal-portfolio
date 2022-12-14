import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

const Contact = () => {
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
                                    <input type="text" value={''} placeholder="First Name" />
                                </Col>

                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={''} placeholder="Last Name" />
                                </Col>

                                <Col size={12} sm={6} className="px-1">
                                    <input type="email" value={''} placeholder="Email Address" />
                                </Col>

                                <Col size={12} sm={6} className="px-1">
                                    <input type="tel" value={''} placeholder="Phone No." />
                                </Col>

                                <Col size={12} className="px-1">
                                    <textarea rows="6" value={''} placeholder="Message" ></textarea>
                                    <button><span>Send</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;