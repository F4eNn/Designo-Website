import React from 'react'

export const Form = () => {
	return (
		<form className='flex flex-col gap-5 bg-transparent lg:w-[40%]'>
			<div>
				<label htmlFor='name'></label>
				<input
					placeholder='Name'
					id='name'
					type='text'
					required
					className='w-full bg-transparent placeholder:text-placeholder border-b-[1px] border-b-white focus:border-b-[3px] focus:outline-none focus:placeholder:text-white px-4 py-2 text-sm h-10'
				/>
			</div>
			<div>
				<label htmlFor='email'></label>
				<input
					placeholder='Email Address'
					id='email'
					type='email'
					required
					className='w-full bg-transparent placeholder:text-placeholder border-b-[1px] border-b-white focus:border-b-[3px] focus:outline-none focus:placeholder:text-white px-4 py-2 text-sm h-10  '
				/>
			</div>
			<div>
				<label htmlFor='phone'></label>
				<input
					placeholder='Phone'
					id='phone'
					type='tel'
					required
					className='w-full bg-transparent placeholder:text-placeholder border-b-[1px] border-b-white focus:border-b-[3px] focus:outline-none focus:placeholder:text-white px-4 py-2 text-sm h-10'
				/>
			</div>
			<div>
				<label htmlFor='yourMessage'></label>
				<textarea
					id='yourMessage'
					placeholder='Your Message'
					className='w-full resize-none bg-transparent placeholder:text-placeholder border-b-[1px] border-b-white focus:border-b-[3px] focus:outline-none focus:placeholder:text-white px-4 py-2 text-sm h-24'
					defaultValue=''></textarea>
			</div>
            <button type='submit' className='rounded-md bg-white text-black py-3 px-12 uppercase mx-auto text-center text-[.8rem] hover:bg-light-peach hover:text-white transition-colors duration-300 md:ml-auto md:mx-0'>Submit</button>
		</form>
	)
}
