import { ArrowUpRight } from "lucide-react";

import ShinyButton from "@ui/ShinyButton";
import ActionText from "@ui/ActionText";

import Link from "next/link";

export default function Navbar(){
    return (
        <header>
          <nav className="flex fixed top-0 justify-between items-center border-b-1 border-gray-200 bg-growly-white text-black font-bold p-4 mb-6 h-16 w-4/4 z-20 mx-auto">
            <Link href={"/"} className="h-fit w-1/6">
              <img src="assets/growly.webp" alt="Growly Logo"/>
            </Link>
            <div className="flex items-center">
              <ul className="flex pr-5">
                <li><ActionText page={"explore"} text={'Explore'} Icon={ArrowUpRight} /></li>
                <li><ActionText page={"exchanges"} text={'My Exchanges'} Icon={ArrowUpRight} /></li>
                <li><ActionText page={"help"} text={'Help'} /></li>
                <li><ActionText page={"contact"} text={'Contact'} /></li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-2 pr-5 text-white">
              <li><ActionText page={'sign-in'} text={'Sign In'} /></li>
              <li><ShinyButton page={'register'} text={'Join'} /></li>
            </ul>
            </div>
          </nav>
    
        </header>
    );
}