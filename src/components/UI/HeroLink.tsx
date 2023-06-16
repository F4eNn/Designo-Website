import Link from 'next/link'
import React from 'react'

type HeroButtonProps = {
	content: string
	url: string
	bgColor: string
	textColor: string
}

export const HeroLink = ({ content, url, bgColor, textColor }: HeroButtonProps) => {
	return (
		<button
			className={`py-3 px-5 text-xs font-[500] rounded-md ${bgColor} ${textColor} hover:bg-light-peach hover:text-white transition-colors duration-300 uppercase md:text-sm lg:self-center`}>
			<Link href={url}>{content}</Link>
		</button>
	)
}
