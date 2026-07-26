"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock3 } from "lucide-react";

const blogs = [
  {
    image: "/images/blog/high-performing-website.png",
    category: "Website Development",
    read: "7 min read",
    title: "Why Every Business Needs a Professional Website in 2026",
    description:
      "Discover why a professional website is the foundation of business growth, customer trust, lead generation and long-term digital success.",
    featured: true,
    href: "/blog/professional-website-2026",
  },
  {
    image: "/images/blog/seo-geo-aeo-guide.png",
    category: "Conversion Optimization",
    read: "6 min read",
    title: "Why 90% of Business Websites Fail to Generate Customers",
    description:
      "Learn the biggest reasons websites fail to convert visitors into customers and how better design, SEO and user experience transform results.",
    featured: false,
    href: "/blog/business-websites-fail",
  },
  {
    image: "/images/blog/ai-automation-2025.png",
    category: "Business Growth",
    read: "8 min read",
    title: "The Digital Growth Blueprint",
    description:
      "A complete roadmap showing how websites, SEO, automation and content marketing generate sustainable business growth.",
    featured: false,
    href: "/blog/digital-growth-blueprint",
  },
];

export default function FeaturedBlogs() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-[#08111f] py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#06B6D420,transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Featured Insights
          </span>

          <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">
            Learn.
            <br />
            Grow.
            <br />
            Stay Ahead.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Explore expert articles covering web development, SEO, AI
            automation and digital growth strategies helping modern businesses
            succeed.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-[0_0_60px_rgba(6,182,212,.18)]"
            >
              {blog.featured && (
                <div className="absolute left-5 top-5 z-20 rounded-full bg-cyan-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Featured
                </div>
              )}

              <div className="relative h-64 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    {blog.category}
                  </span>

                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Clock3 size={15} />
                    {blog.read}
                  </div>
                </div>

                <h3 className="text-2xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {blog.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-400">
                  {blog.description}
                </p>

                <Link
                  href={blog.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition-all duration-300 group-hover:gap-4"
                >
                  Read Article
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            View All Articles
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}