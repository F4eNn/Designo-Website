import React from 'react'

export const Card = ({ children }: { children: React.ReactNode }) => {
	return <div className='md:w-11/12 overflow-hidden md:rounded-2xl md:mx-auto lg:w-full'>{children}</div>
}
