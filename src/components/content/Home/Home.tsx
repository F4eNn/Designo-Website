import React from 'react'
import { Hero } from './Hero'
import { Wrapper } from '../../UI/Wrapper'
import { Desings } from './Desings'
import { OurWork } from './OurWork'

export const Home = () => {
	return (
		<Wrapper>
			<Hero />
			<Desings />
			<OurWork />
		</Wrapper>
	)
}
