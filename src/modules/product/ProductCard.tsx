import { Product } from "@/types/product.type";
import { Typography } from "antd";
import AddToCartButton from "../cart/AddToCartButton";

type Props = {
	product: Product;
};

const ProductCard = ({ product }: Props) => {
	return (
		<div>
			<Typography.Title>{product.name}</Typography.Title>

			<Typography.Text>Price: {product.unitPrice}$</Typography.Text>

			<Typography.Text>Stock:{product.quantity}</Typography.Text>

			<AddToCartButton product={product} />
		</div>
	);
};

export default ProductCard;
