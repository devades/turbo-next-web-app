"use client";

import { useTheme } from "@repo/ui/hooks/useTheme";

export default function HeroSection() {
  const { theme } = useTheme();
const isHero = true;
  // const black = '70, 29, 219,';
  const black = theme === "dark" ? "24, 24, 27," : "255, 255, 255,";
  const purple = "54, 29, 219,";

  const PageWidth = '1250px';

  return (
    <div
    className={
      theme +
      " bg-white dark:bg-zinc-900 pt-4 lg:pt-16 overflow-y-hidden w-full "
    }
    style={{
      background: `radial-gradient(20em at 5% 99%, rgba(${black} .2) 0, rgba(${black} 1) 10%, transparent ),
      radial-gradient(40em at 78% 85%, rgba(${purple} .6), rgba(${black} .2)),
      radial-gradient(3em at 4% 10%, rgba(${black} 1), rgba(${black} 1))
       `,
    }}>
    <div
      className={
        `pt-16 relative isolate max-w-[80%] sm:max-w-[80%] md:max-w-[${PageWidth}] flex 
        flex-row flex-wrap items-center md:items-start justify-between 
        xs:justify-center md:justify-start lg:justify-between mx-auto overflow-hidden ` +
        (isHero ? "min-h-[100vh]" : "min-h-[80vh]")
      }>
      <div className="w-auto max-w-[100%] md:max-w-[50%] lg:max-w-[50%] -mt-10 pt-20 md:pt-12 lg:pt-12 flex flex-col justify-center md:justify-start">
        <div className="sm:mb-8 mt-2 mb-10 mx-0 md:mx-0 sm:flex justify-start md:justify-start">
          <div className="relative rounded-full ml-1 px-4 py-1 text-xs/6 md:text-sm/6 text-gray-400 ring-1 ring-indigo-500/60">
            This is a pre-lauch beta version 1.0.7{" "}
            <a
              href="#"
              className="font-semibold text-indigo-400/90 hover:text-indigo-400 ml-1">
              <span
                aria-hidden="true"
                className="absolute inset-0"
              />
              Read more{" "}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-start">
          {/* <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Data to enrich your online business
          </h1> */}

          <h1
            className={`text-5xl text-left md:text-left font-semibold 
            tracking-tight text-balance text-zinc-800 dark:text-gray-200 sm:text-7xl`}>
            Be Smart. Be Prepared.
          </h1>

          <p
            className={`pt-8 mb-4 text-md font-sans font-medium text-pretty 
            text-gray-400 dark:text-gray-500 sm:text-xl/8 md:text-lg/8`}>
            What you need to know, when you need to know
            it!
          </p>

          {/* <p
            className={`pt-0 mb-4 text-md font-sans font-medium text-pretty 
            text-gray-400 dark:text-gray-500 sm:text-xl/8 md:text-lg/8`}>
            Smart, quick, curated interview preparation
            and more!
          </p> */}

          <p
            className={
              "flex flex-row" +
              (isHero
                ? "pt-4 pb-24 md:pb-[72]"
                : "pt-4 pb-24 md:pb-[36]")
            }>
            <span
              className={`mt-8 text-md flex font-medium 
              text-pretty sm:text-xl/8 md:text-lg/8`}>
              <a
                href="#"
                className={`flex items-center justify-center min-w-24 
                  bg-blue-600 rounded-full px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs 
                   hover:bg-blue-600/95 focus-visible:outline-2 
                  focus-visible:outline-offset-2 focus-visible:outline-blue-600`}>
                Blog
              </a>
            </span>

            {/* TODO Career Navigator */}
            {/* <span
              className={`mt-8 ml-4 flex text-md font-medium text-pretty 
              text-indigo-500 sm:text-xl/8 md:text-lg/8`}>
              <a
                href="#"
                className={`rounded-full flex items-center justify-center min-w-24 bg-indigo-600 
                  px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 
                  focus-visible:outline-2 focus-visible:outline-offset-2 
                  focus-visible:outline-indigo-600`}>
                Career Navigator
              </a>
            </span> */}

            <span
              className={`mt-8 ml-4 flex text-md font-medium text-pretty 
              text-indigo-500 sm:text-xl/8 md:text-lg/8`}>
              <a
                href="#"
                className={`rounded-full flex items-center justify-center min-w-24 bg-indigo-600 
                  px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs 
                  hover:bg-indigo-600/95 hover:text-white/95 
                  focus-visible:outline-2 focus-visible:outline-offset-2 
                  focus-visible:outline-indigo-600`}>
                Interview Prep
              </a>
            </span>

            <span className="mt-8 ml-4 flex">
              <a
                href="#"
                className={`text-sm/6 flex items-center justify-center 
                min-w-24 font-semibold text-gray-700 dark:text-gray-200 dark:hover:text-gray-100`}>
                <span>Learn more &nbsp;</span>
                <span aria-hidden="true">→</span>
              </a>
            </span>
          </p>
        </div>
      </div>
      <div
        className={`flex mx-auto flex-col justify-center items-center text-center min-h-[50vh] 
      md:min-h-[80vh] lg:min-h-[80vh] xl:min-h-[100vh] w-[100%] sm:w-[100%] md:w-[100%] 
      lg:w-[46%] relative z-10 ml-auto mt-auto mr-auto mb-0`}>
        <div
          className={
            `flex flex-col grow bg-white dark:bg-zinc-900 opacity-85 shadow shadow-xl shadow-indigo-500 ring 
            ring-3 ring-indigo-500/10 rounded-t-[50px] mt-12 absolute z-20 lg:-right-0 
            ml-auto mt-auto mr-auto mb-0 bottom-auto md:bottom-0 top-0 md:top-auto
            w-[100%] min-w-[90%] md:min-w-[400px] lg:min-w-[100%] h-[100%] md:h-[70%]` +
            (isHero
              ? `lg:h-[100%] xl:h-[80%] 2xl:h-[90%]`
              : `lg:h-[90%] xl:h-[80%] 2xl:h-[80%]`)
          }>
          {/* <h2
            className={`text-2xl text-left md:text-left font-semibold 
            tracking-tight text-balance text-zinc-800 dark:text-gray-200 sm:text-6xl p-6`}>
            Land your dream job.
          </h2> */}
        </div>
      </div>
    </div>
  </div>
  );
}
