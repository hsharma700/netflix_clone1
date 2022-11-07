import React from "react";
import { useState } from "react";
import "./About.scss";


function About() {

  const [isLoading, setLoading] = useState(true)
    setTimeout(()=>{
      setLoading(false)
    },500)

  return (
    <>
    {isLoading ? <div className="loader">
    <div></div>
  </div>
:
    <div className="about">
      <div className="aboutmain">
        <div className="mdiv1">
          <h1>
            <span className="N">N</span>
            <span className="E">E</span>
            <span className="T">T</span>
            <span className="F">F</span>
            <span className="L">L</span>
            <span className="I">I</span>
            <span className="X">X</span>
          </h1>
        </div>
        <div className="mdiv2">
          <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis velit repellendus neque officiis iusto tempore, aliquam
            ut consectetur unde placeat minima recusandae voluptatum facere qui
            culpa sed, porro accusamus soluta asperiores eligendi inventore!
            Laboriosam, quisquam adipisci? Nulla, dolores est! Adipisci nisi
            laborum, quod consectetur illo est magnam porro. Blanditiis
            molestiae explicabo dolor id deleniti neque rerum perspiciatis et
            praesentium vitae non minus aliquid illo rem, voluptate, quo eveniet
            sint quae, aliquam nobis aperiam sunt quam earum. Velit, adipisci
            doloremque. Eius, aperiam quae rerum qui aspernatur expedita saepe
            consequatur obcaecati et nihil omnis consectetur aliquam dicta
            cupiditate facilis unde tenetur laudantium.
          </h3>
        </div>
      </div>
    </div>
}
</>
)
}

export default About
