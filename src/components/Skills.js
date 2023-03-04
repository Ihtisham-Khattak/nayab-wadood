// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export const Skills = () => {
  const content_writting = 76;
  const blog_writing = 85;
  const proof_reading = 90;
  const short_stories_writting = 85;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  return (
    <section className="skill" id="skills" style={{ background: "#fbe479" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <CircularProgressbar
                    className="circular__progress"
                    value={proof_reading}
                    text={`${proof_reading}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      textSize: "14px",
                      pathTransitionDuration: 0.1,
                      pathColor: `rgb(251, 228, 121, ${proof_reading / 100})`,
                      textColor: "#ffffff",
                    })}
                  />
                  <h5>Proof Reading</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                   className="circular__progress"
                    value={content_writting}
                    text={`${content_writting}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      textSize: "14px",
                      pathTransitionDuration: 0.1,
                      pathColor: `rgb(251, 228, 121, ${proof_reading / 100})`,
                      textColor: "#ffffff",
                    })}
                  />
                  <h5>Content Writing</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                   className="circular__progress"
                    value={blog_writing}
                    text={`${blog_writing}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      textSize: "14px",
                      pathTransitionDuration: 0.1,
                      pathColor: `rgb(251, 228, 121, ${proof_reading / 100})`,
                      textColor: "#ffffff",
                    })}
                  />
                  <h5>Blog Writing</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                   className="circular__progress"
                    value={short_stories_writting}
                    text={`${short_stories_writting}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      textSize: "14px",
                      pathTransitionDuration: 0.1,
                      pathColor: `rgb(251, 228, 121, ${proof_reading / 100})`,
                      textColor: "#ffffff",
                    })}
                  />
                  <h5>Short Stories</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
