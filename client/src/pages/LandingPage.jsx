import Navbar from "../components/ui/Navbar";
import ButtonM from "@/components/ui/ButtonM";
import WordPullUp from "@/components/ui/word-pull-up";
import LandServices from "@/components/ui/LandServices";
import Footer from "@/components/ui/Footer";

const LandingPage = () => {
  return (
    <div >
      <Navbar />
      <div className="lg:pl-80 lg:mb-36 ">
        <p className="lg:pt-20 text-left  text-8xl  text-[#333333] font-semibold ">
          We create platform for a <br /> service-centric future
        </p>
        <p className="lg:pt-14   text-lg lg:mb-14">
          We are a{" "}
          <strong>platform designed to access different services</strong>.<br />{" "}
          We are in the business to design smarter solutions and experiences
          <br /> so our partners and their users can <strong>thrive</strong>.
        </p>
        <ButtonM />
      </div>
      <div className="relative ">
        <img src="/BW_india.jpg" alt="India jpg" className="mx-auto lg:w-5/6" />
        <div className="absolute top-0 left-[380px] pt-14 flex items-center justify-center">
          <WordPullUp words="Connecting INDIA to Mainstream!" className="text-[#F0F0F0] " />
        </div>
      </div>
      <LandServices />
      <Footer />
    </div>
  );
};

export default LandingPage;
