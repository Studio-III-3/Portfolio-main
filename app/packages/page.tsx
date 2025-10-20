"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface PricingPlan {
  title: string;
  price: { monthly: string; yearly: string };
  description: string;
  features: string[];
  popular?: boolean;
  icon: string;
}

const services = [
  "Web Development",
  "UI/UX Design",
  "Graphics Design",
  "Video Editing",
  "Software Development",
  "API Development & Integration",
  "Consultancy & IT Service",
  "Digital Solution & Marketing",
  "Maintenance & Support",
];

// Rough USD to ETB conversion (~1 USD = 55 ETB)
const serviceFeatures: { [key: string]: PricingPlan[] } = {
  "Web Development": [
    { title: "Basic", price: { monthly: "Birr 27,450", yearly: "Birr 274,500" }, description: "Perfect for small businesses and startups", features: ["5 Pages Website","Basic SEO Optimization","Mobile Responsive Design","Contact Form Integration","1 Month Support & Maintenance","Social Media Integration"], icon: "/html.png" },
    { title: "Professional", price: { monthly: "Birr 54,950", yearly: "Birr 549,950" }, description: "Ideal for growing businesses", features: ["10 Pages Website","Advanced SEO Optimization","Mobile Responsive Design","Contact Form & Newsletter","3 Months Support & Maintenance","Social Media Integration","CMS Integration","Basic Analytics Setup"], popular: true, icon: "/react.png" },
    { title: "Enterprise", price: { monthly: "Birr 109,950", yearly: "Birr 1,099,950" }, description: "For large businesses with complex needs", features: ["Unlimited Pages","Premium SEO Optimization","Mobile Responsive Design","Advanced Forms & User Authentication","6 Months Support & Maintenance","Social Media Integration","Advanced CMS Integration","E-commerce Functionality","Custom API Integration","Performance Optimization"], icon: "/next.png" },
  ],
  "UI/UX Design": [
    { title: "Basic", price: { monthly: "Birr 21,950", yearly: "Birr 219,950" }, description: "Wireframes and mockups for small projects", features: ["Wireframes & Mockups","Basic Prototypes","Mobile-first Design","Color & Font Guidelines","1 Month Support & Feedback","User Flow Review"], icon: "/html.png" },
    { title: "Professional", price: { monthly: "Birr 43,950", yearly: "Birr 439,950" }, description: "Interactive prototypes for growing businesses", features: ["High-fidelity Prototypes","Interactive User Flows","Brand Guidelines","Usability Testing","3 Months Support & Iterations","Accessibility Enhancements","Analytics Feedback Integration","Collaboration Tools Setup"], popular: true, icon: "/react.png" },
    { title: "Enterprise", price: { monthly: "Birr 87,950", yearly: "Birr 879,950" }, description: "Complete design system for enterprises", features: ["Complete Design System","Advanced Prototyping & Testing","Cross-platform Design","Stakeholder Feedback Integration","6 Months Dedicated Support","Full Documentation","Performance Optimization","Enterprise Branding"], icon: "/next.png" },
  ],
  "Graphics Design": [
    { title: "Basic", price: { monthly: "Birr 16,450", yearly: "Birr 164,950" }, description: "Logo and social media graphics", features: ["Logo Design","Social Media Graphics","Posters & Flyers","Basic Branding","1 Month Support & Revisions","Simple Illustrations"], icon: "/html.png" },
    { title: "Professional", price: { monthly: "Birr 32,950", yearly: "Birr 329,950" }, description: "Advanced branding and marketing assets", features: ["Advanced Branding","Marketing Materials","Infographics & Illustrations","Print-ready Files","3 Months Support & Revisions","Custom Design Elements","Campaign Graphics","Digital Marketing Assets"], popular: true, icon: "/react.png" },
    { title: "Enterprise", price: { monthly: "Birr 65,950", yearly: "Birr 659,950" }, description: "Corporate identity and large campaigns", features: ["Full Corporate Identity","Packaging Design","Motion Graphics","Large-scale Campaigns","6 Months Support & Revisions","Team Collaboration","Custom Illustrations","Advanced Marketing Assets","Brand Strategy"], icon: "/next.png" },
  ],
  "Video Editing": [
    { title: "Basic", price: { monthly: "Birr 10,950", yearly: "Birr 109,950" }, description: "Basic social media video edits", features: ["Video Cutting & Trimming","Simple Transitions","Subtitles & Captions","Basic Motion Effects","1 Month Support & Revisions","Social Media-ready Videos"], icon: "/html.png" },
    { title: "Professional", price: { monthly: "Birr 21,950", yearly: "Birr 219,950" }, description: "Marketing and professional videos", features: ["Color Grading & Audio Editing","Advanced Transitions","Motion Graphics","Marketing Video Production","3 Months Support & Revisions","Storyboarding Assistance","Multi-format Export","Analytics Tracking"], popular: true, icon: "/react.png" },
    { title: "Enterprise", price: { monthly: "Birr 43,950", yearly: "Birr 439,950" }, description: "Full production and corporate videos", features: ["Full Production Videos","3D & Motion Effects","Corporate Campaign Videos","Advanced Audio & Color Correction","6 Months Support & Revisions","Multi-platform Distribution","Storyboarding & Direction","Enterprise Video Strategy"], icon: "/next.png" },
  ],
  "Software Development": [
    { title: "Basic", price: { monthly: "Birr 27,450", yearly: "Birr 274,950" }, description: "Simple apps with core features", features: ["Simple Web/Desktop App","Database Setup","Core Feature Implementation","1 Month Support & Maintenance","Bug Fixing","Basic Security"], icon: "/html.png" },
    { title: "Professional", price: { monthly: "Birr 54,950", yearly: "Birr 549,950" }, description: "Complex apps with integrations", features: ["Complex Web/Desktop Apps","Custom Workflow Integration","API Integration","3 Months Support & Maintenance","Performance Optimization","User Authentication","Analytics Setup","Collaboration Tools Integration"], popular: true, icon: "/react.png" },
    { title: "Enterprise", price: { monthly: "Birr 109,950", yearly: "Birr 1,099,950" }, description: "Scalable enterprise solutions", features: ["Scalable Enterprise Software","Full Custom Solutions","Advanced Security & Compliance","6 Months Support & Maintenance","Automation Features","Workflow Optimization","Dedicated Support","Advanced Analytics & Monitoring","API & System Integration"], icon: "/next.png" },
  ],
  "API Development & Integration": [
    { title: "Basic", price: { monthly: "Birr 16,450", yearly: "Birr 164,950" }, description: "Simple API endpoints and auth", features: ["Simple API Endpoints","Data Fetching","Authentication Setup","1 Month Support","Basic Documentation","Core System Integration"], icon: "/html.png" },
    { title: "Professional", price: { monthly: "Birr 32,950", yearly: "Birr 329,950" }, description: "Secure APIs with integrations", features: ["Secure API","Third-party Integrations","Error Handling & Logging","3 Months Support","Rate Limiting","Analytics Tracking","Collaboration Setup","Enhanced Performance"], popular: true, icon: "/react.png" },
    { title: "Enterprise", price: { monthly: "Birr 65,950", yearly: "Birr 659,950" }, description: "Enterprise-grade APIs", features: ["Enterprise-grade API","High-volume Data Handling","Full Automation","6 Months Support & Maintenance","SLA Monitoring","Advanced Security","Complete Documentation","System Integration & Optimization","Dedicated API Support"], icon: "/next.png" },
  ],
  "Consultancy & IT Service": [
    { title: "Basic", price: { monthly: "Birr 10,950", yearly: "Birr 109,950" }, description: "IT assessment and guidance", features: ["IT Assessment","Process Review","Basic Recommendations","1 Month Support","Documentation","Tool Guidance"], icon: "/html.png" },
    { title: "Professional", price: { monthly: "Birr 21,950", yearly: "Birr 219,950" }, description: "Strategy planning and optimization", features: ["Strategy Planning","System Optimization","Implementation Assistance","3 Months Support","Team Training","Monitoring & Feedback","Process Improvements","Risk Assessment"], popular: true, icon: "/react.png" },
    { title: "Enterprise", price: { monthly: "Birr 43,950", yearly: "Birr 439,950" }, description: "Enterprise IT consulting and solutions", features: ["Enterprise IT Consulting","Complete Solution Planning","Technology Roadmap","6 Months Support","Risk & Compliance Management","Dedicated Account Support","Full Implementation","Performance Monitoring","SLA-backed Support"], icon: "/next.png" },
  ],
  "Digital Solution & Marketing": [
    { title: "Basic", price: { monthly: "Birr 16,450", yearly: "Birr 164,950" }, description: "Basic digital marketing setup", features: ["Social Media Setup","Basic SEO","Email Campaigns","Analytics Tracking","1 Month Support","Content Scheduling"], icon: "/html.png" },
    { title: "Professional", price: { monthly: "Birr 32,950", yearly: "Birr 329,950" }, description: "Targeted campaigns and SEO", features: ["Targeted Marketing Campaigns","Paid Ads","SEO Optimization","Influencer Marketing","3 Months Support","Conversion Tracking","Analytics Reports","Campaign Optimization"], popular: true, icon: "/react.png" },
    { title: "Enterprise", price: { monthly: "Birr 65,950", yearly: "Birr 659,950" }, description: "Full digital strategy", features: ["Full Digital Strategy","Multi-channel Campaigns","Brand Management","Advanced Analytics","6 Months Support","ROI Tracking","Marketing Automation","Content & Media Strategy","Dedicated Marketing Support"], icon: "/next.png" },
  ],
  "Maintenance & Support": [
    { title: "Basic", price: { monthly: "Birr 10,950", yearly: "Birr 109,950" }, description: "Bug fixes and minor updates", features: ["Bug Fixes","Minor Updates","Security Patches","Performance Monitoring","1 Month Support","Basic Backup"], icon: "/html.png" },
    { title: "Professional", price: { monthly: "Birr 21,950", yearly: "Birr 219,950" }, description: "Full maintenance and updates", features: ["Feature Updates","Full Maintenance","Backup & Recovery","Optimization","3 Months Support","Monitoring & Alerts","Priority Support","Analytics & Reporting"], popular: true, icon: "/react.png" },
    { title: "Enterprise", price: { monthly: "Birr 43,950", yearly: "Birr 439,950" }, description: "24/7 enterprise support", features: ["24/7 Monitoring & Support","SLA-backed Maintenance","Full System Monitoring","Disaster Recovery","6 Months Dedicated Support","Advanced Performance Optimization","Security & Compliance Management","Automation & Alerts","Enterprise-grade Support"], icon: "/next.png" },
  ],
};

// The rest of the code (PackagesPage component) remains unchanged; billing toggle, canvas, animations, and buttons.

export default function PackagesPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen py-20 px-5 md:px-20 text-white relative overflow-hidden">
      {/* Background Canvas */}
      <div className="absolute inset-0 z-[-2]">
        <canvas id="background-canvas" className="w-full h-full"></canvas>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1116] via-[#121420] to-[#0f1116] z-[-1]" />

      {/* Header + Billing Toggle */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
          Our Services Packages
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Choose the perfect package for your business needs with our flexible pricing options.
        </p>

        {/* Billing toggle */}
        <div className="mt-8 flex items-center justify-center space-x-4">
          <span className={`text-lg ${billingCycle === "monthly" ? "text-white" : "text-gray-400"}`}>Monthly</span>
          <button
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            className="relative w-16 h-8 bg-gray-700 rounded-full p-1 transition-colors duration-300"
          >
            <motion.div
              className="w-6 h-6 bg-cyan-500 rounded-full"
              animate={{ x: billingCycle === "monthly" ? 0 : 32 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-lg ${billingCycle === "yearly" ? "text-white" : "text-gray-400"}`}>
            Yearly <span className="text-cyan-500 text-sm ml-1">Save 15%</span>
          </span>
        </div>
      </motion.div>

      {/* Service Sections */}
      {services.map((service, i) => (
        <div key={i} className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            {service}
          </h2>
          <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {serviceFeatures[service].map((plan, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: plan.popular ? "0 20px 40px rgba(8,145,178,0.5)" : "0 20px 40px rgba(0,0,0,0.4)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative bg-gray-800/60 backdrop-blur-lg rounded-3xl overflow-hidden border ${plan.popular ? "border-cyan-500" : "border-gray-700"} shadow-xl transition-all duration-500`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-purple-500 text-xs font-bold px-3 py-1 rounded-bl-lg text-white shadow-lg">
                    PREMIUM
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
                      <Image src={plan.icon} alt={plan.title} width={24} height={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
                  </div>

                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}</span>
                    <span className="text-gray-400 ml-2">/{billingCycle === "monthly" ? "month" : "year"}</span>
                  </div>

                  <p className="text-gray-300 mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                  <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-cyan-500/30"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                  }`}
                  >
                    Get Started
                    </motion.button>
                    </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}

      {/* Footer */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }} className="text-center mt-16">
        <p className="text-gray-400 mb-6">
          Need a custom solution? <a href="/contact" className="text-cyan-500 hover:underline">Contact us</a> for a personalized quote.
        </p>
        <Link href="/" className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold transition-all">
          ← Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
