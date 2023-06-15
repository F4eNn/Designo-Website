import React from 'react'
import { DesignProject } from '../UI/DesignProject'
import { Wrapper } from '../UI/Wrapper'
import { ProjectCard } from '../UI/ProjectCard'
import { DesignItem } from '../UI/DesignItem'
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
const appImages = {
	mobile: 'bg-app_design_mobile',
	tablet: 'md:bg-app_design_tablet',
	desktop: 'lg:bg-app_design_desktop',
}

const graphicImages = {
	mobile: 'bg-graphic_design_mobile',
	tablet: 'md:bg-graphic_design_tablet',
	desktop: 'lg:bg-graphic_design_desktop',
}

export const WebDesign = () => {
	return (
		<>
			<ProjectCard>
				{webProject.map((item, index) => (
					<DesignProject
						key={index}
						{...item}
					/>
				))}
			</ProjectCard>
			<div className='w-11/12 mx-auto mt-40  lg:flex lg:w-full lg:gap-7 lg:h-[450px] mb-[325px] md:mb-[400px] lg:mb-[350px]'>
				<div className='w-full'>
					<DesignItem
						{...appImages}
						title='app design'
						url='/projects/app-design'
					/>
				</div>
				<div className='w-full'>
					<DesignItem
						{...graphicImages}
						title='graphic design'
						url='/projects/graphic-design'
					/>
				</div>
			</div>
		</>
	)
}
