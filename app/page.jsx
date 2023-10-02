import { Articles, CustomButton, WhyChooseUs } from "@/components"
import Image from "next/image"

const Home = () => {
  return (
    <>
    <main className="main relative overflow-hidden
    bg-light-gray pb-32 sm:pb-0 lg:bg-gradient-to-b from-light-gray from-65% to-light-gray-blue to-35%">

      <div className="flex items-center lg:-mt-[15rem] xl:-mt-[25rem] justify-center sm:pl-8 lg:pl-12 xl:pl-0">
        <div className="text-position px-4 sm:px-0">
          <h1 className="font-medium text-5xl xl:text-6xl text-dark-blue">Next generation <br/> digital banking</h1>
          <p className="lg:w-[25rem] py-8 sm:text-sm lg:text-base sm:font-semibold lg:font-medium">
            Take your financial life online. Your Easybank account will be a one-stop-shop for   spending, saving, budgeting, investing, and much more.
          </p>
          <CustomButton Props='py-3 px-8 md:px-6' />
        </div>
      </div>

      <div className="mockup">
        <Image src='/assets/image-mockups.png' alt="mobile" width={800} height={800} 
        className="object-contain mockup-img" priority/>
      </div>
    </main>

    <WhyChooseUs />
    <Articles />
    </>
  )
}
export default Home