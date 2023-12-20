"use client";

import { useEffect, useState } from "react";
import "overlayscrollbars/overlayscrollbars.css";
import { useOverlayScrollbars } from "overlayscrollbars-react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import ReactAudioPlayer from "react-audio-player";
import SquigglyDoor from "@/components/SquiglyDoor";
import Image from "next/image";

const Page = () => {
  const [entered, setEntered] = useState(false);
  const [initBodyOverlayScrollbars] = useOverlayScrollbars({
    defer: true,
    options: {
      scrollbars: {
        theme: "os-theme-light",
        autoHide: "scroll",
      },
    },
  });

  useEffect(() => {
    initBodyOverlayScrollbars(document.body);
  }, [initBodyOverlayScrollbars]);

  return (
    <main className="flex flex-col justify-center overflow-x-hidden">
      {entered ? (
        <>
          <Image
            src="/hand.png"
            alt="portrait"
            width={300}
            height={300}
            draggable={false}
            className="absolute animate-slide-t"
          />
          <Image
            src="/hand.png"
            alt="portrait"
            width={300}
            height={300}
            draggable={false}
            className="absolute right-0 animate-slide-b"
          />
          <section className="text-zinc-800 bg-[url('/scrabble.jpeg')] bg-contain">
            <Header />
            <Hero />
            <ReactAudioPlayer
              id="audioplayer"
              preload="auto"
              src="woah.mp3"
              className="self-center"
              autoPlay
              loop
            />
            <About />
            <Contact />
          </section>
        </>
      ) : (
        // <div className="w-[full] h-[100dvh] flex justify-center items-center text-sky-400 text-7xl font-semibold bg-[url('/4chan.png')] bg-contain bg-no-repeat bg-center">
        //   <button
        //     onClick={() => setEntered(true)}
        //     className="w-full h-full p-2 animate-ping uppercase"
        //   >
        //     <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
        //     Click to Enter
        //     <FontAwesomeIcon icon={faAngleLeft} className="ml-2" />
        //   </button>
        // </div>
        <SquigglyDoor setEntered={setEntered} />
      )}
    </main>
  );
};

export default Page;
