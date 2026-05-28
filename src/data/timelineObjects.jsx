const BASE_URL = import.meta.env.BASE_URL;

export const timelineObjects = [
  {
    id: "begin-of-the-end",
    date: "October 2019",
    title: "The Begin of The End",
    alignment: "R",
    content: (
      <>
        <p>
          After the passing of Han Zhe&apos;s father, the family’s financial
          situation collapsed. Han Zhe immediately enrolled in a Diploma in
          Computer Science program at{" "}
          <a
            className="underline font-semibold"
            href="https://www.disted.edu.my/"
            target="_blank"
            rel="noreferrer"
          >
            DISTED College Penang
          </a>
          , supported by PTPTN funding.
        </p>

        <p>
          With no clear direction or guidance, he began navigating an uncertain
          future. His mother, a housewife with little formal education, could
          offer only her emotional support following the loss of his father.
        </p>
      </>
    ),
  },
  {
    id: "skill-set-development",
    date: "Year 2019 - 2021",
    title: "Skill Set Development",
    alignment: "R",
    content: (
      <>
        <p>
          Started learning full stack web development, with exposure to back-end
          server-side language <span className="font-semibold">PHP</span> and{" "}
          <span className="font-semibold">MySQL</span> database. He took a great
          liking to front-end development using{" "}
          <span className="font-semibold">CSS</span>,{" "}
          <span className="font-semibold">HTML</span>,{" "}
          <span className="font-semibold">JavaScript</span>,{" "}
          <span className="font-semibold">jQuery</span>, and{" "}
          <span className="font-semibold">AJAX</span>. He also started pouring
          his artistic ideas into designing unique web interfaces for his Final
          Year Project.
        </p>

        <p>
          A number of personal web projects were developed as a hobby, and a
          personal GitHub repository was created.
        </p>

        <a
          href="#"
          className="py-3 text-shadow-lg/10 flex items-center gap-2 drop-shadow-lg/10 w-fit"
        >
          <img
            className=" w-[40px]"
            src={`${BASE_URL}images/github.png`}
            alt="GitHub logo"
          />
          <span>GITHUB</span>
        </a>
      </>
    ),
  },
  {
    id: "internship-and-college-graduation",
    date: "January 2021",
    title: "Internship Experiences & College Graduation",
    alignment: "R",
    content: (
      <>
        <p>
          Joined NSW Automation, a Malaysia-based company specializing in
          precision fluid dispensing systems in the microelectronics and
          semiconductor industries in Penang. He worked as an intern in the IT
          department for 3 months.
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            Gained exposure to{" "}
            <span className="font-semibold">C# ASP.NET framework</span> and{" "}
            <span className="font-semibold">
              asynchronous front-end programming
            </span>
            .
          </li>

          <li>
            Gained exposure to{" "}
            <span className="font-semibold">Active Directory</span>, a directory
            service developed by Microsoft for Windows domain networks that
            centrally manages users, computers, and network resources.
          </li>

          <li>
            Gained exposure to{" "}
            <span className="font-semibold">PowerShell scripting</span> and{" "}
            <span className="font-semibold">VBA programming</span> for script
            automation.
          </li>
        </ul>

        <p>
          <span className="font-semibold">
            Graduated from college after the internship.
          </span>
        </p>
      </>
    ),
  },
  {
    id: "logistic-industry-exposure",
    date: "June 2022",
    title: "Logistic Industry Exposure",
    alignment: "L",
    content: (
      <>
        <p>
          Started working as a part-timer at J&amp;T Cargo outlet PEN010A at
          Butterworth, Penang. The shop was a newly opened outlet by Han
          Zhe&apos;s close relative, Tan Chin Leong. He was soon converted into
          a full-time outlet shop administrator. At that time, Han Zhe was the
          only employee in the shop, managing every aspect of the outlet, from
          back-end finance management to front-end desk clerk duties.
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            A good environment for developing{" "}
            <span className="font-semibold">leadership skill</span> and{" "}
            <span className="font-semibold">multitasking</span>.
          </li>

          <li>
            Abundant exposure to{" "}
            <span className="font-semibold">Microsoft Excel</span> and using{" "}
            <span className="font-semibold">
              Python for Excel data automation
            </span>
            .
          </li>
        </ul>

        <p>
          Worked for 9 months before starting to search for a university to
          pursue his degree in Software Engineering.
        </p>
      </>
    ),
  },
  {
    id: "xiamen-university-malaysia",
    date: "February 2023",
    title: "Xiamen University Malaysia",
    alignment: "R",
    content: (
      <>
        <p>
          Enrolled into Xiamen University Malaysia in Sepang, Malaysia, with a
          campus scholarship of 75%. This further enhanced his fundamental
          knowledge in programming and Software Engineering.
        </p>

        <p>
          However, the family’s financial situation started to become tense due
          to expensive tuition fees.
        </p>
      </>
    ),
  },
  {
    id: "penang-future-foundation-scholarship",
    date: "June 2023",
    title: "Penang Future Foundation Scholarship",
    alignment: "L",
    content: (
      <>
        <p>
          Went through the selection interview for the Penang Future Foundation
          scholarship offered by the Penang State Government. He received the
          PFF Provisional Award 2023 and successfully obtained scholarship
          support for his degree study.
        </p>

        <p>
          The family’s financial situation was greatly eased through the
          scholarship support.
        </p>
      </>
    ),
  },
  {
    id: "sweat-and-tears",
    date: "Present 2025",
    title: "Sweat And Tears",
    alignment: "L",
    content: (
      <>
        <p>
          The financial situation may still be tense, but he has learned a lot.
          He cried, he smiled, he regretted, he remembered, and he loved.
          Despite the loneliness and despite the mess within, may he stand
          strong. May he remain kind in a world that demands us to be cold.
        </p>

        <p>
          <span className="font-semibold">
            In memory of Han Zhe&apos;s father.
          </span>
        </p>
      </>
    ),
  },
];
