import { ExternalLink } from "lucide-react";

const clients = [
  { name: "Maple Leaf Café", industry: "Food & Beverage", location: "Portland, OR" },
  { name: "Riverton Plumbing Co.", industry: "Home Services", location: "Salem, OR" },
  { name: "Sunstone Yoga", industry: "Health & Wellness", location: "Eugene, OR" },
  { name: "Cedar & Co. Barbershop", industry: "Personal Care", location: "Bend, OR" },
  { name: "Harbor View Auto", industry: "Automotive", location: "Astoria, OR" },
  { name: "Blue Pine Landscaping", industry: "Landscaping", location: "Medford, OR" },
];

const industryColor: Record<string, string> = {
  "Food & Beverage": "bg-orange-100 text-orange-700",
  "Home Services": "bg-sky-100 text-sky-700",
  "Health & Wellness": "bg-green-100 text-green-700",
  "Personal Care": "bg-purple-100 text-purple-700",
  Automotive: "bg-gray-100 text-gray-700",
  Landscaping: "bg-lime-100 text-lime-700",
};

export default function Clients() {
  return (
    <section id="clients" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Businesses we&apos;ve helped
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From cafés to contractors — local businesses across Oregon trust us
            to run their online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clients.map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{c.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{c.location}</p>
                <span
                  className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${industryColor[c.industry] ?? "bg-gray-100 text-gray-600"}`}
                >
                  {c.industry}
                </span>
              </div>
              <ExternalLink size={16} className="text-gray-300 flex-shrink-0 mt-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
