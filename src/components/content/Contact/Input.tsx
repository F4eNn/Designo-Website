import { ErrorIcon } from '@/components/Icons/ErrorIcon'
import React from 'react'

type InputProps = {
	placeholder: string
	id: string
	type: string
	isInputValid: boolean
	isInvalidEmail?: boolean | null
	onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
	enteredValue: string
}

export const Input = ({ id, isInputValid, placeholder, type, enteredValue, onChangeHandler }: InputProps) => {
	return (
		<div className='relative'>
			<label htmlFor={id}></label>
			<input
				placeholder={placeholder}
				id={id}
				type={type}
				value={enteredValue}
				onChange={onChangeHandler}
				className='w-full bg-transparent placeholder:text-placeholder border-b-[1px] border-b-white focus:border-b-[3px] focus:outline-none focus:placeholder:text-white px-4 py-2 text-sm h-10  '
			/>
			{isInputValid && (
				<p className='italic flex text-xs items-center gap-3 absolute top-1/4 right-0 font-light'>
					{"Can't be empty"}
					<ErrorIcon />
				</p>
			)}
		</div>
	)
}
