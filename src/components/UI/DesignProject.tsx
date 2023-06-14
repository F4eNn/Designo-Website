import React from 'react'
import Image from 'next/image'

type DesingProjectProps = {
	title: string
	desc: string
	image: string
}

export const DesignProject = ({ desc, image, title }: DesingProjectProps) => {
	return (
		<div className='rounded-2xl h-[475px] overflow-hidden shadow-md mt-20 md:flex md:maxh-fit md:h-[430px] xl:block xl:h-[600px] xl:mt-0'>
			<div className='relative w-full h-2/3 md:h-auto xl:h-2/3'>
				<Image
					src={image}
					alt={title + ' project'}
					fill
				/>
			</div>
			<div className='bg-very-light-peach group w-full h-1/3 md:h-full  text-center py-7 px-8 flex flex-col  gap-3 cursor-pointer hover:bg-peach hover:text-white transition-colors duration-300 md:justify-center md:gap-6 xl:gap-3 xl:h-1/3 xl:px-16 '>
				<h2 className='text-peach group-hover:text-white transition-colors duration-300 uppercase tracking-[4px] text-xl font-[500] md:text-3xl '>
					{title}
				</h2>
				<p className='text-lg'>{desc}</p>
			</div>
		</div>
	)
}
