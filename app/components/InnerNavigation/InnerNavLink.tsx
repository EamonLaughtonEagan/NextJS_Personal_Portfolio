import Link from "next/link"

interface InnerNavLinkProps {
    href: string
    isActive: boolean
    children: React.ReactNode
    onClick?: () => void
    className?: string
}

const InnerNavLink = ({ href, isActive, children, onClick, className = "" }: InnerNavLinkProps) => {
    return (
        <Link 
            href={href}
            onClick={onClick}
            className={`
                px-4 py-2 text-sm whitespace-nowrap border-b-2 transition-colors
                ${isActive 
                    ? "border-blue-500 text-white bg-gray-700" 
                    : "border-transparent text-gray-400 hover:text-white hover:bg-gray-700"
                }
                ${className}
            `}
        >
            {children}
        </Link>
    )
}

export default InnerNavLink