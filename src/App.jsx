import git from "./assets/github.svg";
import Instagram from "./assets/instagram.svg";
import linkedin from "./assets/linkedin.svg";
import download from "./assets/download.svg";
import Year from "./components/year";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-2">
        <h1 className="bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent font-black text-8xl ">
          SULTHAN YASIN
        </h1>
        <p className="text-text text-xl">Front End Developer | UI/UX</p>
        <div className="flex gap-2">
          <a href="https://github.com/SulthanYasinZain">
            <img src={git} alt="Logo Github" />
          </a>
          <a href="https://instagram.com/sulthan.zain">
            <img src={Instagram} alt="Logo Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-sulthan-yasin-zain-523a32273/">
            <img src={linkedin} alt="Logo LinkedIn" />
          </a>
        </div>
        <button className="inline-flex justify-center items-center text-text p-2 gap-2 border border-solid border-primary rounded-2xl hover:bg-primary transition-all duration-300">
          <p>Download CV</p>
          <img className="h-3/4" src={download} />
        </button>
      </div>
      <div className="flex justify-center items-start mt-24 h-screen">
        <div className="flex flex-col w-3/4 justify-start">
          <div>
            <h2 className="text-text text-6xl">About Me</h2>
            <div className="bg-primary w-64 h-2"></div>
          </div>

          <div className="flex justify-around gap-4 mt-12 ">
            <p className="text-text text-lg text-justify ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              sed dicta deleniti consequatur quis? Molestiae minima itaque est
              facilis esse assumenda deserunt eligendi? Unde explicabo provident
              ullam quidem corporis facere exercitationem minus consectetur
              recusandae consequuntur! Eveniet ut hic odit esse omnis.
              Necessitatibus praesentium voluptas adipisci enim, aperiam sunt
              recusandae officia.
            </p>
            <img src={git} alt="" />
          </div>
          <div className="flex justify-around gap-4 mt-12">
            <img src={git} alt="" />
            <p className="text-text text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              ab molestiae totam corporis facilis maxime alias consequuntur non,
              quo, quam soluta atque cupiditate! Temporibus amet qui soluta,
              placeat ratione distinctio minus incidunt debitis ab voluptates
              totam atque vel tempore est magnam sit, minima, eius deleniti
              exercitationem? Dolore hic ex recusandae!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-text text-5xl">Projects</h2>
        <Year />
      </div>
    </>
  );
}

export default App;
