import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSquareInstagram, FaSquareYoutube, FaTwitter, FaX, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { FiMail, FiPhone } from 'react-icons/fi';
import { LuUserRoundCheck } from 'react-icons/lu';


export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    fullName: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    // Handle contact form submission
    console.log('Contact form:', formData)
    // Reset form
    setFormData({
      email: '',
      phone: '',
      fullName: '',
      message: ''
    })
  }

  return (
    <div className="container-tight py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side - Contact Info */}
        <div>
          <h1 className="text-4xl font-bold text-cream mb-4">Get in touch</h1>
          <p className="text-cream/70 text-lg leading-relaxed mb-12">
            You can book a call, request for more info, or get to know how we can work together. Also feel free to connect with me on my socials
          </p>


          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                <FiPhone className='text-xl text-tpBlack' />
              </div>
              <div>
                <h3 className="text-cream font-semibold mb-2">Book a Free Consultation Call</h3>
                <p className="text-cream/70 text-sm leading-relaxed mb-3">
                  Get started with a documented Discovery Call where we'll discuss your goals, challenges, and potential strategies to make your brand thrive. <span className="text-gold underline cursor-pointer">Schedule Your Call</span>
                </p>
              </div>
            </div>


            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                <FiMail className='text-xl text-tpBlack' />
              </div>
              <div>
                <h3 className="text-cream font-semibold mb-2">Email Me Directly</h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Prefer email? Send me a message to <span className="text-gold font-bold">contact@20pounds</span> and I'll get back to you as soon as possible. Whether it's a quick question or a detailed inquiry, I'm here to help.
                </p>
              </div>
            </div>


            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                <LuUserRoundCheck className='text-xl text-tpBlack' />
              </div>
              <div>
                <h3 className="text-cream font-semibold mb-2">Follow and Connect on Social Media</h3>
                <p className="text-cream/70 text-sm leading-relaxed mb-4">
                  Let's keep the conversation going! You can also find me on LinkedIn, Instagram, Twitter & YouTube for brand insights and tips.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-tpBlack hover:bg-gold/80 transition-colors">
                    <FaLinkedinIn className='text-base' />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-tpBlack hover:bg-gold/80 transition-colors">
                    <FaInstagram className='text-base' />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-tpBlack hover:bg-gold/80 transition-colors">
                    <FaXTwitter className='text-base' />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-tpBlack hover:bg-gold/80 transition-colors">
                    <FaYoutube className='text-base' />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-tpBlack hover:bg-gold/80 transition-colors">
                    <FaFacebookF className='text-base' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          {/* <div className="bg-cream/5 rounded-xl border border-tpGrey/20 p-2.5 lg:p-8"> */}
          <div className="md:bg-cream/5 md:rounded-xl md:border md:border-tpGrey/20 md:p-8">
            <h2 className="text-xl font-semibold text-cream mb-6">SEND A MESSAGE</h2>
            
            <div className="space-y-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-lg bg-cream text-tpBlack placeholder:text-[#808080] border-0 focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-cream text-tpBlack placeholder:text-[#808080] border-0 focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full name"
                className="w-full px-4 py-3 rounded-lg bg-cream text-tpBlack placeholder:text-[#808080] border-0 focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-cream text-tpBlack placeholder:text-[#808080] border-0 focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
              ></textarea>
              
              <button
                onClick={handleContactSubmit}
                className="w-full py-3 bg-gold text-tpBlack font-semibold rounded-lg hover:bg-gold/90 transition-colors duration-200 cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}