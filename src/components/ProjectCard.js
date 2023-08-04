import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={4} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="whatever" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <h6><a href={link}>github link</a></h6>
        </div>
      </div>
    </Col>
  )
}