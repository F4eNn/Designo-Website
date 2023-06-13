import React from 'react'
import Link from 'next/link'
import { Logo } from '../UI/Logo'
import { StaticImageData } from 'next/image'

const navItems = [
	['our company', '/about'],
	['locations', '/locations'],
	['contact', '/contact'],
]

type DesktopProps = {
	logo: StaticImageData
	color: 'white'| 'black'
}

export const DesktopNav = ({ logo,color }: DesktopProps) => {

	const fontColor = {
		white: 'text-white',
		black: 'text-black'
	}


	return (
		<div className='flex justify-between items-center max-md:hidden '>
			<Logo image={logo} />
			<ul className='flex gap-4 uppercase text-sm font-light'>
				{navItems.map(([title, url], index) => (
					<li
						key={index}
						className={`relative after:content-[""] ${fontColor[color]} after:absolute after:left-0 after:bottom-0 after:w-5  after:h-[1px] after:bg-light-peach hover:after:w-full after:duration-300 xl:text-lg`}>
						<Link href={url}>{title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
