'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AboutUsHeroPatternMobile } from '@/components/Icons/AboutUsHeroPatternMobile'
import { AboutUsHeroPatternDesktop } from '@/components/Icons/AboutUsHeroPatternDesktop'

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
		}, 1500)
		return () => {
			window.removeEventListener('resize', checkIfResize)
			clearTimeout(teimoute)
		}
	}, [currentMedia])

	return (
		<div className='mb-[325px] md:mb-[400px]  lg:mb-[350px] bg-peach md:w-11/12 overflow-hidden md:rounded-xl text-white  md:mx-auto relative z-0 lg:flex lg:flex-row-reverse lg:w-full '>
			<div className='relative h-[300px] md:h-[400px] lg:w-1/3 lg:h-[425px] '>
				<picture>
					<source
						media='(max-width:525px)'
						srcSet='/assets/about/mobile/image-about-hero.jpg'
					/>
					<source
						media='(max-width:1024px)'
						srcSet='/assets/about/tablet/image-about-hero.jpg'
					/>
					<Image
						src='/assets/about/desktop/image-about-hero.jpg'
						alt='peaople are working on laptops'
						fill
						quality={100}
					/>
				</picture>
			</div>
			<div className='px-5 py-20 text-center w-full mx-auto max-w-[600px]  md:py-16 lg:text-left lg:w-[50%] lg:max-w-[700px] lg:my-auto '>
				<h1 className='text-4xl mb-5 md:text-5xl md:mb-8 font-[500] lg:text-6xl xl:text-7xl'>About us</h1>
				<p className='text-sm md:text-base xl:text-lg '>
					{
						"Founded in 2010, we are a creative agency that produces lasting results for our clients. We'e partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients audiences."
					}
				</p>
			</div>
			{!isMobile ? (
				<div className='absolute -left-[240px] top-[150px] -z-20  '>
					<AboutUsHeroPatternMobile />
				</div>
			) : (
				<div className='absolute right-[20%] bottom-[100px] -z-20 lg:bottom-[0] lg:left-[300px] '>
					<AboutUsHeroPatternDesktop />
				</div>
			)}
		</div>
	)
}
