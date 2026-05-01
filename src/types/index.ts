export interface Client {
  id: string;
  email: string;
  businessName: string;
  siteUrl: string;
  plan: "starter" | "growth" | "pro";
  stripeCustomerId: string;
  stripePortalUrl?: string;
  hoursPerMonth: number;
}

export interface FeatureRequest {
  id: string;
  clientId: string;
  type: "feature" | "bugfix";
  title: string;
  description: string;
  status: "submitted" | "in-progress" | "completed";
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  businessName: string;
  quote: string;
  avatar?: string;
}

export interface ShowcaseClient {
  id: string;
  name: string;
  industry: string;
  siteUrl: string;
  logo?: string;
}
