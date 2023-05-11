import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart_slice';
import Button from '../../UI/Button';
import Header from '../../UI/Header';
import { artimathicAction } from '../../store/redux_pratice';
import { displayAction } from '../../store/display_slice';

const CheckBoxMonth = () => {

    const dispatch = useDispatch();

    const [checkedItems, setCheckedItems] = useState([
        { id: 1, name: 'Online Service', period: "month", description: " Access to multiplayer games", price: 1, checked: false },
        { id: 2, name: 'Large Storage', period: "month", description: "Extra 1TB of cloud save", price: 2, checked: false },
        { id: 8, name: 'Customizable Profile', period: "month", description: "Custom theme on your profile", price: 2, checked: false }
    ]);

    const returnToPreviousForm = () => {
        dispatch(artimathicAction.decreament())
        dispatch(cartActions.clearItem())
        dispatch(displayAction.onTogglePeriodtoOrignalState())
        handleCheckBoxChange()
    }
    const moveToNextForm = () => {
        dispatch(artimathicAction.increament())
    }

    const handleCheckBoxChange = (id, checked) => {
        setCheckedItems(prevCheckedItems => {
            const updatedItems = prevCheckedItems.map(item => {
                if (item.id === id) {
                    item.checked = checked;
                }
                return item;
            });
            return updatedItems;
        });

        if (checked) {
            const selectedItem = checkedItems.find(item => item.id === id);
            dispatch(cartActions.addItem(selectedItem));
        } else {
            dispatch(cartActions.removeItem(id));
        }
    };

    const handleUncheckAll = () => {
        setCheckedItems(prevCheckedItems => {
            const updatedItems = prevCheckedItems.map(item => {
                item.checked = false;
                return item;
            });
            return updatedItems;
        });
    };


    return (
        <>
            {(<div className=' w-full max-w-[30rem]'>
                <Header name={"Pick add-ons"} subtitle={"Add-ons help enhance your gaming experience."} />
                {checkedItems.map(item => (
                    <label key={item.id} className={`flex justify-between  gap-10 border rounded-lg p-3 items-center cursor-pointer border-[#f0f6ff] my-3   hover:border-[#473dff] hover:bg-[#fafbff] ${item.checked ? "bg-[#fafbff] border-[#473dff]" : ""}`}>
                        <input type="checkbox"
                            checked={item.checked}
                            onChange={(e) => handleCheckBoxChange(item.id, e.target.checked)}
                            className=" accent-[#473dff]" />

                      
                            <div>
                                <h2 className='capitalize  text-[#02295a] font-bold'>{item.name}</h2>
                                <p className='text-[#9699ab]' >{item.description}</p>
                            </div>

                       
                        <div className='justify-self-end'>
                            <p className='text-[#473dff] text-sm'>+${item.price}/mo</p>
                        </div>
                    </label>
                ))}

                <div className="flex content-end items-end justify-between pt-[3rem]">
                    <button onClick={returnToPreviousForm} className="text-[#9699ab]">Go Back</button>

                    <button className='rounded-md p-2 text-white text-center cursor-pointer   capitalize  bg-[#02295a] hover:bg-[#473dff] ' onClick={moveToNextForm} >Next page</button>
                </div>

            </div>)}
        </>
    );
};

export default CheckBoxMonth;
