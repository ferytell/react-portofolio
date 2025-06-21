import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, github }) => {
  return (
    <Col size={12} sm={4} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="whatever" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <h6>
            <a href={link}>link</a>
          </h6>
          {github ? (
            <h6>
              <a href={github}>github</a>
            </h6>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Col>
  );
};
