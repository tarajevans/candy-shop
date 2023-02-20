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
    style={{backgroundImage: 'url(./header.png)'}}>
    HeaderMain
    </div>
    )
 }

 export default HeaderMain