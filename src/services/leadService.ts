import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase/config";
import type { WebsiteOrganizationInput } from "../types/lead";

const COLLECTION_NAME = "platform_organizations";

export async function createWebsiteOrganization(input: WebsiteOrganizationInput) {
  const ref = await addDoc(collection(db, COLLECTION_NAME), {
    ...input,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return ref.id;
}