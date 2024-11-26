import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";


const positions = [
  {
    number: "01",
    title: "Frontend Developer",
    description: "We are looking for a skilled frontend developer to join our team."
  },
  {
    number: "02",
    title: "Backend Developer",
    description: "We are looking for a skilled backend developer to join our team."
  }
  
];



// eslint-disable-next-line react/prop-types
const OpenPosition = ({ number, title, description }) => {
  return (
    <article className="flex flex-col items-start self-start text-zinc-800 max-md:max-w-full">
      <header className="flex gap-2.5">
        <span className="self-start text-xs tracking-wide leading-none">{number}</span>
        <h3 className="flex-auto text-5xl leading-none">{title}</h3>
      </header>
      <p className="self-stretch mt-11 text-xl leading-7 max-md:mt-10 max-md:max-w-full">
        {description}
      </p>
      <button 
        className="flex gap-3.5 mt-14 text-xl leading-none text-blue-500 max-md:mt-10"
        tabIndex="0"
      >
        <span className="grow">Apply for this job</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/892673b3ef397e9364650cd9a9ab63e50fb411709b8c6a4f3c57f1bfe5b050ef?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d" alt="" className="object-contain shrink-0 my-auto w-2.5 aspect-square" />
      </button>
      <div className="flex shrink-0 h-px bg-blue-500 w-[130px]" />
    </article>
  );
};

function JoinUs() {
 
  return (
    <>
    <Navbar />
     <main className="flex flex-col md:pt-28">
      <section className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col justify-center px-20 py-10 w-full  max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <article className="flex flex-col ml-72 max-w-full text-xl leading-7 text-zinc-800 w-[510px]">
              <h1 className="animate-x self-start text-6xl font-bold leading-[90px] max-md:text-4xl max-md:leading-10">
                Let&apos;s work <br /> together!
              </h1>
              <p  className="animate-y mt-10 max-md:mt-10 max-md:max-w-full text-lg">
                At InService, we empower you to unlock your full potential. We&apos;re 
                seeking visionary minds who are committed to crafting meaningful 
                connections between people through cutting-edge digital design 
                and development. We believe in fostering a culture of dedication, 
                collaboration, accountability, and talent to ensure everyone 
                achieves their best.
              </p>
              <p  className="animate-y mt-7 max-md:mr-2 max-md:max-w-full">
                Are you ready to join a team that&apos;s pushing the boundaries of 
                innovation? Take a look at the exciting opportunities listed below.
              </p>
            </article>
           <div className="animate-y flex flex-row gap-14  max-md:mr-2.5 max-md:max-w-full mt-9 mx-32 w-full"> 
            <img 
              src="./Anshu.jpg" 
              alt="Career opportunities showcase"
              className="object-fill mt-14 w-[500px] h-[600px] aspect-[2.23] max-md:mt-10 " 
            />
            
              <video 
                src="./GroupVideo.mp4"  
                autoPlay
                loop
                muted
                className="object-fill mt-40 pt-12 w-[700px] h-[500px] aspect-[2.23] max-md:mt-10 "
              >
                Your browser does not support the video tag.
              </video>
            
            </div>
            <img 
              src="./Group.jpg" alt="Team collaboration showcase"
              className="object-contain mt-9 mr-4 ml-3.5 w-full aspect-[2.08] max-w-[1632px] max-md:mr-2.5 max-md:max-w-full" 
            />
            
            <section className="flex flex-wrap gap-5 justify-between mt-28 mr-4 ml-7 w-full max-w-[1618px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              <div className="flex flex-col">
                <h2 className="text-7xl font-bold leading-[74px] text-zinc-800 max-md:text-4xl max-md:leading-10">
                  Our open <br /> positions
                </h2>
                <button 
                  className="flex overflow-hidden gap-3 self-start px-10 py-6 mt-14 text-base leading-none border border-solid bg-zinc-800 border-zinc-100 text-zinc-100 max-md:px-5 max-md:mt-10"
                  tabIndex="0"
                >
                  <span className="grow">Open application</span>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e75efc695c509ef43ac186cff140292268dd60118f113386fef3009e86a0c315?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d" alt="" className="object-contain shrink-0 self-start w-2.5 aspect-square" />
                </button>
              </div>
              
              {positions.map((position, index) => (
                <OpenPosition
                  key={index}
                  number={position.number}
                  title={position.title}
                  description={position.description}
                />
              ))}
            </section>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>


   
  );
}

export default JoinUs;