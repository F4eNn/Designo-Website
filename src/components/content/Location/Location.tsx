'use client'

import React from 'react'
import { Wrapper } from '@/components/UI/Wrapper'
import { LocationMap } from './LocationMap'
import { useGeoLocation } from '@/hooks/useGeoLocation'
import { Card } from '@/components/UI/Card'

export const Location = () => {
	const { coordinates: CanadaCoor, isData: isCanada } = useGeoLocation(
		'toronto',
		'3886%25Wellington%20Street',
		'canada'
	)
	const { coordinates: AustraliaCoor, isData: isAustralia } = useGeoLocation(
		'New South Wales',
		'19%25Balonne%20Street',
		'australia'
	)
	const { coordinates: UnitedKingdomCoor, isData: isUnitedKingdom } = useGeoLocation(
		'',
		'13%25Colorado%20Way',
		'United Kingdom'
	)
	const canadaItems = {
		country: 'Canada',
		office: 'Central',
		street: '3886 Wellington Street',
		city: 'Toronto, Ontario M9C 3j5',
		phone: '+1 253-863-8967',
		email: 'contact@designo.co',
	}
	const australiaItems = {
		country: 'Australia',
		office: 'AU',
		street: '19 Balonne Street',
		city: 'New South Wales 2443',
		phone: '(02) 6720 9092',
		email: 'contact@designo.au',
	}
	const unitedKingdomItems = {
		country: 'United Kingdom',
		office: 'UK',
		street: '13 Colorado Way',
		city: 'Rhyd-y-fro SA8 9GA',
		phone: '078 3115 1400',
		email: 'contact@designo.uk',
	}

	return (
		<Wrapper>
			<Card>
				<div className='mb-[250px] md:mb-[400px] lg:mb-[250px]'>
					<LocationMap
						coordinates={CanadaCoor}
						isData={isCanada}
						flexDirection='lg:flex-row-reverse'
						{...canadaItems}
					/>
					<LocationMap
						coordinates={AustraliaCoor}
						isData={isAustralia}
						flexDirection='lg:flex-row'
						{...australiaItems}
					/>
					<LocationMap
						coordinates={UnitedKingdomCoor}
						isData={isUnitedKingdom}
						flexDirection='lg:flex-row-reverse'
						{...unitedKingdomItems}
					/>
				</div>
			</Card>
		</Wrapper>
	)
}
