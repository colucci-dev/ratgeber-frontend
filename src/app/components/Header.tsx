import Image from "next/image";
import { useState } from "react";
import MenuIcon from "./MenuIcon";


export default function Header(props: any) {
    const baseURL = process.env.NEXT_API;
    return (
        <header>
            <nav className="navbar">
                <a href="/" className="nav-logo">
                    Ratgeber
                </a>
            <ul className="nav-menu">
                <li className="nav-item"><a href="/creator">Creator</a></li>
                <li className="nav-item"><a href="/blog">Blog</a></li>
                <li className="nav-item"><a href="/glossar">Glossar</a></li>
            </ul>
            <MenuIcon />
            </nav>
        </header>
    )
}