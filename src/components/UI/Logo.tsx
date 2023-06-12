import React from 'react'
import { LogoIcon } from '../Icons/LogoIcon'
import Link from 'next/link'

export const Logo = () => {
	return (
		<Link
			aria-label='Home'
			href='/'
			className='flex  items-center gap-3 text-2xl  xl:text-[2.1rem]'>
			<LogoIcon />
			<span className='uppercase tracking-[4px] '>designo</span>
		</Link>
	)
}
