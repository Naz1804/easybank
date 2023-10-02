import { article } from "@/constants"
import Image from "next/image"

const Articles = () => {
  return (
    <section className='padding py-32 bg-light-gray'>
        <h2 className='text-4xl text-dark-blue text-center xl:text-left'>Latest Articles</h2>

        <div className="flex justify-evenly items-center flex-wrap xl:flex-nowrap gap-6 mt-12 sm:mt-24">
            {article.map(item => (
                <div key={item.id} className="bg-white rounded-b-lg w-full sm:w-[320px] xl:w-fit">
                    <Image src={item.img} width={500} height={500} alt={item.alt} className="object-contian w-full rounded-t-lg h-[15rem]" />
                    <div className="flex flex-col gap-y-2 py-6 px-5 xl:px-7">
                        <p className="text-gray-blue text-xs">By {item.author}</p>
                        <h4 className="text-xl font-medium text-dark-blue hover:text-lime-green cursor-pointer">
                            {item.title}
                        </h4>
                        <p className="text-gray-blue text-sm">{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Articles