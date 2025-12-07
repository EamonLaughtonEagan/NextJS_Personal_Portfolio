"use client"

import { usePathname } from "next/navigation";
import InnerNavLink from "../components/InnerNavigation/InnerNavLink";

export default function SkillsLayout({ children }: { children: React.ReactNode }) {

    const navLinks = [
        { href: "/skills", name: "Information" },
        { href: "/skills/technical", name: "Technical" },
        { href: "/skills/other", name: "Other" },
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