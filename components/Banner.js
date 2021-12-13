import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[650px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2  text-center w-full ">
        <p className="text-sm sm:text-lg font-bold ">
          Not sure where to go ? Perfect.
        </p>
        <button
          className="text-purple-500 bg-white px-10 py-4 font-bold shadow-md rounded-full my-3 
        hover:shadow-xl active:scale-90 transition duration-150"
        >
          I'm Flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
