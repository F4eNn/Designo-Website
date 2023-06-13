import Link from 'next/link'
import React from 'react'

type HeroButtonProps = {
	content: string
	url: string
}

export const HeroLink = ({ content, url }: HeroButtonProps) => {
	return (
		<button className='py-4 px-5 text-xs font-[500] rounded-md bg-white text-black hover:bg-light-peach hover:text-white transition-colors duration-300 uppercase md:text-sm lg:self-center'>
			<Link href={url}>{content}</Link>
		</button>
	)
}
