
import StorySecImage from "../assets/images/story_sec_image.png";

export default function Story() {
  return (
    <section id="about" className="section bg-[#101010]">
      <div className="container-tight">
        <div className="text-center">
          <div className="font-variant-small-caps text-3xl md:text-4xl tracking-wide text-cream font-bold">The 20Pounds <span className="!font-dancingScript text-gold [font-variant-caps:normal]">Story</span></div>
          <p className="mt-1.5 text-base md:text-xl text-tpGrey">From a fading tradition to a digital future</p>
        </div>

        <div className="mt-11 grid md:grid-cols-2 gap-8 items-center">
          <img src={StorySecImage} alt="" className="rounded-lg object-cover w-full h-64 md:h-72" />
          <div className="text-lg leading-relaxed text-cream/85">
            <p className="mb-3">
              In Nigeria, over 53% of youth are unemployed. Yet, for decades, the Igbo apprenticeship system quietly produced thousands of successful entrepreneurs.
            </p>
            <p className="mb-3">
              At 20Pounds, we asked: what if we adapt that proven model to today’s “work-first” reality? We built a system that gives young people practical business education, real mentorship, and access to funding — in just 12–18 months.
            </p>
            <p>
              We exist to change the trajectory of unemployment and give African youth the tools to thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
