import React, { FC } from 'react'

import { Helmet } from 'react-helmet'

interface BusinessProps {}

const Business: FC<BusinessProps> = () => {
    return (
        <div style={{ color: '#fff', padding: 50 }}>
            <Helmet>
                <meta property='og:title' content='00 Team Business' />

                <meta
                    property='og:url'
                    content='https://web-00-team.web.app/business/'
                />
                <meta
                    property='og:description '
                    content='Business with 00 Team'
                />

                <meta name='keywords' content='00 Team Business,00 Team' />

                <title>00 Team Business</title>
            </Helmet>
            how to get into a business with 00 team (requesting a website
            design)
            <br />
            <br />
            <br />
            <br />
            workin on a nice text for terms and other things
        </div>
    )
}

export default Business
