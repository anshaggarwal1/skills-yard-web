import React from 'react'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <Image
              src={"/assets/images/header-logo.png"}
              alt="SkillsYard"
              width={140}
              height={30}
              className="lg:w-80 animate-growreveal"
            />
    </div>
  )
}

export default Loading