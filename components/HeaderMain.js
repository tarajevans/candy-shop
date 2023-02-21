import { useState } from "react";
import Drawer from "./Drawer";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Image from "next/image";
import Link from "next/link";

 const HeaderMain= () => {
    const [active, setActive] = useState(false)
    return (
    <div className="text-white mb-10 xl:mb-24 h-[757px] md:h-[584px] xl:h-[647px] bg-no-repeat bg-cover md:bg-bottom bg-center font-poppins w-full"
    style={{backgroundImage: 'url(./header.png)'}}
    >
<div className="px-3 md:px-7 w-100 mx-auto xl:2-4/6">
    <div className="flex justify-between mc:py-7 bg-custom-red-2">
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
    </div>
</div>
    </div>
    )
 }

 export default HeaderMain