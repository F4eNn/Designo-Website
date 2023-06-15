import React from 'react'
import { ProjectCard } from '../../UI/ProjectCard'
import { DesignProject } from '../../UI/DesignProject'
import { DesignItem } from '../../UI/DesignItem'
const appProjects = [
	{
		title: 'airfilter',
		desc: 'Solving the problem of poor indoor air quality by filtering the air',
		image: '/assets/app-design/desktop/image-airfilter.jpg',
	},
	{
		title: 'eycam',
		desc: 'Product that lets you edit your favorite photos and videos at any time',
		image: '/assets/app-design/desktop/image-eyecam.jpg',
	},
	{
		title: 'faceit',
		desc: 'Get to meet your favorite internet superstar with the faceit app',
		image: '/assets/app-design/desktop/image-faceit.jpg',
	},
	{
		title: 'todo',
		desc: 'A todo app that features cloud sync with light and dark mode',
		image: '/assets/app-design/desktop/image-todo.jpg',
	},
	{
		title: 'loopstudios',
		desc: 'A VR experience app made for Loopstudios',
		image: '/assets/app-design/desktop/image-loopstudios.jpg',
	},
]
const graphicImages = {
	mobile: 'bg-graphic_design_mobile',
	tablet: 'md:bg-graphic_design_tablet',
	desktop: 'lg:bg-graphic_design_desktop',
}
const webImages = {
	mobile: 'bg-web_design_mobile',
	tablet: 'md:bg-web_design_tablet',
	desktop: 'lg:bg-web_design_desktop',
}
export const AppDesign = () => {
	return (
		<>
			<ProjectCard>
				{appProjects.map((item, index) => (
					<DesignProject
						key={index}
						{...item}
					/>
				))}
			</ProjectCard>
			<div className='w-11/12 mx-auto mt-40  lg:flex lg:w-full lg:gap-7 lg:h-[450px] mb-[325px] md:mb-[400px] lg:mb-[350px]'>
				<div className='w-full'>
					<DesignItem
						{...graphicImages}
						title='graphic design'
						url='/projects/graphic-design'
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
