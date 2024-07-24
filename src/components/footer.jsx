function footer() {
  return (
    <>
      <div className=" grid place-content-center p-5 ">
        <div className="">
          <h2 className="bg-gradient-to-r from-[#E9284C] to-[#EEAA5B] bg-clip-text text-transparent font-bold text-4xl">
            Tertarik Dengan Projek Saya?
          </h2>
          <p className="text-text sm:w-96 mt-2 ">
            Jika Anda ingin mengetahui lebih lanjut tentang kinerja dan
            pengalaman saya, jangan ragu untuk menghubungi saya.
          </p>
          <button className="bg-primary rounded-lg drop-shadow-md p-2 mt-4 hover:scale-95 transition-all duration-100 active:scale-105 transition-all duration-75">
            <p className="text-background">Hubungi Saya</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default footer;
