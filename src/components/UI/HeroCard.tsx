import React from 'react'
type HeroCardProps = {
	children: React.ReactNode
}

export const HeroCard = ({ children }: HeroCardProps) => {
	return (
		<div className='bg-peach w-full  md:w-11/12 md:mx-auto lg:w-full md:rounded-xl text-white overflow-hidden px-6 py-16'>
			{children}
		</div>
	)
}
