import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import {
    FaArrowRight, FaStar, FaCheck, FaQuoteLeft, FaGraduationCap,
    FaUsers, FaTrophy, FaMedal, FaBook, FaFlask, FaCalculator, FaBriefcase,
    FaWhatsapp, FaChalkboardTeacher
} from 'react-icons/fa'
import { HiSparkles, HiBadgeCheck } from 'react-icons/hi'

const stats = [
    { value: 15000, suffix: '+', label: 'Students Enrolled', icon: FaUsers },
    { value: 2300, suffix: '+', label: 'Selections in 2024', icon: FaTrophy },
    { value: 15, suffix: '+', label: 'Years of Excellence', icon: FaMedal },
    { value: 98, suffix: '%', label: 'Success Rate', icon: FaGraduationCap },
]

const courses = [
    {
        id: 'jee',
        icon: FaCalculator,
        iconColor: 'text-purple-400',
        iconBg: 'from-purple-600/20 to-blue-600/10',
        badge: 'Most Popular',
        badgeColor: 'from-primary-500 to-accent-500',
        title: 'JEE Main & Advanced',
        subtitle: 'Engineering Entrance',
        description: 'Comprehensive 2-year & 1-year programs for IIT-JEE. Physics, Chemistry & Mathematics taught by IITians.',
        highlights: ['Daily Practice Papers (DPP)', 'All India Test Series', 'IIT Alumni Faculty', 'Doubt Clearing Sessions'],
        fee: '₹1,20,000/yr',
        seats: 'Limited 30 Seats',
    },
    {
        id: 'neet',
        icon: FaFlask,
        iconColor: 'text-emerald-400',
        iconBg: 'from-emerald-600/20 to-teal-600/10',
        badge: 'High Demand',
        badgeColor: 'from-emerald-500 to-teal-400',
        title: 'NEET UG',
        subtitle: 'Medical Entrance',
        description: 'Biology-focused coaching for AIIMS & top medical colleges. Intensive Biology, Physics & Chemistry preparation.',
        highlights: ['NCERT Deep Dive', 'Mock Medical Tests', 'AIIMS-pattern Questions', 'Biology by MBBS Experts'],
        fee: '₹1,10,000/yr',
        seats: 'Limited 30 Seats',
    },
    {
        id: 'cat',
        icon: FaBriefcase,
        iconColor: 'text-amber-400',
        iconBg: 'from-amber-600/20 to-orange-600/10',
        badge: 'New Batch',
        badgeColor: 'from-amber-500 to-orange-400',
        title: 'CAT / MBA Entrance',
        subtitle: 'Management Entrance',
        description: 'Crack CAT, XAT & SNAP with our expert-led program. Quantitative Aptitude, VARC & DILR mastery.',
        highlights: ['Sectional Speed Tests', 'GD & PI Training', 'IIM Alumni Mentors', '200+ Mock CATs'],
        fee: '₹80,000',
        seats: 'Limited 25 Seats',
    },
    {
        id: 'boards',
        icon: FaBook,
        iconColor: 'text-blue-400',
        iconBg: 'from-blue-600/20 to-cyan-600/10',
        badge: 'Foundation',
        badgeColor: 'from-blue-500 to-cyan-400',
        title: 'XI & XII Boards',
        subtitle: 'Science & Commerce',
        description: 'Strong board exam coaching for Class 11 & 12. Build the foundation for top scores and college admissions.',
        highlights: ['CBSE & ISC Coverage', 'Chapter-wise Tests', 'Study Material Included', 'Parent Progress Reports'],
        fee: '₹60,000/yr',
        seats: 'Open Admissions',
    },
]

const testimonials = [
    {
        name: 'Arjun Mehta',
        score: 'AIR 47 – JEE Advanced 2024',
        avatar: 'AM',
        color: '#c147ef',
        text: 'EduPeak\'s structured DPP system and IITian faculty made all the difference. I cleared JEE Advanced in my first attempt with AIR 47. The mock tests perfectly simulated the real exam.',
    },
    {
        name: 'Priya Verma',
        score: '680/720 – NEET 2024',
        avatar: 'PV',
        color: '#10b981',
        text: 'The Biology faculty here is exceptional. They broke down NCERT so well that I could answer any question. Got 680 in NEET and secured AIIMS Delhi. Forever grateful to EduPeak!',
    },
    {
        name: 'Rohan Gupta',
        score: '99.4 %ile – CAT 2024',
        avatar: 'RG',
        color: '#f97316',
        text: 'The CAT program\'s mock test series was the closest thing to the actual exam. The GD-PI training gave me the confidence to ace IIM Ahmedabad\'s interview. Best investment ever.',
    },
]

const why = [
    { emoji: '🎯', title: 'Targeted Exam Strategy', desc: 'Exam-specific strategies designed by past toppers and subject matter experts.' },
    { emoji: '👨‍🏫', title: 'Expert Faculty', desc: 'IITians, NITians, MBBS & MBA holders with 10+ years of teaching experience.' },
    { emoji: '📊', title: 'Regular Assessments', desc: 'Weekly tests, monthly all-India ranks, and detailed performance analytics.' },
    { emoji: '📱', title: 'Digital Study Portal', desc: '24/7 access to recorded lectures, study material, and doubt resolution.' },
    { emoji: '🏆', title: '2300+ Selections in 2024', desc: 'Proven track record of getting students into IITs, AIIMS and IIMs every year.' },
    { emoji: '💰', title: 'Scholarship Programs', desc: 'Up to 90% fee waiver for meritorious and economically weaker students.' },
]

function StatCard({ stat, inView }) {
    const Icon = stat.icon
    return (
        <div className="glass rounded-2xl p-6 text-center glass-hover">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-4">
                <Icon className="text-primary-400 text-xl" />
            </div>
            <div className="font-heading text-4xl font-bold text-white mb-1">
                {inView ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} separator="," />
                ) : (
                    `0${stat.suffix}`
                )}
            </div>
            <p className="text-gray-400 text-sm">{stat.label}</p>
        </div>
    )
}

export default function Home() {
    const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 })
    const [coursesRef, coursesInView] = useInView({ triggerOnce: true, threshold: 0.05 })
    const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <div>
            {/* ─── HERO ─── */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Background blobs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
                </div>
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }} />

                <div className="relative max-w-5xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-primary-500/20">
                        <HiBadgeCheck className="text-primary-400" />
                        <span className="text-xs text-gray-300 font-medium">🏆 2,300+ Selections in 2024 — JEE | NEET | CAT</span>
                    </div>

                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
                        India's Most Trusted<br />
                        <span className="text-gradient">Coaching Institute</span>
                    </h1>

                    <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-4">
                        Expert faculty. Proven strategies. Real results. Join <strong className="text-white">15,000+</strong> students who cracked JEE, NEET & CAT with EduPeak.
                    </p>

                    {/* Exam badges */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {['JEE Main', 'JEE Advanced', 'NEET UG', 'CAT', 'XI–XII Boards'].map(exam => (
                            <span key={exam} className="px-4 py-1.5 glass rounded-full text-sm text-gray-300 border border-white/10">
                                {exam}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" id="hero-cta-enroll" className="btn-primary text-base px-8 py-4">
                            Enroll Now <FaArrowRight className="text-sm" />
                        </Link>
                        <Link to="/programs" id="hero-cta-courses" className="btn-secondary text-base px-8 py-4">
                            <FaBook className="text-sm" /> Explore Courses
                        </Link>
                    </div>

                    {/* Quick trust signals */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-sm text-gray-400">
                        <span className="flex items-center gap-2"><FaCheck className="text-green-400 text-xs" /> Free Demo Classes</span>
                        <span className="flex items-center gap-2"><FaCheck className="text-green-400 text-xs" /> Scholarship Available</span>
                        <span className="flex items-center gap-2"><FaCheck className="text-green-400 text-xs" /> Online & Offline Batches</span>
                    </div>
                </div>
            </section>

            {/* ─── STATS ─── */}
            <section ref={statsRef} className="py-20 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map(stat => <StatCard key={stat.label} stat={stat} inView={statsInView} />)}
                </div>
            </section>

            {/* ─── COURSES ─── */}
            <section ref={coursesRef} className="section-padding bg-black/20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest block mb-3">Our Courses</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                            Find Your <span className="text-gradient">Perfect Course</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto">
                            Specialized programs designed for each entrance exam with dedicated faculty, study material, and test series.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {courses.map((course, i) => {
                            const Icon = course.icon
                            return (
                                <div
                                    key={course.id}
                                    className={`glass rounded-3xl p-8 glass-hover relative overflow-hidden transition-all duration-700 ${coursesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`}
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                >
                                    <div className="flex items-start justify-between mb-5">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.iconBg} flex items-center justify-center`}>
                                            <Icon className={`${course.iconColor} text-xl`} />
                                        </div>
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${course.badgeColor}`}>
                                            {course.badge}
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-white mb-1">{course.title}</h3>
                                    <p className="text-primary-400 text-xs font-medium mb-3">{course.subtitle}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{course.description}</p>
                                    <ul className="space-y-2 mb-6">
                                        {course.highlights.map(h => (
                                            <li key={h} className="flex items-center gap-2 text-sm text-gray-300">
                                                <FaCheck className="text-primary-400 text-xs flex-shrink-0" /> {h}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                                        <div>
                                            <p className="text-gradient font-heading font-bold text-xl">{course.fee}</p>
                                            <p className="text-gray-500 text-xs mt-0.5">{course.seats}</p>
                                        </div>
                                        <Link to="/contact" id={`enroll-${course.id}`} className="btn-primary text-sm py-2.5 px-5">
                                            Enroll <FaArrowRight className="text-xs" />
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ─── WHY US ─── */}
            <section ref={whyRef} className="section-padding">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest block mb-3">Why EduPeak?</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                            The EduPeak <span className="text-gradient">Advantage</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {why.map(({ emoji, title, desc }, i) => (
                            <div
                                key={title}
                                className={`glass rounded-2xl p-6 glass-hover transition-all duration-700 ${whyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                <div className="text-3xl mb-4">{emoji}</div>
                                <h3 className="font-heading text-lg font-bold text-white mb-2">{title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TOPPERS ─── */}
            <section ref={testimonialsRef} className="section-padding bg-black/20">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest block mb-3">Student Results</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                            Our <span className="text-gradient">Toppers Speak</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <div
                                key={t.name}
                                className={`glass rounded-3xl p-7 glass-hover transition-all duration-700 ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{ transitionDelay: `${i * 150}ms` }}
                            >
                                <FaQuoteLeft className="text-primary-500/30 text-2xl mb-4" />
                                <p className="text-gray-300 text-sm leading-relaxed mb-5">"{t.text}"</p>
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, j) => <FaStar key={j} className="text-yellow-400 text-xs" />)}
                                </div>
                                <div className="flex items-center gap-3 border-t border-white/[0.06] pt-4">
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                                        style={{ backgroundColor: t.color }}>
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-sm">{t.name}</p>
                                        <p className="text-primary-400 text-xs font-medium">{t.score}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/testimonials" id="view-all-results" className="btn-secondary">
                            View All Results <FaArrowRight className="text-xs" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── CTA / FREE DEMO ─── */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="relative glass rounded-3xl p-12 md:p-16 text-center overflow-hidden glow-purple">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-accent-500/10 rounded-3xl" />
                        <div className="relative">
                            <div className="text-5xl mb-6">🎓</div>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                                Start with a <span className="text-gradient">Free Demo Class</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                                Not sure which course is right for you? Attend a free demo class, meet our faculty, and see the EduPeak difference for yourself.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact" id="banner-cta-demo" className="btn-primary text-base px-10 py-4">
                                    Book Free Demo <FaArrowRight />
                                </Link>
                                <a href="https://wa.me/919999999999" id="banner-cta-whatsapp" className="btn-secondary text-base px-10 py-4">
                                    <FaWhatsapp className="text-green-400 text-base" /> Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
