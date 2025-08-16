import NButton from "@/components/ui/NButton";
import ActionText from "@/components/ui/ActionText";
import { ArrowUpRightFromSquare } from "lucide-react";

export default function Main(){
    return (
        <main>
          <section id='hero' className="flex flex-col items-center justify-start text-center min-h-max mb-10">
            <h1 className="text-8xl font-semibold m-5 text-balance max-w-1/2 gradientText">
              Welcome 
              to Growly</h1>
        
            <div className="max-w-2/3">
              <p className="font-medium text-lg">Growly is the only platform
              where you <span className="text-growly-main font-medium text-lg">trade your skills</span> to learn new ones. 
              Teach what you know, learn what you don't — <span className="text-growly-main font-medium text-lg">no fees</span>, 
              just exchange</p>
            </div>
        
            <div className="mt-5">
              <NButton text={'Get started'} />
              <ActionText page={'#'} text={'Learn more'} Icon={ArrowUpRightFromSquare} />
            </div>
          </section>
        
          <section id='about' className="flex flex-col items-center justify-start text-center min-h-max mb-10">
            <article>
              <h1>Never heard of Growly?</h1>
              <p>We the best at this since 2015</p>
            </article>
          </section>
        
          <section id='aboussat' className="flex flex-col items-center justify-start text-center min-h-max mb-10">
            <article>
              <h1>Never heard of Growly?</h1>
              <p>We the best at this since 2015</p>
            </article>
          </section>
        </main>
    );
}