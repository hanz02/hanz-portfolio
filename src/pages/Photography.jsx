const photos = [
  {
    image: "1.jpeg",
    name: "feline",
    link: "https://www.instagram.com/p/DNCPRe2hCqV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "2.jpg",
    name: "structures",
    link: "https://www.instagram.com/p/C9C0AoxvpAm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "3.jpeg",
    name: "within the keys",
    link: "https://www.instagram.com/p/DO6rXXKk4qj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "4.jpg",
    name: "offices",
    link: "https://www.instagram.com/p/C6vN5pqLIQV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "5.jpg",
    name: "chasing lights",
    link: "https://www.instagram.com/p/DGs1ewlPr-R/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "6.jpg",
    name: "capturing lights",
    link: "https://www.instagram.com/p/DHgf_jIPFj2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "7.jpg",
    name: "structures II",
    link: "https://www.instagram.com/p/DAQdrS2T74s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "8.jpeg",
    name: "nature",
    link: "https://www.instagram.com/p/DMdpY3GTzBw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "9.jpg",
    name: "feline II",
    link: "https://www.instagram.com/p/DR4tOZeD1xe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "10.jpg",
    name: "morning lights",
    link: "https://www.instagram.com/p/DWOHdwtkY9z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: "11.jpg",
    name: "of sunny flowers & window",
    link: "https://www.instagram.com/p/DWwlwi1j4hV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

const BASE_URL = import.meta.env.BASE_URL;

export default function Photography() {
  return (
    <section className="py-20 pt-10">
      <div className="flex flex-col-reverse md:flex-row md:h-[400px] lg:h-[500px] gap-5 items-center w-[80%] mx-auto shadow-xl/20">
        <div className="flex flex-col gap-10 p-10">
          <h1
            id="individual-photography-title"
            className="text-xl xxs:text-3xl sm:text-5xl text-shadow-lg/30"
          >
            PHOTOGRAPHY
            <span className="blinker ml-1 inline-block h-[10px]  w-[20px] xxs:w-[30px] bg-dark shadow-lg/50"></span>
          </h1>
          <p className="">
            "Capturing the lights, the felines and matters for remembrance. The
            undead memories."
          </p>
        </div>
        <div className="h-full md:max-max-w-[500px] max-h-full md:h-full w-full ">
          <img
            className="h-full w-full object-cover"
            src={`${BASE_URL}images/hz-pg.png`}
            alt=""
          />
        </div>
      </div>
      <hr className="w-[70%] mx-auto my-15" />
      <div className="images-container flex flex-wrap justify-center gap-10 max-w-[1000px] w-[90%] mx-auto">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="individual-photo max-w-fit max-h-fit flex flex-col items-center"
          >
            <a
              href={photo.link}
              target="_blank"
              rel="noreferrer"
              className="photo shadow-xl/30 max-h-[300px] max-w-[300px] relative h-full w-full"
            >
              <img
                className="h-full w-full object-cover"
                src={`${BASE_URL}images/pg/${photo.image}`}
                alt={photo.name}
              />

              <div className="insta-layer absolute top-0 left-0 h-full w-full backdrop-blur-lg cursor-pointer flex flex-col gap-10 justify-center items-center">
                <img
                  src={`${BASE_URL}images/insta_logo.svg`}
                  className="h-[70px] drop-shadow-lg/50"
                  alt="Instagram logo"
                />
              </div>
            </a>

            <div className="p-6">
              <p className="text-md tracking-[3px]! text-shadow-lg/20">
                &gt; {photo.name}
                <span className="blinker inline-block h-[5px] w-[10px] bg-dark shadow-lg/50 ml-2"></span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
