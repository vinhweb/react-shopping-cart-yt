import './slider.css'
import {useEffect} from "react";
export default function Slider(){
	function initSlider(){
		const TIMEOUT = 1000

		const wrapper = document.querySelector('.wrapper') as HTMLDivElement
		const carousel = document.querySelector('.carousel') as HTMLDivElement
		const firstCard = carousel.querySelector('.card') as HTMLDivElement
		const SCROLL_WIDTH = firstCard.offsetWidth

		let timeoutId = setTimeout(() => carousel.scrollLeft += SCROLL_WIDTH, TIMEOUT)

		function dragEvent(){
			let isDragging = false
			let startX = 0
			let startScrollLeft = 0

			const dragStart = (e: any) => {
				isDragging = true
				carousel.classList.add('dragging')
				startX = e.pageX
				startScrollLeft = carousel.scrollLeft
			}
			const dragging = (e: any) => {
				if(!isDragging) return
				carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
			}
			const dragStop = () => {
				isDragging = false
				carousel.classList.remove('dragging')
			}
			carousel.addEventListener('mousedown', dragStart)
			carousel.addEventListener('mousemove', dragging)
			document.addEventListener('mouseup', dragStop)
		}
		dragEvent()

		function arrowEvent(){
			const arrows = wrapper.querySelectorAll('.caret')

			arrows?.forEach(btn => {
				btn.addEventListener('click', () => {
					if(btn.classList.contains('left')){
						carousel.scrollLeft -= SCROLL_WIDTH
					} else {
						carousel.scrollLeft += SCROLL_WIDTH
					}
				})
			})
		}
		arrowEvent()

		function carouselEvent(){
			// @ts-ignore
			const carouselChildren = [...carousel.children]
			const cardsPerView = Math.round(carousel.offsetWidth / SCROLL_WIDTH)

			carouselChildren.slice(-cardsPerView).reverse().forEach(card => {
				carousel.insertAdjacentHTML('afterbegin', card.outerHTML)
			})
			carouselChildren.slice(0, cardsPerView).forEach(card => {
				carousel.insertAdjacentHTML('beforeend', card.outerHTML)
			})

			const infiniteScroll = () => {
				if(carousel.scrollLeft === 0){
					carousel.classList.add('no-transition')
					carousel.scrollLeft = carousel.scrollWidth - carousel.offsetWidth * 2
					carousel.classList.remove('no-transition')
				} else if(carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth){
					carousel.classList.add('no-transition')
					carousel.scrollLeft = carousel.offsetWidth
					carousel.classList.remove('no-transition')
				}

				clearTimeout(timeoutId)
				if(!wrapper.matches(':hover')) autoScroll()
			}

			const autoScroll = () => {
				timeoutId = setTimeout(() => carousel.scrollLeft += SCROLL_WIDTH, TIMEOUT)
			}
			autoScroll()

			carousel.addEventListener('scroll', infiniteScroll)
			wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId))
			wrapper.addEventListener('mouseleave', autoScroll)
		}
		carouselEvent()
	}

	let run = false
	useEffect(() => {
		if(!run){
			initSlider()
		}
		run = true
	}, []);
	return (
		<div className={'wrapper'}>
			<div className="caret left">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
			</div>
			<div className="caret right">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
			</div>
			<div className="carousel">
				{Array.from(Array(10).keys()).map((_, index) => (
					<div className={'card'} key={index}>
						<img src={`https://picsum.photos/id/${6*(index+1)}/600/400`} alt={`image-${index}`}/>
					</div>
				))}
			</div>
		</div>
	)
}
