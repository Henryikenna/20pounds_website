import WhyJoinUsMarker from "../assets/svg/why_join_us_marker.svg";

export default function WhyJoin() {
  const bullets = [
    "Learn faster, achieve sooner",
    "Practical Business Education",
    "Mentorship that opens doors",
    "Funding & community support"
  ];
  return (
    <section className="section bg-cream text-tpBlack">
      <div className="container-tight grid md:grid-cols-2 gap-14 h-3/4 items-center">
        <div>
          <h2 className="font-variant-small-caps text-2xl tracking-wide font-bold">Why Join <span className="!font-dancingScript text-gold [font-variant-caps:normal]">Us</span></h2>
          <p className="mt-4 text-lg text-tpGrey font-medium leading-tight">
            In a world where millions of young Africans are struggling to find meaningful work, IAA exists to offer a different path. We don't just teach theory, we give you practical tools, real mentorship, and funding opportunities to build a business that lasts.
          </p>
          <ul className="mt-8 space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-3">
                <img src={WhyJoinUsMarker} alt="" className="h-7" />
                <span className="text-2xl font-variant-small-caps font-semibold">{b}</span>
              </li>
            ))}
          </ul>
          <button className="btn mt-20">Apply Now</button>
        </div>
        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop" alt="" className="rounded-lg object-cover w-full h-full" />
      </div>
    </section>
  )
}
