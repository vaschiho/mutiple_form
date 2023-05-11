import React from 'react';
import StepOne from './component/formOne/StepOne';
import StepTwo from './component/formThree/StepTwo';

import SelectedCheckBox from './component/formTwo/SelectedCheckBox';
import { useDispatch, useSelector } from 'react-redux';
import SelectedValue from './component/formFour/SelectedValue';
import FinalOut from './component/formFive/FinalOut';
import image from '../src/assets/images/bg-sidebar-mobile.svg'
import image2 from '../src/assets/images/bg-sidebar-desktop.svg'
const App = () => {

  const state = useSelector((state) => state.counter.count);

  return (
    <>
      <div className="flex items-center bg-sky-100 h-screen">
        <div className="flex flex-col sm:flex-row w-full max-w-4xl gap-20 rounded-lg items-center bg-white p-2 mx-auto">
          <div className='relative'>
         
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="274" height="568" viewBox="0 0 274 568" transform="scale(1,-1)" className='rounded-lg' >
              <defs>
                <path id="a" d="M0 0h274v568H0z" />
              </defs>
              <g fill="none" fillRule="evenodd" >
                <mask id="b" fill="#fff">
                  <use xlinkHref="#a" />
                </mask>
                <use xlinkHref="#a" fill="#483EFF" />
                <g mask="url(#b)">
                  <g transform="translate(-151.029 -133.957)">
                    <path fill="#6259FF" d="M79.546 349.634c54.547 128.646 292.524 204.132 354.626 99.852 62.102-104.28-95.035-123.204-150.583-230.963-55.547-107.759-98.711-175.015-178.973-150.466C24.354 92.607 25 220.987 79.546 349.634Z" />
                    <ellipse cx="129.864" cy="258.711" fill="#FFAF7E" rx="96.329" ry="96.373" />
                    <path fill="#F9818E" d="M464.88 433.146c87.31-40.69 133.585-206.525 60.253-246.82-73.333-40.293-82.587 68.465-155.485 109.343-72.898 40.877-118.192 72.245-99.348 126.973 18.845 54.728 107.27 51.194 194.58 10.504Z" />
                    <g stroke="#FFF" strokeLinecap="round" strokeLinejoin="bevel" strokeWidth="5">
                      <path d="m367.336 243.125 15.263-15.549" />
                      <path d="M430.872 251.016l-17.995-15.112" />
                      <path d="M399.36 271.751l-9.94 21.293" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <div className='flex sm:flex-col gap-8 ' style={{ position: "absolute", top: '20px', left: "20px" }}>
              <div className='flex gap-3'>
                <span className={`flex justify-center h-5 w-5 p-4  items-center rounded-full border-2  ${state === 0 ? "bg-[#bfe2fd] text-[#02295a]" : "text-white border-white"}`}>1</span>
                <div>
                  <p className='uppercase text-[#b6bcc8] text-sm'>step 1</p>
                  <h2 className='uppercase text-[#fafbff]'>your info</h2>
                </div>
              </div>
              <div className='flex gap-3'>
                <span className={`flex justify-center h-5 w-5 p-4  items-center rounded-full border-2  ${state === 1 ? "bg-[#adbeff] text-[#02295a]" : "text-white border-white"}`}>2</span>
                <div>
                  <p className='uppercase text-[#b6bcc8] text-sm'>step 2</p>
                  <h2 className='uppercase text-[#fafbff]'>Select Plain</h2>
                </div>
              </div>
              <div className='flex gap-3'>
                <span className={`flex justify-center h-5 w-5 p-4  items-center rounded-full border-2  ${state === 2 ? "bg-[#adbeff] text-[#02295a]" : "text-white border-white"}`}>3</span>
                <div>
                  <p className='uppercase text-[#b6bcc8] text-sm'>step 3</p>
                  <h2 className='uppercase text-[#fafbff]'>Add-ons</h2>
                </div>
              </div>
              <div className='flex gap-3'>
                <span className={`flex justify-center h-5 w-5 p-4  items-center rounded-full border-2  ${state === 3 || state === 4 ? "bg-[#adbeff] text-[#02295a]" : "text-white border-white"}`}>4</span>
                <div>
                  <p className='uppercase text-[#b6bcc8] text-sm'>step 4</p>
                  <h2 className='uppercase text-[#fafbff]'>Summary</h2>
                </div>
              </div>
            </div>
          </div>
          <div >
            {state === 0 && <StepOne />}
            {state === 1 && <StepTwo />}
            {state === 2 && <SelectedCheckBox />}
            {state === 3 && <SelectedValue />}
            {state === 4 && <FinalOut />}
          </div>
        </div>
      </div>

    </>
  );
};

export default App;
