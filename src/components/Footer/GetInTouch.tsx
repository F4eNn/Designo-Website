import React from 'react'
import { HeroFooter } from './HeroFooter'
import { HeroLink } from '../UI/HeroLink'
import { HeroFooterPattern } from '../Icons/HeroFooterPattern'
export const GetInTouch = () => {
	return (
		<HeroFooter>
			<div className='absolute left-[40%]  top-[25%] translate-x-[-40%]  translate-y-[-25%] -z-10 '>
				<HeroFooterPattern />
			</div>
			<div className='lg:text-left '>
				<div className='w-full max-w-[300px] mx-auto lg:m-0'>
					<h2 className='font-normal text-3xl  min-[375px]:text-4xl md:text-[2.7rem] md:leading-[3rem]'>
						{"Let's talk about your project"}
					</h2>
				</div>
				<div className='w-full max-w-[450px] mx-auto '>
					<p className='text-md mt-7 font-light mb-10 leading-6 md:leading-8 lg:mt-4 lg:mb-0'>
						Ready to take it to the next level? Contact us today and find out how our expertise can help your business
						grow.
					</p>
				</div>
			</div>
			<HeroLink
				content='get in touch'
				url='/contact'
			/>
		</HeroFooter>
	)
}
