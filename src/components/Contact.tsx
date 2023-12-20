import { Element } from "react-scroll";
import SlideIn from "./Animations/SlideIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faCode,
  faChartColumn,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const contract = "456f8gvb08234fh90824hv87g3byv29cfvb";

export default function Contact() {
  const [copyConfirmed, setCopyConfirmed] = useState<boolean>(false);
  return (
    <Element name="contactme">
      <section className="section-base mb-40 lg:mb-20">
        <SlideIn>
          <div className="relative w-full mb-32 flex justify-center">
            <Image
              src="/poster.png"
              alt="portrait"
              width={700}
              height={700}
              draggable={false}
            />
            <div className="absolute top-[110px] -right-[70px] sm:top-[325px] sm:right-[180px] p-12 h-[50%] mx-auto my-auto">
              <div className="absolute top-24 left-14 w-4 overflow-hidden">
                <div className="h-4 bg-zinc-100 transform origin-bottom-right rounded-sm"></div>
              </div>
              <div className="flex justify-center items-center h-[75px] w-[150px] bg-zinc-100 rounded-[50%] text-3xl uppercase">
                hehe
              </div>
            </div>
          </div>
        </SlideIn>
        <SlideIn>
          <h1 className="mb-4 pb-2 text-5xl text-zinc-800 font-semibold border-b border-zinc-100">
            Socials
          </h1>
        </SlideIn>
        <SlideIn>
          <div className="flex justify-center mt-20 text-4xl sm:text-6xl">
            <p className="w-fit px-4 py-2 bg-zinc-400/20 backdrop-blur-md rounded">
              Play{" "}
              <span className="mx-2 text-zinc-100 font-medium uppercase">
                {" "}
                The Game
              </span>
              with us.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <CopyToClipboard
              text={contract}
              onCopy={() => {
                setCopyConfirmed(true);
                setTimeout(() => {
                  setCopyConfirmed(false);
                }, 2000);
              }}
            >
              <button className="group items-center px-3 py-1 w-fit bg-zinc-100/80 hover:bg-zinc-300/80 text-zinc-800 text-xl rounded hover:cursor-pointer">
                {contract}
                <FontAwesomeIcon
                  icon={faCopy}
                  className="ml-3 group-hover:text-white"
                />
              </button>
            </CopyToClipboard>
            {copyConfirmed && <p>Copied.</p>}
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 justify-center items-center mt-8 text-3xl">
            <a
              href="https://twitter.com/_Lost_The_Game_"
              className="flex justify-center items-center group w-32 my-3 px-3 py-1 uppercase text-xl text-zinc-900 bg-sky-400 rounded hover:bg-sky-500"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="mr-2 group-hover:text-white"
              />
              Twitter
            </a>
            <a
              href=""
              className="flex justify-center items-center group w-32 my-3 px-3 py-1 uppercase text-xl text-zinc-900 bg-sky-400 rounded hover:bg-sky-500"
            >
              <FontAwesomeIcon
                icon={faTelegram}
                className="mr-2 group-hover:text-white"
              />
              Telegram
            </a>
            <a
              href="mailto:ILostTheGame@protonmail.com"
              className="flex justify-center items-center group w-32 my-3 px-3 py-1 uppercase text-xl text-zinc-900 bg-sky-400 rounded hover:bg-sky-500"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 group-hover:text-white"
              />
              Email US
            </a>
          </div>
          <div className="flex space-x-8 justify-center items-center mt-8 text-3xl">
            <a
              href=""
              className="flex justify-center items-center group w-32 my-3 px-3 py-1 uppercase text-xl text-zinc-900 bg-sky-400 rounded hover:bg-sky-500"
            >
              <FontAwesomeIcon
                icon={faCode}
                className="mr-2 group-hover:text-white"
              />
              Contract
            </a>
            <a
              href=""
              className="flex justify-center items-center group w-32 my-3 px-3 py-1 uppercase text-xl text-zinc-900 bg-sky-400 rounded hover:bg-sky-500"
            >
              <FontAwesomeIcon
                icon={faChartColumn}
                className="mr-2 group-hover:text-white"
              />
              Chart
            </a>
          </div>
        </SlideIn>
      </section>
    </Element>
  );
}
