"use client";

import Link from "next/link";
import { Star, Quote, BadgeCheck, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "James Carter",
    role: "CEO",
    company: "Vertex Digital",
    country: "🇺🇸 USA",
    text: "Purvex Tech Studio delivered an outstanding website with exceptional performance, modern UI and excellent communication throughout the project.",
  },
  {
    name: "Emma Wilson",
    role: "Marketing Director",
    company: "Bright Studio",
    country: "🇬🇧 United Kingdom",
    text: "Professional, responsive and highly skilled. The final website exceeded our expectations and significantly improved our online presence.",
  },
  {
    name: "Ahmed Al Mansoori",
    role: "Business Owner",
    company: "Dubai Vision",
    country: "🇦🇪 UAE",
    text: "The team understood our requirements perfectly and delivered a premium website with excellent support and attention to detail.",
  },
  {
    name: "Sarah Khan",
    role: "Founder",
    company: "Nova Solutions",
    country: "🇵🇰 Pakistan",
    text: "Highly recommended for businesses looking for modern websites and reliable long-term support.",
  },
  {
    name: "Mohammed Al Qahtani",
    role: "Managing Director",
    company: "Future Tech",
    country: "🇸🇦 Saudi Arabia",
    text: "Excellent project management, fast delivery and outstanding quality. A trusted technology partner.",
  },
  {
    name: "Noah Williams",
    role: "Startup Founder",
    company: "LaunchX",
    country: "🇦🇺 Australia",
    text: "Our startup website looks premium and performs perfectly across all devices.",
  },
  {
    name: "Fatima Al Thani",
    role: "Operations Manager",
    company: "Qatar Business Hub",
    country: "🇶🇦 Qatar",
    text: "Professional service with impressive design quality and smooth communication from start to finish.",
  },
  {
    name: "Ali Raza",
    role: "Entrepreneur",
    company: "Growth Hub",
    country: "🇵🇰 Pakistan",
    text: "Amazing experience. Everything was delivered exactly as promised with premium quality.",
  },
  {
    name: "Daniel Brooks",
    role: "Creative Director",
    company: "Pixel Media",
    country: "🇬🇧 United Kingdom",
    text: "Fantastic UI/UX, clean code and excellent responsiveness. Highly recommended.",
  },
  {
    name: "Sophia Miller",
    role: "Business Consultant",
    company: "Next Vision",
    country: "🇺🇸 USA",
    text: "Purvex transformed our digital presence with a premium website and outstanding support.",
  },
];

export default function Testimonials({
  showAll = false,
}: {
  showAll?: boolean;
}) {
  const visible = showAll ? testimonials : testimonials.slice(0, 4);

  return (
    <section className="relative overflow-hidden py-24 bg-[#050816]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#06B6D420,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">
            Trusted Worldwide
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-8">
            Businesses across different industries trust Purvex Tech Studio for
            premium websites, branding and digital solutions.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">
                    {visible.map((item) => (

            <div
              key={item.name}
              className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/60 hover:shadow-[0_0_45px_rgba(6,182,212,.18)]"
            >

              <div className="mb-6 flex items-center justify-between">

                <div className="flex gap-1">

                  {[1,2,3,4,5].map((star)=>(

                    <Star
                      key={star}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                  ))}

                </div>

                <Quote
                  size={28}
                  className="text-cyan-400 opacity-70"
                />

              </div>

              <p className="leading-8 text-slate-300">
                "{item.text}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-xl font-bold text-white">

                  {item.name.charAt(0)}

                </div>

                <div>

                  <div className="flex items-center gap-2">

                    <h3 className="text-lg font-bold text-white">
                      {item.name}
                    </h3>

                    <BadgeCheck
                      size={18}
                      className="text-cyan-400"
                    />

                  </div>

                  <p className="text-sm text-slate-400">
                    {item.role}
                  </p>

                  <p className="text-sm text-cyan-300">
                    {item.company}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.country}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {!showAll && (

          <div className="mt-16 flex justify-center">

            <Link
              href="/testimonials"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(6,182,212,.35)]"
            >

              View All Reviews

              <ArrowRight size={20} />

            </Link>

          </div>

        )}

      </div>

    </section>
  );
}