import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getClientByEmail } from "@/lib/data";
import { createPortalSession } from "@/lib/stripe";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const client = getClientByEmail(session.user.email);
  if (!client) {
    return NextResponse.json({ error: "Client not found" }, { status: 404 });
  }

  const returnUrl = new URL("/dashboard", req.url).toString();
  const url = await createPortalSession(client.stripeCustomerId, returnUrl);

  return NextResponse.json({ url });
}
