/* eslint-disable react/prop-types */

function InputField({ name, label, type = 'text', className = '' }) {
  return (
    <div className={`overflow-hidden grow px-7 py-6 bg-gray-200 border border-gray-200 border-solid w-fit max-md:px-5 ${className}`}>
      <label htmlFor={name} className="sr-only">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={label}
        aria-label={label}
        className="bg-transparent w-full outline-none"
      />
    </div>
  );
}

export default InputField;