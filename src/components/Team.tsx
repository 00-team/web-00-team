import React, { FC } from 'react'

import { Helmet } from 'react-helmet'

import './sass/team.scss'

const Team: FC = () => {
    return (
        <div className='team'>
            <Helmet>
                <meta property='og:title' content='00 Team Creators' />

                <meta
                    property='og:url'
                    content='https://web-00-team.web.app/team/'
                />
                <meta
                    property='og:description '
                    content='Creators of 00 Team'
                />

                <meta name='keywords' content='00 Team Creators,00 Team' />

                <title>00 Team Creators</title>
            </Helmet>
            <h1 className='title'>00 Team</h1>
            <span className='text'>believe your dreams</span>
        </div>
    )
}

export default Team
