import Link from "next/link"

const InnerNavLink = ({
    href,
    isActive,
    children,
}: {
    href: string,
    isActive: boolean,
    children: React.ReactNode
}) => {
    return (
        <Link
            href={href}
            className={`p-3 text-sm border-line ${isActive ? "border border-b-0 bg-background border-t-blue-500" : ""} hover:bg-gray-800`}
        >
            {children}
        </Link>
    )
}

export default InnerNavLink