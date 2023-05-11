import React from 'react'
import { useSelector } from 'react-redux'
import CheckBoxMonth from './CheckBoxMonth'
import CheckBoxYear from './CheckYear'

const SelectedCheckBox = () => {
  const periodSelected = useSelector(state => state.toggle.display)
  console.log(periodSelected)
  return (
    <>
      {periodSelected ? <CheckBoxYear /> : <CheckBoxMonth />}

    </>
  )
}

export default SelectedCheckBox