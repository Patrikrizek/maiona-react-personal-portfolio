import { Container, Row, Col } from "react-bootstrap";

const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>Hi I'm Patrick - <span className="wrap">This text will be changed</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button>Let's connect</button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={''} alt="Header image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;