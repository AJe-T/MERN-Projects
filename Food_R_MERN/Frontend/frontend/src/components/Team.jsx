// import React from "react";
import { data } from "../restApi.json";

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat
            mollitia magnam qui, quia perspiciatis minus quidem, eius saepe
            reprehenderit ratione!
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element, index) => {
            return (
              <div className="card" key={index}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
