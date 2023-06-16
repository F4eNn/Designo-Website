import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/UI/Card'
type SectionProps = {
	srcSetMobile: string
	srcSetTablet: string
	src: string
	children: React.ReactNode
	title: string
	desc: string
	desc2?: string
	bgColor: string
	textColor: string
	desktopFlexRow?: string
	heightMobile: string
	heightTablet: string
	heightDesktop: string
	titleColor?: string
	titleSizeDesktops?: string
}
export const AboutUsSection = ({
	children,
	src,
	srcSetMobile,
	srcSetTablet,
	desc,
	desc2,
	title,
	bgColor,
	textColor,
	desktopFlexRow,
	heightDesktop,
	heightMobile,
	heightTablet,
	titleColor,
	titleSizeDesktops,
}: SectionProps) => {
	return (
		<Card>
			<div
				className={` ${bgColor} ${textColor} relative z-0 lg:flex ${desktopFlexRow} md:mb-20 md:rounded-b-2xl overflow-hidden`}>
				<div className={`relative ${heightMobile} ${heightTablet} ${heightDesktop} lg:w-[40%] `}>
					<picture>
						<source
							media='(max-width:768px)'
							srcSet={srcSetMobile}
						/>
						<source
							media='(max-width:1024px)'
							srcSet={srcSetTablet}
						/>
						<Image
							src={src}
							alt='peaople are working on laptops'
							fill
							quality={100}
						/>
					</picture>
				</div>
				<div className='px-5 py-20 text-center w-full mx-auto max-w-[600px]  md:py-16 lg:text-left lg:w-[50%] lg:max-w-[725px] lg:my-auto '>
					<h1 className={`text-4xl mb-5 md:text-5xl md:mb-8 font-[500]   ${titleSizeDesktops} ${titleColor}`}>
						{title}
					</h1>
					<div className='text-sm md:text-base xl:text-lg '>
						<p>{desc}</p>
						<p className='mt-4'>{desc2}</p>
					</div>
				</div>
				{children}
			</div>
		</Card>
	)
}
