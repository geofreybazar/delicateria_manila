export interface ReturnedCollections {
  id: string;
  name: string;
  description: string;
  image: { url: string; publicId: string; _id: string };
  products: string[];
}
