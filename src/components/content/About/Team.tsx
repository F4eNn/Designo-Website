import React from 'react'
import { AboutUsSection } from './AboutUsSection'
import { ThreCirclesTeam } from '@/components/Icons/ThreCirclesTeam'

const aboutTeam = {
	srcSetMobile: '/assets/about/mobile/image-world-class-talent.jpg',
	srcSetTablet: '/assets/about/tablet/image-world-class-talent.jpg',
	src: '/assets/about/desktop/image-world-class-talent.jpg',
	title: 'World-class talent',
	desc: 'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from  concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
	desc2:
		'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance tocraftsmanship, service, and prompt delivery. Clients have always beenimpressed with our high-quality outcomes that encapsulates their brands story and mission',
	titleColor: 'text-peach',
	bgColor: 'bg-very-light-peach',
	textColor: 'text-black',

	heightMobile: 'h-[400px]',
	heightTablet: 'md:h-[425px]',
	heightDesktop: 'lg:h-[600px]',
}

export const Team = () => {
	return (
		<>
			<AboutUsSection {...aboutTeam}>
				<div className='absolute left-0 bottom-0 -z-20 md:left-[10%] lg:left-[30%]'>
					<ThreCirclesTeam />
				</div>
			</AboutUsSection>
		</>
	)
}
{
	/* <div className='bg-very-light-peach mb-[325px] md:mb-[400px] relative lg:mb-[350px]'>
				<h2>World-class talent</h2>
				<p>
					We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from
					concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of
					platforms.
				</p>
				<p>
					Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as
					important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been
					impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
				</p>
				<div className='absolute bottom-0 left-0'>
					<ThreCirclesTeam />
				</div>
			</div> */
}
