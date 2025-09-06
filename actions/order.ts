import { ReturnedOrders } from "@/lib/types/order";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://delicateriamanilabackend.onrender.com/order_api/"
    : "http://localhost:3005/order_api/";

export const GetOrder = async (
  orderId: string | null
): Promise<ReturnedOrders> => {
  try {
    const response = await fetch(`${API_URL}${orderId}`, {
      method: "GET",
    });

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody?.error || response.statusText || "Unknown server error";

      console.error("API fetch failed:", response.status, response.statusText);
      throw new Error(errorMessage);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching checkout session:", error);
    throw error;
  }
};
