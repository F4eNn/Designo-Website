import React from 'react'
import { AboutUsSection } from './AboutUsSection'
import { ThreCirclesTeam } from '@/components/Icons/ThreCirclesTeam'

const aboutPartners = {
	srcSetMobile: '/assets/about/mobile/image-real-deal.jpg',
	srcSetTablet: '/assets/about/tablet/image-real-deal.jpg',
	src: '/assets/about/desktop/image-real-deal.jpg',
	title: 'The real deal',
	desc: 'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. ',
	desc2:
		' We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
	titleColor: 'text-peach',
	bgColor: 'bg-very-light-peach',
	textColor: 'text-black',
	desktopFlexRow: 'lg:flex-row-reverse',
	heightMobile: 'h-[400px]',
	heightTablet: 'md:h-[425px]',
	heightDesktop: 'lg:h-[600px]',
}

export const Partners = () => {
	return (
		<>
			<AboutUsSection {...aboutPartners}>
				<div className='absolute left-0 bottom-0 -z-20 md:left-[10%] '>
					<ThreCirclesTeam />
				</div>
			</AboutUsSection>
		</>
	)
}
