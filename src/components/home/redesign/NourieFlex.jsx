import React, { useRef, useId } from 'react';
import { motion, useInView } from 'framer-motion';
import { Settings, Leaf, DollarSign, ShoppingBasket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function NourieFlexIllustration({ className = '', imageSrc }) {
    const id = useId();
    const clipId = `plateClip-${id}`;

    return (
        <svg
            className={className}
            viewBox="0 0 800 520"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="nourieFlexTitle"
        >
            <title id="nourieFlexTitle">Illustration of Nourie Flex: flexible meals for teams</title>
            <rect width="100%" height="100%" rx="18" fill="var(--card-bg, #fff)" />

            <defs>
                <clipPath id={clipId}>
                    {/* clip to the inner plate circle */}
                    <circle cx="160" cy="140" r="80" />
                </clipPath>
            </defs>

            {/* Plate */}
            <g transform="translate(120,100) scale(1.35)">
                <circle cx="160" cy="140" r="110" fill="rgba(255,230,200,0.95)" />
                <circle cx="160" cy="140" r="80" fill="white" />

                {/* If an imageSrc is provided, draw it clipped to the inner plate circle */}
                {imageSrc && (
                    <image
                        href={imageSrc}
                        x="60"
                        y="50"
                        width="220"
                        height="220"
                        preserveAspectRatio="xMidYMid slice"
                        clipPath={`url(#${clipId})`}
                        role="img"
                        aria-hidden="true"
                    />
                )}

                {/* fork */}
                <rect x="40" y="90" width="12" height="70" rx="6" fill="#d1d5db" transform="rotate(-25 46 125)" />
                <rect x="42" y="60" width="6" height="30" rx="2" fill="#9ca3af" transform="rotate(-25 46 75)" />
            </g>

            {/* Cards / benefits */}
            <g transform="translate(420,60) scale(1.1)">
                <rect x="0" y="0" width="270" height="70" rx="12" fill="rgba(255,255,255,0.9)" stroke="rgba(0,0,0,0.03)" />
                <text x="20" y="26" fontSize="14" fill="#374151" fontFamily="Inter, sans-serif" fontWeight="600">Discounted Meals</text>
                <text x="20" y="48" fontSize="12" fill="#6b7280">Control spend, save costs.</text>

                <rect x="0" y="90" width="270" height="70" rx="12" fill="rgba(255,255,255,0.9)" stroke="rgba(0,0,0,0.03)" />
                <text x="20" y="116" fontSize="14" fill="#374151" fontFamily="Inter, sans-serif" fontWeight="600">Easy admin</text>
                <text x="20" y="138" fontSize="12" fill="#6b7280">Set choices and rules in minutes.</text>
            </g>
        </svg>
    );
}

export default function NourieFlex() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="py-24 md:py-32 bg-[var(--background)] relative overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch min-h-[unset]  md:min-h-[520px] lg:min-h-[600px]">
                    {/* Left: content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex flex-col justify-center h-full"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[var(--text-main)] mb-4 tracking-tight">
                            Introducing Nourie <span className="gradient-text">Flex</span>
                        </h2>
                        <p className="text-lg text-[var(--text-muted)] max-w-xl font-light mb-3">
                            A smarter, more flexible employee meal benefit. Give your team access to affordable, quality meals without admin stress or rigid plans.
                        </p>

                        <div className="mt-4">
                            <Link to="https://flex.eatnourie.com" target="_blank" rel="noopener noreferrer" aria-label="Get started with Nourie Flex">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.2 }}
                                    type="button"
                                    className="px-5 py-3 rounded-full bg-[var(--primary-accent)] text-white font-semibold inline-flex space-x-2 items-center"
                                >
                                    <span>Get started with Nourie Flex</span>
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right: illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                        className="relative w-full h-full overflow-visible"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* bigger illustration, removed shadow */}
                            <NourieFlexIllustration className="w-full h-full max-w-none" imageSrc="/images/medium-shot-woman-posing-studio.jpg" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
