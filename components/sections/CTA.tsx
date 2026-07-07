import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">

      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700" />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="rounded-[40px] border border-white/10 bg-white/10 p-14 backdrop-blur-xl">

          <div className="text-center">

            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white">
              Let's Build Together
            </span>

            <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">
              Ready To Grow
              <br />
              Your Business?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Whether you need a modern website, AI automation,
              career branding or complete digital transformation,
              Purvex Tech Studio is ready to help.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

              <button className="flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-slate-900 transition hover:scale-105">

                Start Your Project

                <ArrowRight size={20} />

              </button>

              <button className="flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white/10">

                <PhoneCall size={20} />

                Book Free Consultation

              </button>

            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-200">

              <span>✔ Free Consultation</span>

              <span>✔ Fast Delivery</span>

              <span>✔ Premium Support</span>

              <span>✔ Business Growth Focus</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}