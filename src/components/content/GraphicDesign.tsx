import React from 'react'
import { DesignProject } from '../UI/DesignProject'
import { ProjectCard } from '../UI/ProjectCard'
import { DesignItem } from '../UI/DesignItem'
const graphicProjects = [
	{
		title: 'tim brown',
		desc: "A book cover designed for Tim Brown's new release, 'Change'",
		image: '/assets/graphic-design/desktop/image-change.jpg',
	},
	{
		title: 'Boxed Water',
		desc: 'A simple packaging concept made for Boxed Water',
		image: '/assets/graphic-design/desktop/image-boxed-water.jpg',
	},
	{
		title: 'Science',
		desc: 'A poster made in collaboration with the Federal Art Project',
		image: '/assets/graphic-design/desktop/image-science.jpg',
	},
]
const appImages = {
	mobile: 'bg-app_design_mobile',
	tablet: 'md:bg-app_design_tablet',
	desktop: 'lg:bg-app_design_desktop',
}
const webImages = {
	mobile: 'bg-web_design_mobile',
	tablet: 'md:bg-web_design_tablet',
	desktop: 'lg:bg-web_design_desktop',
}

export const GraphicDesign = () => {
	return (
		<>
			<ProjectCard>
				{graphicProjects.map((item, index) => (
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
						{...webImages}
						title='Web design'
						url='/projects/web-design'
					/>
				</div>
			</div>
		</>
	)
}
