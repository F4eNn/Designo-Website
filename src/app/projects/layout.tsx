import HeroCardDesign from '@/components/UI/HeroCardDesign'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<HeroCardDesign />
			<div>{children}</div>
		</div>
	)
}

export default layout
