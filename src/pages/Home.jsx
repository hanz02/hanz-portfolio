import Tilt from "react-parallax-tilt";

const BASE_URL = import.meta.env.BASE_URL;

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="flex flex-col xmd:flex-row w-full justify-around pt-10 px-5 gap-5"
      >
        <div
          id="banner-text"
          className="my-auto text-6xl xmd:text-[7rem] whitespace-nowrap relative bottom-10 p-5"
        >
          <h2 className="text-3xl font-extralight text-shadow-lg/30">
            $/WELCOME/
          </h2>
          <h3 className="font-light text-5xl xxs:text-7xl  text-shadow-lg/50">
            {">"} I AM
            <span className="blinker ml-5 inline-block h-[20px] w-[60px] bg-dark shadow-lg/30"></span>
          </h3>
        </div>

        {/* Image Container */}
        <div className="relative flex w-fit self-end">
          <img
            className="max-h-[500px] w-full mx-auto"
            src={`${BASE_URL}images/hz.svg`}
            alt="Company Image"
          />

          <span className="[writing-mode:vertical-rl] font-extralight text-6xl text-left xxs:text-8xl xs:text-9xl absolute right-5 bottom-0 bg-white z-1">
            菡哲
          </span>
          {/* big Border at the back */}
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1.02}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glarePosition="all"
            className="absolute top-0 left-5 border-2 border-black h-full w-[80%]"
          >
            <span className="absolute left-[6%] xmd:left-[10px] xl:left-[-20px] top-1/2 bottom-1/2 ">
              <h1 className="text-5xl xxs:text-6xl xs:text-7xl xl:text-8xl font-semibold backdrop-blur-[3px] xmd:backdrop-blur-none p-2 ">
                HAN
              </h1>
            </span>

            <span className="absolute right-[6%] xmd:right-3 xl:right-[-60px] top-10">
              <h1 className="text-6xl xxs:text-7xl xs:text-8xl xl:text-9xl font-semibold backdrop-blur-[3px] xmd:backdrop-blur-none p-2">
                ZHE
              </h1>
            </span>
          </Tilt>
        </div>
      </section>

      <div className="relative my-5 mx-auto w-[85%] h-[1px] bg-black"></div>
      <section id="who-am-i" className="relative">
        <div className="text-center my-10 flex flex-col gap-10">
          <h1 className="text-3xl xxs:text-4xl">
            {">"}
            <span className="bg-black text-white px-5 mx-5">WHO</span>
            AM I
          </h1>

          <div>
            <p className="py-2 px-3 w-fit mx-auto max-w-[1200px]">
              “He who bears a name that resembles a lotus signifies innocence.
              Perhaps, as Fyodor once said: ‘From the outside, you seem mature,
              with a philosopher’s mind — but inside, you are just a child lost
              in sweet delusion.’ — Fyodor Dostoevsky.”
            </p>
            <br />
            <p className=" bg-black text-white font-light w-[90%] mx-auto p-5">
              <span className="font-normal">
                A man who loves
                <span className="font-semibold">cats</span>,
                <span className="font-semibold">aquariums</span>,
                <span className="font-semibold">beaches</span> and
                <span className="font-semibold">clocks</span>
              </span>
              <br />
              <br />
              Full name is Khaw Han Zhe, a Software Engineering student from
              Malaysia who codes with creativity and curiosity. Fluent in the
              language of the web, I love building ideas that feel alive — fast,
              functional, and full of purpose. When I'm not coding, you'll find
              me capturing moments through my lens, chilling with cats, tending
              to my garden, or diving into Asian literature like Rashōmon and
              The Wind-Up Bird Chronicle. I believe good code is like good art —
              it connects, inspires, and grows with time. Each creation of
              design should align with what are to be offered.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black ">
        <div className="flex items-center justify-center flex-col sm:flex-row gap-10 w-[90%] mx-auto py-10 pb-20!">
          <div className="bg-white z-1 py-15 w-full max-w-[450px] shadow-lg/10">
            <img
              className="h-[250px] w-full object-cover"
              src={`${BASE_URL}images/photo1.svg`}
              alt=""
            />
          </div>
          <div>
            <a href="" className="bg-black text-white py-3 px-5 shadow-lg">
              VIEW STUDIO {">>"}
            </a>
            <h2 className=" max-w-[500px] w-[90%] h-fit text-xl lg:text-2xl font-light text-right sm:p-7 p-5 relative  my-10 sm:top-25 text-shadow-lg/20">
              "I photograph for remembrance, the future and the past. <br />{" "}
              <br /> A meseum full of
              <span className="font-normal"> memories</span>
              ."
              <span className="absolute top-0 right-0 w-full sm:w-[130%] h-full border-2 border-black "></span>
              <span className="absolute top-0 left-[100%] w-[10%] h-full bg-black"></span>
            </h2>
          </div>
        </div>
      </section>

      <div className="relative mx-auto w-[60%] h-[1px] bg-black"></div>
      <section className="bg-white text-black flex flex-col justify-center items-center pt-10 px-10">
        <h1 className="text-3xl xxs:text-4xl   flex items-center justify-center gap-5 text-nowrap flex-wrap">
          {">"} AS A
          <span className="bg-black text-white px-5 py-1">DEVELOPER</span>
        </h1>
        <div className="my-15 flex gap-10 items-center flex-wrap justify-center">
          <a
            href="/about"
            className="border-2 border-black text-shadow-lg/10 p-5 py-2 font-medium h-fit drop-shadow-lg/20"
          >
            ABOUT ME
          </a>
          <a
            href=""
            className="p-5 py-3 text-shadow-lg/10 flex items-center gap-2 drop-shadow-lg/10"
          >
            <img
              className="w-[40px]"
              src={`${BASE_URL}images/github.png`}
              alt=""
            />
            <span>GITHUB</span>
          </a>
        </div>

        <div className="grid grid-cols-2 mb-10 gap-x-5">
          <h3 className="min-[513px]:hidden tracking-[3px]! ">
            C/C++
            <span className="w-full h-[10px] shadow-md/30 border-black border-2 block mt-2 relative">
              <span className="absolute h-full left-0 top-0 bg-black w-[70%]"></span>
            </span>
          </h3>
          <h3 className="min-[513px]:hidden tracking-[3px]! ">
            JavaScript
            <span className="w-full h-[10px] shadow-md/30 border-black border-2 block mt-2 relative">
              <span className="absolute h-full left-0 top-0 bg-black w-[70%]"></span>
            </span>
          </h3>
          <h3 className="min-[513px]:hidden tracking-[3px]! ">
            C#
            <span className="w-full h-[10px] shadow-md/30 border-black border-2 block mt-2 relative">
              <span className="absolute h-full left-0 top-0 bg-black w-[70%]"></span>
            </span>
          </h3>
          <h3 className="min-[513px]:hidden tracking-[3px]! ">
            Java
            <span className="w-full h-[10px] shadow-md/30 border-black border-2 block mt-2 relative">
              <span className="absolute h-full left-0 top-0 bg-black w-[70%]"></span>
            </span>
          </h3>
          <h3 className="min-[513px]:hidden tracking-[3px]! ">
            Python
            <span className="w-full h-[10px] shadow-md/30 border-black border-2 block mt-2 relative">
              <span className="absolute h-full left-0 top-0 bg-black w-[70%]"></span>
            </span>
          </h3>
          <h3 className="min-[513px]:hidden tracking-[3px]! ">
            Front End
            <span className="w-full h-[10px] shadow-md/30 border-black border-2 block mt-2 relative">
              <span className="absolute h-full left-0 top-0 bg-black w-[70%]"></span>
            </span>
          </h3>
          <h3 className="min-[513px]:hidden tracking-[3px]! ">
            Full Stack
            <span className="w-full h-[10px] shadow-md/30 border-black border-2 block mt-2 relative">
              <span className="absolute h-full left-0 top-0 bg-black w-[70%]"></span>
            </span>
          </h3>
        </div>

        <div className="mt-10 w-fit mx-auto relative">
          <img
            id="dark-moon"
            className="w-[30px] absolute right-1/2 left-1/2 translate-x-[-50%] top-[-15%]"
            src={`${BASE_URL}images/moon.png`}
            alt=""
          />
          <div></div>
          <div className="w-fit">
            <img
              className="h-[300px] drop-shadow-lg/50"
              src={`${BASE_URL}images/silhouette.svg`}
              alt=""
            />
          </div>
          <h3 className="hidden min-[513px]:block text-shadow-lg/30 absolute tracking-[3px]! left-0 top-0 text-xl">
            C/C++
            <span className="w-full h-[10px] shadow-md/30 border-black border-2 block mt-2 relative">
              <span className="absolute h-full left-0 top-0 bg-black w-[70%]"></span>
            </span>
          </h3>
          <h3 className="hidden min-[513px]:block text-shadow-lg/30 absolute tracking-[3px]! left-[-30%] top-30  text-lg">
            JavaScript
            <span className="w-full h-[10px] shadow-md/30 border-black border-2 block mt-2 relative">
              <span className="absolute h-full left-0 top-0 bg-black w-[70%]"></span>
            </span>
          </h3>
          <h3 className="hidden min-[513px]:block text-shadow-lg/30 absolute tracking-[3px]! left-[-20%] top-10 text-2xl">
            C#
            <span className="w-full h-[10px] shadow-md/30 border-black border-2 block mt-2 relative">
              <span className="absolute h-full left-0 top-0 bg-black w-[70%]"></span>
            </span>
          </h3>
          <h3 className="hidden min-[513px]:block text-shadow-lg/30 absolute tracking-[3px]! left-[-10%] top-50 text-4xl">
            Java
            <span className="w-full h-[10px] shadow-md/30 border-black border-2 block mt-2 relative">
              <span className="absolute h-full left-0 top-0 bg-black w-[70%]"></span>
            </span>
          </h3>
          <h3 className="hidden min-[513px]:block text-shadow-lg/30 absolute tracking-[3px]! right-[-20%] top-50 text-md">
            Python
            <span className="w-full h-[10px] shadow-md/30 border-black border-2 block mt-2 relative">
              <span className="absolute h-full left-0 top-0 bg-black w-[70%]"></span>
            </span>
          </h3>
          <h3 className="hidden min-[513px]:block text-shadow-lg/30 absolute tracking-[3px]! right-[-30%] top-30 text-lg">
            Front End
            <span className="w-full h-[10px] shadow-md/30 border-black border-2 block mt-2 relative">
              <span className="absolute h-full left-0 top-0 bg-black w-[70%]"></span>
            </span>
          </h3>
          <h3 className="hidden min-[513px]:block text-shadow-lg/30 absolute tracking-[3px]! right-[-10%] top-12 text-xl">
            Full Stack
            <span className="w-full h-[10px] shadow-md/30 border-black border-2 block mt-2 relative">
              <span className="absolute h-full left-0 top-0 bg-black w-[70%]"></span>
            </span>
          </h3>
        </div>
      </section>
    </>
  );
}
