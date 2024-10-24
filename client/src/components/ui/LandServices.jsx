import ButtonM from "./ButtonM";
import { FaArrowUp } from "react-icons/fa6";
const LandServices = () => {
  return (
    <div>
      <div className="grid grid-cols-3  gap-x-24 pt-28 mx-auto w-5/6 text-[#333333] lg:pb-36">
        <div className=" row-span-3  text-2xl ">WHAT WE DO</div>
        <div className="  ">
          01 <span className="text-5xl ">Digital Transformation</span>
          <br />
          <br /> We empower local businesses to thrive in the digital age. By
          transforming traditional operations with cutting-edge technology and
          online solutions, we help businesses transition from local to
          digital-first, boosting their visibility, efficiency, and growth
          potential.
          <div className="group mt-10 text-lg pb-20">
            <span className="flex flex-row gap-1 group-hover:text-blue-500 group-hover:underline">
              Learn More
              <FaArrowUp className="mt-1 origin-center transform rotate-45 transition-transform duration-500 ease-out group-hover:rotate-90" />
            </span>
          </div>{" "}
        </div>
        <div>
          02 <span className="text-5xl ">Global Customer Acquisition</span>{" "}
          <br />
          <br />
          Going global is key to scaling any business. We specialize in helping
          businesses expand beyond local markets, connecting them with global
          customers through strategic digital marketing, e-commerce solutions,
          and targeted online campaigns, enabling businesses to grow their brand
          internationally.
          <div className="group mt-10 text-lg pb-20">
            <span className="flex flex-row gap-1 group-hover:text-blue-600 group-hover:underline">
              Learn More
              <FaArrowUp className="mt-1 origin-center transform rotate-45 transition-transform duration-500 ease-out group-hover:rotate-90" />
            </span>
          </div>
        </div>
        <div className="  ">
          03 <span className="text-5xl ">Data-Driven Insights</span> <br />
          <br />
          Success in the digital world is fueled by informed decision-making. We
          provide data-driven insights and analytics to help businesses
          understand market trends, optimize their operations, and make smarter,
          real-time decisions, ensuring sustainable growth and competitiveness.
          <div className="group mt-10 text-lg pb-20">
            <span className="flex flex-row gap-1 group-hover:text-blue-500 group-hover:underline">
              Learn More
              <FaArrowUp className="mt-1 origin-center transform rotate-45 transition-transform duration-500 ease-out group-hover:rotate-90" />
            </span>
          </div>
          <div className="">
            <ButtonM word="Our Services" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandServices;
