import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "@/lib/auth";
import { getClientByEmail, getRequestsByClientId } from "@/lib/data";
import SitePreview from "@/components/dashboard/SitePreview";
import RequestForm from "@/components/dashboard/RequestForm";
import RequestList from "@/components/dashboard/RequestList";
import SubscriptionCard from "@/components/dashboard/SubscriptionCard";
import { LogOut, User } from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 max-w-sm w-full text-center">
          <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5 text-blue-600">
            <User size={28} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Client Portal</h1>
          <p className="text-gray-500 text-sm mb-7 leading-relaxed">
            Sign in with the Google account associated with your subscription to access your dashboard.
          </p>
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/dashboard" });
            }}
          >
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-3 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    );
  }

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
