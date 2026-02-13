import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function MainLayout({ children, auth }) {
    return (
        <div className="min-h-screen bg-satva-cream text-satva-dark font-sans selection:bg-satva-saffron selection:text-white overflow-hidden relative">
            
            {/* Global Background Elements (Always visible) */}
            <motion.div 
                animate={{ y: [0, 30, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="fixed bottom-[-10%] left-[-5%] w-[500px] h-[500px] opacity-10 pointer-events-none z-0"
            >
                <div className="w-full h-full rounded-full border-dashed border-2 border-satva-saffron animate-spin-slow"></div>
            </motion.div>

            {/* --- SHARED GLASS NAVIGATION --- */}
            <nav className="fixed w-full z-50 top-4 px-4">
                <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-lg border border-white/50 rounded-full shadow-sm px-6 py-3 flex justify-between items-center">
                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative w-12 h-12 flex items-center justify-center">
                            <img src="/images/logo.png" alt="Satva Dig Logo" className="w-full h-full object-contain drop-shadow-md" />
                        </div>
                        <span className="font-serif text-xl font-bold text-satva-dark tracking-wide">Satva Dig</span>
                    </Link>

                    {/* Desktop Links (True Vastu Flow) */}
                    <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide text-gray-600">
                        {['Home', 'About', 'Consultancy', 'Contact'].map((item) => (
                            <Link 
                                key={item} 
                                // Maps "Home" to "/", and others to "/about", "/consultancy", etc.
                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                                className="hover:text-satva-saffron transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-satva-saffron transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-3">
                        <Link href="/contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-satva-saffron to-satva-yellow text-white text-sm font-bold shadow-lg shadow-orange-200 hover:shadow-orange-300 transform hover:-translate-y-0.5 transition-all">
                            Book Consultation
                        </Link>
                    </div>
                </div>
            </nav>

            {/* This is where your page content (Welcome, About, etc.) will render */}
            <main className="relative z-10 pt-24">
                {children}
            </main>
        </div>
    );
}