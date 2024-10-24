import Footer from "@/components/ui/Footer"
import Navbar from "@/components/ui/Navbar"
import DifferenceCard from "@/components/ui/DifferenceCard";
const About = () => {
  const differenceData = [
    {
      number: "01",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d4326eea171f384733262a021adf9a552717d45bb81d4819df1ccdb3e25b6ca?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d",
      title: "We assemble and dedicate an in-house team",
      description: "with our near-shore eco-system of developers and engineers."
    },
    {
      number: "02",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/de93e5c4d5dd633d076acd4f5d26a0deaf39756403583c7a11f67448fccf1f5b?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d",
      title: "We dare to challenge user experience while keeping the importance of business value as our guiding beacon.",
      description: ""
    },
    {
      number: "03",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d9d19fe3d787228accc19d98cfd8a887dd7e20272796e23813d523d29ba5566?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d",
      title: "We believe in upfront clarity and advocate full-transparency in all our projects to ensure that nothing is left in the shadows.",
      description: ""
    },
    {
      number: "04",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/39039b7392017fdae741a9269cf6cacb918f8a2e0e09e9cebb74b48da441071a?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d",
      title: "At Studio Vi diversity and inclusivity are an integral part of our culture,",
      description: "to make impactful products that resonate with all types of users."
    }
  ];
  return (
    <div>
      <Navbar />
     
    <main className="flex flex-col">
      <section className="flex flex-col items-start px-20 pt-20 pb-12 w-full max-md:px-5 max-md:max-w-full">
        <h1 className="self-center text-5xl leading-10 text-zinc-800 max-md:max-w-full">
          We stand firm in our belief that digital should not be a<br />
          distraction; instead, it should act as an enabler of <br />
          human potential.
        </h1>

        <div className="self-end mt-36 w-full max-w-[1320px] max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <article className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-lg leading-6 text-zinc-800 max-md:mt-10">
                <h2 className="self-start text-5xl leading-none">What drives us</h2>
                <p className="mt-20 max-md:mt-10">
                  We are on a mission to make work more than just tasks to be
                  completed – we strive to make it a source of joy, fulfillment,
                  and meaningful accomplishments. Our commitment lies in
                  creating digital experiences that cultivate productivity,
                  streamline processes, and provide the freedom to focus on
                  what truly matters.
                </p>
                <p className="mt-8">
                  Human well-being is the highest trade and serves as a
                  foundation for everything we do. We use a blend of
                  unburdened creativity, the latest design principles, and
                  technologies to help brands and businesses unlock their full
                  potential and shape a brighter more fulfilling future.
                </p>
              </div>
            </article>
            <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e0fd94aeb8cf452c0ced7c56e80f9710ca818939b5064f93b812c4ecfe389b6?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d" 
                alt="Illustration of our mission and values"
                className="object-contain grow mt-7 w-full aspect-[1.96] max-md:mt-10 max-md:max-w-full" 
              />
            </div>
          </div>
        </div>

        <section className="mt-56 max-w-full w-[453px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[82%] max-md:ml-0 max-md:w-full">
              <h2 className="flex flex-col grow mt-8 text-7xl font-bold leading-none text-zinc-800 max-md:mt-10 max-md:text-4xl">
                <span className="max-md:text-4xl">What makes</span>
                <span className="mt-7 mr-7 max-md:mr-2.5 max-md:text-4xl">us different</span>
              </h2>
            </div>
            <div className="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8ae0179d4cc1e065bc8262f1b5a565436a7a8d2d2f270a79b2aafc6607240de?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d" 
                alt=""
                className="object-contain grow shrink-0 w-20 aspect-[0.53] max-md:mt-3.5" 
              />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-5 self-end mt-14 max-w-full w-[756px] max-md:mt-10 max-md:grid-cols-1">
          {differenceData.map((item, index) => (
            <DifferenceCard key={index} {...item} />
          ))}
        </div>

        <section className="mt-40 max-md:mt-10">
          <h2 className="text-5xl leading-none text-zinc-800 max-md:ml-0.5">Careers</h2>
          <p className="mt-8 text-lg leading-6 text-zinc-800 max-md:ml-0.5">
            Working at Studio Vi means working on your full potential.
            We are looking for passionate minds dedicated to creating
            valuable interactions between people through digital design
            and development. We believe in dedication, teamwork,
            ownership and talent to make sure everybody grows.
          </p>
          <p className="mt-8 text-lg leading-none text-zinc-800 max-md:ml-0.5">
            Want to be part of something awesome?
          </p>
          <button className="flex overflow-hidden gap-3 px-10 py-6 mt-16 text-base leading-none border border-solid bg-zinc-800 border-zinc-100 text-zinc-100 max-md:px-5 max-md:mt-10 max-md:ml-0.5">
            <span className="grow">Check our vacancies</span>
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/102165c505763332d03ca52a6b6e419b0198f4abe445e1292f639a74e199b5e0?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d" 
              alt=""
              className="object-contain shrink-0 self-start w-2.5 aspect-square" 
            />
          </button>
        </section>

        <section className="mt-80 max-w-full w-[405px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            <h2 className="flex flex-col w-[81%] text-7xl font-bold leading-none text-zinc-800 max-md:mt-1.5 max-md:text-4xl max-md:ml-0 max-md:w-full">
              <span className="max-md:text-4xl">Companies</span>
              <span className="self-start mt-4 max-md:text-4xl">work with</span>
            </h2>
            <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
              <span className="mt-3.5 text-7xl font-bold leading-none text-zinc-800 max-md:mt-5 max-md:text-4xl">
                we
              </span>
            </div>
          </div>
        </section>
      </section>
    </main>
      <Footer />
    </div>
  )
}

export default About