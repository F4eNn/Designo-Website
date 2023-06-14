import React from 'react'
import { Hero } from './Hero'
import { Wrapper } from '../UI/Wrapper'
import { Desings } from './Desings'
import { AboutUs } from './AboutUs'

export const Home = () => {
	return (
		<Wrapper>
			<Hero />
			<Desings />
			<AboutUs />
		</Wrapper>
	)
}
