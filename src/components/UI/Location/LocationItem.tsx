import { LinkItem } from '@/components/content/Home/LinkItem'
import React from 'react'
import { HeroLink } from '../HeroLink'

type LocationProps = {
	icon: React.ReactNode
	circle: React.ReactNode
	title: string
}

export const LocationItem = ({ circle, icon, title }: LocationProps) => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<LinkItem
				flexDirectionMd=''
				alignTextMd='text-center'
				circle={circle}
				icon={icon}
				title={title}
			/>
			<HeroLink
				bgColor='bg-peach'
				textColor='text-white'
				content='see location'
				url='/location'
			/>
		</div>
	)
}
