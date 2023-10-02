'use client';

import { useState } from "react"
import { navigation } from "@/constants";

const MobileNav = () => {
  const [btn, setBtn] = useState(false)

  return (
    <>
    <button className="ml-auto sm:hidden" onClick={() => setBtn(!btn)}>
      <img src={btn ? '/assets/icon-close.svg' : '/assets/icon-hamburger.svg'} alt="menu" 
      className={`object-contain ${btn ? 'w-6' : 'w-8'}`} />
    </button>

    <div className="absolute top-[120%] left-1/2 transform -translate-x-1/2 w-full padding">
      {btn && (
          <div className="bg-white rounded-lg w-full py-3 z-50 flex flex-col gap-3">
              {navigation.map(item => (
                  <p key={item} className="font-medium text-dark-blue text-center text-lg">{item}</p>
              ))}
          </div>
      )}
    </div>
    </>
  )
}

export default MobileNav