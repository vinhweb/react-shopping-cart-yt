import {useCartStore} from "../store/cart-store";
import styles from "../components/checkout/checkout.module.css";

export default function Checkout(){
	const cartStore = useCartStore()
	return (
		<div className={styles.list}>
			{cartStore.list.map((prod, index) => (
				<>
					<div className={styles.item} key={prod.product_id+''+index}>
						<div>
							<h4>{prod.product.name} x {prod.quantity}</h4>
							<p>{(prod.product.price * prod.quantity).toLocaleString('vi-VN')}đ</p>
						</div>
						<div className={styles.actions}>
							<button
								onClick={()=>cartStore.increaseQuantity({product_id: prod.product_id, quantity: -1})}
							>
								-
							</button>
							<input
								type={'number'}
								value={prod.quantity}
								onChange={(e)=> cartStore.updateQuantity({product_id: prod.product_id, quantity: Number(e.target.value)})}
							/>
							<button
								onClick={()=>cartStore.increaseQuantity({product_id: prod.product_id, quantity: 1})}
							>
								+
							</button>
						</div>
						<div>
							<button
								onClick={()=>cartStore.delete({product_id: prod.product_id})}
							>
								Xóa
							</button>
						</div>
					</div>
				</>
			))}
		</div>
	)
}
