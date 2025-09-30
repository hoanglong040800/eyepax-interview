import Counter from "@/modules/counter/Counter";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const HomePage = () => {
	return (
		<div>
			<Title>Home Page</Title>
			<Counter />
			<Link to="/about">About</Link>
		</div>
	);
};

export default HomePage;
