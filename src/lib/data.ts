import { readFileSync, writeFileSync } from "fs";
import path from "path";
import type { Client, FeatureRequest } from "@/types";

const clientsPath = path.join(process.cwd(), "src/data/clients.json");
const requestsPath = path.join(process.cwd(), "src/data/requests.json");

export function getClients(): Client[] {
  return JSON.parse(readFileSync(clientsPath, "utf-8"));
}

export function getClientByEmail(email: string): Client | undefined {
  return getClients().find((c) => c.email === email);
}

export function getRequests(): FeatureRequest[] {
  return JSON.parse(readFileSync(requestsPath, "utf-8"));
}

export function getRequestsByClientId(clientId: string): FeatureRequest[] {
  return getRequests().filter((r) => r.clientId === clientId);
}

export function saveRequest(req: FeatureRequest): void {
  const all = getRequests();
  all.unshift(req);
  writeFileSync(requestsPath, JSON.stringify(all, null, 2));
}
