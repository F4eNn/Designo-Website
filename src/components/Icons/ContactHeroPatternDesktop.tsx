import React from 'react'

export const ContactHeroPatternDesktop = () => {
	return (
		<svg
			width='640'
			height='640'
			xmlns='http://www.w3.org/2000/svg'>
			<defs>
				<linearGradient
					x1='0%'
					y1='50%'
					x2='100%'
					y2='50%'
					id='a'>
					<stop
						stopColor='#5D0202'
						stopOpacity='0'
						offset='0%'
					/>
					<stop
						stopColor='#5D0202'
						stopOpacity='.498'
						offset='100%'
					/>
				</linearGradient>
			</defs>
			<circle
				fill='url(#a)'
				transform='matrix(0 1 1 0 0 0)'
				cx='320'
				cy='320'
				r='320'
				fillRule='evenodd'
				opacity='.309'
			/>
		</svg>
	)
}
