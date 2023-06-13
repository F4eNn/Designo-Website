import React from 'react'
import { Hero } from './Hero'
import { Wrapper } from '../UI/Wrapper'
import { Desings } from './Designs/Desings'

export const Home = () => {
	return (
		<Wrapper>
			<Hero />
			<Desings />
		</Wrapper>
	)
}
