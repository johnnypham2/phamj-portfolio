'use client';
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { BackgroundLines } from "./BackgroundLines";
// import Lottie from "react-lottie";
import { useState } from "react";
// import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import SimpleButton from "./SimpleButton";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,

  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  link
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;

  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  link?: string;
}) => {

  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('phammjohnny@gmail.com');
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000); 
  };

  const handleCopy2 = () => {
    navigator.clipboard.writeText('(209)244-4587')
    setCopied2(true);

    setTimeout(() => {
      setCopied2(false);
    }, 3000); 
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-white justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        // background: "rgb(238,174,202)",
        background:
          " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(69,22,40,1) 0%, rgba(38,86,105,1) 77%, rgba(69,132,184,1) 97%, rgba(69,71,104,1) 100%)",
      }}
    >
      {link ? <a href={link} target="_blank" rel="noopener noreferrer">

        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition dura†ion-200 relative md:h-full min-h-40 flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div
            className={cn(
              "font-sans text-sm md:text-xs lg:text-lg z-10 text-black font-medium"
            )}
          >
            {description}
          </div>
          <div
            className={cn(
              "font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 text-black"
            )}
          >
            {title}
          </div>
        </div>

      </a>
        :
        <div className={`${id === 5 && "flex justify-center h-full"}`}>
          <div className="w-full h-full absolute">
            {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center")}
              />
            )}
          </div>

          <div
            className={`absolute right-0 -bottom-5`}
          >
            {spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className={"object-cover object-center w-full h-full"}
              />
            )}
          </div>

          {id === 5 && (
            //render animation
            <BackgroundGradientAnimation>
              <div className="absolute z-50 flex items-center justify-center text-white font-bold"></div>
            </BackgroundGradientAnimation>
          )}

          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition dura†ion-200 relative md:h-full min-h-40 flex-col px-5 p-5 lg:p-10"
            )}
          >
            {id === 2 ?
              <>
                <div className="font-sans font-bold text-lg text-neutral-200 lg:text-3xl max-w-96 z-10">
                  {title}
                </div>
                <div className="font-sans font-extralight text-neutral-200 text-sm md:text-xs lg:text-base z-10">
                  {description}
                </div>
              </>
              :
              <>
                <div className="font-sans font-extralight text-neutral-200 text-sm md:text-xs lg:text-base z-10">
                  {description}
                </div>
                <div className="font-sans font-bold text-lg text-neutral-200 lg:text-3xl max-w-96 z-10">
                  {title}
                </div>
              </>
            }

            {id === 2 && (
              <BackgroundLines>
                <div></div>
              </BackgroundLines>
            )}
            {id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit relative -right-3 lg:right-2 text-gray-300">
                <div className="flex flex-col relative gap-3 lg:gap-8">
                  {["React.js", "Next.js", "Typescript"].map((item) => (
                    <span
                      key={item}
                      className="py-3 lg:py-4 lg:px-5 px-3 mt-3 text-sx lg:text-base opacity-50 lg:opacity-100 rounded-xl text-center bg-blue-950 "
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col relative gap-3 lg:gap-8">
                  {["HTML", "CSS", "Javascript"].map((item) => (
                    <span
                      key={item}
                      className="py-3 lg:py-4 lg:px-5 px-3 mt-3 text-sx lg:text-base opacity-50 lg:opacity-100 rounded-xl text-center bg-blue-950 "
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col relative gap-3 lg:gap-8">
                  {["C#", "Tailwind", "MySQL"].map((item) => (
                    <span
                      key={item}
                      className="py-3 lg:py-4 lg:px-5 px-3 mt-3 text-sx lg:text-base opacity-50 lg:opacity-100 rounded-xl text-center bg-blue-950 "
                    >
                      {item}
                    </span>
                  ))}

                </div>
              </div>
            )}

            {id === 4 && (
              <div id="contact" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5">
                <div className="sm:col-span-2 lg:col-span-1 flex justify-center mb-5 lg:mb-0">
                  <img
                    src="./portrait.jpg"
                    alt="Portrait"
                    className="rounded-full h-[150px] w-[150px] border-2 border-gray-300 object-cover object-top"
                  />
                </div>
                <div className="sm:col-span-2 lg:col-span-3 grid grid-cols-2 gap-4 justify-items-center">
                  <SimpleButton className="col-span-2 md:col-span-1" text="GitHub" link="https://github.com/johnnypham2" />
                  <SimpleButton className="col-span-2 md:col-span-1" text="LinkedIn" link="https://www.linkedin.com/in/johnny-pham-a0025b343/" />
                  <div className="col-span-2 flex justify-center">
                    <SimpleButton text="CodeWars" link="https://www.codewars.com/users/phamjohnny"/>
                  </div>
                </div>
              </div>
            )}

            {id === 5 && (
              <div className=" relative flex flex-col">
                <div className="absolute -bottom-5 right-0">
                  {/* <Lottie
                    options={{
                      loop: copied,
                      autoplay: copied,
                      animationData,
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice',
                      }
                    }}
                  /> */}
                </div>
                <MagicButton
                  title={copied ? 'Email copied' : 'Email'}
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="z-10"
                  handleClick={handleCopy}

                />
                <MagicButton
                  title={copied2 ? 'Phone copied' : 'Phone Number'}
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="z-10"
                  handleClick={handleCopy2}

                />
              </div>
            )}
          </div>
        </div>}

    </div>
  );
};