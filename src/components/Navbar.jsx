import React from 'react'

const Navbar = () => {
    return (

        <header className="flex w-full z-50 transition-all duration-300">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="/">
                            <span className='text-blue-500 font-bold text-3xl'>
                                Kino <span className='text-white'>Hub</span>
                            </span>
                        </a>
                    </div>
                    {/* Desktop Navbar */}
                    <nav className='hidden md:flex space-x-8'>
                        <a href="#" className="text-white hover:text-blue-500 transition-all font-medium ">Home</a>
                        <a href="#trending" className="text-white hover:text-blue-500 transition-all font-medium ">Trending</a>
                        <a href="#popular" className="text-white hover:text-blue-500 transition-all font-medium ">Popular</a>
                        <a href="#top-rated" className="text-white hover:text-blue-500 transition-all font-medium ">Top-rated</a>
                    </nav>
                    {/* Desktop Search */}
                    <div className="hidden md:block realtive search-conatiner">
                        <div className="realtive">
                            <input type="text" placeholder='Search.......'
                                className='bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50' />
                            {/* Contional rending */}

                            <div className="absolute right-3 top-2.5">
                                <svg
                                    className="w-4 h-4 text-neutral-400 animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    ></path>
                                </svg>
                            </div>
                            {/* Else */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Navbar