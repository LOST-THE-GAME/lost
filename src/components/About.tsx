import { Element } from "react-scroll";
import SlideIn from "./Animations/SlideIn";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const [counter, setCounter] = useState(Math.floor(Math.random() * 1000000));

  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + Math.floor(Math.random() * 100000));
    }, 500);
  }, [counter]);

  return (
    <Element name="about">
      <section className="section-base">
        <SlideIn>
          <div className="relative w-full mb-32 flex justify-center animate-slide-r">
            <Image
              src="/squirt.jpeg"
              alt="portrait"
              width={500}
              height={500}
              draggable={false}
            />
          </div>
          <div className="relative w-full mb-32 flex justify-center animate-slide-l">
            <div className="absolute -top-[800px] inset-0 flex justify-center items-center">
              <Image
                src="/lost.jpeg"
                alt="portrait"
                width={500}
                height={500}
                draggable={false}
              />
            </div>
          </div>
        </SlideIn>
        <SlideIn>
          <h1 className="mb-4 pb-2 text-5xl text-zinc-800 font-semibold border-b border-zinc-100">
            About
          </h1>
        </SlideIn>
        <SlideIn>
          <div className="text-2xl font-extralight tracking-wide">
            <p></p>
            <br />
            <p></p>
            <br />
            <p></p>
          </div>
        </SlideIn>
        <SlideIn>
          <div className="grid grid-cols-2 p-5 text-zinc-100 bg-zinc-800/80 rounded">
            <div className="col-span-2 flex justify-center mb-4 border-b border-zinc-100 text-4xl uppercase">
              <p className="mb-2 animate-flicker-text">Scoreboard</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2 text-xl sm:text-3xl font-medium border-b border-sky-400">
                The Game Winners
              </p>
              <p className="text-2xl">0</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2 text-xl sm:text-3xl font-medium border-b border-sky-400">
                The Game Losers
              </p>
              <p className="text-2xl">
                {new Intl.NumberFormat().format(counter)}
              </p>
            </div>
          </div>
        </SlideIn>
      </section>
    </Element>
  );
}
