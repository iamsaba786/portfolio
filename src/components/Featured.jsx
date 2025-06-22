import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-10">
      <div className="w-full px-10 border-b-[1px] border-zinc-600 pb-20">
        <h1 className="text-7xl font-['Neue Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-10">
        <div className="labs flex items-center justify-between mr-[30vw] uppercase mt-12 -mb-5">
          <div className="flex items-center gap-2 ">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-100"></div>
            <h1 className="font-sm text-md">Salience Labs</h1>
          </div>
          <div className="flex items-center gap-2 ">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-100"></div>
            <h1 className="font-sm text-md">Cardboard Spaceship</h1>
          </div>
        </div>
        <div className="cards w-full flex gap-10 mt-10 uppercase">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-['FoundersGrotesk, Roboto, sans-serif'] font-bold text-8xl">
              {"SalienceLabs".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-['FoundersGrotesk, Roboto, sans-serif'] font-bold text-8xl">
              {"CardboardSpaceship".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="px-10">
        <div className="labs flex items-center justify-between mr-[40vw] uppercase mt-20 -mb-5">
          <div className="flex items-center gap-2 ">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-100"></div>
            <h1 className="font-sm text-md">Fyde</h1>
          </div>
          <div className="flex items-center gap-2 ">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-100"></div>
            <h1 className="font-sm text-md">Vise</h1>
          </div>
        </div>
        <div className="cards w-full flex gap-10 mt-10 uppercase">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-['FoundersGrotesk, Roboto, sans-serif'] font-bold text-8xl">
              {"fyde".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-['FoundersGrotesk, Roboto, sans-serif'] font-bold text-8xl">
              {"vise".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="px-10">
        <div className="labs flex items-center justify-between mr-[36vw] uppercase mt-20 -mb-5">
          <div className="flex items-center gap-2 ">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-100"></div>
            <h1 className="font-sm text-md">Premium Blend</h1>
          </div>
          <div className="flex items-center gap-2 ">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-100"></div>
            <h1 className="font-sm text-md">Soft start</h1>
          </div>
        </div>
        <div className="cards w-full flex gap-10 mt-10 uppercase">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-['FoundersGrotesk, Roboto, sans-serif'] font-bold text-8xl">
              {"PremiumBlend".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-['FoundersGrotesk, Roboto, sans-serif'] font-bold text-8xl">
              {"Softstart".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="px-10">
        <div className="labs flex items-center uppercase mt-20 -mb-5">
          <div className="flex items-center gap-2 ">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-100"></div>
            <h1 className="font-sm text-md">AH2 & Matt Horn</h1>
          </div>
        </div>
        <div className="cards w-full flex gap-10 mt-10 uppercase">
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden top-[30vh] left-[5.5vw] text-[#CDEA68] z-[9] leading-none tracking-tighter font-['FoundersGrotesk, Roboto, sans-serif'] font-bold text-6xl">
              {"AH2 & Matt Horn".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
