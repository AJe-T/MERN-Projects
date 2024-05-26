// import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>the only thing we are serious about is food</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At in eius
            consequatur cumque eligendi, neque laudantium odit labore
            repellendus. Esse, dolores quasi ullam, illum velit molestiae itaque
            natus omnis eos sint iure! ullam, illum velit molestiae itaque natus
            omnis eos sint iure!
          </p>
          <Link to={"/"}>
            Explore MENU{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
