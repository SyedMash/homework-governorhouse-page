import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-fit w-full bg-[url(/house.jpg)] bg-no-repeat bg-cover z-0 bg-opacity-75 relative">
      <div className="bg-white h-full opacity-75 absolute z-10 w-full"></div>
      <div className="container mx-auto h-full w-full flex flex-col lg:flex-row justify-between z-50">
        <div className="py-24 z-50 w-full lg:w-2/4">
          <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-start">
            Governor Sindh
          </h1>
          <p className="text-5xl font-semibold text-center lg:text-start">
            Kamran Khan Tessori
          </p>
          <p className="text-[#2EB6E8] text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold my-5 text-center lg:text-start">
            Certified Cloud <br /> Applied Generative AI <br /> Engineer
            (GenEng)
          </p>
          <p className="font-bold text-2xl mb-5 text-center lg:text-start">
            Earn up to $5,000 / month
          </p>
          <p className="font-bold text-2xl text-center lg:text-start">
            Now admissions are open in Hyderabad
          </p>
          <div className="flex gap-12 mt-5 justify-center lg:justify-start">
            <button className="bg-[#044E83] text-white py-2 px-6 text-xl rounded-lg flex items-center justify-center font-bold">
              Apply Now
            </button>
            <div className="font-semibold">
              <p className="text-center text-2xl">562,143</p>
              <p>Accepted Applicants</p>
            </div>
          </div>
        </div>
        <div className="z-50 w-full lg:w-2/4 flex justify-center lg:justify-end">
          <Image
            src={"/cover.png"}
            alt={"cover"}
            width={500}
            height={500}
            className={"object-cover h-full w-full pt-5 z-50"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
