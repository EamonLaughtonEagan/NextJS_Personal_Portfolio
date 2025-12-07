const Card = ({
    children,
    className = '',
}: {
    children: React.ReactNode,
    className?: string
}) => {
    return (
        <div className={`border border-line rounded-sm overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 p-5 ${className}`}>
            {children}
        </div>
    )
}

export default Card