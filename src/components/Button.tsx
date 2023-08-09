import React, { FC,ReactEventHandler} from 'react'

interface IButtonProps{
    text:string;
    handleClick?:ReactEventHandler;
}
const Button:FC<IButtonProps> = ({text,handleClick}) => {
    return (
        <button className="  mt-5 mb-3 lg:mb-0 lg:mt-12 rounded py-4 px-16 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
         onClick={handleClick}
        >
            <span className="absolute right-0 w-16 h-40 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative font-bold text-lg">{text}</span>
        </button>
    )
}

export default Button