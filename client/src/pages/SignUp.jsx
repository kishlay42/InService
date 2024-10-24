import { Link } from "react-router-dom"
import SignupField from "../components/ui/SignupField"
import Footer from "@/components/ui/Footer";
const SignUp = () => {
  // eslint-disable-next-line react/prop-types
  function SocialSignUp({ provider, icon }) {
    return (
      <button className="flex gap-4 px-5 py-2.5 border border-solid border-neutral-500 rounded-[33px]">
        <img loading="lazy" src={icon} alt={`${provider} logo`} className="shrink-0 aspect-square w-[30px]" />
        <span className="flex-auto my-auto">Sign Up with {provider}</span>
      </button>
    );
  }
  return (
    <div>
       <div className="bg-white ">
      <div className="flex gap-5 ">
        <aside className="flex flex-col w-[36%] ">
          <div className="flex overflow-hidden relative flex-col grow px-12 py-16 text-2xl text-white ">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed39233a41b765a4d7951a792666a80d907c16690bdc3fc68bd60b9ea49bb910?apiKey=a47822eff5b2450ea0b6389b3ea53a3d&"
              alt=""
              className="object-cover absolute inset-0 size-full"
            />
            <Link
              to="/"
              className="relative self-start ml-4 font-black text-black "
            >
              InService
            </Link>
            <h1 className="relative self-start mt-44 ml-3 text-5xl font-extrabold  ">
              Lets get Started
            </h1>
            <p className="relative mt-12 ml-3  ">
              Unlock services that cater to your businesses. Join
              us!
            </p>
            <div className="relative shrink-0 mt-60 rounded-xl bg-neutral-300 bg-opacity-30 h-[282px]  " />
          </div>
        </aside>
        <main className="flex flex-col ml-5 w-[64%] mt-12  ">
          <div className="flex flex-col self-stretch px-5 my-auto text-neutral-500  ">
            <h2 className="text-4xl font-extrabold text-black ">Sign Up</h2>
            <p className="mt-4 text-base ">
              Create an account to access services and insights.
            </p>
            <form className="mt-10  " >
              <div className="flex gap-5 text-xl  ">
                <SignupField
                  placeholder="First Name"
                  id="fname"
                  // onChange={handleChange}
                />
                <SignupField
                  placeholder="Last Name"
                  id="lname"
                  // onChange={handleChange}
                />
              </div>
              <div className="flex gap-5 mt-5 text-xl ">
                <SignupField
                  placeholder="Email"
                  id="email"
                  // onChange={handleChange}
                />
                <div className="flex flex-auto gap-5 justify-between px-16 py-8 whitespace-nowrap rounded-2xl bg-neutral-100   ">
                  <span className="self-stretch my-auto">+91</span>
                  <div className="shrink-0 self-start w-px border border-solid bg-stone-300 border-stone-300 h-[40px]" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="flex-auto self-stretch my-auto bg-transparent outline-none"
                    aria-label="Phone Number"
                  />
                </div>{" "}
              </div>
              <div className="flex gap-5 mt-5 text-xl ">
                <SignupField
                  placeholder="Password"
                  type="password"
                  id="password"
                  // onChange={handleChange}
                />
                <SignupField
                  placeholder="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  // onChange={handleChange}
                />
              </div>
              <div className="flex flex-col items-end mt-4 max-w-full text-black w-[912px]">
                <div className="flex gap-3.5 self-start text-base ">
                  <input
                    type="checkbox"
                    id="terms"
                    className="shrink-0 w-5 h-5 rounded-md border border-black border-solid bg-neutral-100"
                  />
                  <label htmlFor="terms" className="flex-auto underline ">
                    I&apos;ve read and agree with all{" "}
                    <span className="font-semibold underline">
                      Terms of Service
                    </span>{" "}
                    and our{" "}
                    <span className="font-semibold underline">
                      Privacy Policy
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  // disabled={loading}
                  className="justify-center items-center px-16 py-8 mt-8 max-w-full text-3xl font-bold text-white bg-slate-500 rounded-xl w-[671px] "
                >
                  Sign Up
                  {/* {loading ? (
                    <>
                      <BeatLoader color="#49d8c2" />
                    </>
                  ) : (
                    "Sign Up"
                  )} */}
                </button>
                <p className="mt-4 mx-auto text-xl underline ">
                  Have an account already?{" "}
                  <Link to="/signin" className="font-semibold underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
            {/* {errorMessage && (
              <p className="text-red-500 text-sm mt-4">{errorMessage}</p>
            )} */}
            <div className="flex gap-5 justify-center items-center mt-4 text-2xl text-right whitespace-nowrap text-black text-opacity-60  ">
              <div className="shrink-0 self-stretch my-auto max-w-full h-px border border-solid bg-black bg-opacity-60 border-black border-opacity-60 w-[478px]" />
              <span className="self-stretch">or</span>
              <div className="shrink-0 self-stretch my-auto max-w-full h-px border border-solid bg-black bg-opacity-60 border-black border-opacity-60 w-[482px]" />
            </div>
            <div className="flex gap-5 justify-between self-center mt-2 max-w-full text-xl text-black w-[782px] pb-10 ">
              {/* <OAuth /> */}
              <SocialSignUp provider="Facebook" icon="\img\facebookIcon.png" />
            </div>
          </div>
        </main>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default SignUp