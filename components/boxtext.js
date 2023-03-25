import React from 'react'
import Image from 'next/image'

export default function boxtext() {
  return (
    <>
    <div className="flex flex-col p-6">
      <div className="flex items-center justify-center">
      <Image src='/amarillagrande.png' alt='Logo' width="150"  height="150"/>
        </div>
        <div className="flex items-center justify-center">
            <p className="border-white border-b-4 w-1/5 rounded"></p>
        </div>
        <div className="flex items-center justify-center">
            <h1 className='text-6xl font-bold'><span className='text-yellow-500'>Bee</span>Bot</h1>
        </div>
        <div className="">
            <h3  className='flex items-center justify-center'>ABEJA ASISTENTE DE BEEHIGH</h3>
        </div>
    </div>
    <div>
    </div>
    </>
  )
}
