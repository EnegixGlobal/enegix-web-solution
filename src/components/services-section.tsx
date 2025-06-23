"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraText } from "./magicui/aurora-text";
import { RainbowButton } from "./magicui/rainbow-button";
import Link from "next/link";

const services = [
    {
        id: "web-development",
        title: "Website Design and Development",
        description:
            "Websites that load fast, are mobile-friendly, and SEO-ready. Custom-made for your brand.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
            </svg>
        ),
    },
    {
        id: "seo-optimization",
        title: "Search Engine Optimization",
        description:
            "Organic practices that take your website higher on the ranks of Google.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
            </svg>
        ),
    },
    {
        id: "ppc-advertising",
        title: "PPC & Google Ad Management",
        description:
            "Creating and managing campaigns with high conversions and best possible return on investment.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
            </svg>
        ),
    },
    {
        id: "digital-marketing",
        title: "Social Media Marketing",
        description:
            "Maintaining consistent branding and audience engagement across all platforms.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
                />
            </svg>
        ),
    },
    {
        id: "ecommerce-solutions",
        title: "Content Marketing & Blogging",
        description:
            "Sharing to clicks, shares, and search for valuable content.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
            </svg>
        ),
    },
    {
        id: "logo-design",
        title: "Branding & Graphic Design",
        description:
            "A memorable logo, visual identity, and awesomely creative marketing creatives.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                />
            </svg>
        ),
    },
];



const ServiceCard = ({
	service,
	index,
}: {
	service: (typeof services)[0];
	index: number;
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			viewport={{ once: true, margin: "-100px" }}
			className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
		>
			<div className="mb-4 p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 w-fit text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300">
				{service.icon}{" "}
			</div>{" "}
			<h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 font-montserrat tracking-tight">
				{service.title}
			</h3>
			<p className="text-gray-400 font-space-grotesk font-light text-sm leading-relaxed mb-4">
				{service.description}
			</p>
			<Link href={`/services/${service.id}`} className="inline-block">
				<span className="text-cyan-400 font-medium text-sm hover:text-cyan-300 transition-colors flex items-center gap-1">
					Learn More{" "}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="m9 18 6-6-6-6" />
					</svg>
				</span>
			</Link>
		</motion.div>
	);
};

const ServicesSection = () => {
	return (
		<section className="min-h-screen relative w-full py-20" id="services-section">
			{/* Background elements */}
			<div className="absolute inset-0 bg-[#0f172a] z-0" />
			<div className="absolute w-full h-full">
				<div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl" />
				<div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-cyan-400/10 rounded-full filter blur-3xl" />
			</div>

			<div className="w-full relative z-10">
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="text-3xl md:text-4xl font-bold mb-4 font-montserrat tracking-tight heading-text"
					>
						Complete Solutions With  <AuroraText>Digital Marketing</AuroraText> Agency in India
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						className="text-gray-400 text-md md:text-lg max-w-5xl mx-auto font-space-grotesk body-text leading-relaxed"
					>
						Being a <span className="font-extrabold text-green-600">Digital Marketing Agency in India</span> provides you with everything that earns your business the famous digital presence and real results. We tailor the service to your business goals while infusing a creative strategy for its implementation backed by data. With us, search visibility visibility, online branding, and sales are all taken care of digitally. Our Core Services Are
					</motion.p>
				</div>{" "}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((service, index) => (
						<ServiceCard key={service.id} service={service} index={index} />
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					viewport={{ once: true }}
					className="flex justify-center mt-16"
				>
					<Link href="/services">
						<RainbowButton size="lg">View All Services</RainbowButton>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default ServicesSection;
