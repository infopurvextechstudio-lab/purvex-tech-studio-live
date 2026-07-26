"use client";

import {
  Check,
  ArrowRight,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import { useCurrency } from "@/context/CurrencyContext";
import { formatPrice } from "@/lib/currency";

type Plan = {
  name: string;
  price: number;
  popular: boolean;
  delivery: string;
  support: string;
  button: string;
  features: string[];
};

const businessPlans: Plan[] = [
  {
    name: "Starter",
    price: 25000,
    popular: false,
    delivery: "7 Days",
    support: "30 Days Support",
    button: "Get Started",
    features: [
      "Business Website",
      "Responsive Design",
      "Contact Form",
      "WhatsApp Integration",
      "Basic SEO",
      "Google Map",
      "SSL Security",
      "Speed Optimization",
    ],
  },
  {
    name: "Growth",
    price: 55000,
    popular: true,
    delivery: "10 Days",
    support: "60 Days Support",
    button: "Start Project",
    features: [
      "Everything in Starter",
      "Premium UI/UX",
      "Advanced SEO",
      "Google Analytics",
      "Admin Dashboard",
      "Blog System",
      "Priority Support",
      "Performance Optimization",
    ],
  },
  {
    name: "Enterprise",
    price: 120000,
    popular: false,
    delivery: "Custom Timeline",
    support: "Priority Support",
    button: "Book Consultation",
    features: [
      "Custom Web Application",
      "CRM Integration",
      "Dashboard",
      "API Integration",
      "AI Automation",
      "Booking System",
      "Enterprise Security",
      "Dedicated Support",
    ],
  },
];

const careerPlans: Plan[] = [
  {
    name: "Student",
    price: 3500,
    popular: false,
    delivery: "2 Days",
    support: "Email Support",
    button: "Order Now",
    features: [
      "ATS Resume",
      "Cover Letter",
      "LinkedIn Basics",
      "PDF + Word File",
    ],
  },
  {
    name: "Professional",
    price: 8500,
    popular: true,
    delivery: "3 Days",
    support: "Priority Support",
    button: "Start Now",
    features: [
      "Executive Resume",
      "ATS Resume",
      "LinkedIn Optimization",
      "Portfolio Website",
      "Interview Guide",
      "Cover Letter",
    ],
  },
  {
    name: "Executive",
    price: 18000,
    popular: false,
    delivery: "5 Days",
    support: "Premium Support",
    button: "Contact Us",
    features: [
      "Executive Resume",
      "Portfolio Website",
      "LinkedIn Branding",
      "Presentation Design",
      "Career Strategy",
      "Personal Branding",
    ],
  },
];

function PricingCard({
  plan,
}: {
  plan: Plan;
}) {
  const { currency } = useCurrency();

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_50px_rgba(37,99,235,.25)]
      ${
        plan.popular
          ? "border-cyan-500 bg-cyan-500/10"
          : "border-white/10 bg-white/5"
      }`}
    >
      {plan.popular && (
        <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-bold text-white">
          ⭐ MOST POPULAR
        </div>
      )}

      <div className="p-8">

        <h3 className="text-3xl font-black text-white">
          {plan.name}
        </h3>

        <p className="mt-5 text-xs uppercase tracking-[0.35em] text-slate-400">
          Starting From
        </p>

        <h2 className="mt-3 text-4xl font-black text-cyan-400">
          {formatPrice(plan.price, currency)}
        </h2>

        <div className="mt-8 space-y-4">

          <div className="flex items-center gap-3 text-slate-300">
            <Clock3 className="text-cyan-400" size={18} />
            {plan.delivery}
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <ShieldCheck
              className="text-cyan-400"
              size={18}
            />
            {plan.support}
          </div>

        </div>

        <div className="my-8 h-px bg-white/10" />

        <div className="space-y-4">

          {plan.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-slate-300"
            >
              <Check
                size={18}
                className="text-green-400"
              />

              {feature}
            </div>
          ))}

        </div>

        <button
          className={`mt-10 flex w-full items-center justify-center gap-3 rounded-full py-4 font-bold transition-all
          ${
            plan.popular
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105"
              : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
          }`}
        >
          {plan.button}

          <ArrowRight size={18} />
        </button>

      </div>
    </div>
  );
}
const addons = [
  "Hosting",
  "Domain Setup",
  "Business Email",
  "Website Maintenance",
  "SEO",
  "Google Business",
  "AI Chatbot",
  "WhatsApp Automation",
  "Analytics",
  "Speed Optimization",
  "Logo Design",
  "Content Writing",
];

export default function Pricing() {
  return (
    
    <section
  id="pricing"
  className="relative overflow-hidden py-20 lg:py-32"
>
      
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#06B6D422,transparent_40%),radial-gradient(circle_at_bottom,#2563EB22,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            Solutions & Pricing
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:mt-8 lg:text-6xl">
            Flexible Pricing
            <br />
            For Every Business
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-400 sm:text-lg">
            Transparent pricing, premium quality,
            scalable solutions and long-term support.
          </p>

        </div>

        {/* Trust Strip */}

        <div className="mt-12 grid grid-cols-2 gap-4 lg:mt-20 lg:grid-cols-4 lg:gap-6">

          {[
            ["50+","Projects"],
            ["12+","Clients"],
            ["98%","Satisfaction"],
            ["24/7","Support"],
          ].map(([value,label]) => (

            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 lg:p-8 text-center backdrop-blur-xl"
            >
              <h3 className="text-4xl font-black text-cyan-400">
                {value}
              </h3>

              <p className="mt-2 text-slate-400">
                {label}
              </p>

            </div>

          ))}

        </div>

        {/* Business */}

        <div className="mt-28">

          <h3 className="mb-12 text-4xl font-black text-white">
            🚀 Business Growth
          </h3>

          <div className="grid gap-8 lg:grid-cols-3">

            {businessPlans.map((plan)=>(
              <PricingCard
                key={plan.name}
                plan={plan}
              />
            ))}

          </div>

        </div>

        {/* Career */}

        <div className="mt-28">

          <h3 className="mb-12 text-4xl font-black text-white">
            💼 Career Excellence
          </h3>

          <div className="grid gap-8 lg:grid-cols-3">

            {careerPlans.map((plan)=>(
              <PricingCard
                key={plan.name}
                plan={plan}
              />
            ))}

          </div>

        </div>
                {/* Add-ons */}

        <div className="mt-28">

          <h3 className="mb-10 text-center text-4xl font-black text-white">
            Powerful Add-ons
          </h3>

          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Upgrade your project anytime with premium services.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            {addons.map((item) => (

              <span
                key={item}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-300 transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-white"
              >
                {item}
              </span>

            ))}

          </div>

        </div>

        {/* Enterprise CTA */}

        <div className="mt-28 overflow-hidden rounded-[36px] border border-cyan-500/20 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-indigo-600/10 p-12 backdrop-blur-xl">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                Enterprise Solutions
              </span>

              <h2 className="mt-6 text-5xl font-black text-white">
                Need Something
                <br />
                Completely Custom?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                We build custom SaaS platforms,
                AI automation, CRM systems,
                dashboards, ERP software,
                enterprise websites and
                business management solutions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "AI Automation",
                  "CRM",
                  "ERP",
                  "Dashboard",
                  "API",
                  "Cloud",
                ].map((tag) => (

                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <h3 className="text-3xl font-black text-white">
                Let's Discuss
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Book a free consultation and
                receive a custom proposal
                based on your exact business requirements.
              </p>

              <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-white transition hover:scale-105">

                Book Free Consultation

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

        </div>
                {/* Bottom CTA */}

        <div className="mt-28 text-center">

          <h2 className="text-5xl font-black text-white">
            Ready To Grow
            <br />
            Your Business?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Whether you're launching a startup, scaling your company,
            or building your professional brand, Purvex Tech Studio
            delivers premium digital solutions designed for growth.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <button className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 font-bold text-white transition-all duration-300 hover:scale-105">

              Start Your Project

              <ArrowRight size={20} />

            </button>

            <button className="rounded-full border border-white/10 bg-white/5 px-10 py-4 font-bold text-white transition-all duration-300 hover:bg-white/10">

              Contact Sales

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}