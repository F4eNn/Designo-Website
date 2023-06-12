import React from 'react'
import Link from 'next/link'
import { LogoDark } from '../UI/LogoDark'

const navItems = [
	['our company', '/about'],
	['locations', '/locations'],
	['contact', '/contact'],
]
export const Desktop = () => {
	return (
		<div className='flex justify-between items-center max-md:hidden '>
			<LogoDark />
			<ul className='flex gap-4 uppercase text-sm font-light'>
				{navItems.map(([title, url], index) => (
					<li
						key={index}
						className='relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-5  after:h-[1px] after:bg-light-peach hover:after:w-full after:duration-300 xl:text-lg'>
						<Link href={url}>{title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
