import { useState } from "react";
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp,
} from "react-icons/io5";
import QuoteIcon from "../assets/svg/quote_icon.svg";
import StarImage from "../assets/images/star.png";

const items = [
  {
    quote:
      "20Pounds completely transformed my journey. I came in with just an idea and no clear direction. Within months, I gained practical business skills, was paired with a mentor who guided me step by step, and eventually secured my first funding.",
    name: "David O. Onuo",
    role: "Fashion Designer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "The mentorship was the game-changer. Weekly check-ins, real feedback, and a community that pushed me forward.",
    name: "Adaeze N.",
    role: "Tech Founder",
    avatar:
      "https://images.unsplash.com/photo-1729457046214-b9a9dbdbf8b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "It's the combination of skills + access + accountability for me. I launched faster than I thought possible.",
    name: "Uche A.",
    role: "Foodpreneur",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % items.length);
  const prev = () => setIndex((index - 1 + items.length) % items.length);

  return (
    <section className="section">
      <div className="container-tight text-center">
        <h2 className="font-variant-small-caps text-3xl md:text-4xl tracking-wide font-bold">
          Our Success{" "}
          <span className="!font-dancingScript text-gold [font-variant-caps:normal]">
            Stories
          </span>
        </h2>
        <p className="mt-1.5 text-base md:text-xl text-tpGrey">
          Stories of Youth Turning Dreams into Reality
        </p>

        {/* SLIDER LANDSCAPE VERSION */}
        <div className="mt-11 slider relative hidden lg:block">
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <IoArrowBackCircleSharp className="text-[2.5rem]" />
          </button>

          <button
            onClick={next}
            // className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 border border-cream/20 flex items-center justify-center text-cream hover:text-gold transition-all duration-200 z-10"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
            aria-label="Next testimonial"
          >
            <IoArrowForwardCircleSharp className="text-[2.5rem]" />
          </button>

          <div className="relative pl-14 pr-16 text-left bg-cream text-tpBlack rounded-4xl py-12 max-w-4xl mx-auto">
            <img src={QuoteIcon} alt="" className="h-[1.375rem] mb-4" />

            <p className="text-lg md:text-xl lg:text-2xl leading-snug mb-9 font-medium">
              {items[index].quote}
            </p>

            <div className="flex items-center gap-2.5">
              <img
                src={items[index].avatar}
                alt={items[index].name}
                className="w-[3.75rem] h-[3.75rem] rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-base">
                  {items[index].name}
                </div>
                <div className="text-tpGrey font-medium text-base">
                  {items[index].role}
                </div>
              </div>

              <img
                src={StarImage}
                alt=""
                className="absolute bottom-0 h-16 right-12 hidden lg:inline-block"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`slider-dot transition-all duration-200 ${
                  i === index ? "active" : ""
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* SLIDER PORTRAIT VERSION */}
        {/* <div className="max-w-sm mx-auto mt-11 bg-tpBlack block lg:hidden">
          <div className="slider relative">
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={prev}
                className="z-10 cursor-pointer text-gold hover:text-gold/80 transition-colors"
                aria-label="Previous testimonial"
              >
                <IoArrowBackCircleSharp className="text-[2.5rem]" />
              </button>

              <button
                onClick={next}
                className="z-10 cursor-pointer text-gold hover:text-gold/80 transition-colors"
                aria-label="Next testimonial"
              >
                <IoArrowForwardCircleSharp className="text-[2.5rem]" />
              </button>
            </div>

            <div className="relative text-center bg-cream text-tpBlack rounded-3xl p-8 min-h-[500px] flex flex-col">
              <img src={QuoteIcon} alt="" className="h-[1.375rem] mb-4" />

              <p className="text-lg leading-relaxed mb-8 font-medium flex-grow flex items-center justify-center">
                {items[index].quote}
              </p>

              <div className="flex flex-col items-center gap-4">
                <img
                  src={items[index].avatar}
                  alt={items[index].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold/30"
                />
                <div className="text-center">
                  <div className="font-semibold text-lg text-tpBlack">
                    {items[index].name}
                  </div>
                  <div className="text-tpGrey font-medium text-base">
                    {items[index].role}
                  </div>
                </div>
              </div>
            </div>


            <div className="flex items-center justify-center gap-3 mt-6">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    i === index ? "bg-gold" : "bg-tpGrey/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div> */}


        <div className="mt-11 bg-tpBlack block lg:hidden px-4">
          <div className="slider relative flex items-center gap-4">
            <button
              onClick={prev}
              className="z-10 cursor-pointer text-gold hover:text-gold/80 transition-colors flex-shrink-0"
              aria-label="Previous testimonial"
            >
              <IoArrowBackCircleSharp className="text-[2.5rem]" />
            </button>

            <div className="relative text-center bg-cream text-tpBlack rounded-3xl p-8 min-h-[500px] flex flex-col flex-1">
              <img src={QuoteIcon} alt="" className="h-[1.375rem] mb-4" />

              <p className="text-lg leading-relaxed mb-8 font-medium flex-grow flex items-center justify-center">
                {items[index].quote}
              </p>

              <div className="flex flex-col items-center gap-4">
                <img
                  src={items[index].avatar}
                  alt={items[index].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold/30"
                />
                <div className="text-center">
                  <div className="font-semibold text-lg text-tpBlack">
                    {items[index].name}
                  </div>
                  <div className="text-tpGrey font-medium text-base">
                    {items[index].role}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={next}
              className="z-10 cursor-pointer text-gold hover:text-gold/80 transition-colors flex-shrink-0"
              aria-label="Next testimonial"
            >
              <IoArrowForwardCircleSharp className="text-[2.5rem]" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  i === index ? "bg-gold" : "bg-tpGrey/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
