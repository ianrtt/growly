import { ArrowUpRightFromSquare } from "lucide-react";

import Image from "next/image";

import ActionText from "@ui/ActionText";
import ShinyButton from "@ui/ShinyButton";
import ContentBlock from "@ui/ContentBlock";
import Badge from "@ui/Badge";

export default function Main(){
    return (
        <main className="pt-16">
          <section id='hero' className="flex flex-col items-center justify-start text-center min-h-max mb-10">
            <h1 className="text-9xl font-semibold m-5 text-balance max-w-3/4 bg-gradient-to-t from-gray-600 via-gray-700 to-gray-700 bg-clip-text text-transparent">
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
          
        {/* BLOCK [ 1 ] */}
        <section id='block1' className="flex justify-center items-center text-center my-10">
          <div className="relative w-full md:w-full mx-10 rounded-4xl overflow-hidden">
            <Image
              src="/assets/stock1.jpg"
              alt="Growly background"
              fill
              style={{ objectFit: 'cover' }}
              className="absolute inset-0 -z-10"
              priority
            />
            {/* Contenido */}
            <div className="relative z-10 flex flex-col justify-center h-full px-6 py-8 text-left">
              <div className="mr-10">
                <Badge variant={"light"}>
                  <span className="text-gray-700 text-sm font-bold">Growly</span>
                </Badge>
              </div>

              <h1 className="mt-10 font-bold text-5xl text-white max-w-1/3">Learn <br />for free</h1>
              <p className="mt-5 mb-3 text-lg text-white opacity-90 max-w-2/5">
              Connect with others and grow together through mutual learning. 
              Share your skills, learn new ones, and thrive in a supportive community 
              — no payments, no barriers.
              </p>
            </div>
          </div>
        </section>

        
        {/* BLOCK [ 2 ] */}
        <section id='block2' className="flex justify-center items-center text-center my-10">
          <div className="relative w-full md:w-full mx-10 rounded-4xl overflow-hidden">
            <Image
              src="/assets/stock2.jpg"
              alt="Growly background"
              fill
              style={{ objectFit: 'cover' }}
              className="absolute inset-0 -z-10"
              priority
            />
            {/* Contenido */}
            <div className="relative z-10 flex flex-col justify-center h-full px-6 py-8 text-left">
              <div className="mr-10">
                <Badge variant={"light"}>
                  <span className="text-gray-700 text-sm font-bold">Growly</span>
                </Badge>
              </div>

              <h1 className="mt-10 font-bold text-5xl text-white max-w-1/3">Learn <br />for free</h1>
              <p className="mt-5 mb-3 text-lg text-white opacity-90 max-w-2/5">
              Connect with others and grow together through mutual learning. 
              Share your skills, learn new ones, and thrive in a supportive community 
              — no payments, no barriers.
              </p>
            </div>
          </div>
        </section>

        
        {/* BLOCK [ 3 ] */}
        <section id='block3' className="flex justify-center items-center text-center my-10">
          <div className="relative w-full md:w-full mx-10 rounded-4xl overflow-hidden">
            <Image
              src="/assets/stock3.jpg"
              alt="Growly background"
              fill
              style={{ objectFit: 'cover' }}
              className="absolute inset-0 -z-10"
              priority
            />
            {/* Contenido */}
            <div className="relative z-10 flex flex-col justify-center h-full px-6 py-8 text-left">
              <div className="mr-10">
                <Badge variant={"light"}>
                  <span className="text-gray-700 text-sm font-bold">Growly</span>
                </Badge>
              </div>

              <h1 className="mt-10 font-bold text-5xl text-white max-w-1/3">Learn <br />for free</h1>
              <p className="mt-5 mb-3 text-lg text-white opacity-90 max-w-2/5">
              Connect with others and grow together through mutual learning. 
              Share your skills, learn new ones, and thrive in a supportive community 
              — no payments, no barriers.
              </p>
            </div>
          </div>
        </section>

      </main>
    );
}