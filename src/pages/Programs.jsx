import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheck, FaCalculator, FaFlask, FaBriefcase, FaBook, FaClock, FaVideo, FaUsers, FaFileAlt, FaStar } from 'react-icons/fa'
import { HiBadgeCheck } from 'react-icons/hi'

const courses = [
    {
        id: 'jee-2yr',
        icon: FaCalculator,
        iconColor: 'text-purple-400',
        iconBg: 'from-purple-600/20 to-blue-600/10',
        title: 'JEE Main & Advanced – 2 Year',
        tag: 'Class XI + XII',
        badge: 'Most Popular',
        badgeColor: 'from-primary-500 to-accent-500',
        price: '₹1,20,000',
        duration: 'Per Year',
        seats: '30 seats per batch',
        description: 'The gold-standard 2-year integrated program for Class 11 students eyeing IITs. Covers PCM with JEE-level depth, full test series, and 1-on-1 mentorship.',
        subjects: ['Physics (IIT level)', 'Chemistry (Organic + Inorganic + Physical)', 'Mathematics (JEE Advanced)'],
        features: [
            'Classes 6 days/week (4 hrs/day)',
            'Daily Practice Papers (DPP)',
            'All India Test Series (AITS)',
            'Comprehensive study material + books',
            'Doubt clearing Mon–Sat (2 hrs)',
            'Monthly parent-teacher meeting',
            'Online recordings of all classes',
            'Scholarship test on joining',
        ],
        ideal: 'Class 11 students starting early preparation',
        result: '410 IIT selections in 2024',
    },
    {
        id: 'jee-1yr',
        icon: FaCalculator,
        iconColor: 'text-purple-400',
        iconBg: 'from-purple-600/20 to-blue-600/10',
        title: 'JEE Main & Advanced – 1 Year',
        tag: 'Class XII / XII Pass',
        badge: 'Intensive',
        badgeColor: 'from-primary-600 to-blue-500',
        price: '₹1,00,000',
        duration: 'One Time',
        seats: '25 seats per batch',
        description: 'Fast-track, intensive 1-year program for Class 12 students and droppers. Focuses on revision, speed, and exam temperament.',
        subjects: ['Complete PCM Revision', 'Problem Solving Techniques', 'JEE Main Pattern Mastery'],
        features: [
            'Classes 7 days/week (5 hrs/day)',
            'Previous 15-year papers covered',
            'Crash revision modules',
            'Mock tests every weekend',
            'Performance analytics dashboard',
            'Crash course for dropper students',
            'Timed practice sessions',
            'NTA-style online test series',
        ],
        ideal: 'Class 12 or droppers targeting next JEE',
        result: '940 NIT/Engineering selections in 2024',
    },
    {
        id: 'neet',
        icon: FaFlask,
        iconColor: 'text-emerald-400',
        iconBg: 'from-emerald-600/20 to-teal-600/10',
        title: 'NEET UG – Medical Entrance',
        tag: 'Class XI, XII & Droppers',
        badge: 'High Demand',
        badgeColor: 'from-emerald-500 to-teal-400',
        price: '₹1,10,000',
        duration: 'Per Year',
        seats: '30 seats per batch',
        description: 'Comprehensive NEET preparation with India\'s best Biology faculty trained from AIIMS. NCERT-backed, NTA-aligned curriculum.',
        subjects: ['Biology (Botany + Zoology)', 'Physics (NEET Pattern)', 'Chemistry (NEET Applied)'],
        features: [
            'Deep NCERT chapter coverage',
            'AIIMS & NEET full-length mocks',
            'Biology by MBBS experts',
            'NEET-specific shortcut techniques',
            'Weekly revision tests',
            'Diagrams & flowcharts included',
            'Last 10 years solved papers',
            '24/7 digital portal access',
        ],
        ideal: 'Aspiring MBBS / BDS / AYUSH students',
        result: '680 NEET qualifiers in 2024',
    },
    {
        id: 'cat',
        icon: FaBriefcase,
        iconColor: 'text-amber-400',
        iconBg: 'from-amber-600/20 to-orange-600/10',
        title: 'CAT / MBA Entrance',
        tag: 'Graduates & Working Professionals',
        badge: 'New Batch',
        badgeColor: 'from-amber-500 to-orange-400',
        price: '₹80,000',
        duration: 'One Time',
        seats: '25 seats per batch',
        description: 'Comprehensive CAT, XAT, SNAP & IIFT preparation with IIM alumni mentors. Weekend batches available for working professionals.',
        subjects: ['Quantitative Aptitude', 'Verbal Ability & RC (VARC)', 'Data Interpretation & LR (DILR)'],
        features: [
            'IIM Alumni as mentors',
            '200+ mock CATs included',
            'Sectional speed & accuracy drills',
            'GD / PI / WAT preparation',
            'Live and recorded classes',
            'Weekend batch for professionals',
            'Resume & profile building',
            'IIM call conversion strategy',
        ],
        ideal: 'Graduates targeting IIM / top B-Schools',
        result: '270 IIM selections in 2024',
    },
    {
        id: 'boards',
        icon: FaBook,
        iconColor: 'text-blue-400',
        iconBg: 'from-blue-600/20 to-cyan-600/10',
        title: 'XI & XII Board Coaching',
        tag: 'CBSE & ISC',
        badge: 'Foundation',
        badgeColor: 'from-blue-500 to-cyan-400',
        price: '₹60,000',
        duration: 'Per Year',
        seats: 'Open Admissions',
        description: 'Structured school board coaching for Class 11 & 12 (Science & Commerce). Builds strong fundamentals for both boards and entrance exams.',
        subjects: ['Physics / Chemistry / Biology', 'Mathematics / Applied Maths', 'Economics / Accountancy / Business'],
        features: [
            'CBSE + ISC syllabus coverage',
            'Chapter-wise tests & assessments',
            'Pre-board full-length papers',
            'Separate science & commerce batches',
            'Study notes and summaries',
            'Monthly progress cards',
            'Parent app for real-time updates',
            'Affordable fee structure',
        ],
        ideal: 'Class 11–12 students with board focus',
        result: '95%+ of students score above 85%',
    },
]

export default function Programs() {
    const [selected, setSelected] = useState(null)

    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section-padding text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-primary-700/15 rounded-full blur-3xl pointer-events-none" />
                <div className="relative max-w-3xl mx-auto">
                    <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest block mb-4">Our Courses</span>
                    <h1 className="font-heading text-5xl md:text-6xl font-black text-white mb-6">
                        Courses for Every <span className="text-gradient">Exam & Goal</span>
                    </h1>
                    <p className="text-gray-400 text-xl leading-relaxed">
                        Specialist programs for JEE, NEET, CAT & Boards — each with dedicated faculty, comprehensive material, and a proven track record.
                    </p>
                </div>
            </section>

            {/* Includes banner */}
            <section className="pb-10 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="glass rounded-2xl p-5 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: FaVideo, label: 'Recorded Lectures' },
                            { icon: FaFileAlt, label: 'Study Material Included' },
                            { icon: FaUsers, label: 'Small Batch Size' },
                            { icon: FaClock, label: 'Doubt Sessions Daily' },
                        ].map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-2 text-sm text-gray-300">
                                <Icon className="text-primary-400 text-sm flex-shrink-0" />
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Course Cards */}
            <section className="py-10 px-6">
                <div className="max-w-5xl mx-auto space-y-5">
                    {courses.map((course) => {
                        const Icon = course.icon
                        const isOpen = selected === course.id
                        return (
                            <div
                                key={course.id}
                                className={`glass rounded-3xl overflow-hidden border transition-all duration-300 ${isOpen ? 'border-primary-500/40' : 'border-white/[0.06]'
                                    }`}
                            >
                                <button
                                    id={`course-toggle-${course.id}`}
                                    className="w-full text-left p-7 md:p-8"
                                    onClick={() => setSelected(isOpen ? null : course.id)}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.iconBg} flex items-center justify-center flex-shrink-0`}>
                                            <Icon className={`${course.iconColor} text-xl`} />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-1 flex-wrap">
                                                <span className={`inline-flex px-3 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${course.badgeColor}`}>
                                                    {course.badge}
                                                </span>
                                                <span className="text-gray-500 text-xs">{course.tag}</span>
                                            </div>
                                            <h2 className="font-heading text-xl md:text-2xl font-bold text-white">{course.title}</h2>
                                        </div>
                                        <div className="flex items-center gap-6 flex-shrink-0">
                                            <div>
                                                <p className="font-heading text-2xl font-black text-gradient">{course.price}</p>
                                                <p className="text-gray-500 text-xs">{course.duration} • {course.seats}</p>
                                            </div>
                                            <div className={`w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center text-gray-400 text-lg transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                                                +
                                            </div>
                                        </div>
                                    </div>
                                </button>

                                <div className={`transition-all duration-400 overflow-hidden ${isOpen ? 'max-h-[700px]' : 'max-h-0'}`}>
                                    <div className="px-7 md:px-8 pb-8 pt-2 border-t border-white/[0.06]">
                                        <p className="text-gray-300 text-sm leading-relaxed mb-5 mt-4">{course.description}</p>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3">Subjects Covered</p>
                                                <ul className="space-y-2">
                                                    {course.subjects.map(s => (
                                                        <li key={s} className="flex items-center gap-2 text-gray-300 text-sm">
                                                            <FaStar className="text-primary-400 text-xs flex-shrink-0" /> {s}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3">What's Included</p>
                                                <ul className="space-y-2">
                                                    {course.features.slice(0, 5).map(f => (
                                                        <li key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                                                            <FaCheck className="text-emerald-400 text-xs flex-shrink-0" /> {f}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
                                            <div className="space-y-1">
                                                <p className="text-gray-500 text-xs">Ideal for: <span className="text-gray-300">{course.ideal}</span></p>
                                                <div className="flex items-center gap-1.5">
                                                    <HiBadgeCheck className="text-primary-400 text-sm" />
                                                    <p className="text-primary-400 text-xs font-semibold">{course.result}</p>
                                                </div>
                                            </div>
                                            <Link
                                                to="/contact"
                                                id={`enroll-${course.id}`}
                                                className="btn-primary text-sm py-3 px-7"
                                            >
                                                Enroll / Enquire <FaArrowRight className="text-xs" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Scholarship */}
            <section className="py-16 px-6 bg-black/20">
                <div className="max-w-4xl mx-auto">
                    <div className="glass rounded-3xl p-10 glow-orange grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="text-5xl mb-5">🏅</div>
                            <h2 className="font-heading text-3xl font-bold text-white mb-3">EduPeak Scholarship Test</h2>
                            <p className="text-gray-400 leading-relaxed mb-5">
                                Qualify our scholarship exam and get up to <strong className="text-white">90% fee waiver</strong>. Held every month for meritorious students.
                            </p>
                            <ul className="space-y-2 mb-6">
                                {['Up to 90% fee waiver', 'Based on academic merit', 'Available for all courses', 'Special EWS quota'].map(item => (
                                    <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                                        <FaCheck className="text-green-400 text-xs" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contact" id="scholarship-cta" className="btn-primary text-sm">
                                Apply for Scholarship <FaArrowRight className="text-xs" />
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {[
                                { range: '90%+ Marks', discount: '90% fee waiver', color: '#c147ef' },
                                { range: '80–89% Marks', discount: '50% fee waiver', color: '#f97316' },
                                { range: '70–79% Marks', discount: '30% fee waiver', color: '#3b82f6' },
                                { range: '60–69% Marks', discount: '15% fee waiver', color: '#10b981' },
                            ].map(item => (
                                <div key={item.range} className="flex items-center justify-between glass px-4 py-3 rounded-xl">
                                    <span className="text-gray-300 text-sm">{item.range}</span>
                                    <span className="text-sm font-bold" style={{ color: item.color }}>{item.discount}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
