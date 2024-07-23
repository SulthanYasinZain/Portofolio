import git from "../assets/github.svg";
import download from "../assets/download.svg";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/mail.svg";

function Homepage() {
  return (
    <div className="grid place-content-center h-screen">
      <div className="flex flex-col items-center">
        <h1>Sulthan Yasin</h1>
        <p>Frontend Developer | UI Designer</p>
        <div className="flex gap-2">
          <a href="">
            <img src={git} alt="" />
          </a>
          <a href="">
            <img src={linkedin} alt="" />
          </a>
          <a href="">
            <img src={email} alt="" />
          </a>
        </div>
        <button className="flex">
          <p>Download CV</p>
          <img src={download} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Homepage;
