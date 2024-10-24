
const ServiceCard = ({ imageSrc, title, description, readMoreLink }) => {
  return (
    <article className="flex flex-col items-start text-zinc-800">
      <img loading="lazy" src={imageSrc} alt="" className="object-contain max-w-full aspect-[1.69] w-[108px]" />
      <h3 className="mt-7 text-5xl leading-none">{title}</h3>
      <p className="self-stretch mt-10 text-lg leading-6">{description}</p>
      <div className="flex gap-3.5 mt-5 text-lg leading-none text-blue-500">
        <a href={readMoreLink} className="flex flex-col">
          <span>Read more</span>
          <span className="flex shrink-0 mt-1.5 h-px bg-blue-500 w-[76px]"></span>
        </a>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9e651bfb5a2c54012ced139830df3bcae1ef47011bc4dd5571901b9aa3bb649?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d" alt="" className="object-contain shrink-0 self-start w-2.5 aspect-square" />
      </div>
    </article>
  );
};

export default ServiceCard;