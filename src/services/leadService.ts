import type { WebsiteOrganizationInput } from "../types/lead";

const COLLECTION_NAME = "platform_discovery_requests";
const REQUEST_TIMEOUT_MS = 15000;

function requiredEnv(key: string): string {
  const value = import.meta.env[key];

  if (!value) {
    throw new Error(`Falta variable de entorno: ${key}`);
  }

  return value;
}

function stringField(value: unknown) {
  return { stringValue: String(value || "") };
}

function arrayStringField(values: string[]) {
  return {
    arrayValue: {
      values: values.map((value) => ({ stringValue: value })),
    },
  };
}

export async function createWebsiteOrganization(input: WebsiteOrganizationInput) {
  const apiKey = requiredEnv("VITE_FIREBASE_API_KEY");
  const projectId = requiredEnv("VITE_FIREBASE_PROJECT_ID");

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  const now = new Date().toISOString();

  const response = await fetch(
    `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${COLLECTION_NAME}?key=${apiKey}`,
    {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          companyName: stringField(input.companyName),
          contactName: stringField(input.contactName),
          email: stringField(input.email),
          phone: stringField(input.phone),
          industry: stringField(input.industry),
          companySize: stringField(input.companySize),
          mainChallenge: stringField(input.mainChallenge),
          interestAreas: arrayStringField(input.interestAreas),
          notes: stringField(input.notes),
          source: stringField("auranexus.io"),
          status: stringField("NEW"),
          stage: stringField("DISCOVERY"),
          priority: stringField(input.priority),
          recommendedNextStep: stringField(input.recommendedNextStep),
          createdAt: { timestampValue: now },
          updatedAt: { timestampValue: now },
        },
      }),
    },
  ).finally(() => {
    window.clearTimeout(timeoutId);
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Firestore REST error ${response.status}: ${errorText}`);
  }

  const result = await response.json();
  return String(result.name || "");
}