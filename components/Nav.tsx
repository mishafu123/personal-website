"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'experience',
        path: '/experience',
    },
    {
        name: 'projects',
        path: '/projects',
    },
    {
        name: 'contact',
        path: '/contact',
    },
];


const Nav = () =>{
    const pathname = usePathname();
    return(
    <nav className="flex gap-8"> 
    {/*flex gap gives each index between spacing */}
        {links.map((link, index)=>{
            return (
                <Link 
                    href={link.path} 
                    key={index} 
                    className={`${
                        link.path === pathname && "text-accent border-b-2 border-accent"
                    } capitalize font-medium hover:text-accent transition-all`} 
                >
                    {/*link path text accent allows for underline and change of color when selected 
                    capitalize/transition allows for color change when hovering over
                    */}
                    {link.name}
                </Link>
            );
        })}
    </nav>
    );
};
export default Nav;