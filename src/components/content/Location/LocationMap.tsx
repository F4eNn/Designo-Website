import { ThreCirclesTeam } from '@/components/Icons/ThreCirclesTeam'
import dynamic from 'next/dynamic'
import React from 'react'
import CircularProgress from '@mui/joy/CircularProgress'
const MapWithNoSSR = dynamic(() => import('./DynamicMap'), {
	ssr: false,
})
type LocationMapProps = {
	coordinates: number[]
	isData: boolean
	flexDirection: string
	country: string
	office: string
	street: string
	email: string
	phone: string
	city: string
	isLoading: Boolean
}
export const LocationMap = ({
	coordinates,
	isData,
	flexDirection,
	city,
	country,
	email,
	office,
	phone,
	street,
	isLoading,
}: LocationMapProps) => {
	return (
		<div className={`w-full  mb-20  md:flex md:flex-col md:gap-5 ${flexDirection} lg:gap-8 lg:mb-8 `}>
			<div className='w-full h-[350px] md:rounded-2xl overflow-hidden lg:w-2/3 lg:h-[400px]'>
				
				{isLoading && (
					<div className='flex justify-center items-center h-full'>
						<CircularProgress
							variant='plain'
							size='lg'
							thickness={5}
						/>
					</div>
				)}
				<MapWithNoSSR
					coordinates={coordinates}
					isData={isData}
				/>
			</div>
			<div className='w-full bg-very-light-peach  font not-italic relative flex justify-center items-center flex-col gap-5 text-center h-[350px] z-0 md:h md:text-left md:items-start  md:pl-20 md:gap-8 md:rounded-2xl overflow-hidden lg:h-[400px]'>
				<h2 className='text-peach text-3xl font-[500] md:text-4xl xl:text-5xl'>{country}</h2>
				<div className='flex flex-col gap-5 md:flex-row md:gap-32'>
					<div className='xl:text-lg'>
						<h3 className='font-bold md:mb-1 xl:text-xl'>Designo {office} Office</h3>
						<p>{street}</p>
						<p>{city}</p>
					</div>
					<div className='xl:text-lg'>
						<h3 className='font-bold md:mb-1 xl:text-xl'>Contact</h3>
						<p>P : {phone}</p>
						<p>M : {email}</p>
					</div>
					<div className='absolute left-0 -bottom-[65%] -z-10 md:bottom-0 lg:bottom-[10%] xl:left-[20px]'>
						<ThreCirclesTeam />
					</div>
				</div>
			</div>
		</div>
	)
}
