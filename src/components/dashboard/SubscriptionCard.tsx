"use client";

import { useState } from "react";
import { CreditCard, Loader2 } from "lucide-react";

export default function SubscriptionCard() {
  const [loading, setLoading] = useState(false);

  async function openPortal() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe-portal", { method: "POST" });
      const { url } = await res.json();
      window.location.href = url;
    } catch {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
          <CreditCard size={20} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Subscription</h2>
          <p className="text-xs text-gray-400">Billing & payment details</p>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-5 leading-relaxed">
        View invoices, update your payment method, or manage your subscription
        through the secure billing portal.
      </p>

      <button
        onClick={openPortal}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-60"
      >
        {loading ? <Loader2 size={16} className="animate-spin" /> : <CreditCard size={16} />}
        {loading ? "Opening portal..." : "Manage billing"}
      </button>
    </div>
  );
}
