import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"


export default function Navbar() {
    const { data: session } = useSession()
    const user = session?.user

    return <>
        <nav className="shadow-sm">
            <ul className="flex justify-between items-center h-10">
                <div>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                </div>
                <div className="flex w-80 justify-around">
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/mint'>Mint NFT</Link>
                    </li>
                    {user != null && (
                        <li>
                            <Link href={`/profiles/${user.email}`}>Profile</Link>
                        </li>
                    )}
                    {user == null ? (
                        <li>
                            <button onClick={() => signIn()}>Sign In</button>
                        </li>
                    ) : (
                        <li>
                            <button onClick={() => signOut()}>Sign Out</button>
                        </li>
                    )}
                </div>
            </ul>
        </nav>
    </>
}