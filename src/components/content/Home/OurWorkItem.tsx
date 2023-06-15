import React from 'react'
import { CircleHomePattern } from '../../Icons/CircleHomePattern'

type AboutUsProps = {
	icon: React.ReactNode
	title: string
	desc: string
	circle: React.ReactNode
}

export const OurWorkItem = ({ icon, circle, desc, title }: AboutUsProps) => {
	return (
		<div className='flex flex-col items-center gap-9 mt-20 md:flex-row md:justify-center lg:flex-col lg:gap-10 '>
			<div className='relative'>
				{circle}
				<div className='absolute left-0 top-0'>{icon}</div>
			</div>
			<div className='text-center w-[90%] max-w-[320px] flex flex-col gap-9 md:w-full md:text-left md:gap-4 md:max-w-none lg:max-w-[320px] lg:text-center lg:gap-10'>
				<h2 className='uppercase tracking-[3px] font-[500] text-xl md:text-2xl'>{title}</h2>
				<p className='text-[1.02rem]'>{desc}</p>
			</div>
		</div>
	)
}
