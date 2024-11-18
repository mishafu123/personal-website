import Link from "next/link";
import { Button } from "./ui/button";

//components 
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () =>{
    return (
        <header className="py-8 xl:py12 text-white"> 
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Misha<span className = "text-accent">.</span>
                    </h1>
                </Link>


                {/*desktop navigation and orginal: Hire Me button that I am going to change to Connect EDIT: I DON"T WANT THE BUTTON*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    {/*
                    <Link href="/contact">
                        <Button>Connect</Button>
                    </Link>
                    */}
                </div>
                

                {/*movile navigation*/}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};
export default Header;