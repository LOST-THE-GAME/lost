// @ts-nocheck
import React from "react";

const SquigglyDoor = ({ setEntered }: { setEntered: any }) => {
  const bodyStyle = {
    display: "flex",
    width: "100%",
    height: "100dvh",
    background: "#222",
    perspective: "100vw",
    overflow: "hidden",
    animation: "squiggly-anim 0.4s infinite",
    WebkitAnimation: "squiggly-anim 0.2s infinite",
  };
  const doorStyle0 = {
    position: "absolute",
    width: "100px",
    height: "200px",
    left: "calc(50% - 50px)",
    top: "calc(50% - 100px)",
    boxShadow:
      "inset 0 -5px 0 0 #222, inset 0 0 0 1px #fff, 0 5px 0 0 #222, 0 0 0 100vw #222",
    perspective: "500px",
    transformStyle: "preserve-3d",
    WebkitAnimation: "scaling 5s linear infinite",
    animation: "scaling 5s linear infinite",
    transform: "translateZ(-1px)",
  };

  const doorStyle1 = {
    position: "absolute",
    width: "100px",
    height: "200px",
    left: "calc(50% - 50px)",
    top: "calc(50% - 100px)",
    boxShadow:
      "inset 0 -5px 0 0 #222, inset 0 0 0 1px #fff, 0 5px 0 0 #222, 0 0 0 100vw #222",
    perspective: "500px",
    transformStyle: "preserve-3d",
    WebkitAnimation: "scaling 5s linear infinite",
    animation: "scaling 5s linear infinite",
    transform: "translateZ(-1px)",
    WebkitAnimationDelay: "1.25s",
    animationDelay: "1.25s",
  };

  const doorStyle2 = {
    position: "absolute",
    width: "100px",
    height: "200px",
    left: "calc(50% - 50px)",
    top: "calc(50% - 100px)",
    boxShadow:
      "inset 0 -5px 0 0 #222, inset 0 0 0 1px #fff, 0 5px 0 0 #222, 0 0 0 100vw #222",
    perspective: "500px",
    transformStyle: "preserve-3d",
    WebkitAnimation: "scaling 5s linear infinite",
    animation: "scaling 5s linear infinite",
    transform: "translateZ(-1px)",
    WebkitAnimationDelay: "2.5s",
    animationDelay: "2.5s",
  };

  const doorStyle3 = {
    position: "absolute",
    width: "100px",
    height: "200px",
    left: "calc(50% - 50px)",
    top: "calc(50% - 100px)",
    boxShadow:
      "inset 0 -5px 0 0 #222, inset 0 0 0 1px #fff, 0 5px 0 0 #222, 0 0 0 100vw #222",
    perspective: "500px",
    transformStyle: "preserve-3d",
    WebkitAnimation: "scaling 5s linear infinite",
    animation: "scaling 5s linear infinite",
    transform: "translateZ(-1px)",
    WebkitAnimationDelay: "3.75s",
    animationDelay: "3.75s",
  };

  const faceStyle0 = {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "calc(100% - 4px)",
    transformStyle: "preserve-3d",
    boxShadow: "inset 0 0 0 1px #fff",
    background: "#222",
    transformOrigin: "left",
    WebkitAnimation: "swing 5s ease-in-out infinite",
    animation: "swing 5s ease-in-out infinite",
  };
  const faceStyle1 = {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "calc(100% - 4px)",
    transformStyle: "preserve-3d",
    boxShadow: "inset 0 0 0 1px #fff",
    background: "#222",
    transformOrigin: "left",
    WebkitAnimation: "swing 5s ease-in-out infinite",
    animation: "swing 5s ease-in-out infinite",
    WebkitAnimationDelay: "1.25s",
    animationDelay: "1.25s",
  };
  const faceStyle2 = {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "calc(100% - 4px)",
    transformStyle: "preserve-3d",
    boxShadow: "inset 0 0 0 1px #fff",
    background: "#222",
    transformOrigin: "left",
    WebkitAnimation: "swing 5s ease-in-out infinite",
    animation: "swing 5s ease-in-out infinite",
    WebkitAnimationDelay: "2.5s",
    animationDelay: "2.5s",
  };
  const faceStyle3 = {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "calc(100% - 4px)",
    transformStyle: "preserve-3d",
    boxShadow: "inset 0 0 0 1px #fff",
    background: "#222",
    transformOrigin: "left",
    WebkitAnimation: "swing 5s ease-in-out infinite",
    animation: "swing 5s ease-in-out infinite",
    WebkitAnimationDelay: "3.75s",
    animationDelay: "3.75s",
  };

  const rightStyle = {
    position: "absolute",
    width: "10%",
    background: "#222",
    height: "100%",
    top: "0",
    right: "-10%",
    transformOrigin: "left",
    transform: "rotateY(90deg)",
    boxShadow: "inset 0 0 0 1px #fff",
  };

  return (
    <div style={bodyStyle}>
      <div style={doorStyle0}>
        <div style={faceStyle0}>
          <div style={rightStyle}></div>
        </div>
      </div>
      <div style={doorStyle1}>
        <div style={faceStyle1}>
          <div style={rightStyle}></div>
        </div>
      </div>
      <div style={doorStyle2}>
        <div style={faceStyle2}>
          <div style={rightStyle}></div>
        </div>
      </div>
      <div style={doorStyle3}>
        <div style={faceStyle3}>
          <div style={rightStyle}></div>
        </div>
      </div>
      <button className="w-full h-full z-50" onClick={() => setEntered(true)}>
        <p className="m-auto text-zinc-100 uppercase">Click to Enter</p>
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ display: "none" }}
      >
        <defs>
          <filter id="squiggly-0">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.01"
              numOctaves="3"
              result="noise"
              seed="0"
            />
            <feDisplacementMap
              id="displacement"
              in="SourceGraphic"
              in2="noise"
              scale="2"
            />
          </filter>
          <filter id="squiggly-1">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.01"
              numOctaves="3"
              result="noise"
              seed="1"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
          <filter id="squiggly-2">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.01"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
          <filter id="squiggly-3">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.01"
              numOctaves="3"
              result="noise"
              seed="3"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
          <filter id="squiggly-4">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.01"
              numOctaves="3"
              result="noise"
              seed="4"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
          </filter>
        </defs>
      </svg>
      <style>
        {`
          @-webkit-keyframes squiggly-anim {
            0% {
              filter: url("#squiggly-0");
            }
            25% {
              filter: url("#squiggly-1");
            }
            50% {
              filter: url("#squiggly-2");
            }
            75% {
              filter: url("#squiggly-3");
            }
            100% {
              filter: url("#squiggly-4");
            }
          }
          @keyframes squiggly-anim {
            0% {
              filter: url("#squiggly-0");
            }
            25% {
              filter: url("#squiggly-1");
            }
            50% {
              filter: url("#squiggly-2");
            }
            75% {
              filter: url("#squiggly-3");
            }
            100% {
              filter: url("#squiggly-4");
            }
          }
          @-webkit-keyframes swing {
            15% {
              transform: rotateY(0deg);
            }
            50% {
              transform: rotateY(-125deg) translateZ(-2px);
            }
            75% {
              transform: rotateY(-125deg);
            }
            100% {
              transform: rotateY(-125deg);
            }
          }

          @keyframes swing {
            15% {
              transform: rotateY(0deg);
            }
            50% {
              transform: rotateY(-125deg) translateZ(-2px);
            }
            75% {
              transform: rotateY(-125deg);
            }
            100% {
              transform: rotateY(-125deg);
            }
          }

          @-webkit-keyframes scaling {
            0% {
              transform: translateZ(0vw);
              opacity: 1;
              z-index: 0;
            }
            50% {
              transform: translateZ(100vw);
              opacity: 1;
              z-index: 1;
            }
            95% {
              transform: translateZ(200vw);
              opacity: 1;
              z-index: 2;
            }
            100% {
              transform: translateZ(300vw);
              opacity: 0;
              z-index: 3;
            }
          }

          @keyframes scaling {
            0% {
              transform: translateZ(0vw);
              opacity: 1;
              z-index: 0;
            }
            50% {
              transform: translateZ(100vw);
              opacity: 1;
              z-index: 1;
            }
            95% {
              transform: translateZ(200vw);
              opacity: 1;
              z-index: 2;
            }
            100% {
              transform: translateZ(300vw);
              opacity: 0;
              z-index: 3;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SquigglyDoor;
