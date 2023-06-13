import { ArrowIcon } from '@/components/Icons/ArrowIcon'
import Link from 'next/link'
import { type } from 'os'
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
		<div className='w-full'>
			<Link
				aria-label='app design page'
				href={url}>
				<div
					className={`relative group bg-cover bg-no-repeat bg-center mt-6 h-[275px] uppercase   text-white z-50 w-full   rounded-2xl overflow-hidden ${mobile} md:${tablet} lg:${desktop} lg:h-[500px]  `}>
					<div className='group-hover:bg-light-peach  bg-black bg-opacity-60 group-hover:bg-opacity-70 absolute w-full h-full z-10 transition-colors duration-300  '></div>

					<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-5 w-full lg:inset-0 lg:static '>
						<h2 className='text-3xl md:text-4xl'>{title}</h2>
						<p className='flex gap-5 items-center'>
							view projects <ArrowIcon />
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}
