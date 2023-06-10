import { useSession, signIn, signOut } from "next-auth/react"
import { SLink } from "./Link"
import { Button } from "./Button"
import { GrHomeRounded } from "react-icons/gr"
import { ConnectButton } from "web3uikit"


export default function Navbar() {
    const { data: session } = useSession()
    const user = session?.user

    return <>
        <nav className="shadow-sm">
            <ul className="flex justify-between items-center h-16">
                <div className="px-2">
                    <li>
                        <SLink href='/' className="flex items-center">
                            <GrHomeRounded className="w-8" />
                            Home
                        </SLink>
                    </li>
                </div>
                <div className="flex w-100 justify-around items-center">
                    <li>
                        <SLink href='/about'>About</SLink>
                    </li>
                    <li>
                        <ConnectButton moralisAuth={false} />
                    </li>
                    {user != null && (
                        <li>
                            <SLink href={`/profiles/${user.email}`}>Profile</SLink>
                        </li>
                    )}
                    {user == null ? (
                        <li>
                            <Button onClick={() => signIn()}>Sign In</Button>
                        </li>
                    ) : (
                        <li>
                            <Button onClick={() => signOut()}>Sign Out</Button>
                        </li>
                    )}
                </div>
            </ul>
        </nav >
    </>
}