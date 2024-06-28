import {Link, Outlet} from "react-router-dom";
import React from "react";
import {useCartStore} from "./store/cart-store";

export default function Layout() {
	const cartStore = useCartStore()
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'/products'}>Products</Link>
					</li>
					<li>
						<Link to={'/about'}>About</Link>
					</li>
					<li>
						<Link to={'/dashboard'}>Dashboard</Link>
					</li>
					<li>
						<Link to={'/contact'}>Contact</Link>
					</li>
					<li>
						<Link to={'/checkout'}>Checkout ({cartStore.list.length})</Link>
					</li>
				</ul>
			</nav>
			<hr/>
			<Outlet/>
		</div>
	)
}
