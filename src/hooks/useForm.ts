import React, { useState } from 'react'

type UseFormProps = {
    isName: string
}

export const useForm = ({isName}:UseFormProps) => {
    const isNameValid = isName.trim() !== ''


    const submitHandler = () => {
        if(isNameValid){
            console.log('wyslano')
        }
    }



  return 
}
