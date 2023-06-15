import { ArrowIcon } from '@/components/Icons/ArrowIcon'
import Link from 'next/link'
import React from 'react'

type DesingItemProps = {
	mobile: string
	tablet: string
	desktop: string
	title: string
	url: string
}

export const DesignItem = ({ mobile, desktop, tablet, title, url }: DesingItemProps) => {
	return (
		<Link
			rel='preload'
			as={url}
			href={url}>
			<div
				className={`relative group bg-cover bg-no-repeat hover:scale-[102%]  mt-6 h-[275px] uppercase text-white z-50 w-full rounded-2xl overflow-hidden  ${mobile} ${tablet} ${desktop} lg:h-full transition-transform duration-300`}>
				<div className='group-hover:bg-light-peach  bg-black bg-opacity-70 group-hover:bg-opacity-70 absolute w-full h-full -z-10 transition-colors duration-300'></div>
				<div className='flex flex-col items-center justify-center gap-5 h-full  w-full'>
					<h2 className='text-3xl md:text-4xl'>{title}</h2>
					<p className='flex gap-5 items-center'>
						view projects <ArrowIcon />
					</p>
				</div>
			</div>
		</Link>
	)
}
