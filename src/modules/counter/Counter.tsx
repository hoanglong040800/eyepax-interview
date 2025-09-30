import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { increment, decrement, incrementByAmount, reset } from "@/store/slices/counterSlice";
import { Button, Space, Typography } from "antd";

const { Title } = Typography;

const Counter = () => {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<div>
			<Typography.Title level={3}>Counter: {count}</Typography.Title>

			<Space>
				<Button type="primary" onClick={() => dispatch(increment())}>
					+1
				</Button>

				<Button type="primary" onClick={() => dispatch(decrement())}>
					-1
				</Button>

				<Button onClick={() => dispatch(incrementByAmount(5))}>+5</Button>

				<Button danger onClick={() => dispatch(reset())}>
					Reset
				</Button>
			</Space>
		</div>
	);
};

export default Counter;
