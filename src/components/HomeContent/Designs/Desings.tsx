import React from 'react'

import { DesignItem } from './DesignItem'

export const Desings = () => {
	const appImages = {
		mobile: 'bg-app_design_mobile',
		tablet: 'bg-app_design_tablet',
		desktop: 'bg-app_design_desktop',
	}
	const webImages = {
		mobile: 'bg-web_design_mobile',
		tablet: 'bg-web_design_tablet',
		desktop: 'bg-web_design_desktop',
	}
	const graphicImages = {
		mobile: 'bg-graphic_design_mobile',
		tablet: 'bg-graphic_design_tablet',
		desktop: 'bg-graphic_design_desktop',
	}

	return (
		<div className='w-11/12 flex justify-between items-stretch lg:w-full mx-auto  mt-32'>
			<div className='w-full'>
				<DesignItem
					url='web-design'
					title='web design'
					{...webImages}
				/>
			</div>
			<div className='w-full'>
				<DesignItem
					url='app-design'
					title='app design'
					{...appImages}
				/>
				<DesignItem
					url='graphic-design'
					title='graphic design'
					{...graphicImages}
				/>
			</div>
		</div>
	)
}
