export const Header = ({
    children,
    className = "",
}: {
    children: React.ReactNode,
    className?: string
}) => {
    return (
        <h1 className={`text-3xl font-bold text-blue-500 ${className}`}>
            {children}
        </h1>
    )
    
}