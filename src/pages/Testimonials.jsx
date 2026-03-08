import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FaStar, FaQuoteLeft, FaFilter, FaTrophy, FaMedal } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { HiBadgeCheck } from 'react-icons/hi'

const toppers = [
    {
        name: 'Arjun Mehta',
        score: 'AIR 47',
        exam: 'JEE Advanced 2024',
        college: 'IIT Bombay – CS',
        initials: 'AM',
        color: '#c147ef',
        category: 'jee',
        text: 'EduPeak\'s structured DPP system and IITian faculty made all the difference. I cleared JEE Advanced with AIR 47 in my very first attempt. The daily doubt sessions and mock test analysis were game-changers.',
    },
    {
        name: 'Priya Verma',
        score: '680 / 720',
        exam: 'NEET UG 2024',
        college: 'AIIMS New Delhi',
        initials: 'PV',
        color: '#10b981',
        category: 'neet',
        text: 'The Biology faculty here is exceptional. They broke down NCERT so well that every question felt familiar. Got 680 in NEET and secured AIIMS Delhi. Forever grateful to EduPeak!',
    },
    {
        name: 'Rohan Gupta',
        score: '99.4 %ile',
        exam: 'CAT 2024',
        college: 'IIM Ahmedabad',
        initials: 'RG',
        color: '#f97316',
        category: 'cat',
        text: 'The CAT mock series was the closest thing to the actual exam. The GD-PI training gave me confidence to ace IIM Ahmedabad\'s interview. I went from 85%ile to 99.4%ile in 4 months.',
    },
    {
        name: 'Sneha Acharya',
        score: 'AIR 112',
        exam: 'JEE Advanced 2024',
        college: 'IIT Delhi – Electrical',
        initials: 'SA',
        color: '#3b82f6',
        category: 'jee',
        text: 'Two years at EduPeak gave me the best preparation I could ask for. The faculty genuinely cared about my performance and pushed me beyond my comfort zone. Proud IITian now!',
    },
    {
        name: 'Karan Patel',
        score: '660 / 720',
        exam: 'NEET UG 2024',
        college: 'Maulana Azad Medical College',
        initials: 'KP',
        color: '#8b5cf6',
        category: 'neet',
        text: 'NEET felt overwhelming at first but EduPeak broke everything down systematically. Their NCERT-first strategy with daily tests was exactly what I needed. Secured MAMC in first attempt!',
    },
    {
        name: 'Divya Sharma',
        score: '98.7 %ile',
        exam: 'CAT 2024',
        college: 'IIM Calcutta',
        initials: 'DS',
        color: '#f59e0b',
        category: 'cat',
        text: 'Cracked CAT while working full-time thanks to EduPeak\'s weekend batch. The DILR modules were brilliant. Received IIM Calcutta, IIM Lucknow, and MDI calls. Absolutely the best!',
    },
    {
        name: 'Rahul Nair',
        score: 'AIR 203',
        exam: 'JEE Advanced 2024',
        college: 'IIT Madras – Mech',
        initials: 'RN',
        color: '#ec4899',
        category: 'jee',
        text: 'I was a dropper who had failed once. EduPeak\'s dropper batch completely rebuilt my strategy. The faculty identified my weak areas and fixed them systematically. IIT didn\'t feel impossible anymore.',
    },
    {
        name: 'Anjali Singh',
        score: '95.2% Boards',
        exam: 'CBSE XII 2024',
        college: 'Delhi University – DU',
        initials: 'AS',
        color: '#14b8a6',
        category: 'boards',
        text: 'EduPeak\'s board coaching helped me score 95.2% in Class 12. The teachers made complex topics simple and the test series prepared me well. Got into DU\'s top colleges easily.',
    },
    {
        name: 'Vikram Joshi',
        score: '640 / 720',
        exam: 'NEET UG 2024',
        college: 'GMC Nagpur',
        initials: 'VJ',
        color: '#84cc16',
        category: 'neet',
        text: 'After failing NEET once, I joined EduPeak\'s dropper program. Their structured approach and weekly mock tests built my confidence. Second attempt brought 640 marks and a government MBBS seat!',
    },
]

const filters = ['All', 'JEE', 'NEET', 'CAT', 'Boards']
const categoryMap = { 'JEE': 'jee', 'NEET': 'neet', 'CAT': 'cat', 'Boards': 'boards' }

const results2024 = [
    { exam: 'JEE Advanced', count: '410', note: 'IIT Selections', color: '#c147ef' },
    { exam: 'NEET UG', count: '680', note: 'Government MBBS', color: '#10b981' },
    { exam: 'CAT / MBA', count: '270', note: 'IIM & Top B-Schools', color: '#f97316' },
    { exam: 'NIT / Engg', count: '940', note: 'Engineering Colleges', color: '#3b82f6' },
]

export default function Testimonials() {
    const [activeFilter, setActiveFilter] = useState('All')
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

    const filtered = activeFilter === 'All'
        ? toppers
        : toppers.filter(t => t.category === categoryMap[activeFilter])

    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section-padding text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-primary-700/15 rounded-full blur-3xl pointer-events-none" />
                <div className="relative max-w-3xl mx-auto">
                    <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest block mb-4">Results 2024</span>
                    <h1 className="font-heading text-5xl md:text-6xl font-black text-white mb-6">
                        Our Students. <span className="text-gradient">Their Victories.</span>
                    </h1>
                    <p className="text-gray-400 text-xl leading-relaxed">
                        In 2024, EduPeak students secured <strong className="text-white">2,300+ selections</strong> including IITs, AIIMS, IIMs and top engineering colleges across India.
                    </p>
                </div>
            </section>

            {/* Results 2024 Banner */}
            <section className="pb-12 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
                    {results2024.map(item => (
                        <div key={item.exam} className="glass rounded-2xl p-5 text-center glass-hover">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <FaTrophy style={{ color: item.color }} className="text-lg" />
                            </div>
                            <p className="font-heading text-3xl font-black mb-1" style={{ color: item.color }}>{item.count}+</p>
                            <p className="text-white font-semibold text-sm">{item.exam}</p>
                            <p className="text-gray-500 text-xs mt-1">{item.note}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Filter */}
            <section className="pb-8 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-2 mb-3 text-gray-400 text-sm">
                        <FaFilter className="text-xs" /> Filter by exam:
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                id={`filter-${filter.toLowerCase()}`}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === filter
                                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                                        : 'glass text-gray-300 hover:text-white hover:border-primary-500/40'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Topper Cards */}
            <section ref={ref} className="pb-20 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((t, i) => (
                        <div
                            key={t.name}
                            className={`glass rounded-3xl p-7 glass-hover transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${Math.min(i, 6) * 80}ms` }}
                        >
                            {/* Score badge */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="px-3 py-1.5 rounded-xl text-xs font-bold text-white text-center"
                                    style={{ backgroundColor: `${t.color}25`, border: `1px solid ${t.color}40` }}>
                                    <div className="font-heading text-lg font-black" style={{ color: t.color }}>{t.score}</div>
                                    <div className="text-gray-400 text-xs font-normal">{t.exam}</div>
                                </div>
                                <FaMedal className="text-yellow-400 text-2xl opacity-70" />
                            </div>

                            <div className="mb-2">
                                <HiBadgeCheck style={{ color: t.color }} className="inline mr-1.5 text-sm" />
                                <span className="text-xs font-semibold text-white">{t.college}</span>
                            </div>

                            <FaQuoteLeft className="text-primary-500/20 text-xl mb-3" />
                            <p className="text-gray-400 text-xs leading-relaxed mb-4">"{t.text}"</p>

                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, j) => <FaStar key={j} className="text-yellow-400 text-xs" />)}
                            </div>

                            <div className="flex items-center gap-3 border-t border-white/[0.06] pt-4">
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                                    style={{ backgroundColor: t.color }}
                                >
                                    {t.initials}
                                </div>
                                <p className="text-white font-semibold text-sm">{t.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-black/20">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-heading text-4xl font-bold text-white mb-5">
                        Your Name on This Wall <span className="text-gradient">Next Year</span>?
                    </h2>
                    <p className="text-gray-400 mb-8">Start your journey today. Book a free demo and take the first step toward your dream college.</p>
                    <Link to="/contact" id="results-cta" className="btn-primary px-10 py-4">
                        Book a Free Demo Class
                    </Link>
                </div>
            </section>
        </div>
    )
}
