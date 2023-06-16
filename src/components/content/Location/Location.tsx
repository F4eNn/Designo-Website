'use client'

import React from 'react'

import { Wrapper } from '@/components/UI/Wrapper'
import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(() => import('./DynamicMap'), {
	ssr: false,
})

export const Location = () => {
	return (
		<Wrapper>
			<div className='w-full h-[600px]'>
            <MapWithNoSSR  />
            </div>
		</Wrapper>
	)
}
