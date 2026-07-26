import {
  Globe,
  Search,
  Bot,
  Workflow,
  ChartNoAxesCombined,
  MonitorSmartphone,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive and high-performance business websites.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Automate workflows using AI agents and smart business systems.",
  },
  {
    icon: Search,
    title: "SEO • AEO • GEO",
    description:
      "Improve visibility across search engines and AI platforms.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "CRM, workflow automation and business process optimization.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Growth Strategy",
    description:
      "Digital strategies focused on conversions and long-term growth.",
  },
  {
    icon: MonitorSmartphone,
    title: "UI / UX Design",
    description:
      "Beautiful interfaces designed for better user experience.",
  },
];

export default function BusinessSolutions() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}
        <div className="mb-12 text-center lg:mb-20">

          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-wide text-blue-300 sm:px-5 sm:text-sm">
            BUSINESS SOLUTIONS
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:mt-6 lg:text-5xl">
            Solutions Built
            <br />
            For Business Growth
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-300 sm:text-lg">
            Everything your business needs to grow online under one roof.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(6,182,212,.18)] lg:rounded-3xl lg:p-8"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-cyan-500/10 p-4 transition-all duration-300 group-hover:bg-cyan-500">
                  <Icon
                    size={30}
                    className="text-cyan-400 transition group-hover:text-white"
                  />
                </div>

                <h3 className="text-xl font-bold text-white lg:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-slate-300">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}