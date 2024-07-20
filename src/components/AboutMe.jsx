function AboutMe() {
  return (
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
        </div>
        <div className="flex justify-around gap-4 mt-12">
          <p className="text-text text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ab
            molestiae totam corporis facilis maxime alias consequuntur non, quo,
            quam soluta atque cupiditate! Temporibus amet qui soluta, placeat
            ratione distinctio minus incidunt debitis ab voluptates totam atque
            vel tempore est magnam sit, minima, eius deleniti exercitationem?
            Dolore hic ex recusandae!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
