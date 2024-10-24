
function TextArea({ name, label, className = '' }) {
  return (
    <div className={`overflow-hidden px-7 pt-7 pb-44 text-lg bg-gray-200 border border-gray-200 border-solid max-md:px-5 max-md:pb-28 max-md:max-w-full ${className}`}>
      <label htmlFor={name} className="sr-only">{label}</label>
      <textarea
        id={name}
        name={name}
        placeholder={label}
        aria-label={label}
        className="bg-transparent w-full h-full outline-none resize-none"
      />
    </div>
  );
}

export default TextArea;