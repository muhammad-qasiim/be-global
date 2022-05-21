import ReactModal from "react-modal"
import { useMediaQuery } from 'react-responsive'
import Input from '../../Common/Input' 

const ForgetPassword = ({ isOpen, setIsOpen }) => {
  const ismd = useMediaQuery({ query: '(min-width: 768px)' })

    const customStyles = {
        content: { position: 'relative', inset: '0', backgroundColor: '#FFFFFF', border: 'none', boxShadow: '0 0 20px rgb(0 0 0 / 5%)', borderRadius: '8px', width: ismd ? '36rem' : '96%', margin: '0 auto', padding: '0', overflow: 'hidden' }
    }

    return (
        <>

            <ReactModal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
            >
                <main className='auth-container max-w-md mx-auto' style={{boxShadow: 'none'}}>
                    <p className="text-center text-gray-600 mb-36"> Type in your email and we will send you instructions on how to reset your password. </p>
                    <div className='w-full flex flex-col md:flex-row items-center gap-3 mb-28'>
                        <div className="w-full">
                            <Input placeholder='Your Email' />
                        </div>
                        <button className="bg-red-500 w-full md:w-auto text-white whitespace-nowrap px-32 py-10 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" >Send</button>
                    </div>
                </main>
            </ReactModal>

        </>
    )
}

export default ForgetPassword;