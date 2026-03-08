import { Link } from 'react-router-dom'
import { FaGraduationCap, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa'

const footerLinks = {
    'Courses': [
        { name: 'JEE Main & Advanced', path: '/programs' },
        { name: 'NEET UG', path: '/programs' },
        { name: 'CAT / MBA', path: '/programs' },
        { name: 'Board Exam (XI & XII)', path: '/programs' },
    ],
    'Institute': [
        { name: 'About Us', path: '/about' },
        { name: 'Our Faculty', path: '/about' },
        { name: 'Results & Rankings', path: '/testimonials' },
        { name: 'Student Reviews', path: '/testimonials' },
    ],
    'Support': [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Admissions', path: '/contact' },
        { name: 'Fee Structure', path: '/programs' },
        { name: 'Scholarship Test', path: '/contact' },
    ],
}

const socials = [
    { icon: FaYoutube, href: '#', label: 'YouTube' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
    return (
        <footer className="bg-black/40 border-t border-white/[0.06] mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                                <FaGraduationCap className="text-white text-sm" />
                            </div>
                            <div>
                                <span className="font-heading font-bold text-xl text-gradient">EduPeak</span>
                                <span className="text-white font-bold text-xl"> Institute</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-3">
                            India's most trusted coaching institute for JEE, NEET, CAT & Board Exams. 15+ years of shaping toppers and changing lives.
                        </p>
                        <p className="text-gray-500 text-xs mb-5">📍 Main Branch: Sector 18, Noida | Also in Delhi & Gurgaon</p>
                        <div className="flex items-center gap-4">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/40 transition-all duration-200"
                                >
                                    <Icon className="text-sm" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="text-white font-semibold text-sm mb-4">{title}</h3>
                            <ul className="space-y-3">
                                {links.map(link => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-400 text-sm hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/[0.06] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">© 2025 EduPeak Institute. All rights reserved.</p>
                    <p className="text-gray-500 text-sm">Shaping India's Future Toppers 🏆</p>
                </div>
            </div>
        </footer>
    )
}
