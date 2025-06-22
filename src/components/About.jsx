import React from "react";

function About() {
  return (
    <div className="w-full p-10 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <p className="font-['Neue Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to <u>raise funds</u>, <u>sell products</u>,
        <u>explain complex ideas</u>, and<u> hire great people</u>.
      </p>
      <div className="w-full flex gap-5 border-t-[2px] pt-5 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-5xl">Our approach:</h1>
          <button className="flex uppercase gap-10 items-center px-8 py-4 mt-5 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-black/50 overflow-hidden">
          <img
            className="w-full h-full max-w-full entered loaded"
            data-component="lazyload"
            data-animate="data-animate"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default About;
