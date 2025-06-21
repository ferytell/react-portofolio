import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
//import projImg1 from "../../../assets/img/project-img.png";
import imageNotAvailable from "../../../assets/img/notavailable.png";
import shareStory from "../../../assets/img/ScreenshotShareStory.png";
import colorSharp2 from "../../../assets/img/color-sharp-1.png";
import TrackVisibility from "react-on-screen";
import "animate.css";
export const Projects = () => {
  const projectBE = [
    {
      title: "Project MyGram",
      description:
        "Developed as the final project for Hactiv8 Golang Class. MyGram is a CRUD Rest API for a social media platform focused on photo sharing, liking, and commenting. Built using Golang, this project demonstrates my proficiency in creating and managing RESTful APIs",
      imgUrl: "https://github.com/ferytell/go-jwt/raw/master/docs/image.png",
      link: "https://github.com/ferytell/go-jwt",
    },
    {
      title: "NodeJs x Hapi Backend",
      description:
        "A Dicoding Submission project that showcases a CRUD Rest API for storing book data. Created using Node.js and Hapi framework, this project underscores my ability to design and implement data management APIs.",
      imgUrl: imageNotAvailable,
      link: "https://github.com/ferytell/back-end-dicoding-submission",
    },
    {
      title: "MKSA Quality Checker",
      description:
        "Part of the Capstone Project for Bangkit 2022, this AI-driven website offers article conclusion scoring. By leveraging AI, this project highlights my proficiency in web development, machine learning, and practical problem-solving.",
      imgUrl:
        "https://raw.githubusercontent.com/ferytell/Puk6/master/assets/er.PNG",
      link: "https://github.com/pukulenam/FrontEnd_MKSA_Quality_Checker",
    },
  ];

  const projectFE = [
    {
      title: "React Portofolio",
      description:
        "A straightforward portfolio website developed using React. This project showcases my frontend development skills and my ability to create a user-friendly and visually appealing web interface.",
      imgUrl: imageNotAvailable,
      link: "https://github.com/ferytell/react-portofolio",
    },
    {
      title: "Share Story",
      description:
        "A Website to sharing text, image and location, This project showcases my frontend development skills and my ability to create a user-friendly and visually appealing web interface.",
      imgUrl: shareStory,
      github: "https://github.com/ferytell/share-story",
      link: "https://ferytell.github.io/share-story/#/",
    },
  ];

  const projectApps = [
    {
      title: "Flappish",
      description:
        "A lighthearted game created using Python. Flappish is a simple yet entertaining game that exemplifies my coding skills and my capability to design enjoyable user experiences.",
      imgUrl:
        "https://github.com/ferytell/Flappish/raw/master/assets/image.png",
      github: "https://github.com/ferytell/Flappish",
      link: "https://ferytell.github.io/Flappish",
    },
    {
      title: "Spacer",
      description:
        "Spacer is a basic shooter game developed using Python's pygame library. By creating Spacer, I demonstrated my aptitude for implementing interactive games and my passion for exploring creative programming projects.",
      imgUrl: "https://github.com/ferytell/spacer/raw/master/image.png",
      link: "https://github.com/ferytell/spacer",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Backend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Frontend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Aplication</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectBE.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectFE.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectApps.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-left" src={colorSharp2} alt="" />
    </section>
  );
};
