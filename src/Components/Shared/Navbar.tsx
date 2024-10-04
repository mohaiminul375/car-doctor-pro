import Image from "next/image";
import Link from "next/link";
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
interface NavItem {
    title: string;
    path: string;
}

export default function Navbar() {
    const navItems: NavItem[] = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Contacts',
            path: '/contacts'
        },
    ]
    return (
        <nav className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navItems?.map(({ title, path }) => <Link
                                className='font-semibold hover:text-primary'
                                key={path}
                                href={path}>{title}</Link>)
                        }
                    </ul>
                </div>
                <div>
                    <Link href='/'>
                        <Image src='/assets/logo.svg' alt='logo' height={60} width={70} />
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex gap-5">
                {
                    navItems?.map(({ title, path }) => <Link
                        className='font-semibold hover:text-primary duration-300'
                        key={path}
                        href={path}>{title}</Link>)
                }
            </div>
            <div className="navbar-end">
                <IoSearchSharp className="text-xl"/>
                <IoCartOutline className="text-xl"/>
                <a className="ml-4 btn btn-outline btn-primary hover:text-white">Appointment</a>
            </div>
        </nav>
    )
}
