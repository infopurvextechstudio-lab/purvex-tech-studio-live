<form
  action="https://formspree.io/f/meeybkqp"
  method="POST"
  className="mx-auto mt-16 max-w-5xl rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl lg:p-10"
>
  <div className="mb-10 text-center">

    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
      CAREER APPLICATION
    </span>

    <h2 className="mt-6 text-4xl font-black text-white lg:text-5xl">
      Join Our Talent Pool
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-slate-400">
      We currently don't have any active vacancies. Submit your information and
      we'll contact you when a suitable opportunity becomes available.
    </p>

  </div>

  <div className="grid gap-6 md:grid-cols-2">

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        Full Name *
      </label>

      <input
        type="text"
        name="name"
        required
        placeholder="John Doe"
        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        Email Address *
      </label>

      <input
        type="email"
        name="email"
        required
        placeholder="john@example.com"
        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        Phone Number
      </label>

      <input
        type="tel"
        name="phone"
        placeholder="+92..."
        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        Country
      </label>

      <input
        type="text"
        name="country"
        placeholder="Pakistan"
        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
      />
    </div>

    <div className="md:col-span-2">
      <label className="mb-2 block text-sm font-medium text-slate-300">
        Resume / CV Link
      </label>

      <input
        type="url"
        name="resume"
        placeholder="Google Drive / Dropbox / Portfolio URL"
        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
      />
    </div>

    <div className="md:col-span-2">
      <label className="mb-2 block text-sm font-medium text-slate-300">
        Tell Us About Yourself
      </label>

      <textarea
        name="message"
        rows={6}
        placeholder="Tell us about your experience, skills and why you'd like to work with Purvex Tech Studio..."
        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
      />
    </div>

  </div>

  <button
    type="submit"
    className="mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:from-cyan-400 hover:to-blue-500"
  >
    Submit Application
  </button>

</form>
export default function CareersPage() {
  return (
    <main>
      ...
    </main>
  );
}