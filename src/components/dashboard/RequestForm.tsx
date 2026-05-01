"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function RequestForm() {
  const [type, setType] = useState<"feature" | "bugfix">("feature");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, title, description }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setTitle("");
      setDescription("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-5">Submit a Request</h2>

      {status === "success" && (
        <div className="mb-4 p-3 rounded-lg bg-green-50 text-green-700 text-sm">
          Request submitted! We&apos;ll get back to you within 24 hours.
        </div>
      )}
      {status === "error" && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 text-sm">
          Something went wrong. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Type toggle */}
        <div className="flex rounded-lg border border-gray-200 overflow-hidden">
          {(["feature", "bugfix"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                type === t
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-500 hover:bg-gray-50"
              }`}
            >
              {t === "feature" ? "New Feature" : "Bug Fix"}
            </button>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Brief description of what you need"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Details</label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Describe the feature or bug in as much detail as you like..."
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-60"
        >
          <Send size={16} />
          {status === "loading" ? "Sending..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
