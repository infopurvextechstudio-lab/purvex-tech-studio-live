import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-[#050816] py-28">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-5xl font-black text-white">
            Let's Build Something Amazing
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <Mail className="text-blue-400"/>
              <span className="text-slate-300">
                infopurvextechstudio@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-blue-400"/>
              <span className="text-slate-300">
                +92 XXX XXXXXXX
              </span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400"/>
              <span className="text-slate-300">
                Karachi, Pakistan
              </span>
            </div>

          </div>

          <form className="space-y-5">

            <input
              placeholder="Your Name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white"
            />

            <input
              placeholder="Email"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white"
            />

            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white"
            />

            <button className="rounded-full bg-blue-600 px-8 py-4 text-white">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}