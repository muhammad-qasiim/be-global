import { Link } from 'react-router-dom';
import Input from '../../Common/Input'

const SignUp = ({ setAuthScreen }) => {

    return (
        <>

            <main className='auth-container max-w-md mx-auto'>
                <h6 className="text-xl font-semibold whitespace-nowrap flex items-center justify-center gap-2 mt-8 mb-34">
                    <img className="w-7" src="/assets/beglobal.svg" alt="" />
                    beglobal
                </h6>
                <div className='w-full'>
                    <Input placeholder='Username' className='mb-16' />
                    <Input placeholder='Email' className='mb-16' />
                    <Input placeholder='Password' className='mb-16' />
                    <Input placeholder='Confirm Password' className='mb-16' />
                </div>
                <button className="bg-red-500 text-white w-full mb-18 px-32 py-10 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" >Sign Up</button>
                <div className="Divider__container my-28"><span className='text-gray-500 font-medium'>or</span></div>
                <div className='SocialButton text-gray-600 font-medium rounded-5 mb-16'><img src="/assets/google.svg" alt="" /> Log in with Google</div>
                <div className='SocialButton text-gray-600 font-medium rounded-5 mb-16'><img src="/assets/fb.svg" alt="" /> Log in with Facebook</div>
            </main>

            <p className="text-center text-red-600 transition-all hover:text-red-700 mt-28"> <span className='text-gray-600'>Already have an account?</span> <span onClick={() => setAuthScreen('SignIn')} className='cursor-pointer'> Sign in now. </span> </p>

        </>
    )
}

export default SignUp;