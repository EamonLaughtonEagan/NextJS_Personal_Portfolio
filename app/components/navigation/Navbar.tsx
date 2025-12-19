"use client"

import { usePathname } from "next/navigation"
import NavLink from "./NavLink"
import Search from "./Search"
import { Minus, Square, X, Menu, Code2 } from "lucide-react"
import ThemeSwitcher from "../ThemeSwitcher"

const Navbar = () => {
    const navLinks = [
        { href: "/home", name: "Home" },
        { href: "/about", name: "About" },
        { href: "/experience", name: "Experience" },
        { href: "/skills", name: "Skills" },
        { href: "/projects", name: "Projects" },
        { href: "/hobbies", name: "Hobbies" },
        { href: "/contact", name: "Contact" },
    ]

    const pathName = usePathname()

    return (
        <nav className="flex justify-between items-center h-9 px-2 bg-sidebar">
            {/* Left section - Logo and Menu */}
            <div className="flex items-center gap-2">
                <Code2 size={20} className="text-blue-500" />
                <span className="text-sm font-semibold text-foreground/80">Portfolio</span>
            </div>

            <Search />

            {/* Right section - Search and Window Controls */}
            <div className="flex items-center gap-4">
                <ThemeSwitcher />
                <div className="flex items-center gap-3 ml-2">
                    <button 
                        className="hover:bg-[#404040] p-1 rounded transition-colors"
                        aria-label="Minimize"
                    >
                        <Minus size={14} className="text-foreground/70" />
                    </button>
                    <button 
                        className="hover:bg-[#404040] p-1 rounded transition-colors"
                        aria-label="Maximize"
                    >
                        <Square size={12} className="text-foreground/70" />
                    </button>
                    <button 
                        className="hover:bg-red-600 p-1 rounded transition-colors"
                        aria-label="Close"
                    >
                        <X size={14} className="text-foreground/70" />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar