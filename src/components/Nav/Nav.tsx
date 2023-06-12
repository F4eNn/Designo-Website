import React from 'react'
import { Mobile } from './Mobile'
import { Desktop } from './Desktop'

export const Nav = () => {
	return (
		<nav className=' font-[500] p-4'>
			<Desktop />
			<Mobile />
		</nav>
	)
}
