
function ConsentCheckbox({ className = '' }) {
  return (
    <div className={`flex flex-wrap gap-10 self-start text-lg leading-none ${className}`}>
      <div className="flex shrink-0 bg-gray-200 border border-blue-500 border-solid h-[30px] w-[30px]">
        <input
          type="checkbox"
          id="consentCheckbox"
          className="sr-only"
          aria-label="Consent to data storage"
        />
        <label htmlFor="consentCheckbox" className="w-full h-full cursor-pointer" />
      </div>
      <div className="flex-auto my-auto max-md:max-w-full">
        I consent to InService storing my data so they can respond to my inquiry
      </div>
    </div>
  );
}

export default ConsentCheckbox;