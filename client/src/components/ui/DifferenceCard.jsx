// eslint-disable-next-line react/prop-types
export default function DifferenceCard({ number, icon, title, description }) {
  return (
    <article className="flex flex-col w-full max-md:ml-0">
      <div className="flex flex-col grow items-start text-lg leading-6 text-zinc-800 max-md:mt-10">
        <img 
          loading="lazy" 
          src={icon} 
          alt=""
          className="object-contain max-w-full aspect-[1.69] w-[108px]" 
        />
        <div className="mt-7 text-5xl leading-none">{number}</div>
        <h3 className="self-stretch mt-12 font-bold max-md:mt-10">
          {title}
        </h3>
        <p className="mt-3">{description}</p>
      </div>
    </article>
  );
}