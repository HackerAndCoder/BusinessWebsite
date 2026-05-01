import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <Star size={14} fill="currentColor" />
          Trusted by 30+ local businesses
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
          A website your customers
          <br />
          <span className="text-blue-600">will actually love.</span>
        </h1>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          We build clean, fast, modern websites for local businesses — then keep
          them updated every month. No big upfront cost. Just a simple
          subscription that includes hosting, bug fixes, and new features.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-colors text-lg"
          >
            See plans <ArrowRight size={18} />
          </a>
          <a
            href="#clients"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-colors text-lg"
          >
            View our work
          </a>
        </div>
      </div>
    </section>
  );
}
