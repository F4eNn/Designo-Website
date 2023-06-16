import React from 'react'
import { HeroCard } from '../../UI/HeroCard'
import { HeroLink } from '../../UI/HeroLink'
import { CircleHomePattern } from '../../Icons/CircleHomePattern'
import heroPhone from '../../../../public/assets/home/desktop/image-hero-phone.png'
import Image from 'next/image'
export const Hero = () => {
	return (
		<HeroCard>
			<div className='relative  z-0 lg:flex lg:items-start lg:justify-between'>
				<div className='text-center w-full max-w-[375px]  mx-auto lg:max-w-[400px] lg:text-left xl:max-w-[500px]  '>
					<h1 className='text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl'>
						Award-winning custom designs and digital branding solutions
					</h1>
					<p className='my-7 text-[.9rem] lg:text-base xl:text-lg '>
						With over 10 years in the industry, we are experienced in creating fully responsive websites, app design,
						and engaging brand experiences. Find out more about our services.
					</p>
					<HeroLink
					textColor='text-black'
						bgColor='bg-white'
						content='learn more'
						url='/about'
					/>
				</div>
				<div className='absolute top-0 left-0 -z-10  md:left-1/3 lg:top-[-150px] lg:left-2/4'>
					<CircleHomePattern />
				</div>
				<div className='relative  w-[550px] left-1/2 -translate-x-1/2 aspect-[.8] mb-[-330px] mt-[-55px] -z-10 xl:w-[700px] lg:left-0 lg:mb-[-325px] lg:translate-x-0 lg:-mt-[129px] xl:-mt-[165px] xl:-mb-[450px] '>
					<Image
						src={heroPhone}
						fill
						alt='phone image'
					/>
				</div>
			</div>
		</HeroCard>
	)
}
