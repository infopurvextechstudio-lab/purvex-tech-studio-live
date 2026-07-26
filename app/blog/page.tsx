import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Blog | Purvex Tech Studio",
  description:
    "Insights on web development, SEO, automation, branding, AI and business growth.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-400">
            Purvex Insights
          </span>

          <h1 className="mt-4 text-5xl font-bold">
            Latest Articles
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Actionable guides, industry insights and growth strategies to help
            businesses scale with websites, AI automation and digital marketing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="relative h-60">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs text-cyan-400">
                  {blog.category}
                </span>

                <h2 className="mt-5 text-2xl font-bold">
                  {blog.title}
                </h2>

                <p className="mt-4 text-gray-400">
                  {blog.description}
                </p>

                <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="mt-8 inline-flex items-center font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}