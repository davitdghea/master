import React from 'react'
import Heart from './Heart'


const MovieCards = ({ co }) => {
    return (
        <div className={`${co} bg-red-300  rounded-2xl relative`}>
            <img className={`w-fill h-full rounded-2xl  `} src="https://th.bing.com/th/id/OIP.O_qpr9xECWNbX2JRftYLNQHaEK?w=329&h=185&c=7&r=0&o=5&pid=1.7">
            </img>
            <div className=' right-2 absolute top-[10px]'>
                <Heart sizeDiv='w-[32px] h-[32px]' sizeIcon={14.22} />
            </div>
            <div className='h-[86px] w-full absolute bottom-0 bg-gradient-to-r from-white to-gray'>
                <p>name</p>
                <p>năm</p>

            </div>

        </div>
    )
}

export default MovieCards