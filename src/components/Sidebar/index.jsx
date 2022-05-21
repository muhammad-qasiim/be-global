import WalletConnectItem from '../ConnectWalletContainer/WalletConnectItem'
import { FaUserCircle } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
    return (
        <>
            <main className={`fixed bottom-0 right-0 left-0 z-10 transition-all ${toggleSidebar ? 'sidebar-container' : 'bg-transparent pointer-events-none'}`} style={{marginLeft: '0px', top: '4.4rem'}}>
                <aside className={`${toggleSidebar ? 'sidebar-open' : 'sidebar-close'}`}>
                    <section>
                        <div className="py-12 border-b flex gap-3 items-center">
                            <MdKeyboardArrowLeft onClick={() => setToggleSidebar(false)} className='text-gray-500 text-24 cursor-pointer' />
                            <FaUserCircle className="text-gray-500 text-26" />
                            <h3 className="font-bold text-gray-800 text-16">My wallet</h3>
                        </div>
                    </section>
                    <section>
                        <p className="mt-14 -mb-32 text-lg leading-relaxed text-gray-600 text-left">
                            Connect with one of our available <span className="text-red-600 cursor-pointer transition-all font-semibold"> wallet </span> providers or create a new one.
                        </p>
                        <WalletConnectItem />
                    </section>
                </aside>
            </main>
        </>
    )
}

export default Sidebar;
