import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { logout } from 'actions';
import { AppDispatch } from 'store';
import { ReduxState } from 'types/ReduxState';
import logo from 'assets/logo.png';

const Header = () => {
    const history = useHistory();
    const [changeHeader, setChangeHeader] = useState(false)

    const dispatch = useDispatch<AppDispatch>();
    const { userInfo } = useSelector((state: ReduxState) => state.userLogin);

    const logoutHandler = () => dispatch(logout(() => history.push('/')));

    // Change header in scroll
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }

    window.addEventListener('scroll', onChangeHeader)
    return (
        <nav className={changeHeader ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"}>
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <a href="#" className="flex">
                    <img src={logo} alt="Logo" width="40" />
                    <span className="self-center text-lg font-semibold whitespace-nowrap">Comedian</span>
                </a>
                <div className="flex md:order-2">
                    {userInfo ? (
                        <>
                            <button type="button" className="mr-3 md:mr-0 bg-gray-800 flex text-sm rounded-full focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                                <span className="sr-only">Open user menu</span>
                                <img className="h-8 w-8 rounded-full" src={userInfo.avatar} alt="user photo" />
                            </button>
                            {/* Dropdown menu */}
                            <div className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="dropdown">
                                <div className="px-4 py-3">
                                    <span className="block text-sm">{userInfo.name}</span>
                                </div>
                                <ul className="py-1" aria-labelledby="dropdown">
                                    <li>
                                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Earnings</a>
                                    </li>
                                    <li>
                                        <button onClick={logoutHandler} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</button>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            <button type="button" className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3">Login</button>
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3">Sign Up</button>
                        </>
                    )}
                    <button data-collapse-toggle="mobile-menu-2" type="button" className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-2">
                    <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="#" className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Actors</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Genres</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
