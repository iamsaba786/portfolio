import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex items-center px-20 gap-5">
      <div className="cardcontainer w-1/2 h-[60vh]">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-3 py-0.5 border-2 border-[#CDEA68] text-[#CDEA68] rounded-full left-8 bottom-8">
            ©2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[60vh]">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121] ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-3 py-1 border-2 uppercase rounded-full left-8 bottom-8 text-sm">
            Rating 5.0 on Clutch
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121] ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute px-9 py-1 border-2 uppercase rounded-full left-6 bottom-6 text-sm">
            Business Bootcamp <br /> Alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
