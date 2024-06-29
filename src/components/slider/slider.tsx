import './slider.css'
import {useEffect} from "react";

export default function Slider(){
	function initSlider(){
		const wrapper = document.querySelector('.wrapper') as HTMLDivElement
		const carousel = document.querySelector('.carousel') as HTMLDivElement
		const firstCard = carousel?.querySelector('.card') as HTMLDivElement
		const firstCardWidth = firstCard.offsetWidth

		let timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500)

		// @ts-ignore
		const carouselChildren = [...carousel.children]
		const cardsPerView = Math.round(carousel.offsetWidth / firstCardWidth)

		function dragEvent(){
			let isDragging = false
			let startX = 0
			let startScrollLeft = 0
			const dragStart = (e: { pageX: any; }) => {
				isDragging = true
				carousel.classList.add('dragging')
				startX = e.pageX
				startScrollLeft = carousel.scrollLeft
			}
			const dragging = (e: { pageX: number; }) => {
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
			const arrowBtns = wrapper.querySelectorAll('.caret')

			arrowBtns?.forEach(btn => {
				btn.addEventListener('click', () => {
					carousel.scrollLeft += btn.classList.contains('left') ? -firstCardWidth : firstCardWidth
				})
			})
		}
		arrowEvent()

		function carouselEvent(){
			carouselChildren.slice(-cardsPerView).reverse().forEach(card => {
				carousel.insertAdjacentHTML('afterbegin', card.outerHTML)
			})
			carouselChildren.slice(0, cardsPerView).forEach(card => {
				carousel.insertAdjacentHTML('beforeend', card.outerHTML)
			})

			carousel.classList.add("no-transition");
			carousel.scrollLeft = carousel.offsetWidth;
			carousel.classList.remove("no-transition");

			const infiniteScroll = () => {
				if(carousel.scrollLeft === 0){
					carousel.classList.add("no-transition");
					carousel.scrollLeft = carousel.scrollWidth - carousel.offsetWidth * 2
					carousel.classList.remove("no-transition");
				} else if (Math.ceil(carousel.scrollLeft) >= carousel.scrollWidth - carousel.offsetWidth){
					carousel.classList.add("no-transition");
					carousel.scrollLeft = carousel.offsetWidth
					carousel.classList.remove("no-transition");
				}

				clearTimeout(timeoutId)
				if(!wrapper.matches(':hover')) autoPlay()
			}
			const autoPlay = () => {
				timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500)
			}
			autoPlay()

			carousel.addEventListener('scroll', infiniteScroll)
			wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId))
			wrapper.addEventListener('mouseleave', autoPlay)
		}
		carouselEvent()
	}

	let run = false
	useEffect(() => {
		if(!run) {
			initSlider()
		}
		run = true
	}, []);
	return (
		<div className={'wrapper'}>
			<div className="caret left">{'<'}</div>
			<div className="carousel">
				{Array.from(Array(10).keys()).map((_, index) => (
					<div className={'card'} key={index}>
						{index}
						<img src={`https://picsum.photos/id/${Math.round(Math.random()*5*index)}/600/400`} alt={`image_${index}`} />
					</div>
				))}
			</div>
			<div className="caret right">{'>'}</div>
		</div>
	)
}
