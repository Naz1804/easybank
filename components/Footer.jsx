import { footerLink, footerLinks } from "@/constants"
import HoverSVG from "./HoverSVG"
import { CustomButton } from "."
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-dark-blue padding py-12 flex flex-col sm:flex-row items-center text-position">
      <div className="flex flex-col items-center">
        <Image src='/assets/logo-white.svg' width={20} height={20} alt="logo" className="object-contain w-[10rem]" />
        <HoverSVG />
      </div>

      <div className="flex flex-col gap-y-3 sm:ml-12 lg:ml-20 xl:ml-40 mt-8 sm:mt-0">
        {footerLink.map((item, index) => (
          <p key={index} className="font-medium text-white hover:text-lime-green cursor-pointer">{item}</p>
        ))}
      </div>

      <div className="flex flex-col gap-y-3 sm:ml-12 lg:ml-20 mt-4 sm:mt-0">
        {footerLinks.map((item, index) => (
          <p key={index} className="font-medium text-white hover:text-lime-green cursor-pointer">{item}</p>
        ))}
      </div>

      <div className="flex flex-col items-center sm:items-end sm:ml-auto mt-8 sm:mt-0">
        <CustomButton Props='w-fit py-3 px-8' />
        <p className="text-sm text-gray-blue pt-8 sm:pt-9">&copy; Easybank. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer