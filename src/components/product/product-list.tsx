import styles from './products.module.css';
import {useCartStore} from "../../store/cart-store";

export default function ProductList(){
	const cartStore = useCartStore()

	return (
		<div className={styles.list}>
			{Array.from(Array(10).keys()).map((_, index) => {
				const product = {
					id: `product_${index}`,
					name: `Product ${index}`,
					price: (index + 1)*10*1000
				}
				return (
					<div className={styles.item} key={index}>
						<div>
							<h4>{product.name}</h4>
							<p>{product.price}</p>
						</div>
						<div>
							<button onClick={()=>cartStore.add({product: product, product_id: product.id, quantity: 1})}>
								Thêm vào giỏ
							</button>
						</div>
					</div>
				)
			})}
		</div>
	)
}
