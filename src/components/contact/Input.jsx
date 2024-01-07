import React from 'react'
import cn from 'classnames'
import { findInputError, isFormInvalid } from '../utils'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'

export function Input({name,label,type,id,placeholder,validation,multiline,className}) {

  const inputErrors = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputErrors)

 const {register,formState: { errors }} = useFormContext()

  return (
    <div>
      
    </div>
  )
}




const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}