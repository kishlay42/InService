import React from 'react';

function SubmitButton({ className = '' }) {
  return (
    <button
      type="submit"
      className={`flex overflow-hidden gap-10 items-start self-end py-px pr-7 text-base leading-none text-center whitespace-nowrap border border-solid bg-zinc-800 border-zinc-100 text-zinc-100 max-md:pr-5 ${className}`}
    >
      <div className="flex shrink-0 self-start w-0 bg-blue-500 h-[55px]" />
      <div className="flex gap-3 my-auto">
        <span>Send</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ead89fe68675a88db0b195e1ed7d38147a269704a0fe193529b30e01082cf06f?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d" className="object-contain shrink-0 self-start w-2.5 aspect-square" alt="" />
      </div>
    </button>
  );
}

export default SubmitButton;