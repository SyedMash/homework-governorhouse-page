import React from "react";

const SectionTwo = () => {
  return (
    <div className="container mx-auto h-fit">
      <h1 className="text-center mt-16 font-bold text-4xl text-[#044E83]">
        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
        Developing Billion-Dollar Valued Developers and Solopreneurs
      </h1>
      <p className="mt-10 text-2xl font-semibold">
        The pace of technological change is accelerating, big players like
        Microsoft, Amazon, Google, and OpenAI are winning by providing
        infrastructure, large AI foundation models, frameworks, 3D Metaverse
        experiences, and massive distribution networks. Solopreneurs trained in
        this program will win by automating work typically outsourced to
        employees, by directly connecting to customers by eliminating the
        middleman, and by developing vertical metaverses, thus paving the way
        for the first billion-dollar valued solopreneur businesses. This program
        has the objective to train this new breed of billion-dollar
        solopreneurs. These solopreneurs will adopt the ultra-lean business
        model and work independently and will not need to hire employees or
        other team members.
      </p>
      <div className="flex flex-col gap-10 md:flex-row items-center justify-center mt-10 ">
        <div className="h-[300px] bg-[url(/1.jpg)] bg-no-repeat bg-cover bg-center rounded-lg w-full lg:w-[500px]"></div>
        <div className="h-[300px] bg-[url(/2.jpg)] bg-no-repeat bg-cover bg-center rounded-lg w-full lg:w-[500px]"></div>
        <div className="h-[300px] bg-[url(/3.jpg)] bg-no-repeat bg-cover bg-center rounded-lg w-full lg:w-[500px]"></div>
      </div>
      <div className="h-[300px] w-full md:h-[500px] md:w-full bg-black mt-10 rounded-lg mx-auto bg-[url(/4.jpg)] bg-no-repeat bg-cover bg-center"></div>
    </div>
  );
};

export default SectionTwo;
