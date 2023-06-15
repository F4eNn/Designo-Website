import React from 'react'

type CardProps = {
	children: React.ReactNode
}

export const HeroFooter = ({ children }: CardProps) => {
	return (
		<div className='bg-peach text-white relative mx-auto bottom-[180px] py-14 text-center  rounded-xl  px-7 w-11/12 overflow-hidden z-0 md:bottom-[300px]  lg:flex lg:items-start lg:justify-around lg:bottom-[200px]  lg:w-10/12'>
			{children}
		</div>
	)
}
