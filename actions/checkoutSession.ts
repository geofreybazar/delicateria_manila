// "use server";

import {
  CartState,
  OrderInput,
  ReturnedCheckoutSession,
} from "@/lib/types/checkoutSession";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://delicateriamanilabackend.onrender.com/checkoutsession_api/"
    : "http://localhost:3005/checkoutsession_api/";

export async function CreateCheckoutSession(
  data: CartState
): Promise<ReturnedCheckoutSession> {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody?.error || response.statusText || "Unknown server error";

      console.error("API fetch failed:", response.status, response.statusText);
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error: any) {
    console.error("Error creating checkout session:", error);

    throw error;
  }
}

export const GetCheckoutSession = async (
  id: string
): Promise<ReturnedCheckoutSession> => {
  try {
    const response = await fetch(`${API_URL}${id}`, {
      method: "GET",
      next: { revalidate: 86400, tags: ["checkoutSession"] },
    });

    if (!response.ok) {
      console.error("API fetch failed:", response.status, response.statusText);
      throw new Error("Failed to fetch checkout session");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching checkout session:", error);
    throw error;
  }
};

export const CreatePaymentRequest = async (data: OrderInput) => {
  try {
    const response = await fetch(`${API_URL}paymentrequest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody?.error || response.statusText || "Unknown server error";
      console.log(errorMessage);
      console.error("API fetch failed:", response.status, response.statusText);
      throw new Error(errorMessage);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching checkout session:", error);
    throw error;
  }
};
