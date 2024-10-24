import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import ServiceCard from "@/components/ui/ServiceCard";
const Services = () => {
  const servicesData = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5aa69d633b07e67405dc251f46d002b6845190492710a4786fdf16d4f3ad81f3?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d",
      title: "Strategy",
      description: "Every successful project starts with a purposeful strategy. We combine strategic thinking and business experience with design and technology to create a plan of action that takes your product from good to great.",
      readMoreLink: "#"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0409fb43f34370ad20c2cc9abe9ce03b9006f7453cc1cc4e6dbba03c004e8aa8?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d",
      title: "Artificial Intelligence",
      description: "We create custom AI solutions and entities which are highly personalised to meets endless business needs from virtual sales assistants to customer care models.",
      readMoreLink: "#"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/56936d5342db3d4b35802b1313d25fa25a38a513faf2bd2309eaa4f0bcc45baf?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d",
      title: "Design",
      description: "We design digital products with their users at the core. We strive to create innovative and visionary products using cutting-edge technologies and design techniques.",
      readMoreLink: "#"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f7e0b4c2ff2bf2c8f0895c8613d45b21515a84e710cb6268be8c1171c308c50?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d",
      title: "Development",
      description: "Great code makes great designs truly come to life. Following lean development processes ensures that we deliver digital products that last and follow high security and performance standards.",
      readMoreLink: "#"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2dbd7c9a20e3a068ac525e2c033baa17697819b2f3771799cc54883986ae2d75?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d",
      title: "Traffic optimisation",
      description: "We take your goals as a client and translate them into a strategy that will see your business grow. We use tools, including: SEO, data analysis and targeted advertising to get the most out of your platform.",
      readMoreLink: "#"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0eadf4c52e3603c50f3d3417297f63444371737023f0fa504a821464e1a69af1?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d",
      title: "Cloud management and security",
      description: "Security, stability and performance are important factors when it comes to cloud management. Studio Vi makes sure your digital product is hosted and fully managed in a market-proven cloud environment.",
      readMoreLink: "#"
    }
  ];

  return (
    <>
      <Navbar />
      <section className="lg:pb-36  ">

        <h1 className=" text-8xl font-bold leading-none text-zinc-800 max-md:max-w-full max-md:text-4xl lg:pt-20 lg:ml-48">
          The services<br /> we provide
        </h1>


        <div className="mt-32 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full lg:ml-40">
          <div className="flex flex-wrap gap-20">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col w-full md:w-1/3 lg:w-[400px] max-md:ml-0 max-md:w-full`}
              >
                <ServiceCard
                  imageSrc={service.imageSrc}
                  title={service.title}
                  description={service.description}
                  readMoreLink={service.readMoreLink}
                />
              </div>
            ))}
          </div>
        </div>
    </section >
      <Footer />
        </>
        
      );
    
}

export default Services



