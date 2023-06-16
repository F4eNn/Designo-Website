import React from 'react'
import { LinkItem } from '../../content/Home/LinkItem'
import { CanadaIcon } from '../../Icons/CanadaIcon'
import { AboutUsCircle1 } from '../../Icons/AboutUsCircle1'
import { AboutUsCircle2 } from '../../Icons/AboutUsCircle2'
import { AboutUsCircle3 } from '../../Icons/AboutUsCircle3'
import { AustaliaIcon } from '../../Icons/AustaliaIcon'
import { UnitedKingdomIcon } from '../../Icons/UnitedKingdomIcon'
import { LocationItem } from './LocationItem'
export const Location = () => {
	return (
		<div className='mb-20 lg:flex lg:justify-around lg:mb-40 '>
			<LocationItem
				circle={<AboutUsCircle3 />}
				icon={<CanadaIcon />}
				title='Canada'
			/>
			<LocationItem
				circle={<AboutUsCircle1 />}
				icon={<AustaliaIcon />}
				title='Australia'
			/>
			<LocationItem
				circle={<AboutUsCircle2 />}
				icon={<UnitedKingdomIcon />}
				title='United Kingdom'
			/>
		</div>
	)
}
