import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getClientByEmail, saveRequest, getRequestsByClientId } from "@/lib/data";
import type { FeatureRequest } from "@/types";
import { randomUUID } from "crypto";

export async function GET() {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const client = getClientByEmail(session.user.email);
  if (!client) {
    return NextResponse.json({ requests: [] });
  }

  return NextResponse.json({ requests: getRequestsByClientId(client.id) });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const client = getClientByEmail(session.user.email);
  if (!client) {
    return NextResponse.json({ error: "Client not found" }, { status: 404 });
  }

  const body = await req.json();
  const { type, title, description } = body as Pick<FeatureRequest, "type" | "title" | "description">;

  if (!type || !title || !description) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const newRequest: FeatureRequest = {
    id: `req_${randomUUID().slice(0, 8)}`,
    clientId: client.id,
    type,
    title,
    description,
    status: "submitted",
    createdAt: new Date().toISOString(),
  };

  saveRequest(newRequest);
  return NextResponse.json({ request: newRequest }, { status: 201 });
}
