import React from 'react'
import { Logo } from '../UI/Logo'
import LogoLightIcon from '../../../public/assets/shared/desktop/logo-light.png'
import Link from 'next/link'

const navItems = [
	['our company', '/about'],
	['locations', '/locations'],
	['contact', '/contact'],
]

const FooterMobileNav = () => {
	return (
		<div className='flex flex-col items-center gap-4 md:hidden'>
			<Logo image={LogoLightIcon} />
			<div className='w-full h-[1px] bg-dark-grey '></div>
			<ul className='text-center text-white mb-5'>
				{navItems.map(([title, url], index) => (
					<li
						key={index}
						className='mb-7 uppercase font-light text-xs min-[400px]:text-sm'>
						<Link href={url}>{title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FooterMobileNav
