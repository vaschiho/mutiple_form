import React from 'react'

const Header = (props) => {
    return (
        <div  className='py-6'>
            <h1 className='font-bold text-[#02295a] text-3xl capitalize'>{props.name}</h1>
            <p className='text-[#9699ab] text-base'>{props.subtitle}</p>
        </div>
    )
}

export default Header