import type { WebsiteOrganizationInput } from "../types/lead";

export async function createWebsiteOrganization(
  input: WebsiteOrganizationInput
) {
  const response = await fetch("/api/discovery-request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.error || "No se pudo registrar la solicitud.");
  }

  return String(result.id || "");
}