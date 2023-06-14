import React from 'react'
import { DesignProject } from '../UI/DesignProject'
import { Wrapper } from '../UI/Wrapper'
import { ProjectCard } from '../UI/ProjectCard'
const webProject = [
	{
		title: 'express',
		desc: 'A multi-carrier shipping website for ecommerce businesses',
		image: '/assets/web-design/desktop/image-express.jpg',
	},
	{
		title: 'transfer',
		desc: 'Site for low-cost money transfers and sending money within seconds',
		image: '/assets/web-design/desktop/image-transfer.jpg',
	},
	{
		title: 'photon',
		desc: 'A state-of-the-art music player with high-resolution audio and DSP effects',
		image: '/assets/web-design/desktop/image-photon.jpg',
	},
	{
		title: 'builder',
		desc: 'Connects users with local contractors based on their location',
		image: '/assets/web-design/desktop/image-builder.jpg',
	},
	{
		title: 'blogr',
		desc: 'Connects users with local contractors based on their location',
		image: '/assets/web-design/desktop/image-blogr.jpg',
	},
	{
		title: 'camp',
		desc: 'Get expert training in coding, data, design, and digital marketing',
		image: '/assets/web-design/desktop/image-camp.jpg',
	},
]
export const WebDesign = () => {
	return (
		<Wrapper>
			<ProjectCard>
				{webProject.map((item, index) => (
					<DesignProject
						key={index}
						{...item}
					/>
				))}
			</ProjectCard>
		</Wrapper>
	)
}
