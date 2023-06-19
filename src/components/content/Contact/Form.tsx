
import { ErrorIcon } from '@/components/Icons/ErrorIcon'
import { useInput } from '@/hooks/useInput'
import { FormEvent, forwardRef, useState } from 'react'

import { Input } from './Input'
import { Snackbar, Alert, AlertProps } from '@mui/material'

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(function SnackbarAlert(props, ref) {
	return (
		<Alert
			elevation={6}
			ref={ref}
			{...props}
		/>
	)
})
export const Form = () => {
	const [open, setOpen] = useState(false)
	const [isFormValid, setIsFormValid] = useState(false)
	const openToastHandler = () => {
		setOpen(true)
	}
	const handleCloseToast = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return
		}
		setOpen(false)
	}

	const {
		enteredValue: enteredName,
		onChangeInput: onChangeNameInput,
		setIsError: nameIsInvalid,
		isError: isEmptyName,
		isInputValid: isNameValid,
		setEnteredValue: clearNameField,
	} = useInput(value => value.trim() !== '')
	const {
		enteredValue: enteredEmail,
		onChangeInput: onChangeEmailInput,
		setIsError: emailIsEmpty,
		isError: isEmptyEmail,
		isInputValid: isEmailValid,
		setEnteredValue: clearEmailField,
	} = useInput(value => value.trim() !== '')

	const {
		enteredValue: enteredPhone,
		onChangeInput: onChangePhoneInput,
		setIsError: poneIsEmpty,
		isError: isEmptyPhone,
		isInputValid: isPhoneValid,
		setEnteredValue: clearPhoneField,
	} = useInput(value => value.trim() !== '')

	const {
		enteredValue: enteredArea,
		onChangeInput: onChangeAreaInput,
		setIsError: areaIsEmpty,
		isError: isEmptyArea,
		isInputValid: isAreaValid,
		setEnteredValue: clearAreaField,
	} = useInput(value => value.trim() !== '')

	const submitHandler = (e: FormEvent) => {
		setIsFormValid(false)
		e.preventDefault()
		if (isNameValid && isEmailValid && isPhoneValid) {
			clearNameField('')
			clearEmailField('')
			clearPhoneField('')
			clearAreaField('')
			setIsFormValid(true)
			return
		}
		console.log(isNameValid)
		if (!isNameValid) {
			nameIsInvalid(true)
		}
		if (!isEmailValid) {
			emailIsEmpty(true)
		}
		if (!isPhoneValid) {
			poneIsEmpty(true)
		}
		if (!isAreaValid) {
			areaIsEmpty(true)
		}
	}
	return (
		<form
			onSubmit={submitHandler}
			className='flex flex-col gap-5 bg-transparent lg:w-[40%]'>
			<Input
				id='name'
				isInputValid={isEmptyName}
				placeholder='Name'
				type='text'
				onChangeHandler={onChangeNameInput}
				enteredValue={enteredName}
			/>
			<Input
				id='email'
				isInputValid={isEmptyEmail}
				placeholder='Email Address'
				type='email'
				onChangeHandler={onChangeEmailInput}
				enteredValue={enteredEmail}
			/>
			<Input
				id='phone'
				isInputValid={isEmptyPhone}
				placeholder='Phone'
				type='tel'
				onChangeHandler={onChangePhoneInput}
				enteredValue={enteredPhone}
			/>
			<div className='relative'>
				<label htmlFor='YourMessage'></label>
				<textarea
					placeholder='Your message'
					onChange={onChangeAreaInput}
					value={enteredArea}
					name='text'
					id='YourMessage'
					className='w-full bg-transparent placeholder:text-placeholder border-b-[1px] border-b-white focus:border-b-[3px] focus:outline-none focus:placeholder:text-white px-4 py-2 text-sm h-20 resize-none'></textarea>
				{isEmptyArea && (
					<p className='italic flex text-xs items-center gap-3 absolute top-1/2 right-0 font-light'>
						{"Can't be empty"}
						<ErrorIcon />
					</p>
				)}
			</div>

			<button
				onClick={openToastHandler}
				type='submit'
				className='rounded-md bg-white text-black py-3 px-12 uppercase mx-auto text-center text-[.8rem] hover:bg-light-peach hover:text-white transition-colors duration-300 md:ml-auto md:mx-0'>
				Submit
			</button>
			{isFormValid && (
				<Snackbar
					open={open}
					autoHideDuration={4000}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
					onClose={handleCloseToast}>
					<SnackbarAlert
						onClose={handleCloseToast}
						variant='filled'>
						Submitted Successfully!
					</SnackbarAlert>
				</Snackbar>
			)}
		</form>
	)
}
