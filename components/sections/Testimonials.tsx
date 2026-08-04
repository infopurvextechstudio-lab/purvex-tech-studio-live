"use client";

import Link from "next/link";
import {
  Star,
  Quote,
  BadgeCheck,
  ArrowRight,
  Globe2,
} from "lucide-react";

const testimonials = [
  {
    name: "James Carter",
    role: "CEO",
    country: "🇺🇸 USA",
    text: "Purvex Tech Studio delivered an outstanding website with exceptional performance, modern UI and excellent communication throughout the project.",
  },
  {
    name: "Emma Wilson",
    role: "Marketing Director",
    country: "🇬🇧 United Kingdom",
    text: "Professional, responsive and highly skilled. The final website exceeded our expectations and significantly improved our online presence.",
  },
  {
    name: "Ahmed Al Mansoori",
    role: "Business Owner",
    country: "🇦🇪 UAE",
    text: "The team understood our requirements perfectly and delivered a premium website with excellent support and attention to detail.",
  },
  {
    name: "Sarah Khan",
    role: "Founder",
    country: "🇵🇰 Pakistan",
    text: "Highly recommended for businesses looking for modern websites and reliable long-term support.",
  },
  {
    name: "Mohammed Al Qahtani",
    role: "Managing Director",
    country: "🇸🇦 Saudi Arabia",
    text: "Excellent project management, fast delivery and outstanding quality. A trusted technology partner.",
  },
  {
    name: "Noah Williams",
    role: "Startup Founder",
    country: "🇦🇺 Australia",
    text: "Our startup website looks premium and performs perfectly across all devices.",
  },
  {
    name: "Fatima Al Thani",
    role: "Operations Manager",
    country: "🇶🇦 Qatar",
    text: "Professional service with impressive design quality and smooth communication from start to finish.",
  },
  {
    name: "Ali Raza",
    role: "Entrepreneur",
    country: "🇵🇰 Pakistan",
    text: "Amazing experience. Everything was delivered exactly as promised with premium quality.",
  },
  {
    name: "Daniel Brooks",
    role: "Creative Director",
    country: "🇬🇧 United Kingdom",
    text: "Fantastic UI/UX, clean code and excellent responsiveness. Highly recommended.",
  },
  {
    name: "Sophia Miller",
    role: "Business Consultant",
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
    <section className="relative overflow-hidden bg-[#050816] py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#06B6D425,transparent_45%)]" />
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-300">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">
            Trusted Globally
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Businesses around the world trust Purvex Tech Studio for premium
            websites, performance, and long-term digital growth.
          </p>

          {/* Unique Feature */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
              ⭐ 4.3 Average Rating
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-300">
              🌍 Global Clients
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-300">
              ⚡ Fast Delivery
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {visible.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/60 hover:shadow-[0_0_50px_rgba(6,182,212,.20)]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
              </div>

              {/* Top */}
              <div className="relative mb-6 flex items-center justify-between">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <Quote
                  size={30}
                  className="text-cyan-400 opacity-70"
                />
              </div>

              {/* Review */}
              <p className="relative leading-8 text-slate-300">
                "{item.text}"
              </p>

              {/* Bottom */}
              <div className="relative mt-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-xl font-bold text-white shadow-lg shadow-cyan-500/30">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white">
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

                    <div className="mt-2 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                      <Globe2 size={12} />
                      {item.country}
                    </div>
                  </div>
                </div>

                {/* Unique Verified Chip */}
                <div className="hidden rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 md:block">
                  Verified Client
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        {!showAll && (
          <div className="mt-16 flex justify-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_45px_rgba(6,182,212,.35)]"
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