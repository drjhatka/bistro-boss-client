import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar  z-20 fixed text-white font-bold opacity-75 bg-gradient-to-r from-[#4c4c42] to-[#060606] ">
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
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className=''>
                <Link className=' text-md lg:flex lg:flex-col  font-semibold' to={'/'}>
                    <span>BISTRO BOSS</span>
                    <span> Restaurant</span>
                </Link>

                </div>
            </div>
            <div className="lg:navbar-end md:navbar-center hidden md:flex md:flex-grow">
                <ul className="menu font-semibold menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Contact Us</Link></li>
                    <li><Link to='/'>Dashboard</Link></li>
                    <li><Link to='/our-menu'>Our Menu</Link></li>
                    <li><Link to='/our-shop'>Our Shop</Link></li>
                </ul>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                           <Link>Update Profile</Link>
                        </li>
                        <li><Link>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;