'use client'
import React from 'react'
import { DesignItem } from '../../UI/DesignItem'
import { LeafPattern } from '../../Icons/LeafPatternt'
import { useInView } from 'react-intersection-observer'
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
const graphicImages = {
	mobile: 'bg-graphic_design_mobile',
	tablet: 'md:bg-graphic_design_tablet',
	desktop: 'lg:bg-graphic_design_desktop',
}

export const Desings = () => {
	const { ref: designRef, inView: isVisible } = useInView()
	return (
		<div
			ref={designRef}
			className={`relative ${isVisible ? 'designAnimation' : ''}`}>
			<div className='w-11/12 mx-auto mt-32  lg:flex lg:w-full lg:gap-7 lg:h-[600px] '>
				<div className='w-full'>
					<DesignItem
						url='projects/web-design'
						title='web design'
						{...webImages}
					/>
				</div>
				<div className='flex flex-col w-full lg:gap-7'>
					<div className='h-full'>
						<DesignItem
							url='projects/app-design'
							title='app design'
							{...appImages}
						/>
					</div>
					<div className='h-full '>
						<DesignItem
							url='projects/graphic-design'
							title='graphic design'
							{...graphicImages}
						/>
					</div>
				</div>
			</div>
			<div className=' hidden xl:block absolute -left-[200px] -top-3/4 -z-20'>
				<LeafPattern />
			</div>
		</div>
	)
}
