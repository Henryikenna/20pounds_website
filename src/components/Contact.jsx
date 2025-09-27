export default function Contact() {
  return (
    <section id="contact" className="section bg-[#101010]">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          <div className="md:w-2/6">
            <h3 className="font-medium text-lg text-tpGrey leading-none">Contact Us Today</h3>
            <p className="font-variant-small-caps text-3xl text-cream mt-3.5 font-bold">Drop a request or feedback about our services.</p>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="space-y-3 md:w-4/6">
            <input type="email" placeholder="Email address" className="w-full rounded-xl bg-cream py-5 px-4 placeholder:text-[#808080]" />
            <input type="text" placeholder="Full name" className="w-full rounded-xl bg-cream py-5 px-4 placeholder:text-[#808080]" />
            <textarea rows="4" placeholder="Message" className="w-full rounded-xl bg-cream py-5 px-4 placeholder:text-[#808080]"></textarea>
            <button className="inline-flex items-center justify-center px-6 py-2.5 rounded-[5px] font-semibold bg-[#878C8D59] text-cream hover:opacity-90 transition cursor-pointer mt-3 w-max">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
