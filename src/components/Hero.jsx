import HeroImage1 from "../assets/images/hero_imgs/1.png";
import HeroImage2 from "../assets/images/hero_imgs/2.png";
import HeroImage3 from "../assets/images/hero_imgs/3.png";
import HeroImage4 from "../assets/images/hero_imgs/4.png";
import HeroImage5 from "../assets/images/hero_imgs/5.png";
import HeroImage6 from "../assets/images/hero_imgs/6.png";
import HeroImage7 from "../assets/images/hero_imgs/7.png";

export default function Hero() {
  // const gallery = Array.from({length:6}).map((_,i)=>`https://picsum.photos/seed/20p-${i+1}/280/360`);

  const gallery = [
    {
      src: HeroImage1,
      alt: "Fashion designer organizing a mood board",
      className:
        "col-span-1 row-span-2 h-full w-full object-cover rounded-[30px_0px_0px_30px]",
    },
    {
      src: HeroImage2,
      alt: "Man working on a computer with a stylus",
      className:
        "col-span-1 row-span-1 h-full w-full object-cover rounded-[0px_0px_30px_30px]",
    },
    {
      src: HeroImage4,
      alt: "Seamstress smiling while working on a design",
      className:
        "col-span-1 row-span-2 h-full w-full object-cover rounded-[0px_0px_0px_0px]",
    },
    {
      src: HeroImage5,
      alt: "Vlogger recording a video with a ring light",
      className:
        "col-span-1 row-span-1 h-full w-full object-cover rounded-[0px_0px_30px_30px]",
    },
    {
      src: HeroImage7,
      alt: "Shoemaker polishing a leather shoe",
      className:
        "col-span-1 row-span-2 h-full w-full object-cover rounded-[0px_30px_30px_0px]",
    },
    {
      src: HeroImage3,
      alt: "Business team collaborating on a project",
      className:
        "col-span-1 row-span-1 h-full w-full object-cover rounded-[30px_30px_0px_0px]",
    },
    
    {
      src: HeroImage6,
      alt: "Woman studying with a laptop and notebook",
      className:
        "col-span-1 row-span-1 h-full w-full object-cover rounded-[30px_30px_0px_0px]",
    },
    
  ];

  return (
    <section className="section">
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-variant-small-caps font-bold text-5xl md:text-5xl">
            <span className=" tracking-wide">Building Africa's Next</span>
            <br />
            <span className="">
              Generation of{" "}
              <span className="!font-dancingScript text-gold [font-variant-caps:normal]">
                Entrepreneurs
              </span>
            </span>
          </h1>
          <p className="mt-4 text-tpGrey">
            We merge Africa's traditional apprenticeship model with the scale of
            digital learning to empower young people with skills, mentorship,
            and funding.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button className="btn">Apply Now</button>
            <button className="btn-outline">Become a Volunteer</button>
          </div>
        </div>

        {/* <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-3">
          {gallery.map((src, idx) => (
            <img key={idx} src={src} alt="placeholder" className="rounded-lg object-cover w-full h-28 sm:h-40" />
          ))}
        </div> */}

        <div className="mt-10 grid h-[450px] grid-cols-5 grid-rows-2 gap-3 auto-rows-min">
          {gallery.map((image, idx) => (
            <img
              key={idx}
              src={image.src}
              alt={image.alt}
              className={image.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
