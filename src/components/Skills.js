import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp-1.png"
import Doughnut from "./Doughnut";
import './doughnut.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const percentage = ['70%', '45%', '60%', '30%','60%','20%' ];
  const names = ['JS','Go','Python', 'Java','CSS','Art' ];
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Skill proficiency can often be subjective and context-dependent. I know assigning percentages might oversimplify my actual skill level, especially for complex skills like programming languages, where capability can vary based on the task, but its look cool so I included it.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                              <Doughnut persentase={{ value: percentage[0] }} aktifitas={{ activity: names[0] }} />
                            </div>
                            <div className="item">
                              <Doughnut persentase={{ value: percentage[1] }} aktifitas={{ activity: names[1] }} />
                            </div>
                            <div className="item">
                              <Doughnut persentase={{ value: percentage[2] }} aktifitas={{ activity: names[2] }} />
                            </div>
                            <div className="item">
                              <Doughnut persentase={{ value: percentage[3] }} aktifitas={{ activity: names[3] }} />
                            </div>
                            <div className="item">
                              <Doughnut persentase={{ value: percentage[4] }} aktifitas={{ activity: names[4] }} />
                            </div>
                            <div className="item">
                              <Doughnut persentase={{ value: percentage[5] }} aktifitas={{ activity: names[5] }} />
                              <h5> .</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}