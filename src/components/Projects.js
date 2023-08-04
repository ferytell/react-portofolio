import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img.png";
import projImg2 from "../assets/img/project-img.png";
import colorSharp2 from "../assets/img/color-sharp-1.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
export const Projects = () => {


  const projectBE = [
    {
      title: "Project MyGram",
      description: "Final Project for passing Hactiv8 Golang Class, CRUD Rest API for (social media for sharing, like and commenting a photos)",
      imgUrl: "https://github.com/ferytell/go-jwt/raw/master/docs/image.png",
      link: "https://github.com/ferytell/go-jwt"
    },
    {
      title: "NodeJs x Hapi Backend",
      description: "Dicoding Submission, CRUD Rest API for storing books data",
      imgUrl: projImg2,
      link: "https://github.com/ferytell/back-end-dicoding-submission"
    },
    {
      title: "MKSA Quality Checker",
      description: "Capstone Project Bangkit 2022, AI website for scoring a article conclusion",
      imgUrl: "https://raw.githubusercontent.com/ferytell/Puk6/master/assets/er.PNG",
      link: "https://github.com/pukulenam/FrontEnd_MKSA_Quality_Checker"
    },
  ];

  const projectFE = [
    {
      title: "React Portofolio",
      description: "Simple Portofolio website using react",
      imgUrl: projImg1,
      link: "https://github.com/ferytell/react-portofolio"
    },
  ];

  const projectApps = [
    {
      title: "Flappish",
      description: "Silly game write using python",
      imgUrl: "https://github.com/ferytell/Flappish/raw/master/assets/image.png",
      link: "https://github.com/ferytell/Flappish/tree/master"
    },
    {
      title: "Spacer",
      description: "Simple shooter game, wrote with python pygame",
      imgUrl: "https://github.com/ferytell/spacer/raw/master/image.png",
      link: "https://github.com/ferytell/spacer"
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectBE.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectFE.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                      {
                        projectApps.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
      <img className="background-image-left" src={colorSharp2} alt="Image" />
    </section>
  )
}