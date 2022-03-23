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
              alt='logo'
              src={Logo} 
              width={300} 
              height={75}/>
        </div>
        <div className='logo-header'>
          <Image alt='Doutor' src={Doutor} />
        </div>
    </div>
    </>
  )
}
