const COLLECTION_NAME = "platform_discovery_requests";

function stringField(value) {
  return { stringValue: String(value || "") };
}

function arrayStringField(values) {
  return {
    arrayValue: {
      values: Array.isArray(values)
        ? values.map((value) => ({ stringValue: String(value) }))
        : [],
    },
  };
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const apiKey = process.env.VITE_FIREBASE_API_KEY;
    const projectId = process.env.VITE_FIREBASE_PROJECT_ID;

    if (!apiKey || !projectId) {
      return response.status(500).json({
        error: "Firebase environment variables are missing.",
      });
    }

    const body = request.body || {};

    if (!body.companyName || !body.contactName || !body.email || !body.mainChallenge) {
      return response.status(400).json({
        error: "Missing required fields.",
      });
    }

    const now = new Date().toISOString();

    const firestoreResponse = await fetch(
      `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${COLLECTION_NAME}?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            companyName: stringField(body.companyName),
            contactName: stringField(body.contactName),
            email: stringField(body.email),
            phone: stringField(body.phone),
            industry: stringField(body.industry),
            companySize: stringField(body.companySize),
            mainChallenge: stringField(body.mainChallenge),
            interestAreas: arrayStringField(body.interestAreas),
            notes: stringField(body.notes),
            source: stringField("auranexus.io"),
            status: stringField("NEW"),
            stage: stringField("DISCOVERY"),
            priority: stringField(body.priority),
            recommendedNextStep: stringField(body.recommendedNextStep),
            createdAt: { timestampValue: now },
            updatedAt: { timestampValue: now },
          },
        }),
      }
    );

    if (!firestoreResponse.ok) {
      const errorText = await firestoreResponse.text();
      return response.status(500).json({
        error: "Firestore request failed.",
        detail: errorText,
      });
    }

    const result = await firestoreResponse.json();

    return response.status(200).json({
      ok: true,
      id: result.name || "",
    });
  } catch (error) {
    console.error("AURA DISCOVERY API ERROR", error);

    return response.status(500).json({
      error: "Could not create discovery request.",
    });
  }
}