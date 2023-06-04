import Link from "next/link";

export function SLink({ className = '', ...props }) {
    const sizeClasses = "px-3 py-3 font-bold"
    const colorClasses = "hover:bg-slate-100"

    return <Link
        href={""}
        className={` rounded-full
        ${colorClasses} ${sizeClasses} ${className}`}
        {...props}
    ></Link>
}