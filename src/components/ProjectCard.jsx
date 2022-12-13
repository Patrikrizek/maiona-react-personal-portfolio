import { Col } from "react-bootstrap";

const ProjectCard = ({ project }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={project.imgUrl} />
                <div className="proj-txtx">
                    <h4>{project.title}</h4>
                    <span>{project.description}</span>
                </div>
            </div>
        </Col>
    );
}

export default ProjectCard;