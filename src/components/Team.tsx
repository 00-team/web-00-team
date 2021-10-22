import React, { FC } from 'react'

import Head from './common/Head'

import './sass/team.scss'

const Team: FC = () => {
    return (
        <div className='team'>
            <Head
                title='00 Team Creators'
                description='Creators of 00 Team'
                url='https://web-00-team.web.app/team/'
                keywords='00 Team Creators,00 Team'
            />
            <h1 className='title'>00 Team</h1>
            <span className='text'>believe your dreams</span>
        </div>
    )
}

export default Team
