import WWDEducationImage from "../assets/images/what_we_do/education.png";
import WWDMentorshipImage from "../assets/images/what_we_do/mentorship.png";
import WWDFundingImage from "../assets/images/what_we_do/funding.png";

const Card = ({image, title, children}) => (
  <div className="pt-4 px-3.5 pb-10 rounded-xl bg-cream border-2 border-[#FAFAFAD9]">
    <img src={image} alt="" className="rounded-lg object-cover w-full h-[9.25rem]" />
    <h3 className="mt-5 text-xl text-tpBlack uppercase font-semibold">{title}</h3>
    <p className="text-base text-tpGrey mt-4">{children}</p>
  </div>
)

export default function Pillars() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="text-center">
          <h2 className="font-variant-small-caps text-3xl tracking-wide text-cream font-bold">What We <span className="!font-dancingScript text-gold [font-variant-caps:normal]">Do</span></h2>
          <p className="mt-1.5 text-xl text-tpGrey">Our 3 Pillars for Building Entrepreneurs</p>
        </div>

        <div className="mt-11 grid md:grid-cols-3 gap-6 md:gap-12">
          <Card image={WWDEducationImage} title="Education">Practical business education with real-world casework, community, tools, mentorship, finances, and opportunities.</Card>
          <Card image={WWDMentorshipImage} title="Mentorship">Get paired with real mentors and industry leaders. Gain practical guidance as you build your venture step-by-step.</Card>
          <Card image={WWDFundingImage} title="Funding">Guidance toward microgrants and investor support to accelerate your startup to market, plus access to partner networks.</Card>
        </div>
      </div>
    </section>
  )
}
