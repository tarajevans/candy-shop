import { useState } from "react";
import Drawer from "./Drawer";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


 const HeaderSecondary= () => {

    const router = useRouter()
    const [active, setActive] = useState(false)
    const pageTitle = router.pathname.slice(1).toUpperCase()
    return (
    <div className="text-white mb-10 xl:mb-24 h-[257px] md:h-[384px] xl:h-[447px] bg-no-repeat bg-cover md:bg-bottom bg-center font-poppins w-full"
    style={{backgroundImage: 'url(./bgbg-secondary.png)'}}
    >
<div className="px-3 md:px-7 w-100 mx-auto xl:w-4/6">
    <div className="flex justify-between md:py-7 bg-custom-red-2">
        <div className="flex justify-center align-middle">
            <BurgerMenu setActive={setActive} active={active} />
            <Drawer setActive={setActive} active={active} />
            <div className="hidden md:block justify-center align-middle">
                <div className="flex space-x-4">
                    <Link className="font-bold text-xl flex space-x-2" href=''>
                    <div className="align-middle flex flex-col justify-center">
                        <Image src='/user-icon.svg' 
                        width={14}
                        height={18}
                        alt='user icon'
                        />
                    </div>
                    <div>Login</div>
                    </Link>
                    <Link className="font-bold text-xl flex space-x-2" href=''>
                        Rewards
                    </Link>
                </div>
            </div>
        </div>
        <div>
            <Link href=''>
                <Image 
                src='/logo.png' 
                alt='logo' 
                height={38} 
                width={98} />
            </Link>
        </div>
        <div className="flex space-x-3 align-middle">
            <div className="flex space-x-3 align middle">
                <span className="hidden xl:inline text-xl">Search</span>
                <span className="mt-1">
                    <Image src="/search-icon.svg" alt="search" 
                    width={18} 
                    height={18} />
                </span>
                <span className="mt-1">
                    <Image src="/hearth-icon.svg"
                    alt="heart" 
                    width={18} 
                    height={18} />
                </span>
                <span className="mt-1">
                    <div className="relative">
                        <div className="absolute top-[-10px] left-3 rounded-full h-5 w-5 bg-color-orange">
                            <span className="flex justify-center item-center text-custom-purple font-poppins">
                                2
                                </span>
                        </div>
                    </div>
                    <Link href='/cart'>
                        <Image src='/bag-icon.svg' alt='bag icon'
                        width={18} 
                        height={18} 
                        />
                    </Link>
                </span>
            </div>
        </div>
    </div>
    <Navbar />
    <div className="text-center text-4xl md:mt-6 xl:text-5xl leading-normal pt-8 pb-3 font-fredoka">{pageTitle}</div>
</div>

    </div>
    )
 }

 export default HeaderSecondary