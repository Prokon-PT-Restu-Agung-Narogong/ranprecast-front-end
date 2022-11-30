import homepage from "../views/pages/homepage";
import productspage from "../views/pages/productspage";
import detailProduct from "../views/pages/detailProduct";
import aboutUs from "../views/pages/aboutUs";
import feedback from "../views/pages/feedback";

const routes = {
  "/": homepage,
  "/products": productspage,
  "/product/:id": detailProduct,
  "/aboutus": aboutUs,
  "/feedback" : feedback
};

export default routes;
