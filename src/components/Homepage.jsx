import git from "../assets/github.svg";
import Instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import download from "../assets/download.svg";
import email from "../assets/mail.svg";
import Background from "./Background";

function Homepage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <Background />
      <h1 className="text-text font-bold text-8xl z-10 ">SULTHAN YASIN</h1>
      <p className="text-text text-xl z-10">Front End Developer | UI/UX</p>
      <div className="flex gap-2 z-10">
        <a href="https://github.com/SulthanYasinZain">
          <img src={git} alt="Logo Github" />
        </a>
        <a href="https://instagram.com/sulthan.zain">
          <img src={Instagram} alt="Logo Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-sulthan-yasin-zain-523a32273/">
          <img src={linkedin} alt="Logo LinkedIn" />
        </a>
        <a href="mailto:sulthanzain28@gmail.com">
          <img src={email} alt="Logo EMail" />
        </a>
      </div>
      <button className="inline-flex z-10 justify-center items-center text-text p-2 gap-2 border-2 border-solid border-text rounded-2xl hover:bg-accent transition-all duration-300 active:scale-95 transition-all duration-75">
        <p>Download CV</p>
        <img className="h-3/4" src={download} />
      </button>
    </div>
  );
}

export default Homepage;
