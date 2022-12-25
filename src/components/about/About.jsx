import "./about.css";
import Award from "../../img/award.png";
import img2 from "../../img/p1.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={img2}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I hold a degree in informatics engineering, specializing in software engineering
        </p>
        <p className="a-desc">
        I hold a degree in informatics engineering, specializing in software engineering
           I work in many fields as a freelancer
           But I have a lot of experience and work in interactive web applications, 
           and I have worked on many framework
        </p>
       
      </div>
    </div>
  );
};

export default About;
