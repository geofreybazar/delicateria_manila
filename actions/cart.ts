"use client";

import { AddItem, ReturnedCart } from "@/lib/types/cart";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://delicateriamanilabackend.onrender.com/cart_api/"
    : "http://localhost:3005/cart_api/";

export const AddToCart = async (productId: string): Promise<ReturnedCart> => {
  try {
    const response = await fetch(`${API_URL}${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody?.error || response.statusText || "Unknown server error";

      console.error("API fetch failed:", response.status, response.statusText);
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching checkout session:", error);
    throw error;
  }
};

export const GetCart = async (
  productId: string | null
): Promise<ReturnedCart> => {
  try {
    const response = await fetch(`${API_URL}${productId}`, {
      method: "GET",
    });

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody?.error || response.statusText || "Unknown server error";

      console.error("API fetch failed:", response.status, response.statusText);
      throw new Error(errorMessage);
    }
    const data = response.json();

    return data;
  } catch (error) {
    console.error("Error fetching checkout session:", error);
    throw error;
  }
};

export const AddItemToCart = async (data: AddItem) => {
  try {
    const response = await fetch(`${API_URL}additemtocart`, {
      method: "PUT",
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

    return response.json();
  } catch (error) {
    console.error("Error fetching checkout session:", error);
    throw error;
  }
};

export const AddQuantity = async (data: AddItem) => {
  try {
    const response = await fetch(`${API_URL}addquantity`, {
      method: "PUT",
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

    return response.json();
  } catch (error) {
    console.error("Error fetching checkout session:", error);
    throw error;
  }
};

export const MinusQuantity = async (data: AddItem) => {
  try {
    const response = await fetch(`${API_URL}minusquantity`, {
      method: "PUT",
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

    return response.json();
  } catch (error) {
    console.error("Error fetching checkout session:", error);
    throw error;
  }
};

export const RemoveItem = async (data: AddItem) => {
  try {
    const response = await fetch(`${API_URL}removeitem`, {
      method: "DELETE",
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

    return response.json();
  } catch (error) {
    console.error("Error fetching checkout session:", error);
    throw error;
  }
};
