
// eslint-disable-next-line react/prop-types
function SignupField({ type, placeholder, icon, prefix }) {
    const baseClasses = "grow justify-center items-start px-10 py-9 rounded-2xl bg-neutral-100 w-fit max-md:px-5 max-md:max-w-full";
    
    if (type === 'select') {
      return (
        <div className={`flex flex-auto gap-5 justify-between ${baseClasses}`}>
          <span>{placeholder}</span>
          <img loading="lazy" src={icon} alt="" className="shrink-0 self-start mt-2 border-black border-solid aspect-[1.49] border-[3px] stroke-[2.8px] stroke-black w-[21px]" />
        </div>
      );
    }
  
    if (prefix) {
      return (
        <div className={`flex flex-1 gap-5 items-center ${baseClasses}`}>
          <span className="self-stretch my-auto">{prefix}</span>
          <div className="shrink-0 self-start w-px border border-solid bg-stone-300 border-stone-300 h-[82px]" />
          <input type={type} placeholder={placeholder} className="flex-auto self-stretch my-auto bg-transparent" aria-label={placeholder} />
        </div>
      );
    }
  
    if (icon) {
      return (
        <div className={`flex flex-1  gap-5 justify-between ${baseClasses}`}>
          <input type={type} placeholder={placeholder} className="my-auto bg-transparent" aria-label={placeholder} />
          <img loading="lazy" src={icon} alt="" className="shrink-0 w-6 aspect-square" />
        </div>
      );
    }
  
    return (
      <input type={type} placeholder={placeholder} className={baseClasses} aria-label={placeholder} />
    );
  }
  
  export default SignupField;