'use client';

import { useState } from "react"
import { navigation } from "@/constants";

const navMenu = () => {
  const [btn, setBtn] = useState(false)

  return (
    <>
<<<<<<< HEAD
    <button className="ml-auto sm:hidden" onClick={() => setBtn(!btn)}>
=======
    <button className="ml-auto sm:hidden" onClick={(e) => setBtn(!btn)}>
>>>>>>> c37e8a89d08eb3232917d4f8d46dfcc7d11eb6fe
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

export default navMenu