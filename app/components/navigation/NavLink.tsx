import Link from "next/link"

const NavLink = ({ 
    href, 
    isActive, 
    children 
}: { 
    href: string
    isActive: boolean
    children: React.ReactNode 
}) => {
    return (
        <li className="h-full flex items-center">
            <Link 
                href={href}
                className={`
                    px-4 h-full flex items-center text-sm
                    border-l border-[#1e1e1e]
                    transition-colors relative
                    ${isActive 
                        ? 'bg-[#1e1e1e] text-white' 
                        : 'text-gray-400 hover:text-gray-200 hover:bg-[#2a2a2b]'
                    }
                `}
            >
                {children}
                {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500" />
                )}
            </Link>
        </li>
    )
}

export default NavLink