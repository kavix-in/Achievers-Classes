import { useState } from 'react'
import { FaArrowRight, FaCheck, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const branches = [
    { city: 'Noida (HQ)', address: 'B-42, Sector 18, Noida – 201301', phone: '+91 98765 43210', hours: 'Mon–Sat, 8am–8pm' },
    { city: 'Delhi', address: '14A, Lajpat Nagar II, New Delhi – 110024', phone: '+91 98765 43211', hours: 'Mon–Sat, 8am–8pm' },
    { city: 'Gurgaon', address: 'SCO 21, DLF Phase 1, Gurgaon – 122022', phone: '+91 98765 43212', hours: 'Mon–Sat, 8am–8pm' },
]

const faqs = [
    { q: 'How do I take admission in EduPeak?', a: 'Visit any of our branches or fill the form above. We\'ll call you within 24 hours to schedule a counselling session. You can also attend a free demo class before enrolling.' },
    { q: 'Is there any entrance test for joining?', a: 'No mandatory entrance test. However, you can attempt our Scholarship Test to earn up to 90% fee waiver based on your performance.' },
    { q: 'Do you offer online classes?', a: 'Yes! We offer both online and offline (classroom) modes. Hybrid students get access to recorded lectures from all classroom sessions.' },
    { q: 'What is the batch size?', a: 'We keep batches small — 25 to 30 students max — to ensure personalized attention and active doubt resolution.' },
    { q: 'When do new batches start?', a: 'New batches start in April (post-boards) and September every year. We also run crash batches before JEE Mains in January and March.' },
    { q: 'Is study material provided?', a: 'Yes. Comprehensive chapter-wise notes, practice sheets, previous year papers, and test series booklets are all included in the course fee.' },
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', phone: '', email: '', course: '', city: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [openFaq, setOpenFaq] = useState(null)

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault()
        setTimeout(() => setSubmitted(true), 300)
    }

    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="py-16 px-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-primary-700/15 rounded-full blur-3xl pointer-events-none" />
                <div className="relative max-w-2xl mx-auto">
                    <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest block mb-4">Admissions Open</span>
                    <h1 className="font-heading text-5xl md:text-6xl font-black text-white mb-6">
                        Book a <span className="text-gradient">Free Demo Class</span>
                    </h1>
                    <p className="text-gray-400 text-xl leading-relaxed">
                        Meet our faculty, see our classrooms, and experience our teaching — completely free. No commitment required.
                    </p>
                </div>
            </section>

            {/* Main Grid */}
            <section className="py-10 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Form */}
                    <div className="glass rounded-3xl p-8">
                        {!submitted ? (
                            <>
                                <h2 className="font-heading text-2xl font-bold text-white mb-2">Enquiry / Demo Booking</h2>
                                <p className="text-gray-400 text-sm mb-6">Fill the form and we'll call you within 2 hours.</p>

                                <form onSubmit={handleSubmit} id="contact-form" className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide" htmlFor="name">Student Name *</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                placeholder="Full Name"
                                                value={form.name}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide" htmlFor="phone">Phone Number *</label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                required
                                                placeholder="+91 98765 43210"
                                                value={form.phone}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide" htmlFor="email">Email Address</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="student@email.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide" htmlFor="course">Course Interested In *</label>
                                            <select
                                                id="course"
                                                name="course"
                                                required
                                                value={form.course}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors appearance-none"
                                            >
                                                <option value="" className="bg-[#0a0a0f]">Select Course...</option>
                                                <option value="jee-2yr" className="bg-[#0a0a0f]">JEE – 2 Year Program</option>
                                                <option value="jee-1yr" className="bg-[#0a0a0f]">JEE – 1 Year / Dropper</option>
                                                <option value="neet" className="bg-[#0a0a0f]">NEET UG</option>
                                                <option value="cat" className="bg-[#0a0a0f]">CAT / MBA</option>
                                                <option value="boards" className="bg-[#0a0a0f]">XI–XII Boards</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide" htmlFor="city">Preferred Branch</label>
                                            <select
                                                id="city"
                                                name="city"
                                                value={form.city}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors appearance-none"
                                            >
                                                <option value="" className="bg-[#0a0a0f]">Select Branch...</option>
                                                <option value="noida" className="bg-[#0a0a0f]">Noida (HQ)</option>
                                                <option value="delhi" className="bg-[#0a0a0f]">Delhi</option>
                                                <option value="gurgaon" className="bg-[#0a0a0f]">Gurgaon</option>
                                                <option value="online" className="bg-[#0a0a0f]">Online</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide" htmlFor="message">Any Questions?</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={3}
                                            placeholder="What class are you in? Any specific doubts about the course?"
                                            value={form.message}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                                        />
                                    </div>

                                    <button type="submit" id="submit-form" className="btn-primary w-full justify-center py-3.5">
                                        Book Free Demo Class <FaArrowRight className="text-xs" />
                                    </button>

                                    <div className="flex items-center justify-center gap-4 mt-3">
                                        <a
                                            href="https://wa.me/919876543210"
                                            id="whatsapp-enquiry"
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                                        >
                                            <FaWhatsapp className="text-green-400" /> WhatsApp Us
                                        </a>
                                        <span className="text-gray-600">|</span>
                                        <a
                                            href="tel:+919876543210"
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            <FaPhoneAlt className="text-primary-400 text-xs" /> Call Now
                                        </a>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6 glow-purple">
                                    <FaCheck className="text-white text-3xl" />
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-white mb-3">Enquiry Received! 🎓</h3>
                                <p className="text-gray-400 max-w-xs">
                                    Thank you, <strong className="text-white">{form.name}</strong>! Our counsellor will call you on <strong className="text-white">{form.phone}</strong> within 2 hours.
                                </p>
                                <div className="mt-6 flex items-center gap-2 glass px-4 py-2 rounded-full">
                                    <HiSparkles className="text-primary-400" />
                                    <span className="text-gray-300 text-sm">Your topper journey starts now 🚀</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Info */}
                    <div className="space-y-5">
                        {/* Branches */}
                        <div className="glass rounded-3xl p-7">
                            <h3 className="font-heading text-xl font-bold text-white mb-5">Our Branches</h3>
                            <div className="space-y-5">
                                {branches.map(branch => (
                                    <div key={branch.city} className="border-b border-white/[0.06] pb-4 last:border-0 last:pb-0">
                                        <p className="text-primary-400 text-xs font-semibold mb-2 uppercase tracking-wide">{branch.city}</p>
                                        <div className="space-y-1.5">
                                            <div className="flex items-start gap-2 text-gray-300 text-sm">
                                                <FaMapMarkerAlt className="text-primary-400 text-xs mt-1 flex-shrink-0" />
                                                {branch.address}
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                                <FaPhoneAlt className="text-primary-400 text-xs flex-shrink-0" />
                                                {branch.phone}
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-400 text-xs">
                                                <FaClock className="text-primary-400 text-xs flex-shrink-0" />
                                                {branch.hours}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick contact */}
                        <div className="glass rounded-2xl p-6">
                            <h3 className="font-heading text-lg font-bold text-white mb-4">Quick Contact</h3>
                            <div className="space-y-3">
                                <a href="mailto:admissions@edupeak.in" className="flex items-center gap-3 text-gray-300 text-sm hover:text-white transition-colors">
                                    <FaEnvelope className="text-primary-400 text-sm" /> admissions@edupeak.in
                                </a>
                                <a href="https://wa.me/919876543210" className="flex items-center gap-3 text-gray-300 text-sm hover:text-green-400 transition-colors">
                                    <FaWhatsapp className="text-green-400 text-sm" /> +91 98765 43210 (WhatsApp)
                                </a>
                            </div>
                        </div>

                        {/* Demo info */}
                        <div className="glass rounded-2xl p-6">
                            <h3 className="font-heading text-lg font-bold text-white mb-4">Free Demo Includes</h3>
                            <ul className="space-y-2.5">
                                {[
                                    'Live class with our subject expert',
                                    'Tour of our classrooms & library',
                                    'One-on-one counselling session',
                                    'Fee structure & scholarship details',
                                    'Free study material sample',
                                ].map(item => (
                                    <li key={item} className="flex items-center gap-2.5 text-gray-300 text-sm">
                                        <FaCheck className="text-green-400 text-xs flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding px-6 bg-black/20">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-4xl font-bold text-white mb-3">
                            Frequently Asked <span className="text-gradient">Questions</span>
                        </h2>
                        <p className="text-gray-400 text-sm">Everything parents and students want to know before enrolling.</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="glass rounded-2xl overflow-hidden">
                                <button
                                    id={`faq-${i}`}
                                    className="w-full text-left px-6 py-5 font-semibold text-white text-sm flex items-center justify-between"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    {faq.q}
                                    <span className={`text-primary-400 transition-transform duration-300 ml-4 flex-shrink-0 text-lg ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                                </button>
                                <div className={`transition-all duration-300 overflow-hidden ${openFaq === i ? 'max-h-40' : 'max-h-0'}`}>
                                    <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
