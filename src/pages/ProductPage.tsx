import ProductCard from "@/modules/product/ProductCard";
import { useAppSelector } from "@/store/hooks";
import { Product } from "@/types/product.type";
import { Link } from "react-router-dom";

const PRODUCT_DATA: Product[] = [
	{ id: 1, name: "bacon", unitPrice: 10.99, quantity: 10 },
	{ id: 2, name: "eggs", unitPrice: 3.99, quantity: 10 },
	{ id: 3, name: "cheese", unitPrice: 6.99, quantity: 10 },
	{ id: 4, name: "chives", unitPrice: 1.0, quantity: 10 },
	{ id: 5, name: "wine", unitPrice: 11.99, quantity: 10 },
	{ id: 6, name: "brandy", unitPrice: 17.55, quantity: 10 },
	{ id: 7, name: "bananas", unitPrice: 0.69, quantity: 10 },
	{ id: 8, name: "ham", unitPrice: 2.69, quantity: 10 },
	{ id: 9, name: "tomatoes", unitPrice: 3.26, quantity: 10 },
	{ id: 10, name: "tissue", unitPrice: 8.45, quantity: 10 },
];

const ProductPage = () => {
	const cart = useAppSelector((state) => state.cart);


	console.log(cart);

	return (
		<div>
			<h1>Product Page</h1>
			<Link to="/cart">Go to Cart</Link>

			{PRODUCT_DATA.map((product) => (
				<ProductCard
					key={product.name}
					product={product}
				/>
			))}
		</div>
	);
};

export default ProductPage;
