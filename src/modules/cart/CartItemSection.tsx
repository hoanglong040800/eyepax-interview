import { CartItem } from "@/types/cart.type";
import { Typography } from "antd";
import AddToCartButton from "./AddToCartButton";

type Props = {
	cartItem: CartItem;
};

const CartItemSection = ({ cartItem }: Props) => {
	return (
		<div>
			<Typography.Text>{cartItem.product.name}</Typography.Text>
			<Typography.Text>{cartItem.product.unitPrice}</Typography.Text>

			<Typography.Text>{cartItem.quantity}</Typography.Text>

			<AddToCartButton product={cartItem.product} />
		</div>
	);
};

export default CartItemSection;
