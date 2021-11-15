import React from 'react'

interface Props {
  type: 'text' | 'password' | 'submit' | 'email'
  placeholder: string
  label?: string
  className?: string
  textarea?: boolean
  register: unknown
  errors: any
}

const Field = React.forwardRef(
  (
    {
      label,
      type,
      placeholder,
      register,
      errors = {},
      textarea = false,
    }: Props,
    ref: any
  ) => (
    <div className='mb-4'>
      <label
        htmlFor={label}
        className='block text-gray-700 text-sm font-bold mb-2'>
        {label}
      </label>

      {textarea ? (
        <textarea
          className='resize-none bg-gray-100 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-200 shadow appearance-none rounded-2xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500'
          cols={30}
          rows={10}
          placeholder={placeholder}
          ref={ref}
          {...register}
        />
      ) : (
        <input
          className='bg-gray-100 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-200 shadow appearance-none rounded-2xl w-full p-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500'
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...register}
        />
      )}

      <span className='text-red-600 m-3'>{errors?.message}</span>
    </div>
  )
)

Field.displayName = 'Field'
export default Field
