import { GetFeaturedProducts } from "@/actions/products";
import FeaturedProductsList from "./FeaturedProductsList";

const FeaturedProducts = async () => {
  const products = await GetFeaturedProducts();
  const shuffled = products.sort(() => 0.5 - Math.random());
  const feauredProducts = shuffled.slice(0, 8);

  return <FeaturedProductsList feauredProducts={feauredProducts} />;
};

export default FeaturedProducts;
