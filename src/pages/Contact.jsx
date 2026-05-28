import { useRef, useState } from "react";
import "../css/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.fullName.trim()) {
      fullNameRef.current.focus();
      return;
    }

    if (!formData.email.trim()) {
      emailRef.current.focus();
      return;
    }

    if (!formData.message.trim()) {
      messageRef.current.focus();
      return;
    }

    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
      <section className="flex flex-col lg:flex-row lg:w-[95%] mx-auto">
        <div className="p-10 pb-0 flex flex-col items-center justify-end gap-10 lg:min-w-[600px]">
          <div className="flex flex-col items-center gap-10">
            <h1 className="text-5xl xs:text-6xl text-shadow-lg/30">
              {">"} TO CONTACT
              <span
                id="banner_cursor"
                className="inline-block h-[10px] w-[30px] bg-dark shadow-lg/30"
              ></span>
            </h1>

            <p className="sm:hidden">
              "Perchance fate brings us to each other, together we thrive"
            </p>
          </div>

          <div className="relative w-full">
            <img
              className="max-h-[400px] lg:max-h-[500px] h-full mx-auto lg:mx-0 lg:mr-auto drop-shadow-lg/50"
              src="/images/hz_contact.png"
              alt="Han Zhe contact"
            />

            <p className="absolute right-5 top-10 w-[30%] lg:w-[45%] hidden sm:block text-sm">
              "Perchance fate brings us to each other, together we develop. Not
              as opponents, but as a support for one another"
            </p>
          </div>
        </div>

        <div className="relative my-0 lg:my-10 mb-10 flex flex-col xl:flex-row items-center gap-10 w-[90%] max-w-[500px] lg:max-w-[900px] lg:w-full h-fit mx-auto p-5 py-10 xl:px-10">
          <span className="absolute left-0 top-0 w-full xl:w-[85%] h-full xl:h-full border-2 z-[-1]"></span>

          <span className="absolute right-0 xl:right-[10%] top-[-3%] bg-white text-7xl pl-5 pb-5 font-light">
            菡<br />哲
          </span>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-5 w-[90%]"
          >
            <div className="flex flex-col gap-1">
              <label
                id="fullNameLabel"
                htmlFor="fullName"
                className="text-shadow-lg/20"
              >
                Your Full Name
              </label>

              <input
                ref={fullNameRef}
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                className="border-b-2 border-black px-5 py-2 focus:outline-0"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                id="emailLabel"
                htmlFor="email"
                className="text-shadow-lg/20"
              >
                Email
              </label>

              <input
                ref={emailRef}
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border-b-2 border-black px-5 py-2 focus:outline-0"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                id="messageLabel"
                htmlFor="message"
                className="text-shadow-lg/20"
              >
                Message
              </label>

              <input
                ref={messageRef}
                id="message"
                name="message"
                type="text"
                value={formData.message}
                onChange={handleInputChange}
                className="border-b-2 border-black px-5 py-2 focus:outline-0"
                required
              />
            </div>

            <button
              id="contactButton"
              type="submit"
              className="cursor-pointer py-3 px-5 w-full bg-black text-white shadow-lg/30"
            >
              GET IN CONTACT
            </button>
          </form>

          <div className="flex flex-col gap-10 bg-black w-[90%] xl:w-full p-10 text-white shadow-xl/30 relative xl:top-30">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Contact</h2>
              <h5 className="font-light">khawhanzhe@gmail.com</h5>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Based In</h2>
              <h5 className="font-light">
                Butterworth, <br /> Penang
              </h5>
            </div>

            <div className="flex items-center gap-5">
              <a href="#" className="h-[20px] aspect-square">
                <img
                  className="h-full w-full"
                  src="/images/github_light.png"
                  alt="GitHub"
                />
              </a>

              <a href="#" className="h-[20px] aspect-square">
                <img
                  className="h-full w-full"
                  src="/images/insta_logo.svg"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contactResponseModal"
        className={`modal fixed top-0 left-0 w-full h-full backdrop-blur-md pt-50 transition-opacity duration-300 ${
          modalOpen
            ? "opacity-100 z-[999]"
            : "opacity-0 z-[-1] pointer-events-none"
        }`}
      >
        <div className="modal-container mx-auto max-w-[900px] bg-white/80 p-15 pb-10 shadow-lg/10 flex flex-col items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <h3 className="text-7xl font-light flex flex-col gap-5 pb-5 border-b-2 md:border-b-0 md:border-r-2 border-black pr-10">
              Hi{" "}
              <span id="responseTitleName" className="font-semibold">
                {formData.fullName}
              </span>
              <span className="text-3xl mt-5">
                {">"} May our fate links, may we strive together.
              </span>
            </h3>

            <h4 className="text-lg flex flex-col gap-2">
              <span>
                Thank You for your submission, Han Zhe will get in contact with
                you soon
              </span>
            </h4>
          </div>

          <button
            id="contactReturnButton"
            type="button"
            onClick={closeModal}
            className="py-3 px-10 bg-black text-white shadow-lg/30 cursor-pointer"
          >
            RETURN
          </button>
        </div>
      </section>
    </>
  );
}
