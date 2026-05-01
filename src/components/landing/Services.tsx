import { Globe, Wrench, Server, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Website Design",
    description:
      "We build a polished, mobile-friendly site from scratch — or redesign the one you already have — tailored to your brand.",
  },
  {
    icon: Wrench,
    title: "Monthly Updates Included",
    description:
      "Every plan includes a set number of hours per month for new features, tweaks, and bug fixes. Just ask and it gets done.",
  },
  {
    icon: Server,
    title: "Hosting Included",
    description:
      "No dealing with domain registrars or servers. We handle all the hosting so your site is always fast and online.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Support",
    description:
      "Something breaks? We fix it. Want to add a new page or update your hours? We handle it — usually within 24 hours.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            One monthly fee covers your website, hosting, and ongoing work. No
            surprise invoices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors"
            >
              <div className="flex-shrink-0 w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <s.icon size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 text-lg">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
