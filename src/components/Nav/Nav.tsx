import React from 'react'
import { Mobile } from './Mobile'
import { Desktop } from './Desktop'
import { Logo } from '../UI/Logo'

export const Nav = () => {
	return (
		<nav className=' font-[500] flex justify-between items-center p-4'>
			<Logo />
			<Desktop />
			<Mobile />
		</nav>
	)
}
