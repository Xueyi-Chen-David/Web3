export function Button({
    className = '',
    ...props
}) {
    const sizeClasses = "px-3 py-3 font-bold"
    const colorClasses = "hover:bg-slate-100"

    return <button
        className={`
            rounded-full
            ${colorClasses} ${sizeClasses} ${className}`}
        {...props}
    ></button>
}