import React from "react";
import { Carousel } from "react-responsive-carousel";
import Male from "../assets/img/male.png";
import Female from "../assets/img/female.png";
import Avatar from "../assets/img/avatar.png";

const testamonial = [
  {
    id: 1,
    image: Male,
    name: "Ihtisham Khattak",
    designation: "Designer",
    about:
      "I recently had the pleasure of working with her, and I cannot recommend their services highly enough. From start to finish, the experience was nothing short of excellent.",
  },
  {
    id: 2,
    image: Female,
    name: "DC",
    designation: "Writer",
    about:
      "Throughout the project, she was highly responsive and communicative. They kept me informed of their progress and asked insightful questions to ensure that they fully understood my needs and preferences",
  },
  {
    id: 3,
    image: Avatar,
    name: "NW",
    designation: "Designer",
    about:
      "It is freeing to be able to catch up on customized news and not be distracted by a social media element on the same site",
  },
];

const Testamonial = () => {
  return (
    <div className="testamonial" id="home">
      <h2>Testamonial</h2>
      <Carousel
        axis="horizontal"
        verticalSwipe="natural"
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        {testamonial.map((item, index) => (
          <div keys={index.id}>
            <img src={item.image} alt="random" />
            <div className="myCarousel">
              <h3>{item.name}</h3>
              <h4>{item.designation}</h4>
              <p>{item.about}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testamonial;
