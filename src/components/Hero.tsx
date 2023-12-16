"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Element } from "react-scroll";
import SlideIn from "./Animations/SlideIn";
import { Link } from "react-scroll";
import ReactAudioPlayer from "react-audio-player";
import { useEffect } from "react";

export default function Hero() {
  let audio: HTMLAudioElement;
  useEffect(() => {
    //@ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
    audio = document.getElementById("laugh");
  });

  return (
    <Element name="lost">
      <section className="section-base my-20 grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <SlideIn index={0} direction="y">
            <p className="mb-3 text-8xl font-semibold text-sky-400">Hey, </p>
          </SlideIn>
          <SlideIn index={16}>
            <p className="mb-3 text-7xl sm:text-8xl font-semibold text-zinc-800 uppercase">
              You Lost
            </p>
            <p className="text-7xl sm:text-8xl font-semibold text-zinc-800 uppercase">
              The Game
            </p>
          </SlideIn>
          <SlideIn index={18} direction="y">
            <h2 className="flex items-center my-8 ml-5 lg:ml-7 text-3xl lg:text-5xl font-semibold text-zinc-800">
              <FontAwesomeIcon
                icon={faAnglesRight}
                size="xs"
                className="mr-2"
              />
              Ticker:
              <span className="ml-2 px-5 py-2 animate-wave bg-zinc-100/80 text-sky-400 rounded-2xl">
                <span className="animate-pulse font-normal">$</span>
                <span className="animate-pulse">LOST</span>
              </span>
            </h2>
          </SlideIn>
          <SlideIn index={20} direction="y">
            <Link
              to="contactme"
              spy={true}
              duration={1000}
              delay={100}
              smooth={true}
              offset={550}
              className="flex items-center w-fit group my-8 px-3 py-1 uppercase text-xl text-zinc-900 bg-sky-400 rounded hover:bg-sky-500 cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faPeopleGroup}
                className="mr-2 group-hover:text-white"
              />
              Play The Game
            </Link>
          </SlideIn>
        </div>
        <div>
          <SlideIn index={3} direction="x">
            <Image
              src="/lostgirl.png"
              alt="portrait"
              width={700}
              height={700}
              id="laughimg"
              onClick={() => {
                console.log("PLAY");
                audio?.play();
              }}
              className="drop-shadow-[0_0px_35px_rgba(0,0,0,0.25)] hover:cursor-pointer"
              draggable={false}
              priority={true}
            />
          </SlideIn>
          <ReactAudioPlayer
            id="laugh"
            preload="auto"
            src="girllaugh.mp3"
            loop={false}
          />
        </div>
      </section>
    </Element>
  );
}
