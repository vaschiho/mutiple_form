import React from 'react'

const Button = (props) => {
  return (
    <button disabled={props.formIsValid ? "hidden": "hidden"}    onClick={props.onClick}  className='rounded-md p-2 text-white text-center cursor-pointer   capitalize  bg-[#02295a] hover:bg-[#473dff]'>{props.name}</button>
  )
}

export default Button