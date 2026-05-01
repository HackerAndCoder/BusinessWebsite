import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 149,
    hours: 1,
    description: "Perfect for simple brochure sites that just need to look great.",
    features: [
      "Up to 5 pages",
      "Mobile-friendly design",
      "Hosting included",
      "1 hour/month of updates",
      "Bug fixes included",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Growth",
    price: 299,
    hours: 3,
    description: "For businesses actively growing and wanting regular improvements.",
    features: [
      "Up to 15 pages",
      "Custom design & branding",
      "Hosting included",
      "3 hours/month of updates",
      "Bug fixes included",
      "SEO basics setup",
      "Contact & booking forms",
    ],
    cta: "Most popular",
    highlight: true,
  },
  {
    name: "Pro",
    price: 499,
    hours: 6,
    description: "For businesses that want a powerful online presence with fast turnaround.",
    features: [
      "Unlimited pages",
      "Premium custom design",
      "Hosting included",
      "6 hours/month of updates",
      "Priority bug fixes (24h)",
      "Full SEO setup",
      "E-commerce / booking",
      "Monthly analytics report",
    ],
    cta: "Get started",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            No setup fees. No long-term contracts. Cancel any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col ${
                plan.highlight
                  ? "border-blue-500 bg-blue-600 text-white shadow-xl shadow-blue-200 scale-105"
                  : "border-gray-200 bg-white text-gray-900"
              }`}
            >
              <div className="mb-6">
                <p
                  className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
                    plan.highlight ? "text-blue-200" : "text-blue-600"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-extrabold">${plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>/mo</span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-blue-100" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check
                      size={16}
                      className={`flex-shrink-0 ${plan.highlight ? "text-blue-200" : "text-blue-500"}`}
                    />
                    <span className={plan.highlight ? "text-blue-50" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:hello@webcraftstudio.com"
                className={`text-center font-semibold py-3 rounded-xl transition-colors ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
