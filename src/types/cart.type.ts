import { Product } from "./product.type";

export type Cart = {
	cartItems: CartItem[];
};

export type CartItem = {
	product: Product;
	quantity: number;
};
