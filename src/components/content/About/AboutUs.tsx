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

	console.log(isMobile)
	return (
		<div className='mb-[325px] md:mb-[400px]  lg:mb-[350px] bg-peach md:w-11/12 overflow-hidden md:rounded-xl text-white  md:mx-auto relative z-0  '>
			<div className='relative h-[300px] md:h-[400px] w-full'>
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
			<div className='px-5 py-20 text-center w-full max-w-[600px] md:mx-auto md:py-16'>
				<h1 className='text-4xl mb-5 md:text-5xl md:mb-8'>About us</h1>
				<p className='text-sm md:text-base'>
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
				<div className='absolute left-1/2 bottom-1/2   '>
					<AboutUsHeroPatternDesktop />
				</div>
			)}
		</div>
	)
}
