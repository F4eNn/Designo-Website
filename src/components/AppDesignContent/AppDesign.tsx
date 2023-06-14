import React from 'react'
import { ProjectCard } from '../UI/ProjectCard'
import { DesignProject } from '../UI/DesignProject'
import { Wrapper } from '../UI/Wrapper'

export const AppDesign = () => {
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

	return (
		<Wrapper>
			<ProjectCard>
				{appProjects.map((item, index) => (
					<DesignProject
						key={index}
						{...item}
					/>
				))}
			</ProjectCard>
		</Wrapper>
	)
}
