import React from 'react'
import MonthStepFour from './MonthStepFour'
import YearStepFour from './YearStepFour'
import { useSelector } from 'react-redux'

const SelectedValue = () => {
    const periodSelected = useSelector(state => state.toggle.display)
    console.log(periodSelected)
    return (
        <>
            {periodSelected ?  <YearStepFour />:  <MonthStepFour /> }
        </>

    )
}

export default SelectedValue