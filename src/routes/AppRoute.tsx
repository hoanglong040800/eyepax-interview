import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "./app.route";

const AppRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				{appRoutes.map(({ path, component: Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoute;
