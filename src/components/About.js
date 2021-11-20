import React from "react";
import abouter from "../assets/fr.png";
import '../styles/about.css'
const About = () => {
  return (
    <div className="abo">
      <div className="top">
        <img src={abouter}/>
      </div>
      <div className="bottom"></div>
      <h1>ABOUT US</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sint vero,
        ipsa mollitia dolore commodi optio eos voluptates! Ipsum excepturi
        repellat consequatur officiis doloribus ex, voluptate labore, qui porro
        similique corrupti adipisci animi esse molestias repellendus laboriosam
        molestiae aut incidunt eum unde? Consectetur, molestiae, nostrum
        provident et at veritatis nulla dolor non sit itaque nesciunt atque vel
        consequatur soluta voluptatibus fuga hic quos. Repudiandae, deleniti
        libero doloremque velit facilis, tenetur, quibusdam quisquam minus
        consequatur eaque molestias a reiciendis cumque praesentium sed. Odit
        corrupti odio omnis doloribus. Harum non corporis natus deleniti iusto
        commodi. Quas perspiciatis illo eligendi aspernatur sapiente doloremque!
      </p>
    </div>
  );
};

export default About;
