import type { FeatureRequest } from "@/types";
import { Bug, Sparkles, Clock, Loader2, CheckCircle2 } from "lucide-react";

const statusConfig = {
  submitted: {
    label: "Submitted",
    icon: Clock,
    classes: "bg-gray-100 text-gray-600",
  },
  "in-progress": {
    label: "In Progress",
    icon: Loader2,
    classes: "bg-blue-100 text-blue-700",
  },
  completed: {
    label: "Completed",
    icon: CheckCircle2,
    classes: "bg-green-100 text-green-700",
  },
};

export default function RequestList({ requests }: { requests: FeatureRequest[] }) {
  if (requests.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Requests</h2>
        <p className="text-gray-400 text-sm">No requests yet. Submit one above!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-5">Your Requests</h2>
      <ul className="space-y-3">
        {requests.map((r) => {
          const s = statusConfig[r.status];
          const TypeIcon = r.type === "bugfix" ? Bug : Sparkles;
          return (
            <li key={r.id} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex-shrink-0 mt-0.5 text-gray-400">
                <TypeIcon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 text-sm truncate">{r.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {new Date(r.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
              <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${s.classes}`}>
                <s.icon size={11} />
                {s.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
