import Image from "next/image"
import Link from "next/link"

const DiscoverMore = () => {
  return (
    <section className="mb-20">
        <div className='px-3 md:px-7 w-100 mx-auto xl:w-4/6'>
            <div className="mb-10 font-fredoka text-2xl">
                <div className="flex justify-center -mb-1">
                    <Image 
                    className="h-5"
                    src='/heading-icon.svg' 
                    width={18} 
                    height={24} 
                    alt='heading'
                    />
                </div>
                <div className="text-center">
                    <span className="text-red-500 font-semibold font-fredoka">
                        Discover
                    </span>{' '}
                    <span className="text-custom-purple font-semibold font-fredoka">
                        More
                    </span>
                </div>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:text-left">
                <div>
                    <div>
                        <Image src='/content-img-11.png'
                        alt='recipe'
                        width={365}
                        height={365}
                        className='mx-auto'
                        />
                    </div>
                    <div className="font-fredoka text-2xl mt-5 font-semibold text-custom-purple">
                        Discover our Recipes
                    </div>
                    <div className="text-normal mt-3 text-gray-500 font-poppins">
                        Shop artisan candy, gourmet dark chocolates, milk chocolates and white chocolates, and candy gifts
                    </div>
                    <div>
                        <Link href=''>
                            <div className="mt-3 text-pink-600 flex items-center">
                                <div className="text-sm">
                                    Learn more
                                </div>
                                <div className="pl-[5px]">
                                    <Image 
                                        src='/arrow-next.png'
                                        width={12}
                                        height={12}
                                        alt='arrow'
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src='/content-img-12.png'
                        alt='recipe'
                        width={365}
                        height={365}
                        className='mx-auto'
                        />
                    </div>
                    <div className="font-fredoka text-2xl mt-5 font-semibold text-custom-purple">
                        Warm Weather Guarentee
                    </div>
                    <div className="text-normal mt-3 text-gray-500 font-poppins">
                        Send your tastebuds to destination with Clementine, Melon Cucumber, Pink Citrus, Ginger, and Elderberry gummy bears!
                    </div>
                    <div>
                        <Link href=''>
                            <div className="mt-3 text-pink-600 flex items-center">
                                <div className="text-sm">
                                    Learn more
                                </div>
                                <div className="pl-[5px]">
                                    <Image 
                                        src='/arrow-next.png'
                                        width={12}
                                        height={12}
                                        alt='arrow'
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src='/content-img-13.png'
                        alt='recipe'
                        width={365}
                        height={365}
                        className='mx-auto'
                        />
                    </div>
                    <div className="font-fredoka text-2xl mt-5 font-semibold text-custom-purple">
                        Candy Cares
                    </div>
                    <div className="text-normal mt-3 text-gray-500 font-poppins">
                        It's the season for tying the knot and our wedding collection of candies are the perfect way to celebrate.
                    </div>
                    <div>
                        <Link href=''>
                            <div className="mt-3 text-pink-600 flex items-center">
                                <div className="text-sm">
                                    Learn more
                                </div>
                                <div className="pl-[5px]">
                                    <Image 
                                        src='/arrow-next.png'
                                        width={12}
                                        height={12}
                                        alt='arrow'
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DiscoverMore