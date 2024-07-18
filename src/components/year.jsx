import "./radio.css";
import Year2024 from "./2024";
function Year() {
  return (
    <>
      <div className="flex justify-evenly w-screen mt-4">
        <span className="bg-primary h-0.5 w-screen absolute mt-9"></span>
        <div className="flex flex-col items-center ">
          <label htmlFor="" className="text-text">
            2023
          </label>
          <input type="radio" name="year" />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="" className="text-text">
            2024
          </label>
          <input type="radio" name="year" id="" />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="" className="text-text">
            2025
          </label>
          <input type="radio" name="year" id="" />
        </div>
      </div>
      <Year2024 />
    </>
  );
}

export default Year;
