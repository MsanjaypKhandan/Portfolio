

import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { metadata } from "./layout";
import Services from "./services/page";
import Resume from "./resume/page";
import ThemeToggle from "@/components/ThemeToggle";
// motion
import TypeAnimationComponent from "@/components/typeanimation";

// variants



export default function Home() {
  return (
    <section>
    <section className="h-full pt-24">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-1 xl:order-none ">
            {/* <MatterCanvas /> */}
          <h1 className="h1 mb-4">
              Hello I&apos;m <br />
              <span className="text-accent">Sanjayp Khandan</span>
            </h1>
            <h3  className="text-accent">
            <TypeAnimationComponent/>
            </h3>
           
            <p className="max-w-[550px] mb-9 text-white/80">
              I am adept at creating visually stunning webpages and have
              proficiency in numerous programming languages and technologies.
            </p>
          {/* <h1 className="h1 mb-6">
              Hello! I&apos;m <br />{" "}
              <span className="text-accent">Alif Hossain</span>
            </h1>
           
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in multiple programming language and technological
              tools.
            </p>
              */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="https://drive.google.com/file/d/1pqPvPDMtKu1dMSSnqAf5NYALMivASxQb/view?usp=sharing" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-6"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-2 xl:order-none mb-8 xl:mb-0 ">
          
     <dotlottie-player src="https://lottie.host/784edcf3-b904-407b-8ea2-dc067a85e640/4eR01UsgqV.json" background="transparent" 
speed="1" 
class="w-[228px] h-[228px] xl:w-[398px] xl:h-[378px] mix-blend-lighten  transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-12"
 //style={{ width: '500px', height: '400px' }}
loop autoplay></dotlottie-player>
          </div>    
        </div>
      </div>
    </section>
    <Services />
    <Resume />
    </section>
  )
}
