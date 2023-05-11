import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cart_slice'
import Header from '../../UI/Header'
import { artimathicAction } from '../../store/redux_pratice'

const MonthStepFour = () => {
    const dispatch = useDispatch()
    const item = useSelector(state => state.cart.item)
    const amount = item.reduce((count, aurr) => {
        return count + aurr.price;
    }, 0)
    console.log(amount)

    console.log(item)
    const returnToPreviousForm = () => {
        dispatch(artimathicAction.decreament())
        
      
    }
    const moveToNextForm = () => {
        dispatch(artimathicAction.increament())
    }
    return (
        <div className="w-full max-w-[30rem]">
             <Header name={"Finishing up"} subtitle={"Double-check everything looks OK before confirming."} />
            <div className="bg-[#fafbff] rounded-md p-3">
                {item.map((item, index) => {
                    return (
                        <div className={`grid grid-cols-1 `} key={item.id}>
                            {index === 0 ? (
                                <>
                                    <div className='border-b-[1px]'>
                                        <h3 className="flex justify-between py-4">
                                            <h4 className='capitalize font-bold text-[#02295a]'> {item.name}({item.period})</h4>
                                            <p className="text-[#02295a] font-bold">+${item.price}/mo</p>
                                        </h3>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex justify-between py-4">
                                        <h3 className='text-[#9699ab]'>{item.name}</h3>
                                        <p className='text-[#02295a]'>+${item.price}/mo</p>

                                    </div>

                                </>
                            )}

                        </div>
                    );
                })}

            </div>
            <div className='flex justify-between p-3'>
                <p className='text-[#9699ab]'>Total(per month)</p>
                <p className='text-[#473dff] font-bold'>+${amount}/mo</p>
            </div>

            <div className="flex content-end items-end justify-between pt-[3rem]">
                <button onClick={returnToPreviousForm} className="capitalize text-[#9699ab]">go back</button>
                <button onClick={moveToNextForm} className="rounded-md p-2 text-white text-center cursor-pointer   capitalize  bg-[#02295a] hover:bg-[#473dff]">comfirm</button>
            </div>
        </div>

    )
}

export default MonthStepFour