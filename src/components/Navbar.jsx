import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaGraduationCap } from 'react-icons/fa'

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/programs' },
    { name: 'Results', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-black/30' : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FaGraduationCap className="text-white text-sm" />
                    </div>
                    <div>
                        <span className="font-heading font-bold text-xl text-gradient">EduPeak</span>
                        <span className="text-white font-bold text-xl"> Institute</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.path
                                        ? 'text-primary-400'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <Link to="/contact" id="nav-enroll-btn" className="btn-primary text-sm py-2.5 px-5">
                        Enroll Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    id="mobile-menu-toggle"
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="glass border-t border-white/[0.06] px-6 pb-6 pt-4 flex flex-col gap-4">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium py-2 transition-colors ${location.pathname === link.path ? 'text-primary-400' : 'text-gray-300'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn-primary text-sm justify-center mt-2">
                        Enroll Now
                    </Link>
                </div>
            </div>
        </header>
    )
}
