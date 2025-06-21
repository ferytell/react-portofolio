import colorSharp from "../../../assets/img/color-sharp-1.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Doughnut from "./../doughnut";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { name: "JS", percentage: "70%" },
    { name: "Go", percentage: "45%" },
    { name: "Python", percentage: "60%" },
    { name: "Java", percentage: "30%" },
    { name: "CSS", percentage: "60%" },
    { name: "Art", percentage: "20%" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Skill proficiency can often be subjective and context-dependent.
                I know assigning percentages might oversimplify my actual skill
                level, especially for complex skills like programming languages,
                where capability can vary based on the task, but it looks cool
                so I included it.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <Doughnut
                      persentase={{ value: skill.percentage }}
                      aktifitas={{ activity: skill.name }}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};

export default Skills;
