import React from 'react'
import { Mobile } from './Mobile'
import { DesktopNav } from './DesktopNav'
import LogoDarkIcon from '../../../public/assets/shared/desktop/logo-dark.png'
import { Wrapper } from '@/components/UI/Wrapper'

export const Nav = () => {
	return (
		<Wrapper>
			<nav className=' font-[500] p-4'>
				<DesktopNav
					logo={LogoDarkIcon}
					color='black'
				/>
				<Mobile />
			</nav>
		</Wrapper>
	)
}
