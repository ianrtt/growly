import NButton from "@/components/ui/NButton";
import ActionText from "@/components/ui/ActionText";
import { ArrowUpRight } from "lucide-react";

export default function Navbar(){
    return (
        <header>
          <nav className="flex justify-between rounded-full items-center bg-growly-white text-black font-bold p-4 mt-4 mb-6 h-16 w-4/4 mx-auto">
            <img src="assets/g_growly.webp" alt="" className="h-fit w-1/6"/>
            <div className="flex items-center">
              <ul className="flex pr-5">
                <li><ActionText page={'explore'} text={'Explore'} Icon={ArrowUpRight} /></li>
                <li><ActionText page={'exchanges'} text={'My Exchanges'} /></li>
                <li><ActionText page={'help'} text={'Help'} /></li>
                <li><ActionText page={'contact'} text={'Contact'} /></li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-2 pr-5 text-white">
              <li><ActionText text={'Sign In'} /></li>
              <li><NButton text={'Join'} /></li>
            </ul>
            </div>
          </nav>
        </header>
    );
}