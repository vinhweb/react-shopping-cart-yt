import {Route, Routes} from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";
import Checkout from "./pages/checkout";

export default function PageRoutes(){
	return (
		<Routes>
			<Route path={'/'} element={<Layout/>}>
				<Route index element={<Home/>} />
				<Route path={'about'} element={<About/>} />
				<Route path={'contact'} element={<Contact/>} />
				<Route path={'dashboard'} element={<Dashboard/>} />
				<Route path={'products'} element={<Products/>} />
				<Route path={'checkout'} element={<Checkout/>} />
				<Route path={'*'} element={<NotFound/>} />
			</Route>
		</Routes>
	)
}
