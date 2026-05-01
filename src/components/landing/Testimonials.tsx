import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    business: "Maple Leaf Café",
    quote:
      "Our old website was embarrassing. Now customers actually comment on how nice it looks. We saw a 40% jump in online inquiries within the first month.",
  },
  {
    name: "Dave R.",
    business: "Riverton Plumbing Co.",
    quote:
      "I don't have time to deal with websites. The subscription model means I just say what I need and it gets done. Worth every penny.",
  },
  {
    name: "Priya K.",
    business: "Sunstone Yoga",
    quote:
      "The booking form they added brought in 15 new students in the first two weeks. I had no idea how much a good website would matter.",
  },
  {
    name: "Tom H.",
    business: "Cedar & Co. Barbershop",
    quote:
      "Super easy to work with. I text them when I need something changed and it's usually live by the next day. Can't ask for more than that.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What our clients say
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real results from real local businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition-shadow"
            >
              <Quote size={24} className="text-blue-200 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-400">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
