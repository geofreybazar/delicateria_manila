"use server";

import { ReturnedProducts, Products } from "@/lib/types/products";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://delicateriamanilabackend.onrender.com"
    : "http://localhost:3005";

export async function GetProducts(
  filter: string[] | string,
  page: number
): Promise<ReturnedProducts> {
  try {
    const params = new URLSearchParams();

    if (Array.isArray(filter)) {
      params.set("category", filter.join(","));
    } else if (typeof filter === "string") {
      params.set("category", filter);
    }
    if (!page) {
      page = 1;
    }
    params.set("page", page.toString());
    const url = `${API_URL}/product_api/getshopproducts?${params.toString()}`;

    const data = await fetch(url, {
      method: "GET",
      next: { revalidate: 86400, tags: ["products"] },
    });

    if (!data.ok) {
      console.error("API fetch failed:", data.status, data.statusText);
      return {
        currentPage: 0,
        totalItems: 0,
        totalPages: 0,
        products: [],
      };
    }

    return await data.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      currentPage: 0,
      totalItems: 0,
      totalPages: 0,
      products: [],
    };
  }
}

export async function GetFeaturedProducts(): Promise<Products[]> {
  try {
    const data = await fetch(`${API_URL}/product_api/getshopfeaturedproducts`, {
      method: "GET",
      next: { revalidate: 86400, tags: ["featuredProducts"] },
    });

    if (!data.ok) {
      console.error("API fetch failed:", data.status, data.statusText);
      return [];
    }

    return await data.json();
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
}
