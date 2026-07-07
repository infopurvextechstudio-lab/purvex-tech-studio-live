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
    <section
      id="services"
      className="bg-[#050816] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
            BUSINESS SOLUTIONS
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Solutions Built
            <br />
            For Business Growth
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Everything your business needs to grow online under one roof.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-blue-500/40"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-600/15 p-4 group-hover:bg-blue-600">
                  <Icon className="text-blue-400 group-hover:text-white" size={34} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
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