import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import CartPage from "@/pages/CartPage";

export const appRoutes = [
	{ path: "/", component: HomePage },
	{ path: "/about", component: AboutPage },
	{ path: "/product", component: ProductPage },
	{ path: "/cart", component: CartPage },
];
