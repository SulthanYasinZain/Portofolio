import git from "../assets/github.svg";
import download from "../assets/download.svg";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/mail.svg";

function Homepage() {
  return (
    <div className="grid place-content-center h-screen">
      <div className="flex flex-col items-center">
        <h1 className="bg-gradient-to-r from-[#E9284C] to-[#EEAA5B] bg-clip-text text-transparent text-5xl font-bold">
          Sulthan Yasin
        </h1>
        <p className="text-text">Frontend Developer | UI Designer</p>
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
        <button className="flex items-center bg-primary rounded-lg p-2 mt-4 gap-1 hover:scale-95 transition-all duration-100 active:scale-105 transition-all duration-100 drop-shadow-md">
          <p className="text-background">Download CV</p>
          <img className="h-4" src={download} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Homepage;
