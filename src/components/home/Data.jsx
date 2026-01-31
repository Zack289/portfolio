import { Send } from "lucide-react";

function Data() {
  return (
    <>
      <div className=" flex flex-col items-start justify-center gap-4 sm:gap-6 p-4 sm:p-6">
        {/* Name */}
        <h1 className="text-5xl font-bold">Laxman Bhandari</h1>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-secondary relative ">
          {" "}
          I'm
          <span className="text-rotate">
            <span className="justify-items-center">
              <span>DESIGNER</span>
              <span>DEVELOPER</span>
              {/* <span>DEPLOY</span> */}
              {/* <span>SCALE</span> */}
              {/* <span>MAINTAIN</span> */}
              {/* <span>REPEAT</span> */}
              <span className="pl-2">FREELANCER</span>
            </span>
          </span>
        </h3>

        {/* Description */}
        <p className="home-desc text-base sm:text-lg text-gray-600 max-w-md leading-relaxed">
          I'm a creative designer based in Nepal, passionate and dedicated to
          delivering high-quality work.
        </p>

        {/* Call-to-action */}
        <div className="flex gap-2">
          <a
            href="#contact"
            className="btn btn-primary btn-md  gap-2 hover:scale-105 transition-transform duration-300 active:scale-95"
          >
            Say Hello <Send className="w-5 h-5" />
          </a>
          <a
            href="#projects"
            className="btn btn-outline btn-primary btn-md  gap-2 hover:scale-105 transition-transform duration-300 active:scale-95 group "
          >
            See Projects
            <span className="ml-2 inline-block transform transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

     
    </>
  );
}

export default Data;
