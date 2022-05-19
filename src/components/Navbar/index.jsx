import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Common/Input';
import { AiOutlineHeart, AiOutlineUser, AiOutlineEye, AiOutlineSetting, AiOutlineMenu } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import Sidebar from '../Sidebar';
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BiWallet } from "react-icons/bi";

const Navbar = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    const [activeLink, setActiveLink] = useState('Trending');
    const profileItems = [{ placeholder: '' }, { placeholder: 'Profile', icon: <AiOutlineUser className='text-17' /> }, { placeholder: 'Favourites', icon: <AiOutlineHeart /> }, { placeholder: 'Watchlist', icon: <AiOutlineEye className='text-17' /> }, { placeholder: 'My Collections', icon: <BsGrid /> }, { placeholder: 'Settings', icon: <AiOutlineSetting /> }]
    const Navigation = [{ placeholder: 'Explore', path: '/explore' }, { placeholder: 'Stats', path: '/' }, { placeholder: 'Resources', path: '/' }, { placeholder: 'Create', path: '/create' }]

    return (
        <>

            <nav className="py-13 sticky top-0 bg-white shadow-xl" style={{ zIndex: '999' }}>
                <div className="flex flex-wrap justify-between items-center mx-auto px-24 lg:px-99">
                    <Link to="/"> <span className="self-center text-xl font-semibold whitespace-nowrap flex items-center gap-2">
                        <img className="w-7" src="/assets/beglobal.svg" alt="" />
                        beglobal</span> </Link>

                    <div className="flex xl:order-1">
                        <div className="hidden relative mr-3 xl:mr-0 xl:block md:w-424">
                            <Input type="text" placeholder="Search items, collections, and accounts" startAdorment={<BiSearch className='mt-2' />} />
                        </div>
                        <button type="button" className="inline-flex items-center p-2 ml-14 text-sm text-gray-500 rounded-xl xl:hidden  focus:outline-none focus:text-gray-800" aria-controls="mobile-menu-3" aria-expanded="false">
                        <BiSearch className='mt-2' size="20" />
                        </button>
                        <button type="button" className="inline-flex items-center p-2 ml-14 text-sm text-gray-500 rounded-xl xl:hidden  focus:outline-none focus:text-gray-800" aria-controls="mobile-menu-3" aria-expanded="false">
                            <AiOutlineMenu size="20" />
                        </button>
                    </div>

                    <div className="hidden justify-between items-center w-full xl:flex xl:w-auto xl:order-2" id="mobile-menu-3">
                        <ul className="flex flex-col items-center mt-4 xl:flex-row xl:space-x-8 xl:mt-0 xl:text-sm xl:font-medium">
                            {
                                Navigation?.map(item => (
                                    <li onClick={() => setActiveLink(item?.placeholder)}>
                                        <Link to={item?.path}>
                                            <span className={`relative text-xl border-b-2 border-transparent cursor-pointer transition-all text-gray-500 hover:text-gray-800 ${activeLink === item?.placeholder && 'active text-gray-800 after:-bottom-6'}`}>
                                                {item?.placeholder}
                                            </span>
                                        </Link>
                                    </li>
                                ))
                            }
                            <li className='options-parent relative'>
                                <span className='relative text-3xl border-b-2 border-transparent cursor-pointer transition-all text-gray-500 hover:text-gray-800'>
                                    <CgProfile />
                                </span>
                                <section className='options-container rounded-bl-5 rounded-br-5 overflow-hidden absolute'>
                                    {
                                        profileItems?.map(item => (
                                            <>
                                                <li className={`flex items-center gap-3 pl-22 pr-28 py-12 ${item?.placeholder === '' ? 'bg-transparent border-b' : 'bg-white wallet-item border-b cursor-pointer border-l border-r'}`}>
                                                    <div className='text-16 text-gray-700'> {item?.icon} </div>
                                                    <span className="text-gray-700 whitespace-nowrap">
                                                        {item?.placeholder}
                                                    </span>
                                                </li>
                                            </>
                                        ))
                                    }
                                </section>
                            </li>
                            <li onClick={() => setToggleSidebar(!toggleSidebar)}>
                                <span className='relative text-3xl border-b-2 border-transparent cursor-pointer transition-all text-gray-500 hover:text-gray-800'>
                                    <BiWallet />
                                </span>
                            </li>
                            <Sidebar toggleSidebar={toggleSidebar} />
                        </ul>
                    </div>

                </div>
            </nav>
        </>

    )
}

export default Navbar;