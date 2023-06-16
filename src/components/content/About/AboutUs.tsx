'use client'
import React, { useEffect, useState } from 'react'
import { AboutUsHeroPatternMobile } from '@/components/Icons/AboutUsHeroPatternMobile'
import { AboutUsHeroPatternDesktop } from '@/components/Icons/AboutUsHeroPatternDesktop'
import { Card } from '@/components/UI/Card'
import { AboutUsSection } from './AboutUsSection'
import { Team } from './Team'
import { Partners } from './Partners'
import { Location } from '@/components/UI/Location/Location'
const aboutItems = {
	srcSetMobile: '/assets/about/mobile/image-about-hero.jpg',
	srcSetTablet: '/assets/about/tablet/image-about-hero.jpg',
	src: '/assets/about/desktop/image-about-hero.jpg',
	title: 'About Us',
	desc: "Founded in 2010, we are a creative agency that produces lasting results for our clients. We'e partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients audiences.",
	bgColor: 'bg-peach',
	textColor: 'text-white',
	desktopFlexRow: 'lg:flex-row-reverse',
	heightMobile: 'h-[300px]',
	heightTablet: 'h-[400px]',
	heightDesktop: 'h-[425px]',
	titleSizeDesktops: 'lg:text-6xl',
}

export const AboutUs = () => {
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

	return (
		<>
			<AboutUsSection {...aboutItems}>
				{!isMobile ? (
					<div className='absolute right-[-20%] top-[275px] -z-20  '>
						<AboutUsHeroPatternMobile />
					</div>
				) : (
					<div className='absolute right-[20%] bottom-[100px] -z-20 lg:bottom-[0] lg:left-[300px] '>
						<AboutUsHeroPatternDesktop />
					</div>
				)}
			</AboutUsSection>
			<Team />
			<Location />
			<div className='mb-[400px]'>
				<Partners />
			</div>
		</>
	)
}
