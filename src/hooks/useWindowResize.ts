import { useState, useEffect } from 'react'

export const UseWindowResize = () => {
	const [isMobile, setIsMobile] = useState(false)
	const [currentMedia, setCurrentMedia] = useState(0)
	useEffect(() => {
		const windowMedia = window.matchMedia('(min-width:768px')
		const checkIfResize = () => {
			setCurrentMedia(window.innerWidth)
			setIsMobile(windowMedia.matches)
		}
		const teimoute = setTimeout(() => {
			window.addEventListener('resize', checkIfResize)
			checkIfResize()
		}, 300)
		return () => {
			window.removeEventListener('resize', checkIfResize)
			clearTimeout(teimoute)
		}
	}, [currentMedia])
	return {isMobile}
}
