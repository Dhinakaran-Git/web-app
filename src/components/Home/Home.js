import BestSellers from "../BestSellers/BestSellers";
import OurBrands from "../Brands/OurBrands";
import Banner from "../HomeBannner.js/Banner";
import ShopByConcern from "../ShopByConcern/ShopByConcern";


const Home = () => {
  return (
    <>
      <Banner />
      <OurBrands />
      <BestSellers />
      <ShopByConcern />
    </>
  );
};

export default Home;
