"use client";
import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from './ui/input'
import { useRouter } from 'next/router'
import logo from "../public/images/bspLogo.jpg"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const pathname = usePathname();
  console.log(pathname === "/notice")
  const LINKS = [
    {
        label: "BSPHome",
        link: "/"
    },
    {
        label: "SAILNet",
        link: "/about",
        dropdown: [
            { label: "CMO", link: "/about/1" },
            { label: "CMO Bi Report", link: "/about/1" },
            { label: "Corporate Office", link: "/about/2" },
            { label: "IPSS", link: "/about/3" },
            { label: "MTI Ranchi", link: "/about/" },
            { label: "RDCIS Ranchi", link: "/about/3" },
            { label: "SAIL", link: "/about/3" },
        ],
    },
    {
        label: "Applications",
        link: "/team",
        dropdown: [
            { label: "DPMS (New)", link: "#" },  
            { label: "e-DPR", link: "#" },        
            { label: "e-Proc(SRM-7)", link: "#" }, 
            { label: "e-rake", link: "#" },        
            { label: "ICS Online", link: "#" },    
            { label: "ERP BI Report", link: "#" }, 
            { label: "MES", link: "#" },           
            { label: "e-Suraksha(New)", link: "#" },
            { label: "Uni Gate Pass", link: "#" }, 
            { label: "High Value Inventry at SAIL", link: "#" }, 
            { label: "OnLiFIT", link: "#" },       
            { label: "Online Q-Circle", link: "#" },
            { label: "Logbook", link: "#" },       
          ],
    },
    {
        label: "eSahyog",
        link: "/notice"
    },
    {
        label: "Emp. Corner",
        link: "/gallery",
        dropdown: [
            { label: "EPMS", link: "#" },  
            { label: "eAMS", link: "#" },        
            { label: "e-abhigyan", link: "#" }, 
            { label: "Agraj Samvad", link: "#" },    
            { label: "Register for Blood Donation", link: "#" }, 
            { label: "Online Property Return", link: "#" }, 
            { label: "Knowledge Management", link: "#" }, 
            { label: "Birthday", link: "#" },           
            { label: "e-Learning on NPS-PRAN", link: "#" }, 
            { label: "Air Ticket Booking (Balmer Lawrie)", link: "#" }, 
            { label: "Publications", link: "#" },        
            { label: "RTI", link: "#" },       
          ],
    },
    {
        label: "Webmail",
        link: "/events"
    },
    {
        label: "C&IT",
        link: "/contact"
    },
    {
        label: "Dept Website",
        link: "/contact"
    },
    {
        label: "Tel. Enq.",
        link: "/contact"
    },
    {
        label: "Important Links",
        link: "/contact"
    },
    {
        label: "About Us",
        link: "/contact",
        dropdown: [
            { label: "Dropdown Item 1", link: "/contact/1" },
            { label: "Dropdown Item 2", link: "/contact/2" },
            { label: "Dropdown Item 3", link: "/contact/3" }
        ],
    },
];
    return (
        <section id="" className=" z-40 bg-white-900 w-full bg-white  md:p-2">
            <header className="w-full lg:max-w-7xl lg:mx-auto flex items-center justify-center">
                <div>
                  <Link href="/" className="flex justify-center items-center ">
                    <div className='flex'>
                      <div className=''>
                        <Image src={logo} height={1000} width={1000} alt='Logo' className='w-10 md:w-[610px]'/>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className='flex flex-col mx-4'>
                    <div> <Input className='rounded-3xl h-6 border-spacing-0' id="firstname" placeholder="Search..." type="text" /></div>
                    <div className='text-[12px] text-center text-red-500 leading-6 font-medium'>
                        <p>Fire Brigade: 6222/940798666</p>
                        <p>Ambulance(MMP-1):62280/61409 </p>
                        <p>CISF:078828-55555,62111 Whatsapp:9407984916</p>
                        <Link href={"./"} className='text-blue-600'>Old BSPHome</Link>
                    </div>
                </div>  
            </header>
            <div className="border-t border-b border-gray-300 h-12 justify-center hidden lg:flex items-center">
                    {LINKS.map((item, idx) => {
                        return (
                            <Link
                                key={idx}
                                href={item.link}
                                className={`transition-all ${pathname === item.link ? "text-[#1843ef]" : "text-black"} px-2 h-full items-center justify-center flex duration-300`}>
                                {item.dropdown ? (
                                    <>
                                        <NavigationMenu>
                                          <NavigationMenuList>
                                            <NavigationMenuItem>
                                              <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                                              <NavigationMenuContent className=''>

                                                <NavigationMenuLink>
                                                {item.dropdown.map((dropdownItem, index) => (
                                                    <div key={index} className='gap-2 flex-col hover:bg-zinc-200 my-1 rounded-sm text-nowrap p-2'>
                                                        <Link href={dropdownItem.link}>
                                                            {dropdownItem.label}
                                                        </Link>
                                                    </div>
                                                ))}
                                                </NavigationMenuLink>

                                              </NavigationMenuContent>
                                            </NavigationMenuItem>
                                          </NavigationMenuList>
                                        </NavigationMenu>
                                    </>
                                ) : (
                                    <NavigationMenu>
                                          <NavigationMenuList>
                                            {item.label}
                                          </NavigationMenuList>
                                        </NavigationMenu>
                                )}
                            </Link>
                    );
                    })}
                </div>
                <div className="lg:hidden transition-all">
                    <Sheet>
                        <SheetTrigger asChild>
                          <Menu></Menu>
                        </SheetTrigger>
                        <SheetContent side={"right"} className="text-slate-200 transition-all" >
                            <SheetHeader>
                              <SheetTitle className="text-[#f39e2f]">MENU</SheetTitle>
                                <SheetDescription className="flex flex-col items-center pt-12 gap-4 hover:bg-slate-300">
                                    {LINKS.map((item, idx) => {
                                        return (
                                            <Link
                                                key={idx}
                                                href={item.link}
                                                className="transition-all duration-300 text-lg"
                                            >
                                                {item.label}
                                            </Link>
                                        );
                                    })}
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </section>
    );
};

export default Navbar;