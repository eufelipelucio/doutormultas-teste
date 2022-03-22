/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import Logo from '../../public/logo.webp'
import Doutor from '../../public/doutor.jpg'

export default function Header() {
  return (
    <>
    <div className='header'>
        <div className='logo-header' >
              <Image
              src={Logo} 
              width={300} 
              height={75}/>
        </div>
        <div className='logo-header'>
          <Image src={Doutor} />
        </div>
    </div>
    </>
  )
}
