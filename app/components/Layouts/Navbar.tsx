'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const menuItems = [
        { label: 'Inicio', href: '/' },
        { label: 'Nosotros', href: '/about' },
        { label: 'Propiedades', href: '/ownership' },
        { label: 'Contacto', href: '/contact' },
    ];

    return (
        <header className="bg-white sticky top-0 z-50 shadow">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/">
                            <Image src="/Navbar/alt94.webp" alt="Logo" width={50} height={50} className="rounded-full" />
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    className={`inline-block px-4 py-2 rounded-full shadow-sm transition-all duration-200 ${isActive
                                            ? 'bg-gray-300 text-gray-800 font-medium'
                                            : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-800'
                                        }`}
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="relative group rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 transition-colors duration-200">
                            <UserCircleIcon className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-800"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="flex items-center gap-4 px-4 pt-4 pb-2">
                        <span className="font-medium text-gray-700">Alt94 - Inmobiliaria</span>
                    </div>
                    <nav className="px-4 pb-4">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`block px-4 py-2 text-gray-600 transition-colors duration-200 rounded-md m-2 ${isActive
                                            ? 'bg-gray-300 text-gray-800 font-medium'
                                            : 'bg-gray-100 hover:bg-gray-200'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <button
                            className="block mt-2 rounded-md w-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 text-center hover:bg-gray-200 transition-colors duration-200"
                            onClick={() => null}
                            disabled
                        >
                            <div className="flex items-center justify-center gap-2">
                                <UserCircleIcon className="w-4 h-4" />
                                <span>Entrar</span>
                            </div>
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
} 