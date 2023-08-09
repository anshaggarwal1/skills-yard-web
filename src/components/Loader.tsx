"use client"
import Loading from '@/app/Loading'
import { useRouter } from 'next/navigation'
import React, { FC, ReactNode, useEffect, useState } from 'react'

interface IProp{
    children:ReactNode
}
const Loader:FC<IProp> = ({children}) => {
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>setLoading(false),1000)
    },[loading])
    return loading ? <Loading/> : children
}

export default Loader