"use server";

import { ClientUser } from "@/lib/types/auth";
import { SignUpFormType } from "@/lib/validation/signupClientUserValidation";
import { revalidatePath } from "next/cache";

type SignUpData = SignUpFormType & {
  provider: string;
};

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://delicateriamanilabackend.onrender.com/clientuser_api/"
    : "http://localhost:3005/clientuser_api/";

export const ClientUserLogin = async (
  email: string,
  provider: string | undefined
) => {
  const data = {
    email,
    provider,
  };
  try {
    const response = await fetch(`${API_URL}login`, {
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

    return response.json();
  } catch (error: any) {
    console.error("Error creating checkout session:", error);

    throw error;
  }
};

export const GetClientUser = async (
  email: string | null | undefined
): Promise<ClientUser> => {
  try {
    const data = await fetch(`${API_URL}${email}`, { method: "GET" });

    if (!data.ok) {
      const errorBody = await data.json();
      const errorMessage =
        errorBody?.error || data.statusText || "Unknown server error";

      console.error("API fetch failed:", data.status, data.statusText);
      throw new Error(errorMessage);
    }

    return await data.json();
  } catch (error: any) {
    console.error("Error creating checkout session:", error);

    throw error;
  }
};

export const SignupClientUser = async (data: SignUpData) => {
  try {
    const response = await fetch(`${API_URL}signup`, {
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

    return response.json();
  } catch (error: any) {
    console.error("Error creating checkout session:", error);

    throw error;
  }
};

export async function UpdateClientUser(_: unknown, formData: FormData) {
  const data = {
    id: formData.get("id"),
    email: formData.get("email"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    address: formData.get("address"),
    city: formData.get("city"),
    phoneNumber: formData.get("phoneNumber"),
  };

  try {
    const response = await fetch(`${API_URL}updateclientuser`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update customer");
    }
    revalidatePath("/myprofile/account");

    return {
      success: true,
      status: 200,
      message: "User updated successfully",
    };
  } catch (error) {
    console.error("Error updating customer:", error);
  }
}
