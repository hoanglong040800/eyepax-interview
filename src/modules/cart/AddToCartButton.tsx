import { CartItem } from "@/types/cart.type";
import { useAppSelector } from "@/store/hooks";
import { addToCart, updateQuantity } from "@/store/slices/cartSlice";
import { Product } from "@/types/product.type";
import { useDispatch } from "react-redux";
import { Button, Typography } from "antd";

type Props = {
	product: Product;
};

const AddToCartButton = ({ product }: Props) => {
	const dispatch = useDispatch();

	const currentCartItem = useAppSelector((state) =>
		state.cart.cartItems.find((ci: CartItem) => ci.product.id === product.id)
	);

	const isShowAddToCart = !currentCartItem || currentCartItem.quantity === 0;

	const handleAddToCart = (product: Product) => {
		dispatch(addToCart(product));
	};

	const handleUpdateQuantity = (productId: number, type: "increment" | "decrement") => {
		dispatch(updateQuantity({ productId, type }));
	};

	return (
		<div>
			{isShowAddToCart && <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>}

			{!isShowAddToCart && (
				<div>
					<Button onClick={() => handleUpdateQuantity(product.id, "decrement")}>-</Button>
					<Typography.Text>{currentCartItem.quantity}</Typography.Text>
					<Button onClick={() => handleUpdateQuantity(product.id, "increment")}>+</Button>
				</div>
			)}
		</div>
	);
};

export default AddToCartButton;
