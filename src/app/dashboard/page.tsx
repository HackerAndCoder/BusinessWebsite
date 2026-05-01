import { redirect } from "next/navigation";
import { auth, signOut } from "@/lib/auth";
import { getClientByEmail, getRequestsByClientId } from "@/lib/data";
import SitePreview from "@/components/dashboard/SitePreview";
import RequestForm from "@/components/dashboard/RequestForm";
import RequestList from "@/components/dashboard/RequestList";
import SubscriptionCard from "@/components/dashboard/SubscriptionCard";
import { LogOut } from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) redirect("/login");

  const client = getClientByEmail(session.user?.email ?? "");

  if (!client) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 max-w-sm w-full text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-3">Account not found</h1>
          <p className="text-gray-500 text-sm mb-6">
            No subscription found for <strong>{session.user?.email}</strong>. Please contact us if you think this is a mistake.
          </p>
          <a
            href="mailto:hello@webcraftstudio.com"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
          >
            Contact support
          </a>
        </div>
      </div>
    );
  }

  const requests = getRequestsByClientId(client.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 tracking-tight">
            WebCraft<span className="text-blue-600">Studio</span>
          </span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {session.user?.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={session.user.image}
                  alt={session.user.name ?? "User"}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <span className="text-sm font-medium text-gray-700 hidden sm:block">
                {session.user?.name}
              </span>
            </div>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button
                type="submit"
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors"
              >
                <LogOut size={15} /> Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {client.businessName}
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Here&apos;s everything about your website and subscription.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            <SitePreview client={client} />
            <RequestForm />
            <RequestList requests={requests} />
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <SubscriptionCard />

            {/* Quick stats */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">At a glance</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total requests</span>
                  <span className="font-medium text-gray-900">{requests.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">In progress</span>
                  <span className="font-medium text-blue-600">
                    {requests.filter((r) => r.status === "in-progress").length}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Completed</span>
                  <span className="font-medium text-green-600">
                    {requests.filter((r) => r.status === "completed").length}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Hours/month</span>
                  <span className="font-medium text-gray-900">{client.hoursPerMonth}h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
