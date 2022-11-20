import homepage from "../views/pages/homepage";
import productspage from "../views/pages/productspage";
import detailProduct from "../views/pages/detailProduct";
import aboutUs from "../views/pages/aboutUs";
import login from "../views/pages/login";

const routes = {
  "/": homepage,
  "/products": productspage,
  "/product/:id": detailProduct,
  "/aboutus": aboutUs,
  "/login": login,
};

export default routes;
