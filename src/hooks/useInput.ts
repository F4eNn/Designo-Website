import React from 'react'
import { useState } from 'react'

export const useInput = (validateFn: (value: string) => boolean) => {
	const [enteredValue, setEnteredValue] = useState('')
	const [isError, setIsError] = useState(false)
	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setEnteredValue(e.target.value)
		if (e.target.value !== '') {
			setIsError(false)
		}
	}
	const isInputValid = validateFn(enteredValue)

	return {
		isError,
		isInputValid,
		enteredValue,
		setIsError,
		setEnteredValue,
		onChangeInput,
	}
}
