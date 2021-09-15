import React from 'react'

// helmet
import { Helmet } from 'react-helmet'

// favicon
import favicon from '../img/favicon.ico'

// icon
import icon from '../img/00.png'

const Head = ({ SiteName }) => {
    return (
        <Helmet>
            <meta charSet='utf-8' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0, shrink-to-fit=no'
            />
            <meta name='theme-color' content='#FFFFFF' />
            <meta name='og:locale' content='en_US' />
            <meta name='og:image:height' content='640' />
            <meta property='og:image:width' content='640' />
            <meta property='og:image' content={icon} />
            <meta property='og:title' content={`${SiteName} Page`} />
            <meta property='og:site_name' content={`${SiteName}`} />
            <meta property='og:description' content='a Team of Creators ...' />
            <meta
                name='keywords'
                content='00 Team,github 00 Team,00 Team Page'
            />
            <meta property='og:url' content='https://web-00-team.web.app/' />
            <meta property='og:type' content='website' />
            <meta name='copyright' content={`${SiteName}`} />

            <link rel='shortcut icon' href={favicon} type='image/x-icon' />

            <title>{SiteName}</title>
        </Helmet>
    )
}

Head.defaultProps = {
    SiteName: '00 Team',
}

export default Head
