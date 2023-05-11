import React, { useState } from 'react'
import ToggleSwitch from './ToggleSit';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart_slice';
import Header from '../../UI/Header';
import { displayAction } from '../../store/display_slice';
import { artimathicAction } from '../../store/redux_pratice';



const period = [
  {
    id: "m1",
    period: "month",
    name: "arcade",
    image: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E" /><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z" /></g></svg>,
    price: 9,
  },
  {
    id: "m2",
    period: "month",
    name: "advanced",
    image: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E" /><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z" /></g></svg>,
    price: 12,
  },
  {
    id: "m3",
    period: "month",
    name: "pro",
    image: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF" /><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z" /></g></svg>,
    price: 15,
  },
  {
    id: "y1",
    period: "year",
    image: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E" /><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z" /></g></svg>,
    name: "arcade",
    price: 90,
  },
  {
    id: "y2",
    period: "year",
    name: "advanced",
    image: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E" /><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z" /></g></svg>,
    price: 120,
  },
  {
    id: "y3",
    period: "year",
    image: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF" /><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z" /></g></svg>,
    name: "pro",
    price: 150,
  },
]

const monthPeriod = period.filter(item => item.period === "month")
const yearPeriod = period.filter(item => item.period === "year")



const StepTwo = () => {

  const dispatch = useDispatch()


  const item = useSelector(state => state.cart.item);
  const periodRedux = useSelector(state => state.toggle.display)
  console.log(periodRedux)


  const returnToPreviousForm = () => {
    dispatch(artimathicAction.decreament())
  }
  const moveToNextForm = () => {
    dispatch(artimathicAction.increament())
  }

  const [position, setPosition] = useState('right');
  const [selectedCard, setSelectedCard] = useState("");
  const [itemIsNotSelected, setItemNotIsSelected] = useState(false)
 
  console.log(position)
  function handleCardSelect(id) {
    const periodSelected = period.find(item => item.id === id);


    if (selectedCard !== "") {
      dispatch(cartActions.removeItem(selectedCard));
      setItemNotIsSelected(false)
    }


    dispatch(cartActions.addItem({
      id: periodSelected.id,
      name: periodSelected.name,
      period: periodSelected.period,
      price: periodSelected.price
    }));

    setSelectedCard(periodSelected.id);
  }
  const selectionisvaild = () => {
    if (item.length === 0) {
      setItemNotIsSelected(true)
      return
    } else {
      moveToNextForm()
      
    }
  }


  function handleToggle() {
    setPosition(position === 'right' ? 'left' : 'right');
    dispatch(cartActions.clearItem())
    dispatch(displayAction.onTogglePeriod())
    setItemNotIsSelected(false)
    setSelectedCard("")

  }


  return (

    <>
      <div className=' w-full sm:max-w-[50rem] '>
        <Header name={"Select your plan"} subtitle={"You have the option of monthly or yearly billing."} />
        <div className='grid sm:grid-cols-3 gap-12 '>


          {position === "right" && (
            monthPeriod.map(item => {
              return (
                <div key={item.id} className={`border rounded-lg p-3 cursor-pointer pr-8  hover:border-[#473dff] hover:bg-[#fafbff] ${item.id === selectedCard ? "border-[#473dff] bg-[#fafbff]" : "border-[#f0f6ff]"}`} onClick={() => handleCardSelect(item.id)}    >
                  <span className='m'>{item.image}</span>
                  <h3 className='capitalize my-1 pt-6 text-[#02295a] font-bold'>{item.name}</h3>
                  <p className='text-[#9699ab]'>${item.price}/mo</p>
                </div>
              )
            })
          )}

          {position === "left" && (
            yearPeriod.map(item => {
              return (
                <div key={item.id} className={`border rounded-lg p-3 cursor-pointer     hover:border-[#473dff] hover:bg-[#fafbff] ${item.id === selectedCard ? "border-[#473dff] bg-[#fafbff]" : "border-[#f0f6ff]"}`} onClick={() => handleCardSelect(item.id)}    >
                  <span className='m'>{item.image}</span>
                  <h3 className='capitalize my-1 pt-6 text-[#02295a] font-bold'>{item.name}</h3>
                  <p className='text-[#9699ab]'>${item.price}/yr</p>
                  <p className='text-[#02295a] text-sm'>2 month for free</p>
                </div>
              )
            })
          )}
        </div>
        {itemIsNotSelected && <p className='text-center py-4 text-rose-500'>please  select a plain</p>}

        <div className='flex justify-center rounded-lg bg-[#f0f6ff] py-2 items-center my-9'>
          <div className='flex gap-2'>
            <p className={`font-medium ${position === "right" ? "text-[#02295a]" : "text-[#9699ab]"}`}>Monthly</p>
            <div className="toggle-switch " onClick={handleToggle}>
              <div className={`toggle-switch-handle ${position}`}></div>
            </div>
            <p className={`font-medium ${position === "left" ? "text-[#02295a] " : "text-[#9699ab]"}`}>Yearly</p>
          </div>
        </div>
        <div className="flex content-end items-end justify-between pt-[3rem]">
          <button onClick={returnToPreviousForm}>Go Back</button>
          <button onClick={selectionisvaild} className='rounded-md p-2 text-white text-center cursor-pointer   capitalize  bg-[#02295a] hover:bg-[#473dff]'>Next Step</button>

        </div>
      </div>



    </>

  );
}



export default StepTwo