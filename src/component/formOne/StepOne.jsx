import React from 'react'
import useInput from '../../custom/user-input'
import Button from '../../UI/Button';
import Header from '../../UI/Header';
import { artimathicAction } from '../../store/redux_pratice';
import { useDispatch } from 'react-redux';

const StepOne = () => {
  const dispatch = useDispatch()

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedhandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
    
  } = useInput((value) => /^[a-zA-Z]{4,}$/.test(value));

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedhandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangedhandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput((value) => /^[+]?[\d\s]{3,}$/.test(value));
  

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredPhoneIsValid) {
    formIsValid = true
  }

  const onSubmithandler = (event) => {
    event.preventDefault()
    if (!formIsValid) {
      return;
    }

    resetNameInput()
    resetEmailInput()
    resetPhoneInput()

    handleNextForm()
  }

  const handleNextForm = () => {
    dispatch(artimathicAction.increament())
  }
  return (
    <form action="" className=' w-full max-w-[25rem]' onSubmit={onSubmithandler}>
      <Header name={"personal info"} subtitle={"Please provide your name, email address, and phone number."} />
      <div className="flex flex-col py-3  w-full max-w-[25rem] " style={{ display: "flex" }}>
        <div className="flex justify-between">
          <label className='py-1'>Name</label>
          {nameInputHasError && <p className='text-rose-500' >Enter a valid name</p>}
        </div>
        <input
          className={`border bottom-1 rounded-md p-2 flex w-full max-w-[25rem] outline-none   ${nameInputHasError && "border-rose-500"}`}
          placeholder="Enter Name"
          type="text"
          value={enteredName}
          onBlur={nameBlurHandler}
          onChange={nameChangedhandler}


        />
      </div>

      <div className="flex flex-col py-3  w-full max-w-[25rem] " style={{ display: "flex" }}>
        <div className="flex justify-between">
          <label className='py-1'>Email Address</label>
          {emailInputHasError && <p className='text-rose-500' >Enter a valid email</p>}
        </div>
        <input type="text" name="" id="" placeholder='Enter Email'
          className={`border bottom-1 rounded-md p-2 flex  outline-none   ${emailInputHasError && "border-rose-500"}`}
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangedhandler} />
      </div>



      <div className="flex flex-col py-3  w-full  max-w-[25rem]" style={{ display: "flex" }}>
        <div className="flex justify-between">
          <label className='py-1'>Phone Number</label>
          {phoneInputHasError && <p className='text-rose-500' >Enter a valid number</p>}
        </div>
        <input type="text" name="" id="" placeholder='e.g. + 1 234 567 890'
          className={`border bottom-1 rounded-md p-2 flex w-full  outline-none   ${phoneInputHasError && "border-rose-500"}`}
          value={enteredPhone}
          onBlur={phoneBlurHandler}
          onChange={phoneChangedhandler} />
      </div>
      <div className="justify-end flex align-bottom pt-[3rem] ">
    
        <button className='rounded-md p-2 text-white text-center cursor-pointer   capitalize  bg-[#02295a] hover:bg-[#473dff]' >Next page</button>
      </div>
    </form>
  )
}

export default StepOne