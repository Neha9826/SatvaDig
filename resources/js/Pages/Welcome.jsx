import MainLayout from '@/Layouts/MainLayout';
import { Link, Head, useForm } from '@inertiajs/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Welcome({ auth, dynamicServices, testimonials, blogs }) {

    // --- FORM LOGIC START ---
    const { data, setData, post, processing, reset } = useForm({
        name: '',
        phone: '',
        city: '',
        service_interest: 'Home Vastu',
    });

    const [successMessage, setSuccessMessage] = useState(null);

    const submit = (e) => {
        e.preventDefault();
        post(route('leads.store'), {
            onSuccess: () => {
                reset();
                setSuccessMessage("Got it! We will call you shortly.");
                setTimeout(() => setSuccessMessage(null), 5000); 
            },
        });
    };
    // --- FORM LOGIC END ---

    // Parallax Hooks
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    // Elements move at different speeds (Parallax)
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yYantra = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <MainLayout auth={auth}>
            <Head title="Satva Dig - Premium Vastu Consultancy" />

            {/* Main Background - Creamy Yellow */}
            <div ref={targetRef} className="min-h-screen bg-satva-cream text-satva-dark font-sans selection:bg-satva-saffron selection:text-white overflow-hidden relative">
                
            {/* --- 3D FLOATING BACKGROUND ELEMENTS --- */}
                {/* --- NEW ELEMENT: Dual Rotating Images (Top Left) --- */}
                <motion.div 
                    style={{ y: yYantra }} // Keeps the parallax movement consistent
                    className="absolute top-[2%] left-[2%] md:left-[5%] w-[300px] h-[300px] md:w-[350px] md:h-[350px] pointer-events-none z-0 flex items-center justify-center"
                >
                    {/* Image 1: Red Chakra (Translucent & Rotating Clockwise) */}
                    <motion.img 
                        src="/images/chakra.png"  // Replace with your file name
                        alt="Red Chakra"
                        className="absolute inset-0 w-full h-full object-contain opacity-10 mix-blend-multiply" // Added mix-blend for better translucent look
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Image 2: Inner Element (Clear & Rotating Counter-Clockwise) */}
                    <motion.img 
                        src="/images/sri_yantra_2.png" // Replace with your file name
                        alt="Inner Element"
                        className="absolute w-[50%] h-[50%] object-contain" // 50% size of the chakra, fully opaque
                        animate={{ rotate: -360 }} // Negative value = Opposite direction
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
                {/* 1. The Sri Yantra (Top Right) - FIXED */}
                <motion.div 
                    style={{ y: yYantra }}
                    // FIX: Full 360 linear rotation (no reverse)
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    // FIX: Reduced size (350px), removed opacity-10 so it's fully clear
                    className="absolute top-[2.5%] right-[5%] w-[350px] h-[350px] pointer-events-none z-0"
                >
                    {/* Fallback */}
                    {/* <div className="w-full h-full border-[20px] border-satva-gold/20 rounded-full flex items-center justify-center">
                        <div className="w-[70%] h-[70%] border-[2px] border-satva-gold/30 rotate-45"> */}
                            <img src="/images/3d_element_1.png" alt="Sri Yantra" className="w-full h-full object-contain opacity-5 mix-blend-multiply" 
                         onError={(e) => e.target.style.display='none'} />
                        {/* </div>
                    </div> */}
                </motion.div>

                {/* 2. The Cosmic Chakra (Bottom Left) */}
                <motion.div 
                    animate={{ y: [0, 30, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] opacity-10 pointer-events-none z-0"
                >
                    <div className="w-full h-full rounded-full border-dashed border-2 border-satva-saffron animate-spin-slow"></div>
                </motion.div>

                {/* --- GLASS NAVIGATION --- */}
                

                {/* --- HERO SECTION --- */}
                <div className="relative overflow-hidden">
                    
                    {/* 1. THE COSMIC BACKGROUND (Rotating Mandala) */}
                    <motion.div 
                        className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] pointer-events-none z-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        style={{ opacity: 1 }} 
                    >
                        <img 
                            src="/images/mandala.png" 
                            alt="Cosmic Background" 
                            className="w-full h-full object-contain" 
                            onError={(e) => e.target.style.display='none'} 
                        />
                    </motion.div>

                    {/* 2. MAIN CONTENT */}
                    <motion.section 
                        style={{ opacity: opacityHero }}
                        // FIX: Changed pt-28 back to pt-20. 
                        // This reduces the blank space but keeps logo safe from navbar.
                        className="relative pt-4 pb-20 lg:pt-0 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center z-10"
                    >
                        {/* LOGO SECTION */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            // Added mt-8 to give just enough breathing room from the nav
                            className="mb-6 relative"
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-satva-gold/40 blur-[50px] rounded-full"></div>
                            
                            <img 
                                src="/images/logo.png" 
                                alt="Satva Dig Logo" 
                                className="relative h-40 md:h-56 w-auto object-contain drop-shadow-xl"
                            />
                        </motion.div>

                        {/* HEADLINE TEXT */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-serif text-4xl md:text-6xl font-bold text-satva-dark mb-4 leading-tight"
                        >
                            Harmonize Your Space <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-satva-saffron via-satva-yellow to-satva-saffron">
                                With Cosmic Energy
                            </span>
                        </motion.h1>
                        
                        {/* SUBTEXT */}
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base md:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed"
                        >
                            We blend ancient Vedic wisdom with modern architectural science. 
                            Experience 100% demolition-free remedies.
                        </motion.p>

                        {/* BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <a href="#contact">
                                <button className="px-8 py-3 rounded-full bg-satva-dark text-white font-bold text-base hover:bg-gray-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Start Transformation
                                </button>
                            </a>
                            <button className="px-8 py-3 rounded-full bg-white/80 border border-white/50 text-satva-dark font-bold text-base hover:bg-white transition backdrop-blur-sm shadow-md flex items-center justify-center gap-2 group">
                                <span className="group-hover:rotate-180 transition-transform duration-500">۞</span>
                                Free Site Analysis
                            </button>
                        </div>
                    </motion.section>

                    {/* --- SERVICES SECTION --- */}
                    <section id="services" className="relative py-20 z-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="font-serif text-4xl text-satva-dark font-bold mb-4">Our Expertise</h2>
                                <div className="w-24 h-1 bg-satva-saffron mx-auto"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { title: "Residential Vastu", icon: "🏠", desc: "Balance energy in bedrooms, kitchens, and entrances for peace and health." },
                                    { title: "Commercial Vastu", icon: "🏢", desc: "Optimize office layouts for financial growth and employee stability." },
                                    { title: "Industrial Vastu", icon: "🏭", desc: "Factory planning to ensure smooth production flow and labor harmony." },
                                ].map((service, index) => (
                                    <motion.div 
                                        whileHover={{ y: -5 }}
                                        className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-satva-gold/20 hover:shadow-xl transition"
                                        key={index}
                                    >
                                        <div className="text-4xl mb-4">{service.icon}</div>
                                        <h3 className="font-serif text-2xl font-bold text-satva-dark mb-3">{service.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* =========================================
                    1. ABOUT SATVA DIG (SEO Overview)
                ========================================= */}
                <section className="py-20 bg-white relative overflow-hidden z-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <h2 className="font-serif text-3xl md:text-5xl text-satva-dark font-bold mb-6">About Satva Dig</h2>
                                <div className="w-24 h-1.5 bg-satva-saffron mb-8"></div>
                                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                    Satva Dig is a premium Vastu consultancy dedicated to harmonizing your living and workspaces with cosmic energies. Led by expert Vastu advisor Asutosh Choudhury, our practice is built on the deep foundation of ancient Vedic sciences combined with modern architectural logic.
                                </p>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    We believe that your physical space dictates your state of mind, health, and financial growth. We specialize in providing <strong>100% demolition-free remedies</strong>, ensuring your property attracts prosperity without requiring structural damage.
                                </p>
                                <Link href="/about" className="inline-flex items-center gap-2 px-8 py-3 bg-satva-dark text-white font-bold rounded-full hover:bg-satva-saffron transition-all shadow-lg hover:shadow-xl">
                                    Read Our Full Story <span className="text-xl">→</span>
                                </Link>
                            </div>
                            <div className="lg:w-1/2 relative">
                                {/* Decorative Background Elements */}
                                <div className="absolute -top-8 -right-8 w-64 h-64 bg-satva-saffron/10 rounded-full blur-3xl z-0"></div>
                                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-satva-gold/10 rounded-full blur-3xl z-0"></div>
                                
                                <div className="relative z-10 w-full aspect-square md:aspect-video bg-satva-cream rounded-[2rem] border border-satva-gold/30 shadow-2xl flex items-center justify-center overflow-hidden">
                                    {/* You can replace this src with an actual photo of you/Asutosh or a Vastu Compass */}
                                    <img src="/images/about-vastu.jpg" alt="Vastu Consultation Expert" className="w-full h-full object-cover opacity-80" onError={(e) => e.target.style.display='none'} />
                                    <span className="absolute text-gray-400 font-semibold tracking-widest uppercase">Add About Image Here</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================
                    2. SERVICES FOR YOU (Dynamic from Admin)
                ========================================= */}
                <section id="services" className="py-24 bg-satva-cream relative z-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-satva-saffron font-bold tracking-widest uppercase text-sm mb-2 block">Choose as per your requirement</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-satva-dark font-bold mb-6">Services For You</h2>
                            <div className="w-24 h-1.5 bg-satva-saffron mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* If Services exist in DB, map them. Otherwise, show placeholders. */}
                            {dynamicServices?.length > 0 ? dynamicServices.map((service) => (
                                <motion.div whileHover={{ y: -8 }} key={service.id} className="bg-white p-8 rounded-2xl border border-satva-gold/20 shadow-sm hover:shadow-2xl transition-all group">
                                    <div className="text-5xl mb-6 bg-satva-cream w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-satva-saffron group-hover:text-white transition-colors">
                                        {service.icon}
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold text-satva-dark mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{service.short_description}</p>
                                    <Link href={`/consultancy#${service.slug}`} className="text-satva-saffron font-bold hover:text-satva-dark transition flex items-center gap-2">
                                        Know More <span>→</span>
                                    </Link>
                                </motion.div>
                            )) : (
                                <div className="col-span-full text-center text-gray-500 py-10 border-2 border-dashed border-gray-300 rounded-2xl">
                                    No services added yet. Log into the Admin Panel to add them.
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* =========================================
                    3. WHY CHOOSE US (Dark Theme like True Vastu)
                ========================================= */}
                <section className="py-24 bg-satva-dark text-white relative z-20 overflow-hidden">
                    {/* Background Mandala overlay */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/images/mandala.png')] bg-center bg-repeat mix-blend-overlay"></div>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">Why Choose Satva Dig?</h2>
                            <div className="w-24 h-1.5 bg-satva-saffron mx-auto"></div>
                            <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
                                We don't just give advice – we provide real, logical, and scientific solutions that bring peace, growth, and success to your premises.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                { title: "Certified Experts", desc: "Highly trained professionals utilizing authentic Vedic scriptures.", num: "1" },
                                { title: "No Demolition", desc: "We fix energy flows using remedies, without breaking your walls.", num: "2" },
                                { title: "Logical & Transparent", desc: "Clear explanations for every remedy we suggest for your property.", num: "3" },
                                { title: "Guaranteed Support", desc: "We stand by you until the cosmic energy completely shifts.", num: "4" }
                            ].map((feature, i) => (
                                <div key={i} className="text-center relative">
                                    <div className="w-16 h-16 mx-auto bg-satva-saffron/20 border-2 border-satva-saffron rounded-full flex items-center justify-center text-satva-saffron font-bold text-2xl mb-6">
                                        {feature.num}
                                    </div>
                                    <h3 className="font-bold text-xl mb-3 text-white">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================
                    4. TESTIMONIALS (Dynamic from Admin)
                ========================================= */}
                {testimonials?.length > 0 && (
                    <section className="py-24 bg-white relative z-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <span className="text-satva-saffron font-bold tracking-widest uppercase text-sm mb-2 block">Trusted by hundreds</span>
                                <h2 className="font-serif text-4xl md:text-5xl text-satva-dark font-bold mb-6">Why Trust Us</h2>
                                <div className="w-24 h-1.5 bg-satva-saffron mx-auto"></div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {testimonials.map(review => (
                                    <motion.div whileHover={{ y: -5 }} key={review.id} className="bg-satva-cream p-8 rounded-2xl border border-satva-gold/20 shadow-sm relative">
                                        <div className="text-satva-saffron text-6xl absolute top-4 right-6 opacity-20 font-serif">"</div>
                                        {/* Star Rating Rendering */}
                                        <div className="flex gap-1 text-satva-saffron mb-4 text-sm">
                                            {[...Array(parseInt(review.rating))].map((e, i) => <span key={i}>★</span>)}
                                        </div>
                                        <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">"{review.message}"</p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-satva-dark rounded-full flex items-center justify-center text-white font-bold text-xl">
                                                {review.client_name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-satva-dark">{review.client_name}</h4>
                                                <span className="text-sm text-gray-500">{review.location}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* =========================================
                    5. CONTACT / LEAD FORM
                ========================================= */}
                {/* Keep your existing Form Section here. You can literally just paste the `<section id="contact">...` block you already have right here. */}

                {/* =========================================
                    6. TRENDING BLOGS (Dynamic from Admin)
                ========================================= */}
                {blogs?.length > 0 && (
                    <section className="py-24 bg-white border-t border-gray-100 relative z-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-end mb-12">
                                <div>
                                    <span className="text-satva-saffron font-bold tracking-widest uppercase text-sm mb-2 block">Reading that makes you shareable</span>
                                    <h2 className="font-serif text-4xl text-satva-dark font-bold mb-4">Trending Blogs</h2>
                                    <div className="w-24 h-1.5 bg-satva-saffron"></div>
                                </div>
                                <Link href="/blogs" className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 border-2 border-satva-dark text-satva-dark font-bold rounded-full hover:bg-satva-dark hover:text-white transition-all">
                                    View All Articles <span>→</span>
                                </Link>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {blogs.map(blog => (
                                    <Link href={`/blog/${blog.slug}`} key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-all group flex flex-col">
                                        <div className="h-56 bg-gray-200 overflow-hidden relative">
                                            {blog.image ? (
                                                <img src={`/storage/${blog.image}`} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-400 bg-satva-cream">No Thumbnail</div>
                                            )}
                                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-satva-saffron">
                                                Vastu Tips
                                            </div>
                                        </div>
                                        <div className="p-8 flex-grow flex flex-col">
                                            <h3 className="font-bold text-xl text-satva-dark mb-3 line-clamp-2 group-hover:text-satva-saffron transition-colors">{blog.title}</h3>
                                            <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">{blog.excerpt}</p>
                                            <span className="text-satva-dark font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                                Read Article <span className="text-satva-saffron">→</span>
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                    {/* --- CONTACT FORM SECTION --- */}
                    <section id="contact" className="py-20 bg-satva-dark text-white relative overflow-hidden z-20">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-satva-saffron/10 rounded-full blur-[100px]"></div>

                        <div className="max-w-4xl mx-auto px-4 relative z-10">
                            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                                <div className="text-center mb-10">
                                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Get a Free Initial Assessment</h2>
                                    <p className="text-gray-300">Fill this details. We will analyze your requirement and call you back.</p>
                                </div>

                                {successMessage && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10 }} 
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300 text-center font-bold"
                                    >
                                        {successMessage}
                                    </motion.div>
                                )}

                                <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="col-span-1">
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                                        <input 
                                            type="text" 
                                            required
                                            className="w-full bg-black/20 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-satva-saffron focus:ring-1 focus:ring-satva-saffron outline-none transition"
                                            placeholder="Enter your name"
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                                        <input 
                                            type="tel" 
                                            required
                                            className="w-full bg-black/20 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-satva-saffron focus:ring-1 focus:ring-satva-saffron outline-none transition"
                                            placeholder="+91..."
                                            value={data.phone}
                                            onChange={e => setData('phone', e.target.value)}
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <label className="block text-sm font-medium text-gray-400 mb-1">City</label>
                                        <input 
                                            type="text" 
                                            className="w-full bg-black/20 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-satva-saffron focus:ring-1 focus:ring-satva-saffron outline-none transition"
                                            value={data.city}
                                            onChange={e => setData('city', e.target.value)}
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Service Interest</label>
                                        <select 
                                            className="w-full bg-black/20 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-satva-saffron focus:ring-1 focus:ring-satva-saffron outline-none transition"
                                            value={data.service_interest}
                                            onChange={e => setData('service_interest', e.target.value)}
                                        >
                                            <option value="Home Vastu" className="text-black">Home Vastu</option>
                                            <option value="Office Vastu" className="text-black">Office Vastu</option>
                                            <option value="Factory Vastu" className="text-black">Factory Vastu</option>
                                            <option value="Other" className="text-black">Other</option>
                                        </select>
                                    </div>

                                    <div className="col-span-1 md:col-span-2 mt-4">
                                        <button 
                                            type="submit" 
                                            disabled={processing}
                                            className="w-full bg-gradient-to-r from-satva-saffron to-satva-yellow text-satva-dark font-bold text-lg py-4 rounded-xl hover:shadow-lg hover:shadow-orange-500/20 transition transform hover:-translate-y-1 disabled:opacity-50"
                                        >
                                            {processing ? 'Sending Request...' : 'Request Call Back'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>

                </div>

                {/* --- STATS STRIP (Floating Glass) --- */}
                <div className="max-w-5xl mx-auto px-4 relative z-20 -mt-10">
                    <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-3xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Consultations", value: "2,000+" },
                            { label: "Success Rate", value: "98%" },
                            { label: "Experience", value: "10+ Yrs" },
                            { label: "Demolition", value: "0%" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="font-serif text-3xl font-bold text-satva-dark mb-1">{stat.value}</div>
                                <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* =========================================
                8. GLOBAL SEO FOOTER
            ========================================= */}
            <footer className="bg-satva-dark text-white pt-16 pb-8 border-t-[6px] border-satva-saffron relative z-30 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        
                        {/* Column 1: Brand */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <img src="/images/logo.png" alt="Satva Dig" className="w-12 h-12 brightness-0 invert" />
                                <span className="font-serif text-2xl font-bold">Satva Dig</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Balancing the five elements of nature to bring health, wealth, and prosperity to your life through expert Vastu Shastra consultation.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-satva-saffron transition">FB</a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-satva-saffron transition">IG</a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-satva-saffron transition">YT</a>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-satva-gold">Quick Links</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                                <li><Link href="/consultancy" className="hover:text-white transition">Consultancy Services</Link></li>
                                <li><Link href="/blogs" className="hover:text-white transition">Vastu Blogs</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Services */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-satva-gold">Our Services</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><Link href="/consultancy#residential" className="hover:text-white transition">Residential Vastu</Link></li>
                                <li><Link href="/consultancy#commercial" className="hover:text-white transition">Commercial Vastu</Link></li>
                                <li><Link href="/consultancy#industrial" className="hover:text-white transition">Industrial Vastu</Link></li>
                                <li><Link href="/consultancy#map" className="hover:text-white transition">Online Map Analysis</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Contact Info */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-satva-gold">Get In Touch</h4>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li className="flex gap-3">
                                    <span className="text-satva-saffron">📍</span>
                                    <span>Dehradun, Uttarakhand, India</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-satva-saffron">📞</span>
                                    <span>+91 XXXXX XXXXX</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-satva-saffron">✉️</span>
                                    <span>info@satvadig.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright Bar */}
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                        <p>© {new Date().getFullYear()} Satva Dig Vastu Consultancy. All Rights Reserved.</p>
                        <div className="flex gap-4">
                            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </footer>

            </div>
        </MainLayout>
    );
}