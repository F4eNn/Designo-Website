'use client'
import { Card } from '@/components/UI/Card'
import React from 'react'
import { Form } from './Form'
import { LocationLink } from '@/components/UI/Location/LocationLink'
import { Wrapper } from '@/components/UI/Wrapper'
import { UseWindowResize } from '@/hooks/useWindowResize'
import { ContactHeroPatternDesktop } from '@/components/Icons/ContactHeroPatternDesktop'
import { ContactHeroPatternMobile } from '@/components/Icons/ContactHeroPatternMobile'


export const Contact = () => {
	const { isMobile } = UseWindowResize()

	return (
		<Wrapper>
			<Card>
			
				<div className='bg-peach text-white py-16 px-7 relative md:px-16 lg:flex lg:justify-between lg:gap-20 z-0'>
					<div className='flex flex-col justify-center items-center gap-6 text-center mb-10 md:text-left md:items-start lg:w-[60%]'>
						<h1 className='capitalize text-2xl font-[500] md:text-[2.5rem] xl:text-6xl'>Contact us</h1>
						<p className='text-[.95rem]  font-light md:text-lg xl:text-xl'>
							{
								"Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line."
							}
						</p>
					</div>
					<div className='absolute top-0 -left-[30%] md:-top-1/4 md:-left-[10%] lg:-top-1/3 lg:left-0 -z-20'>
						{!isMobile ? <ContactHeroPatternMobile /> : <ContactHeroPatternDesktop />}
					</div>
					<Form />
				</div>
			</Card>
			<div className='mb-[300px] md:mb-[400px] '>
				<LocationLink />
			</div>
		</Wrapper>
	)
}
