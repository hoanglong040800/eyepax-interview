import CartItemSection from "@/modules/cart/CartItemSection";
import { useAppSelector } from "@/store/hooks";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const CartPage = () => {
	const cart = useAppSelector((state) => state.cart);

	return (
		<div>
			<h1>Cart Page</h1>

			<Link to="/product">Product Page</Link>

			{cart.cartItems.map((cartItem) => (
				<CartItemSection key={cartItem.product.id} cartItem={cartItem} />
			))}

			<Typography.Text>
				Total Price:{" "}
				{cart.cartItems.reduce((acc, item) => acc + item.product.unitPrice * item.quantity, 0)}
			</Typography.Text>
		</div>
	);
};

export default CartPage;
