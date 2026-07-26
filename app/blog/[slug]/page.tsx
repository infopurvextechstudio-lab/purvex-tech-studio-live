import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogs } from "@/data/blogs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Purvex Tech Studio",
    };
  }

  return {
    title: blog.title,
    description: blog.description,

    keywords: blog.keywords,

    alternates: {
      canonical: blog.canonical,
    },

    openGraph: {
      title: blog.title,
      description: blog.description,
      url: blog.canonical,
      type: "article",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  };
}

export default async function BlogPage({
  params,
}: Props) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs
    .filter((b) => b.slug !== blog.slug)
    .slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: blog.image,
    author: {
      "@type": "Organization",
      name: "Purvex Tech Studio",
    },
    publisher: {
      "@type": "Organization",
      name: "Purvex Tech Studio",
    },
    datePublished: blog.date,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main className="min-h-screen bg-[#050816] text-white">
        <section className="mx-auto max-w-5xl px-6 py-20">

          <Link
            href="/blog"
            className="mb-8 inline-flex text-cyan-400 hover:text-cyan-300"
          >
            ← Back to Blogs
          </Link>

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            {blog.category}
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            {blog.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-5 text-gray-400">
            <span>{blog.author}</span>
            <span>{blog.date}</span>
            <span>{blog.readTime}</span>
          </div>

          <div className="relative mt-10 h-[450px] overflow-hidden rounded-3xl">
          
          <div className="mt-10 overflow-hidden rounded-3xl">
  <img
    src={blog.image}
    alt={blog.title}
    className="w-full h-auto object-cover"
  />
</div>
          </div>

          <article className="prose prose-invert mt-12 max-w-none">
                        {blog.content.map((block, index) => {
              switch (block.type) {
                case "heading":
                  return (
                    <h2
                      key={index}
                      className="mt-12 mb-5 text-3xl font-bold text-white"
                    >
                      {block.text}
                    </h2>
                  );

                case "paragraph":
                  return (
                    <p
                      key={index}
                      className="mb-6 text-lg leading-8 text-gray-300"
                    >
                      {block.text}
                    </p>
                  );

                case "list":
                  return (
                    <ul
                      key={index}
                      className="mb-8 ml-6 list-disc space-y-3 text-lg text-gray-300"
                    >
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  );

                default:
                  return null;
              }
            })}
          </article>

          <div className="mt-20 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-10 text-center">
            <h2 className="text-3xl font-bold">
              Ready to Grow Your Business?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-300">
              Let Purvex Tech Studio help you build a modern website,
              improve your SEO, automate your workflows, and generate
              more qualified leads.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
           href="/#contact"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
              >
                Book a Free Consultation
              </Link>

              <Link
             href="/#services"
                className="rounded-xl border border-cyan-500 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <section className="mt-24">
            <h2 className="mb-8 text-3xl font-bold">
              Related Articles
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {relatedBlogs.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-500"
                >
                  <span className="text-sm text-cyan-400">
                    {related.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold transition group-hover:text-cyan-400">
                    {related.title}
                  </h3>

                  <p className="mt-3 text-gray-400">
                    {related.description}
                  </p>

                  <span className="mt-6 inline-block text-cyan-400">
                    Read Article →
                  </span>
                </Link>
              ))}
            </div>
          </section>

        </section>
      </main>
    </>
  );
}