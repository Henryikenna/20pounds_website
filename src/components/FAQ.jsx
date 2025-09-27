import { useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'

const QA = [
  { q: "Who can apply to join 20Pounds?", a: "Anyone passionate about starting or growing a business. We welcome youth and young adults across Africa. No degree required."},
  { q: "Do I need money to enroll?", a: "No. Core learning resources are free. Some advanced programs may require small fees or sponsorships."},
  { q: "How is this different from a business school?", a: "We're apprenticeship-first. You'll learn by building, paired with mentors and real deliverables, not just lectures."},
  { q: "How long does the program last?", a: "Most tracks run 12–18 months with ongoing community support."},
  { q: "What happens after I graduate?", a: "You'll have a network, a mentor, and access to partner funding and opportunities."},
]

export default function FAQ() {
  const [open, setOpen] = useState(-1)
  
  return (
    <section id="faq" className="section bg-tpBlack">
      <div className="container-tight text-center">
        <h2 className="text-center text-2xl font-semibold uppercase mb-2">
          Frequently Asked <span className="font-dancingScript italic text-gold normal-case">Questions</span>
        </h2>
        <p className="mt-1.5 text-xl text-tpGrey mb-10">
          Everything You Need to Know Before Getting Started
        </p>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto text-left">
          {QA.map((item, i) => (
            <div key={i} className="bg-cream rounded-sm overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? -1 : i)} 
                className="w-full py-6 px-5 text-left flex items-center gap-5 hover:bg-cream/95 transition-colors"
              >
                <span className="text-tpBlack text-xl font-bold flex-shrink-0">
                  {open === i ? <BiMinus /> : <BiPlus />}
                </span>
                <span className="font-medium text-tpBlack text-sm pr-4">
                  {item.q}
                </span>
              </button>
              {open === i && (
                <div className="px-4 pb-4">
                  <p className="text-tpBlack/80 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}