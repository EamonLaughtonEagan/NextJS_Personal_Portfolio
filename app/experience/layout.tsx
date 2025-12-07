"use client"

import { usePathname } from "next/navigation";
import InnerNavLink from "../components/InnerNavigation/InnerNavLink";
import { experiences } from "@/constants/experience/experience.properties";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const navLinks = [
        { href: "/experience", name: "Information" },
        ...experiences.map(exp => ({
            href: `/experience/${exp.title.toLowerCase().replace(/\s+/g, '-')}`,
            name: exp.title
        }))
    ]

    const pathName = usePathname()
    const activeLink = navLinks.find(link => link.href === pathName)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div>
            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex bg-sidebar overflow-x-auto">
                {navLinks.map((link) => {
                    const isActive = pathName === link.href
                    return (
                        <InnerNavLink key={link.href} href={link.href} isActive={isActive}>
                            {link.name}
                        </InnerNavLink>
                    )
                })}
            </div>

            {/* Mobile Dropdown - Visible only on mobile */}
            <div ref={dropdownRef} className="md:hidden bg-sidebar border-b border-line relative">
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-3 flex items-center justify-between text-white hover:bg-gray-700 transition-colors"
                >
                    <span className="font-medium truncate">
                        {activeLink?.name || "Select Experience"}
                    </span>
                    <ChevronDown 
                        size={20} 
                        className={`transform transition-transform flex-shrink-0 ml-2 ${
                            isDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 bg-sidebar border-b border-line shadow-lg z-10 max-h-[60vh] overflow-y-auto">
                        {navLinks.map((link) => {
                            const isActive = pathName === link.href
                            return (
                                <InnerNavLink 
                                    key={link.href} 
                                    href={link.href} 
                                    isActive={isActive}
                                    onClick={() => setIsDropdownOpen(false)}
                                    className="block w-full text-left"
                                >
                                    {link.name}
                                </InnerNavLink>
                            )
                        })}
                    </div>
                )}
            </div>

            <div className="p-5">
                {children}
            </div>
        </div>
    )
}