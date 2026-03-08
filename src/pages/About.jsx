import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { FaArrowRight, FaCheck, FaGraduationCap, FaChalkboardTeacher, FaFlask, FaCalculator } from 'react-icons/fa'
import { HiBadgeCheck } from 'react-icons/hi'

const milestones = [
    { year: '2009', event: 'EduPeak founded in Noida with 50 students and a single classroom.' },
    { year: '2013', event: 'Expanded to Delhi. First batch of 12 IIT selections.' },
    { year: '2016', event: 'Launched NEET division. Crossed 1,000+ annual selections milestone.' },
    { year: '2019', event: 'Opened Gurgaon branch. Launched Online + Offline hybrid model.' },
    { year: '2022', event: 'CAT / MBA program introduced. Digital study portal launched.' },
    { year: '2024', event: '2,300+ selections. Ranked #1 coaching institute in NCR region.' },
]

const faculty = [
    {
        name: 'Dr. Sanjay Kumar',
        role: 'Physics – IIT-JEE',
        qual: 'IIT Bombay, 20 yrs exp',
        initials: 'SK',
        color: 'from-primary-500 to-accent-500',
        produced: '400+ IIT Selections',
    },
    {
        name: 'Dr. Neha Agarwal',
        role: 'Biology – NEET',
        qual: 'AIIMS Delhi, 15 yrs exp',
        initials: 'NA',
        color: 'from-emerald-500 to-teal-400',
        produced: '600+ NEET Qualifiers',
    },
    {
        name: 'Rahul Sharma',
        role: 'Mathematics – JEE/CAT',
        qual: 'IIT Delhi, 12 yrs exp',
        initials: 'RS',
        color: 'from-blue-500 to-cyan-400',
        produced: '350+ IIT Selections',
    },
    {
        name: 'Dr. Priya Singh',
        role: 'Chemistry – JEE/NEET',
        qual: 'IIT Kanpur, 16 yrs exp',
        initials: 'PS',
        color: 'from-amber-500 to-orange-400',
        produced: '500+ Selections',
    },
    {
        name: 'Amit Verma',
        role: 'QA & DILR – CAT',
        qual: 'IIM Ahmedabad, 10 yrs exp',
        initials: 'AV',
        color: 'from-rose-500 to-pink-400',
        produced: '200+ IIM Calls',
    },
    {
        name: 'Meena Pillai',
        role: 'English & VARC – CAT',
        qual: 'IIM Bangalore, 8 yrs exp',
        initials: 'MP',
        color: 'from-violet-500 to-purple-400',
        produced: '150+ IIM Selections',
    },
]

const values = [
    { emoji: '🎯', title: 'Result-Oriented', desc: 'Every decision we make is driven by one question: will this help our student succeed?' },
    { emoji: '🧠', title: 'Conceptual Clarity', desc: 'We go beyond rote learning to build deep understanding that lasts through any exam.' },
    { emoji: '❤️', title: 'Student-First', desc: 'From doubt clearing to mental health support, we treat every student as our own.' },
    { emoji: '🔬', title: 'Scientific Approach', desc: 'Proven study methods, spaced repetition, and cognitive science guide our pedagogy.' },
]

export default function About() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const [facultyRef, facultyInView] = useInView({ triggerOnce: true, threshold: 0.05 })
    const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.05 })

    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section-padding text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-primary-700/15 rounded-full blur-3xl pointer-events-none" />
                <div className="relative max-w-3xl mx-auto">
                    <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest block mb-4">About EduPeak Institute</span>
                    <h1 className="font-heading text-5xl md:text-6xl font-black text-white mb-6">
                        15 Years of <span className="text-gradient">Shaping Toppers</span>
                    </h1>
                    <p className="text-gray-400 text-xl leading-relaxed">
                        Founded in 2009, EduPeak Institute has grown from a single classroom in Noida to NCR's most trusted coaching institute — with 2,300+ selections in 2024 alone.
                    </p>
                </div>
            </section>

            {/* Stats banner */}
            <section className="pb-12 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
                    {[
                        { num: '15,000+', label: 'Students Trained' },
                        { num: '50+', label: 'Expert Faculty' },
                        { num: '3', label: 'Branches in NCR' },
                        { num: '#1', label: 'Ranked in NCR 2024' },
                    ].map(item => (
                        <div key={item.label} className="glass rounded-2xl p-5 text-center glass-hover">
                            <p className="font-heading text-3xl font-black text-gradient mb-1">{item.num}</p>
                            <p className="text-gray-400 text-xs">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission */}
            <section className="py-16 px-6 bg-black/20">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest block mb-4">Our Mission</span>
                        <h2 className="font-heading text-4xl font-bold text-white mb-5">Making Quality Education Accessible to Every Aspiring Student</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            At EduPeak, we believe that a student's dream of cracking JEE, NEET, or CAT should never be limited by access to good coaching. That's why we offer scholarships, hybrid learning, and a faculty team that genuinely cares.
                        </p>
                        <ul className="space-y-3">
                            {[
                                'ICF-certified and IIT/AIIMS/IIM alumni faculty',
                                'Comprehensive study material included',
                                'Online + Offline hybrid learning model',
                                'Regular parent-teacher meetings & progress reports',
                                'Dedicated doubt-clearing sessions every day',
                            ].map(item => (
                                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                                    <HiBadgeCheck className="text-primary-400 text-base mt-0.5 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="glass rounded-3xl p-8 glow-purple">
                        <h3 className="font-heading text-xl font-bold text-white mb-6">Selections in 2024</h3>
                        {[
                            { exam: 'IIT-JEE Advanced', count: '410', color: '#c147ef' },
                            { exam: 'NEET UG (MBBS)', count: '680', color: '#10b981' },
                            { exam: 'IIM (CAT)', count: '270', color: '#f97316' },
                            { exam: 'NIT / Other Engg', count: '940', color: '#3b82f6' },
                        ].map(item => (
                            <div key={item.exam} className="mb-4 last:mb-0">
                                <div className="flex justify-between text-sm mb-1.5">
                                    <span className="text-gray-300">{item.exam}</span>
                                    <span className="text-white font-semibold">{item.count} students</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-1000"
                                        style={{ width: `${Math.min(parseInt(item.count) / 10, 100)}%`, backgroundColor: item.color }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section ref={timelineRef} className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest block mb-3">Our Journey</span>
                        <h2 className="font-heading text-4xl font-bold text-white">15 Years of <span className="text-gradient">Excellence</span></h2>
                    </div>
                    <div className="relative border-l-2 border-primary-500/30 ml-4 md:ml-0 md:border-0">
                        <div className="space-y-8">
                            {milestones.map((m, i) => (
                                <div
                                    key={m.year}
                                    className={`flex gap-6 items-start transition-all duration-700 ${timelineInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                                        }`}
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                >
                                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 border border-primary-500/30 flex items-center justify-center">
                                        <span className="font-heading text-sm font-bold text-gradient">{m.year}</span>
                                    </div>
                                    <div className="glass rounded-2xl p-5 flex-grow">
                                        <p className="text-gray-300 text-sm leading-relaxed">{m.event}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section ref={ref} className="section-padding bg-black/20">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest block mb-3">Our Values</span>
                        <h2 className="font-heading text-4xl font-bold text-white">What Drives <span className="text-gradient">Everything We Do</span></h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {values.map(({ emoji, title, desc }, i) => (
                            <div
                                key={title}
                                className={`glass rounded-2xl p-7 glass-hover text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className="text-4xl mb-4">{emoji}</div>
                                <h3 className="font-heading text-lg font-bold text-white mb-2">{title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Faculty */}
            <section ref={facultyRef} className="section-padding">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest block mb-3">Our Educators</span>
                        <h2 className="font-heading text-4xl font-bold text-white">
                            Learn from <span className="text-gradient">India's Best</span>
                        </h2>
                        <p className="text-gray-400 mt-3">IITians, NITians, MBBS doctors and IIM alumni — all dedicated to your success.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {faculty.map((f, i) => (
                            <div
                                key={f.name}
                                className={`glass rounded-2xl p-6 glass-hover transition-all duration-700 ${facultyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                                    {f.initials}
                                </div>
                                <h3 className="font-heading text-lg font-bold text-white mb-1">{f.name}</h3>
                                <p className="text-primary-400 text-xs font-medium mb-2">{f.role}</p>
                                <p className="text-gray-500 text-xs mb-3">{f.qual}</p>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs">
                                    <FaGraduationCap className="text-primary-400 text-xs" /> {f.produced}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-black/20">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-heading text-4xl font-bold text-white mb-5">
                        Ready to Join <span className="text-gradient">India's Best?</span>
                    </h2>
                    <p className="text-gray-400 mb-8">Attend a free demo class and experience EduPeak's teaching methodology firsthand.</p>
                    <Link to="/contact" id="about-cta" className="btn-primary px-10 py-4">
                        Book Free Demo <FaArrowRight />
                    </Link>
                </div>
            </section>
        </div>
    )
}
