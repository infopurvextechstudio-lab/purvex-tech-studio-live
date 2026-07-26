import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6">
      <div className="text-center">
        <h1 className="text-7xl font-black text-cyan-400">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-400">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white transition hover:scale-105"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}