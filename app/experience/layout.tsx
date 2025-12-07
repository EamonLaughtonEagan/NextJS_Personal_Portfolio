"use client"

import { usePathname } from "next/navigation";
import InnerNavLink from "../components/InnerNavigation/InnerNavLink";
import { experiences } from "@/constants/experience/experience.properties";

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {

    const navLinks = [
        { href: "/experience", name: "Information" },
        ...experiences.map(exp => ({
            href: `/experience/${exp.title.toLowerCase().replace(/\s+/g, '-')}`,
            name: exp.title
        }))
    ]

    const pathName = usePathname()

    return (
        <div>
            <div className="bg-sidebar flex">
                {navLinks.map((link) => {
                    const isActive = pathName === link.href
                    return (
                        <InnerNavLink key={link.href} href={link.href} isActive={isActive}>
                            {link.name}
                        </InnerNavLink>
                    )
                })}
            </div>
            <div className="p-5">
                {children}
            </div>
        </div>
    )
}