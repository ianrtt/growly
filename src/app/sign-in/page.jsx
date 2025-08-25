import { ArrowUpRightFromSquare } from "lucide-react";

import Image from "next/image";

import ActionText from "@ui/ActionText";
import ShinyButton from "@ui/ShinyButton";
import ContentBlock from "@ui/ContentBlock";
import Badge from "@ui/Badge";

export default function SignIn(){
    return (
        <main className="pt-16">
          <section id='hero' className="flex flex-col items-center justify-start text-center min-h-max mb-10">
            <h1 className="text-9xl font-semibold m-5 text-balance max-w-3/4 bg-gradient-to-t from-gray-600 via-gray-700 to-gray-700 bg-clip-text text-transparent">
              Sign in!
              </h1>
          </section>

      </main>
    );
}