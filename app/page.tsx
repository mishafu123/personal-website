import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

{/*future ideas: add a scroll page that orginally says Hi I'm Misha, display Software Engineer, then AI/ML
then scroll down to the socials and stuff*/}
{/*future ideas: also add publications section for future publications*/}

const Home = () => {
  return (
    
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24">
          {/*text, my intro paragraph*/}
          <div className="text-center xl:text-left order-2 xl:order-none"> {/*orders the text second to picture */}
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hi I'm <br/><span className="text-accent">Misha Fu</span>
            </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I am a student at the University of Southern California (<span className="text-accent">USC</span>) studying Computer Science and Applied Mathematics. As an aspiring software engineer, I am proficient in various languages and frameworks, 
                and always looking to grow and connect.
              </p>
              {/*button and socials*/}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="uppercase flex items-center gap-2"
                  >
                    <span>Download Resume</span>
                    <FiDownload className="text-xl"/> 
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social 
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                    items-center text-accent text-base hover:bg-accent hover:text-primary
                    hover:transition-all duration-500 !transition-all"
                  />
                </div>
              </div>
          </div>
          {/*my photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
