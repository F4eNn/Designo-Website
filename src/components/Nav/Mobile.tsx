'use client'
import React, { useRef, useState } from 'react'
import { Logo } from '../UI/Logo'
import { BurgerIcon } from '../Icons/BurgerIcon'
import { CloseNavIcon } from '../Icons/CloseNavIcon'
import Link from 'next/link'

export const Mobile = () => {
	const [isActive, setIsActive] = useState(false)
	const overlayRef = useRef(null)
	const showNav = () => {
		setIsActive(prev => !prev)
	}
	const closeNav = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLDivElement
		if (target === overlayRef.current) return setIsActive(false)
	}

	const navItems = [
		['our company', '/about'],
		['locations', '/locations'],
		['contact', '/contact'],
	]
	return (
		<div className=' realtive md:hidden'>
			<button onClick={showNav}>{isActive ? <CloseNavIcon /> : <BurgerIcon />}</button>
			<div
				ref={overlayRef}
				onClick={closeNav}
				className={`fixed w-full right-0  top-[56px] h-[calc(100vh-56px)] transition-transform duration-300 bg-black bg-opacity-60${
					isActive ? 'translate-x-0' : 'translate-x-full'
				}`}>
				<ul className='uppercase text-white bg-black w-full px-5 py-10 font-normal flex flex-col gap-4 text-lg duration-300'>
					{navItems.map(([title, url], index) => (
						<li key={index}>
							<Link href={url}>{title}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
