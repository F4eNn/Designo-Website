import React from 'react'
import LogoLightIcon from '../../../public/assets/shared/desktop/logo-light.png'
import { DesktopNav } from '../Nav/DesktopNav'
import FooterMobileNav from './MobileNav'
import { FacebookIcon } from '../Icons/FacebookIcon'
import { YouTubeIcon } from '../Icons/YouTubeIcon'
import { Twitter } from '../Icons/Twitter'
import { PinterestIcon } from '../Icons/PinterestIcon'
import { InstagramIcon } from '../Icons/InstagramIcon'
import { Wrapper } from '../UI/Wrapper'
import { GetInTouch } from './GetInTouch'

const icons = [
	<FacebookIcon
		key='facebook'
		fill={`${'#E7816B'}`}
	/>,
	<YouTubeIcon
		key='youtube'
		fill={`${'#E7816B'}`}
	/>,
	<Twitter
		key='twitter'
		fill={`${'#E7816B'}`}
	/>,
	<PinterestIcon
		key='pinterest'
		fill={`${'#E7816B'}`}
	/>,
	<InstagramIcon
		key='instagram'
		fill={`${'#E7816B'}`}
	/>,
]

const Footer = () => {
	return (
		<div className=' bg-black pb-20 mt-11'>
			<Wrapper>
				<GetInTouch />
				<div className='w-full relative px-4 -mt-[7.5rem]  text-center md:text-left md:flex md:flex-col md:gap-10 md:-mt-[15rem] lg:-mt-[7.5rem]'>
					<DesktopNav
						logo={LogoLightIcon}
						color='white'
					/>
					<FooterMobileNav />
					<div className='w-full h-[1px] bg-dark-grey max-md:hidden'></div>
					<div className='md:flex md:justify-between lg:text-xl'>
						<div className='text-grey  flex flex-col gap-10 md:flex-row md:gap-[6rem] lg:gap-[15rem]  '>
							<div>
								<h3 className='font-bold'>Designo Central Office </h3>
								<p>3886 Wellington Street</p>
								<p>Toronto, Ontario M9C 3J5</p>
							</div>
							<div>
								<h3 className='font-bold mx-auto'>Contact Us (Central Office)</h3>
								<p>P : +1 253-863-8967</p>
								<p>M : contact@designo.co</p>
							</div>
						</div>
						<div className='flex gap-4 justify-center my-12  md:self-end md:my-0'>
							{icons.map((item, index) => (
								<button key={index}>{item}</button>
							))}
						</div>
					</div>
				</div>
			</Wrapper>
		</div>
	)
}

export default Footer
