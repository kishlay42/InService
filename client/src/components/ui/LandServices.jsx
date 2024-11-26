import ButtonM from "./ButtonM";
import { FaArrowUp } from "react-icons/fa6";
import { useEffect } from "react";

  const LandServices = () => {
    useEffect(() => {
      const cards = document.querySelectorAll(".card");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-on-visible");
            } else {
              entry.target.classList.remove("animate-on-visible");
            }
          });
        },
        { threshold: 0.1 } // Adjust the threshold to trigger animation at desired visibility
      );
  
      cards.forEach((card) => observer.observe(card));
  
      return () => {
        observer.disconnect();
      };
    }, []);
   
    return (
      <div >
        <div 
          className={`animate-on-y grid md:grid-cols-3 opacity-0 gap-x-24 pt-28 mx-auto w-5/6 text-[#333333] md:pb-36 card`}>
          <div className="para row-span-3  md:text-2xl max-md:mb-7 ">WHAT WE DO</div>
          <div className="para" >
            01 <span className="md:text-5xl max-md:text-4xl ">Digital Transformation</span>
            <br />
            <br /> We empower local businesses to thrive in the digital age. By
            transforming traditional operations with cutting-edge technology and
            online solutions, we help businesses transition from local to
            digital-first, boosting their visibility, efficiency, and growth
            potential.
            <div className="group mt-10 text-md pb-20">
              <span className="flex flex-row gap-1 group-hover:text-blue-500 group-hover:underline">
                Learn More
                <FaArrowUp className="mt-1 origin-center transform rotate-45 transition-transform duration-500 ease-out group-hover:rotate-90" />
              </span>
            </div>{" "}
          </div>
          <div className="para">
            02 <span className="md:text-5xl max-md:text-4xl">Global Customer Acquisition</span>{" "}
            <br />
            <br />
            Going global is key to scaling any business. We specialize in helping
            businesses expand beyond local markets, connecting them with global
            customers through strategic digital marketing, e-commerce solutions,
            and targeted online campaigns, enabling businesses to grow their brand
            internationally.
            <div className="group mt-10 text-md pb-20">
              <span className="flex flex-row gap-1 group-hover:text-blue-600 group-hover:underline">
                Learn More
                <FaArrowUp className="mt-1 origin-center transform rotate-45 transition-transform duration-500 ease-out group-hover:rotate-90" />
              </span>
            </div>
          </div>
          <div className="para">
            03 <span className="md:text-5xl max-md:text-4xl">Data-Driven Insights</span> <br />
            <br />
            Success in the digital world is fueled by informed decision-making. We
            provide data-driven insights and analytics to help businesses
            understand market trends, optimize their operations, and make smarter,
            real-time decisions, ensuring sustainable growth and competitiveness.
            <div className="group mt-10 text-md pb-20">
              <span className="flex flex-row gap-1 group-hover:text-blue-500 group-hover:underline">
                Learn More
                <FaArrowUp className="mt-1 origin-center transform rotate-45 transition-transform duration-500 ease-out group-hover:rotate-90" />
              </span>
            </div>
            <div className="">
              <ButtonM word="Our Services" className="max-md:w-[355px] max-md:px-[120px] max-md:mb-28" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default LandServices;
