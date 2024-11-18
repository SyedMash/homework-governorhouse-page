import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-[6vh] bg-[#044E83] text-white">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Image
          src={"/logo.png"}
          alt={"logo"}
          width={90}
          height={90}
          className={"object-cover pt-20 z-50"}
        />
        <h1 className="font-bold md:text-sm lg:text-xl  text-[#B9D8F3]">
          Tuition Free Education Program on Latest Technologies
        </h1>
        <ul className="gap-12 hidden md:flex md:gap-5">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Apply</li>
          <li className="cursor-pointer">Result</li>
          <li className="cursor-pointer">Jobs</li>
          <li className="cursor-pointer">Courses</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
