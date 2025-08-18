import ActionText from "@/components/ui/ActionText";
import { ArrowUpRightFromSquare } from "lucide-react";
import ShinyButton from "@/components/ui/ShinyButton";
import Separator from "../ui/Separator";

export default function Main(){
    return (
        <main>
          <section id='hero' className="flex flex-col items-center justify-start text-center min-h-max mb-10">
            <h1 className="text-8xl font-semibold m-5 text-balance max-w-1/2 bg-gradient-to-t from-gray-600 via-gray-700 to-gray-700 bg-clip-text text-transparent">
              Welcome 
              to Growly</h1>
        
            <div className="max-w-2/3">
              <p className="font-medium text-lg">Growly is the only platform
              where you <span className="text-growly-main font-medium text-lg">trade your skills</span> to learn new ones. 
              Teach what you know, learn what you don't — <span className="text-growly-main font-medium text-lg">no fees</span>, 
              just exchange</p>
            </div>
        
            <div className="mt-5">
              <ShinyButton text={'Get started'} />
              <ActionText page={'#'} text={'Learn more'} Icon={ArrowUpRightFromSquare} />
            </div>
          </section>

          <Separator />

          <section id='in-block' className="w-full flex flex-col items-center justify-start text-center my-10">
            <div className="border border-gray-300 shadow-lg w-1/2 min-h-screen bg-gray-800 rounded-4xl text-white">
            <h1 className="m-5 font-bold text-3xl">Text Here</h1>
            <p className="m-5 font-medium text-sm">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  
            </p>
            </div>
          </section>
      
        </main>
    );
}