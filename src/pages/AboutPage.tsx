import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const AboutPage = () => {
	return (
		<div>
			<Title>About Page</Title>
			<Paragraph>This is the about page of your React application.</Paragraph>
			<Link to="/home">Home</Link>
		</div>
	);
};

export default AboutPage;
