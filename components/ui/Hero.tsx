import MagicButton from "./MagicButton"
import { Spotlight } from "./Spotlight"
import { TextGenerateEffect } from "./TextGenerateEffect"
import { GoProjectRoadmap } from "react-icons/go";

const Hero = () => {
  return (
    <>
      <div className="pb-20 pt-36">
        <div>
            <Spotlight 
                className="top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                fill="white"
            />
            <Spotlight 
                className="top-10 left-full h-[80vh] w-[50vw]"
                fill="purple"
            />
            <Spotlight 
                className="top-28 -left-80 h-[80vh] w-[50vwl]"
                fill="blue"
            />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            {/* Radial gradient for the container to give a faded look  */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>

        <div className="flex justify-center relative my-20 z-10">
            <div className="mx-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
                {/* <h1 className="uppercase tracking-widest text-xs text-center text-blue-400 mx-w-80"> Dynamic Web Magic Next.js</h1> */}
                <TextGenerateEffect 
                    className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    words="Hello! I'm Johnny Pham, an aspiring full stack software engineer."
                />
                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg text-white">{"I am based in San Joaquin County with a strong interest in frontend development and an expanding focus on backend technologies. Beyond coding, I bring extensive experience in customer service, excelling in communication and consistently surpassing expectations."}</p>
                <a href="#projects"><MagicButton position="right" title="Check Out My Projects" icon={<GoProjectRoadmap/>}/></a>
            </div>
        </div>

      </div>
    </>
  )
}

export default Hero
