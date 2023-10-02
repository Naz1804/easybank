import MobileNav from "./MobileNav"
import CustomButton from "./CustomButton"
import { navigation } from "@/constants"
import Image from "next/image"

const Navbar = () => {

  return (
    <header className="w-full relative bg-white z-50">
        <nav className="padding h-20 flex items-center relative w-full">
            <Image src='/assets/logo.svg' width={20} height={20} alt="logo" className="object-contain w-[9rem] lg:w-[10rem]" />
            
            <div className="mx-auto hidden sm:flex items-center h-full gap-3 lg:gap-5 xl:gap-10">
                {navigation.map(item => (
                    <div key={item} className="pb-1 border-bottom h-full z-0 cursor-pointer">
                        <div className="flex items-center h-full z-10 text-gray-blue bg-white font-medium 
                        hover:text-black text-sm lg:text-base">
                            {item}
                        </div>
                    </div>
                ))}
            </div>

            <CustomButton Props='hidden sm:block py-3 px-5 lg:px8' />

            <MobileNav />
        </nav>
    </header>
  )
}

export default Navbar