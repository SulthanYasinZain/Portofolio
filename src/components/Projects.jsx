import photobox from "../assets/photobox.jpg";
import mobile from "../assets/smartphone.svg";
import desktop from "../assets/monitor.svg";

function Card(props) {
  return (
    <div className="bg-gradient-to-r from-[#E9284C] to-[#EEAA5B] p-0.5 rounded-md sm:w-80 ">
      <div className="flex flex-col  bg-text rounded-lg p-2 gap-1">
        <img src={props.img} alt={props.name} />
        <div className="flex gap-2">
          <h3 className="text-background text-xl font-medium">{props.name}</h3>
          <div className="flex gap-2 items-center">
            <img className="h-4" src={props.mobile} />
            <img className="h-4" src={props.desktop} />
          </div>
        </div>
        <p className="text-background text-justify text-sm">{props.desc}</p>
        <button>
          <div className="bg-gradient-to-r from-[#E9284C] to-[#EEAA5B] p-0.5 rounded-md">
            <span className="flex w-full justify-center bg-text rounded p-1 hover:bg-neutral-800 transition-all duration-75 active:bg-neutral-900">
              <p className="text-background"> Visit Website</p>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className=" bg-text h-full py-5 px-2 mt-24">
      <h2 className="bg-gradient-to-r from-[#E9284C] to-[#EEAA5B] bg-clip-text text-transparent text-5xl font-bold text-center p-2">
        Projects
      </h2>
      <p className="text-background text-center mt-2">
        Projek Saya Di Tahun 2024
      </p>
      <div className="flex flex-wrap gap-5 justify-center mt-12 px-5">
        <Card
          name="PhotoBox"
          desktop={desktop}
          img={photobox}
          desc="Photobox adalah website photobooth ringan, mudah di-setup, dan
          dirancang untuk layar sentuh,memungkinkan foto, pemilihan frame, dan
          cetak dalam satu klik."
        />
        <Card
          name="Portofolio"
          desktop={desktop}
          mobile={mobile}
          img={photobox}
          desc="Photobox adalah website photobooth ringan, mudah di-setup, dan
          dirancang untuk layar sentuh,memungkinkan foto, pemilihan frame, dan
          cetak dalam satu klik."
        />
      </div>
    </div>
  );
}

export default Project;
