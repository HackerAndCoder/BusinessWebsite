import { ExternalLink } from "lucide-react";
import type { Client } from "@/types";

const planLabels: Record<Client["plan"], string> = {
  starter: "Starter",
  growth: "Growth",
  pro: "Pro",
};

const planColors: Record<Client["plan"], string> = {
  starter: "bg-gray-100 text-gray-700",
  growth: "bg-blue-100 text-blue-700",
  pro: "bg-purple-100 text-purple-700",
};

export default function SitePreview({ client }: { client: Client }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Your Website</h2>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${planColors[client.plan]}`}>
          {planLabels[client.plan]} Plan
        </span>
      </div>

      {/* Mock browser chrome */}
      <div className="rounded-xl border border-gray-200 overflow-hidden">
        <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 font-mono truncate">
            {client.siteUrl}
          </div>
        </div>
        <div className="bg-gray-50 h-48 flex items-center justify-center text-gray-300">
          <div className="text-center">
            <div className="text-4xl mb-2">🌐</div>
            <p className="text-sm">Site preview</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          <span className="font-medium text-gray-900">{client.hoursPerMonth}h</span> of updates remaining this month
        </p>
        <a
          href={client.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Open site <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
