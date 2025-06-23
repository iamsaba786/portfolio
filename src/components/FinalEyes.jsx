import React, { useEffect, useState } from "react";

function FinalEyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="eyes w-full h-[140vh] text-zinc-900 bg-[#CDEA68] overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.3"
        className="relative left-[9vw] top-[25vh] block w-[80vw] h-[200vh]"
      >
        <div className="uppercase flex flex-col items-center justify-center text-[12.5vw] tracking-tighter leading-[11vw] font-bold">
          <a href="#">
            ready <br />
          </a>
          <a href="#">
            to start <br />
          </a>
          <a href="#">the project?</a>
        </div>
        <button className="flex uppercase gap-10 items-center justify-center px-8 py-4 mt-10 ml-[31vw] bg-zinc-900 rounded-full text-white">
          start the project
          <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
        </button>
        <h2 className="font-medium text-lg mt-2 -mb-2 ml-[40vw] ">OR</h2>
        <button className="flex uppercase gap-10 items-center justify-center px-8 py-4 mt-5 ml-[30vw] border border-zinc-900 rounded-full text-zinc-900 hover:bg-zinc-900 hover:text-zinc-100">
          HELLO@OCHI.DESIGN
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </button>
        <div className="absolute flex gap-10 top-[20vh] left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <h1 className="text-lg ml-9 pt-10 font-medium">PLAY</h1>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7"
              >
                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <h1 className="text-lg ml-9 pt-10 font-medium">PLAY</h1>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7"
              >
                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalEyes;
