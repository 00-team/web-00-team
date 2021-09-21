import React from 'react'

// icons
import { FcGoogle } from 'react-icons/fc'
import { SiFacebook } from 'react-icons/si'

// team img
import team_img from '../../img/00.png'

// css
import './sass/signup.scss'

function Signup() {
    return (
        <div className='sign-up'>
            <div className='card'>
                <div className='team'>
                    <div className='team-img'>
                        <img src={team_img} />
                    </div>
                </div>
                <div className='inps'>
                    <div className='username'>username</div>
                    <div className='password'>password</div>
                    <div className='icons'>
                        <FcGoogle />
                        <SiFacebook />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
