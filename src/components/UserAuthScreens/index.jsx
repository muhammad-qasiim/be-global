import { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const UserAuthScreens = () => {

    const [authScreen, setAuthScreen] = useState('SignIn')

    return (
        <>
            <section className='mt-99 relative'>
                <img className='absolute -top-10 left-0 hidden lg:block' src="/assets/left-graphic.png" alt="" />
                <img className='absolute -top-10 right-0 hidden lg:block' src="/assets/right-graphic.png" alt="" />
            </section>

            <section className="container mx-auto px-24 lg:px-99 mb-99">

                {
                    authScreen === 'SignUp' ? <SignUp setAuthScreen={setAuthScreen} /> : <SignIn setAuthScreen={setAuthScreen} />
                }

            </section>
        </>
    )
}

export default UserAuthScreens;