import React from 'react'

export const TwoCriclesPattern = () => {
	return (
		<svg
			width='584'
			height='292'
			xmlns='http://www.w3.org/2000/svg'>
			<defs>
				<linearGradient
					x1='0%'
					y1='50%'
					x2='100%'
					y2='50%'
					id='a'>
					<stop
						stop-color='#5D0202'
						stop-opacity='0'
						offset='0%'
					/>
					<stop
						stop-color='#5D0202'
						stop-opacity='.498'
						offset='100%'
					/>
				</linearGradient>
			</defs>
			<g
				fill='url(#a)'
				fill-rule='evenodd'
				opacity='.06'>
				<circle
					transform='matrix(1 0 0 -1 0 292)'
					cx='146'
					cy='146'
					r='146'
				/>
				<circle
					transform='matrix(0 1 1 0 292 -292)'
					cx='438'
					cy='146'
					r='146'
				/>
			</g>
		</svg>
	)
}
