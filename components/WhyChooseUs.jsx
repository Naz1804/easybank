import { options } from "@/constants"
import Image from "next/image"

const WhyChooseUs = () => {
  return (
    <section className="padding relative pt-32 lg:pt-8 pb-32 bg-light-gray-blue">
      <h2 className="text-4xl sub-heading text-dark-blue text-position z-50 lg:-mt-36 xl:-mt-52">Why choose Easybank?</h2>
      <p className="text-lg sub-heading text-gray-blue text-position mt-6">We leverage Open Banking to turn your bank account into your financial hub.<br className="hidden sm:block"/> Control your finances like never before.</p>

      <div className="flex flex-wrap xl:flex-nowrap gap-10 items-center justify-evenly mt-16 text-position">
        {options.map(item => (
          <div key={item.id} className="w-full sm:w-[300px] xl:w-full flex flex-col gap-y-5">
            <Image src={item.img} width={60} height={60} alt={item.title} className="object-contain self-center sm:self-start"/>
            <h4 className="text-2xl text-dark-blue">{item.title}</h4>
            <p className="text-base text-gray-blue">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs