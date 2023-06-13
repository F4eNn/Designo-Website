import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type LogoProps ={
    image: StaticImageData
}

export const Logo = ({image}: LogoProps) => {
	return (
		<Link
			aria-label='home'
			href='/'>
			<Image
				src={image}
				alt='logo'
				className='w-[200px] xl:w-[225px]'
			/>
		</Link>
	)
}
