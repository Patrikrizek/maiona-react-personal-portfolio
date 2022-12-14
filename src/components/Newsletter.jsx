import { Col, Row, Alert } from "react-bootstrap";

const Newsletter = ({ status, message, onValidated }) => {
    return (
        <div>
            <SimpleForm onSubmitted={formData => subscribe(formData)} />
            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
            {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
            {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
        </div>
    );
}

export default Newsletter;