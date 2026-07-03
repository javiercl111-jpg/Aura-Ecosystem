import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase/config";
import type { WebsiteOrganizationInput } from "../types/lead";

const COLLECTION_NAME = "platform_discovery_requests";

export async function createWebsiteOrganization(
  input: WebsiteOrganizationInput
) {
  const ref = await addDoc(collection(db, COLLECTION_NAME), {
    ...input,
    status: "NEW",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return ref.id;
}