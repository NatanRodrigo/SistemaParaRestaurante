"use client";

import Image from "next/image";
import Link from "next/link";
import NavItem, { NavItemInterface } from "../Navitem";
import "./index.css";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { BiUser } from "react-icons/bi";






export default function Navbar() {
    const items: NavItemInterface[] = [
        {
            url: "/",
            label: "Inicio"
        },
        {
            url: "/about",
            label: "Pedido"
        },
        {
            url: "/services",
            label: "Cozinha"
        },
        {
            url: "/products",
            label: "Copa"
        },
        {
            url: "/contacts",
            label: "Entrega"
        },
        {
            url: "/admin",
            label: "Administrador"
        },
    ]


    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <header>
            <nav className="navbar">
            <Link href="/" className="logo">
                    <Image 
                        src="logs.svg" 
                        width={50}
                        height={50} 
                        alt="Logo do sistema"
                    />
                </Link>

                <ul className={`nav-items ${openMenu ? 'open' : ''}`}>
                    
                    {items.map((item, index)=> (
                      // eslint-disable-next-line react/jsx-key
                      <NavItem
                      key={index}
                      url={item.url}
                      label={item.label}
                      isActive={pathname === item.url}
                  />  
                    ))}


                    <button className="btn-mobile" onClick={() => setOpenMenu(!openMenu)}>
                        {openMenu ? <FaXmark /> : <FaBars  />}
                    </button>
                    
                    <button className="btn-default">
                    <BiUser />

                    </button>
                </ul>
            </nav>
        </header>
    );
}