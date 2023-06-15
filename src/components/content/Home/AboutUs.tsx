import React from 'react'
import { AboutUsItem } from './AboutUsItem'
import { FriendlyIcon } from '../../Icons/FriendlyIcon'
import { ResourcefulIcon } from '../../Icons/ResourcefulIcon'
import { PassionateIcon } from '../../Icons/PassionateIcon'
import { AboutUsCircle1 } from '../../Icons/AboutUsCircle1'
import { AboutUsCircle2 } from '../../Icons/AboutUsCircle2'
import { AboutUsCircle3 } from '../../Icons/AboutUsCircle3'
import { LeafPattern } from '../../Icons/LeafPatternt'
const howWeWork = [
	{
		icon: <PassionateIcon />,
		circle: <AboutUsCircle1 />,
		title: 'passionate',
		desc: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
	},
	{
		icon: <ResourcefulIcon />,
		circle: <AboutUsCircle2 />,
		title: 'resourceful',
		desc: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
	},
	{
		icon: <FriendlyIcon />,
		circle: <AboutUsCircle3 />,
		title: 'friendly',
		desc: ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
	},
]
export const AboutUs = () => {
	return (
		<div className='relative mb-[325px] md:mb-[400px] lg:mb-[350px]'>
			<div className=' relative mt-40 w-11/12 mx-auto lg:flex lg:justify-between '>
				{howWeWork.map((item, index) => (
					<div key={index}>
						<AboutUsItem {...item} />
					</div>
				))}
			</div>
			<div className=' hidden lg:block absolute -right-[200px] -bottom-2/4 -z-10 rotate-180'>
				<LeafPattern />
			</div>
		</div>
	)
}
