import {create} from "zustand";
import {immer} from "zustand/middleware/immer"

export type Product = {
	id: string,
	name: string,
	price: number
}
type TCartItem = {
	product: Product,
	product_id: string,
	quantity: number
}

type State = {
	list: TCartItem[]
}
type Actions = {
	add: (props: TCartItem) => void,
	increaseQuantity: (props: {product_id: string, quantity: number}) => void,
	updateQuantity: (props: {product_id: string, quantity: number}) => void,
	delete: (props: {product_id: string}) => void,
	reset: () => void,
}

export const useCartStore = create<State & Actions>()(
	immer((set, getState) => ({
		list: [],
		add: (props) => {
			console.log('here', props)
			const curState = getState()
			const foundItemIndex = curState.list.findIndex(item => item.product_id === props.product_id)

			if(foundItemIndex >= 0){
				curState.increaseQuantity({
					...props
				})
			} else {
				set((state) => {
					state.list.push(props)
				})
			}
		},
		increaseQuantity: (props) => {
			const curState = getState()
			const foundItemIndex = curState.list.findIndex(item => item.product_id === props.product_id)

			set((state) => {
				state.list[foundItemIndex].quantity += props.quantity
			})
		},
		updateQuantity: (props) => {
			const curState = getState()
			const foundItemIndex = curState.list.findIndex(item => item.product_id === props.product_id)

			set((state) => {
				state.list[foundItemIndex].quantity = props.quantity
			})
		},
		delete: (props) => {
			const curState = getState()
			const foundItemIndex = curState.list.findIndex(item => item.product_id === props.product_id)

			set((state) => {
				state.list.splice(foundItemIndex, 1)
			})
		},
		reset: () => {
			set((state) => {
				state.list = []
			})
		},
	}))
)
