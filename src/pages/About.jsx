import React, { Fragment } from "react";
import { timelineObjects } from "../data/timelineObjects";
import "../css/About.css";

const BASE_URL = import.meta.env.BASE_URL;

export default function About() {
  return (
    <>
      <section id="about-section" className="flex flex-col px-5">
        <div className="my-10 ">
          <h2 className="text-3xl xxs:text-5xl sm:text-6xl  text-center text-nowrap font-extralight text-shadow-lg/50">
            {">"} ABOUT ME{" "}
            <span
              id="banner_cursor"
              className="inline-block h-[10px] w-[30px] bg-dark box-shadow-lg/40"
            ></span>
          </h2>
          <hr className="my-10 w-[60%] mx-auto" />
        </div>

        <div id="about-graphic" className="relative w-fit mx-auto">
          <div className="relative w-fit">
            <img
              className="max-h-[500px] object-cover border-b-1 drop-shadow-lg/60"
              src={`${BASE_URL}images/hz.svg`}
              alt=""
            />
          </div>

          <div
            id="bg-circle"
            className="absolute top-[-10%] left-1/2 right-1/2 translate-x-[-50%] h-[100%]  sm:h-[110%] aspect-square rounded-full border-2 z-[-1] border-black z-0"
          ></div>

          <div
            id="timeline-line"
            className="absolute left-1/2 right-1/2 ml-[1px] translate-x-[-50%] bottom-0 h-[50%] xxs:h-[40%] z-20 w-fit flex flex-col items-center"
          >
            <h2 className="text-white ml-1 mb-5 flex flex-col gap-1  justify-center items-center text-xl sm:text-2xl">
              <span>菡</span>
              <span>哲</span>
            </h2>
            <div className="w-[15px] xxs:w-[20px]  aspect-square rounded-full bg-white"></div>
            <div className="w-[2px] flex-1 bg-white mx-auto"></div>
          </div>
        </div>

        <div
          id="timeline-content"
          className="w-full mx-auto flex flex-col gap-y-15 relative mb-10"
        >
          <div className="bg-black w-[2px] h-full absolute top-0 right-1/2 left-1/2 z-20"></div>

          <div className="timeline-item text-xs relative w-fit mx-auto mt-5">
            <div className="main-item flex flex-col gap-1 items-end justify-end max-w-[400px]">
              <h3 className="text-[0.9rem] text-shadow-md/20 w-fit ml-auto">
                The Begin of The End
              </h3>
              <hr className="w-full shadow-2xl" />

              <p>
                After the passing of Han Zhe's father, the family’s financial
                situation collapsed. Han Zhe immediately enrolled in a Diploma
                in Computer Science program at{" "}
                <a
                  className="underline font-semibold"
                  href="https://www.disted.edu.my/"
                >
                  DISTED College Penang
                </a>
                , supported by PTPTN funding.
                <br />
                <br />
                With no clear direction or guidance, he began navigating an
                uncertain future. His mother, a housewife with little formal
                education, could offer only her emotional support following the
                loss of his father.
              </p>
            </div>
            <div className="item-date shadow-lg/30">
              <h2>October 2019</h2>
            </div>
            <span className="absolute block w-[10px] z-50 aspect-square top-[10px] left-1/2 right-1/2 translate-x-[-40%]  bg-black border-black border-2 rounded-full"></span>
          </div>

          {timelineObjects.map((item) => {
            if (item.alignment === "L") {
              return (
                <div
                  key={item.id}
                  className="timeline-item text-xs relative w-fit mx-auto mt-5"
                >
                  <div className="main-item flex flex-col gap-1 items-end justify-end max-w-[400px]">
                    <h3 className="text-[0.9rem] text-shadow-md/20 w-fit ml-auto">
                      {item.title}
                    </h3>

                    <hr className="w-full shadow-2xl" />

                    <div className="space-y-3 text-left!">{item.content}</div>
                  </div>

                  <div className="item-date shadow-lg/30">
                    <h2>{item.date}</h2>
                  </div>

                  <span className="absolute block w-[10px] z-50 aspect-square top-[10px] left-1/2 right-1/2 translate-x-[-40%] bg-black border-black border-2 rounded-full"></span>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className="timeline-item text-xs relative w-fit mx-auto mt-5"
              >
                <div className="item-date shadow-lg/30 ml-auto">
                  <h2>{item.date}</h2>
                </div>

                <div className="main-item flex flex-col gap-1 items-end justify-end max-w-[400px]">
                  <h3 className="text-[0.9rem] text-shadow-md/20 w-fit mr-auto">
                    {item.title}
                  </h3>

                  <hr className="w-full shadow-2xl" />

                  <div className="space-y-3 text-left">{item.content}</div>
                </div>

                <span className="absolute block w-[10px] z-50 aspect-square top-[10px] left-1/2 right-1/2 translate-x-[-40%] bg-black border-black border-2 rounded-full"></span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
