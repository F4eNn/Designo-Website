'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Wrapper } from './Wrapper'
import { HeroDesignPattern } from '../Icons/HeroDesignPattern'

function HeroCardDesign() {
	const pathname = usePathname()

	const checkCurrentPath = () => {
		switch (pathname) {
			case '/projects/web-design':
				return {
					title: 'Web design',
					desc: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
				}
			case '/projects/app-design':
				return {
					title: 'App Design',
					desc: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
				}
			case '/projects/graphic-design':
				return {
					title: 'graphic design',
					desc: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
				}
		}
	}

	const relevantTitle = checkCurrentPath()

	return (
		<Wrapper>
			<div className='bg-peach text-white py-[6.5rem] px-2 text-center relative overflow-hidden md:w-[95%] md:mx-auto md:rounded-2xl z-0  lg:w-full'>
				<div className='absolute -right-[15px] top-0 md:-top-1/2 md:-right-1/4 -z-10 lg:right-[7%]'>
					<HeroDesignPattern />
				</div>
				<div className='flex flex-col gap-7 w-full max-w-[450px] mx-auto '>
					<h1 className='text-3xl capitalize md:text-5xl md:font-[500]'>{relevantTitle?.title}</h1>
					<p className='text-[.95rem] md:text-lg'>{relevantTitle?.desc}</p>
				</div>
			</div>
		</Wrapper>
	)
}

export default HeroCardDesign
