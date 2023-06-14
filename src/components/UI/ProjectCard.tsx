import React from 'react'

export const ProjectCard = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='w-[95%] max-w-[400px] mx-auto mt-20 md:max-w-none lg:w-full md:mt-32 xl:grid xl:grid-cols-3 xl:gap-10 xl:mt-46'>
			{children}
		</div>
	)
}
