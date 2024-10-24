import Footer from "@/components/ui/Footer"
import { Link } from "react-router-dom"
const SignIn = () => {
  return (
    <div>
      <div className="bg-white">
      <div className="flex gap-5  ">
        <section className="flex flex-col w-[36%]  ">
          <div className="flex overflow-hidden relative flex-col grow px-12 py-16 text-2xl text-white min-h-[1096px] ">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed39233a41b765a4d7951a792666a80d907c16690bdc3fc68bd60b9ea49bb910?apiKey=a47822eff5b2450ea0b6389b3ea53a3d&"
              className="object-cover absolute inset-0 size-full"
              alt=""
            />
            <Link
              to="/"
              className="relative self-start ml-4 font-black text-black"
            >
              InService
            </Link>
            <h2 className="relative self-start mt-44 ml-3 text-5xl font-extrabold ">
              Welcome Back
            </h2>
            <p className="relative mt-14 ml-3  ">
              Access your personalized dashboard and stay updated on
              the latest insights.
            </p>
            <div className="relative shrink-0 mt-52 rounded-xl bg-neutral-300 bg-opacity-30 h-[282px]  " />
          </div>
        </section>
        <div className="flex flex-col ml-5 w-[64%]  ">
          <div className="flex flex-col items-center self-stretch px-5 my-auto text-xl  ">
            <h1 className="self-stretch text-4xl font-extrabold text-black ">
              Sign In
            </h1>
            <p className="self-stretch mt-4 text-base text-neutral-500 ">
              Sign In to boost your business and gain insights.
            </p>
            <form
              className="flex flex-col items-center w-full max-w-[646px]"
            >
              <label htmlFor="email" className="sr-only">
                Email ID
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email ID"
                
                className="justify-center items-start px-12 py-9 mt-16 w-full rounded-2xl bg-neutral-100 text-neutral-500 max-md:px-5 "
                required
              />
              <div className="relative w-full mt-14 ">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  
                  className="flex gap-5 justify-between px-16 py-8 w-full whitespace-nowrap rounded-2xl bg-neutral-100 text-neutral-500 max-md:flex-wrap max-md:px-5"
                  required
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb8cc8bfe71116ddac8324492eaa3581e0081aca171479d7f655b85a896863d7?apiKey=a47822eff5b2450ea0b6389b3ea53a3d&"
                  className="absolute right-16 top-1/2 transform -translate-y-1/2 w-6 aspect-square"
                  alt=""
                />
              </div>
              <div className="flex gap-5 mt-12 max-w-full text-base w-[576px] max-md:flex-wrap ">
                <label className="flex gap-3.5 text-black">
                  <input
                    type="checkbox"
                    className="shrink-0 w-5 h-5 rounded-md border border-black border-solid bg-neutral-100"
                  />
                  <span className="flex-auto my-auto">Remember Me</span>
                </label>
                <a href="#" className="flex-auto text-blue-600">
                  Forgot Password
                </a>
              </div>
              <button
                type="submit"
                
                className="justify-center items-center px-16 py-8 mt-14 max-w-full text-3xl font-bold text-white bg-slate-500 rounded-xl w-[697px] max-md:px-5 "
              >
                Sign In
              </button>
            </form>
            <div className="mt-7 text-black underline ">
              Don&apos;t have an account yet?{" "}
              <Link to="/signup" className="font-semibold underline">
                Sign Up
              </Link>
            </div>
            {/* {errorMessage && (
              <div className="mt-5 text-red-500 text-center">
                {errorMessage}
              </div>
            )} */}
            <div className="flex gap-5 justify-center items-center self-stretch mt-10 text-2xl text-right whitespace-nowrap text-black text-opacity-60 max-md:flex-wrap ">
              <div className="shrink-0 self-stretch my-auto max-w-full h-px border border-solid bg-black bg-opacity-60 border-black border-opacity-60 w-[478px]" />
              <div className="self-stretch">or</div>
              <div className="shrink-0 self-stretch my-auto max-w-full h-px border border-solid bg-black bg-opacity-60 border-black border-opacity-60 w-[434px]" />
            </div>
            <div className="flex gap-5 justify-between mt-6 max-w-full text-black w-[802px] max-md:flex-wrap max-md:pr-5 ">
              {/* <OAuth /> */}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec592c6809f337627cd0faf7f4249963d287f924b4652cea1d1333113544248f?apiKey=a47822eff5b2450ea0b6389b3ea53a3d&"
                className="aspect-[6.25] w-[313px]"
                alt="Additional login options"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </div>

  )
}

export default SignIn