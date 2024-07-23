import react from "../assets/react.svg";
import vite from "../assets/vite.svg";
import framer from "../assets/framer.svg";
import figma from "../assets/figma.svg";
import tailwind from "../assets/tailwind.svg";
import javascript from "../assets/javascript.svg";

function Card(props) {
  return (
    <div className="border-2 solid bg-background  border-primary rounded-lg w-max p-3 drop-shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 transition-all duration-100  ">
      <a href={props.link}>
        <img className="h-16 w-16" src={props.img} alt={props.name} />
      </a>
    </div>
  );
}

function Techstack() {
  return (
    <div className="grid place-content-center">
      <h2 className="text-center text-3xl bg-gradient-to-r from-[#E9284C] to-[#EEAA5B] bg-clip-text text-transparent font-bold ">
        Tech Stack
      </h2>
      <p className="text-center text-sm text-text mt-2">
        Teknologi Yang Di Pakai Projek Saya
      </p>
      <div className="flex gap-4 flex-wrap justify-center mt-8 ">
        <Card img={react} name="React" link="https://react.dev/" />
        <Card
          img={javascript}
          name="Javascript"
          link="https://www.w3schools.com/js/js_intro.asp"
        />
        <Card img={tailwind} name="Tailwind" link="https://tailwindcss.com/" />
        <Card
          img={framer}
          name="framer"
          link="https://www.framer.com/motion/"
        />
        <Card img={figma} name="Figma" link="https://www.figma.com" />
        <Card img={vite} name="Vite" link="https://vitejs.dev/ " />
      </div>
    </div>
  );
}

export default Techstack;
