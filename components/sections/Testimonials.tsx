import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Khan",
    role: "Marketing Manager",
    text: "Purvex transformed our online presence with a modern website and excellent support.",
  },
  {
    name: "Ahmed Ali",
    role: "Business Owner",
    text: "Professional team, fast delivery and outstanding quality. Highly recommended.",
  },
  {
    name: "Usman Tariq",
    role: "Software Engineer",
    text: "My portfolio and LinkedIn profile now look premium and attract recruiters.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#08111f] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-5xl font-black text-white">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-4 flex gap-1">
                {[1,2,3,4,5].map((n)=>(
                  <Star key={n} size={18} className="fill-yellow-400 text-yellow-400"/>
                ))}
              </div>

              <p className="leading-7 text-slate-300">
                "{item.text}"
              </p>

              <h3 className="mt-6 text-xl font-bold text-white">
                {item.name}
              </h3>

              <p className="text-slate-400">
                {item.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}