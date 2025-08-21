import { ArrowUpRightFromSquare } from "lucide-react";

import ActionText from "@ui/ActionText";
import ShinyButton from "@ui/ShinyButton";
import ContentBlock from "@ui/ContentBlock";
import Badge from "@ui/Badge";

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


          { /* BLOCK [ 1 ] */ }
          <section id='block1' className="flex flex-wrap items-center justify-center text-center my-10">
            <ContentBlock variant={"dark"} wdt={'1/2'} >

              <div className="my-5 ml-5 mr-10">
                  <Badge variant={"light"} wdt={'1/4'}>
                  <span className="text-gray-800 text-sm font-bold">Badge</span>
                </Badge>
              </div>

            <h1 className="m-5 font-bold text-3xl">Text Here</h1>
            <p className="m-5 font-medium text-sm">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  
            </p>
            </ContentBlock>
          </section>
      
        </main>
    );
}