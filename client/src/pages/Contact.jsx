import SubmitButton from "@/components/ui/SubmitButton";
import InputField from "@/components/ui/InputField";
import TextArea from "@/components/ui/TextArea";
import FileUpload from "@/components/ui/FileUpload";
import ConsentCheckbox from "@/components/ui/ConsentCheckbox";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

function Contact() {
  return (
    <div className="bg-[#F0F0F0] "> 
    <Navbar/>
    <form className="flex flex-col max-w-[989px] text-zinc-800 lg:pb-36 mx-auto lg:pt-20">
      <header className="flex flex-col items-start pr-20 pl-4 w-full max-md:pr-5 max-md:max-w-full">
        <h1 className="text-8xl font-bold  max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Lets grow and solve <br /> together
        </h1>
        <p className="mt-16 text-lg leading-6 max-md:mt-10">
          The first step in creating something special starts with a<br />
          conversation. Lets have a chat; fill out our form below or give <br />
          us a call at{"+91xxxxxxxxx"}
        </p>
        <div className="flex shrink-0 mt-1 ml-20 h-px bg-zinc-800 w-[125px] max-md:ml-2.5" />
      </header>

      <main className="flex flex-col pl-4 mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <h2 className="self-start text-2xl leading-none">Get in touch with us</h2>
        
        <div className="flex flex-wrap gap-8 mt-9 text-lg max-md:max-w-full">
          <InputField name="firstName" label="First name" />
          <InputField name="lastName" label="Last name" />
        </div>
        
        <InputField name="companyName" label="Company name" className="mt-6" />
        
        <div className="flex flex-wrap gap-8 mt-6 text-lg max-md:max-w-full">
          <InputField name="email" label="E-mail" type="email" />
          <InputField name="phoneNumber" label="Phone number" type="tel" />
        </div>
        
        <h2 className="self-start mt-7 text-2xl leading-none">Tell us about the project</h2>
        <TextArea name="projectDescription" label="Short description of the project" className="mt-7" />
        
        <FileUpload className="mt-16 max-md:mt-10" />
        
        <ConsentCheckbox className="mt-14 max-md:mt-10" />
      </main>

      <SubmitButton className="self-end mt-9" />
    </form>
    <Footer/>
    </div>
  );
}

export default Contact;