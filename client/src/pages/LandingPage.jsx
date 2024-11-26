import Navbar from "../components/ui/Navbar";
import ButtonM from "@/components/ui/ButtonM";
import LandServices from "@/components/ui/LandServices";
import Footer from "@/components/ui/Footer";
import GoogleTranslate from "@/components/ui/GoogleTranslate";
import { useEffect } from "react";
const LandingPage = () => {
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
      { threshold: 0.4 } // Adjust the threshold to trigger animation at desired visibility
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bottom-4 right-0 fixed">
        <GoogleTranslate />
      </div>

      <div className="md:pl-80 md:mt-48 md:mb-36 max-md:p-2 max-md:mt-10">
        <p className="animate-x md:pt-20 text-left max-md:text-5xl md:text-8xl text-[#333333] md:font-semibold max-md:font-bold ">
          We create <br className="hidden max-md:block" /> platform for a <br />
          <div className="relative inline-block h-[110px] w-[315px] inset-0">
            <span>service</span>
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              width="968"
              height="302"
              viewBox="0 0 868 302"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M670.928 16.9995C735.098 22.5978 887.037 79.3972 844.953 161.643C751.118 345.03 13.0476 301.464 9.59405 150.229C5.0259 -49.7525 771.991 23.7221 857.309 80.2161"
                stroke="#3B6DEC"
                strokeWidth="10.39288"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <br className="hidden max-md:block" />
          -centric future
        </p>
        <p className="animate-y md:pt-14 md:text-lg md:mb-14 max-md:pt-10 max-md:pb-10 ">
          We are a{" "}
          <strong>platform designed to access different services</strong>.
          <br className="hidden md:block" /> We are in the business to design
          smarter solutions and experiences
          <br className="hidden md:block" /> so our partners and their users
          can <strong>thrive</strong>.
        </p>
        <div>
          <ButtonM className="animate-y max-md:w-[400px] max-md:px-[145px] " />
        </div>
      </div>
      <div className="relative max-md:mt-6">
        <img
          src="/BW_india.jpg"
          alt="India jpg"
          className="card animate-img mx-auto md:w-5/6 max-md:h-[220px]"
        />
        <div className="absolute top-0 left-[440px] pt-14 flex items-center justify-center">
          <p className="animate-p card heading md:pt-4 md:text-6xl text-white font-semibold">
            Bringing India to Mainstream
          </p>
        </div>
      </div>

      <LandServices />
      <Footer />
    </div>
  );
};

export default LandingPage;
