"use server";

import { ReturnedCollections } from "@/lib/types/colletions";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://delicateriamanilabackend.onrender.com"
    : "http://localhost:3005";

export async function GetCollections(): Promise<ReturnedCollections[]> {
  try {
    const data = await fetch(`${API_URL}/collection_api/allcollections`, {
      method: "GET",
      next: { revalidate: 86400, tags: ["collections"] },
    });

    if (!data.ok) {
      console.error("API fetch failed:", data.status, data.statusText);
      return [];
    }

    return data.json();
  } catch (error) {
    console.error("Error fetching collections:", error);
    return [];
  }
}

export async function GetCollectionName(id: string) {
  try {
    const data = await fetch(
      `${API_URL}/collection_api/getcollectioname/${id}`,
      {
        method: "GET",
        next: { revalidate: 86400, tags: ["collectionName"] },
      }
    );

    if (!data.ok) {
      console.error("API fetch failed:", data.status, data.statusText);
      return [];
    }

    return data.json();
  } catch (error) {
    console.error("Error fetching collections name:", error);
    return [];
  }
}
