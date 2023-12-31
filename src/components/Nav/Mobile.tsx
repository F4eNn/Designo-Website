'use client'
import React, { useEffect, useRef, useState } from 'react'
import { BurgerIcon } from '../Icons/BurgerIcon'
import { CloseNavIcon } from '../Icons/CloseNavIcon'
import Link from 'next/link'
import { Logo } from '../UI/Logo'
import { usePathname } from 'next/navigation'
import LogoDarkIcon from '../../../public/assets/shared/desktop/logo-dark.png'

export const Mobile = () => {
	const navItems = [
		['our company', '/about'],
		['locations', '/location'],
		['contact', '/contact'],
	]
	const [isActive, setIsActive] = useState(false)
	const overlayRef = useRef(null)
	const currentPathname = usePathname()

	const showNav = () => {
		const body = document.querySelector('body')!
		setIsActive(prev => !prev)
		console.log(!isActive)
		if (!isActive) {
			body.style.overflow = 'hidden'
		}
	}
	const closeNav = (e: React.MouseEvent<HTMLDivElement>) => {
		const body = document.querySelector('body')!
		const target = e.target as HTMLDivElement
		body.style.overflowY = 'scroll'
		if (target === overlayRef.current) {
			setIsActive(false)
		}
	}
	useEffect(() => {
		setIsActive(false)
	}, [currentPathname])
	return (
		<div className=' realtive md:hidden'>
			<div className='flex items-center justify-between '>
				<Logo image={LogoDarkIcon} />
				<button onClick={showNav}>{isActive ? <CloseNavIcon /> : <BurgerIcon />}</button>
			</div>
			<div
				ref={overlayRef}
				onClick={closeNav}
				className={`fixed w-full right-0  top-[56px] h-[calc(100vh-56px)] transition-transform duration-300 bg-black bg-opacity-60 z-50 ${
					isActive ? 'translate-x-0' : 'translate-x-full'
				}`}>
				<ul className='uppercase text-white bg-black w-full px-5 py-10 font-normal flex flex-col gap-4 text-lg duration-300'>
					{navItems.map(([title, url], index) => (
						<li key={index}>
							<Link
								rel='preload'
								href={url}>
								{title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
