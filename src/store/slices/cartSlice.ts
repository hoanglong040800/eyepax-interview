import { Cart, CartItem } from "@/types/cart.type";
import { Product } from "@/types/product.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UpdateQuantityPayload = {
	productId: number;
	type: "increment" | "decrement";
};

type RemoveFromCartPayload = {
	productId: number;
};

const initialState: Cart = {
	cartItems: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Product>) => {
			state.cartItems.push({
				product: action.payload,
				quantity: 1,
			});

			return state;
		},

		updateQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
			const { productId, type } = action.payload;

			const updatedCartItemIndex = state.cartItems.findIndex(
				(item) => item.product.id === productId
			);
			
			const newCartItem = { ...state.cartItems[updatedCartItemIndex] };

			if (!newCartItem) {
				return;
			}

			if (type === "increment") {
				newCartItem.quantity += 1;

				// validate quantity over stock
				if (newCartItem.quantity > newCartItem.product.quantity) {
					return state;
				}
			} else {
				newCartItem.quantity -= 1;
			}

			if (newCartItem.quantity === 0) {
				state.cartItems = state.cartItems.filter((item) => item.product.id !== productId);
			} else {
				state.cartItems[updatedCartItemIndex] = newCartItem;
			}

			return state;
		},

		removeFromCart: (state, action: PayloadAction<RemoveFromCartPayload>) => {
			state.cartItems = state.cartItems.filter(
				(item) => item.product.id !== action.payload.productId
			);

			return state;
		},
	},
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
