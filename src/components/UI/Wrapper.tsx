import React from 'react'

export const Wrapper = (props: { children: React.ReactNode }) => {
	const { children } = props
	return <div className='max-w-[1440px] w-full mx-auto'>{children}</div>
}
