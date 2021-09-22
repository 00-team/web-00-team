import React, { useEffect, useState } from 'react'

// graphQl
import { request } from 'graphql-request'

// icons
import { FiGithub } from 'react-icons/fi'
import { SiDiscord } from 'react-icons/si'

// import css
import './sass/creators.scss'

const Creators = () => {
    const [Creators, setCreators] = useState([])

    useEffect(() => {
        const GetCreators = async () => {
            const { creators } = await request(
                'https://api-eu-central-1.graphcms.com/v2/cktv4n6f20x1g01xzbimo2rr7/master',
                `{
                    creators(locales: en) {
                        name
                        bio
                        duty
                        id
                        githubUsername
                        picture {
                            url
                        }
                        bgColor {
                            hex
                        }
                    }
                }`
            )

            setCreators(creators)
        }

        GetCreators()
    }, [])

    return (
        <div className='creators'>
            <div className='container'>
                <div className='header'>
                    <h1 id='creators'>Creators</h1>
                </div>
                <div className='cards'>
                    {Creators.map((item, index) => {
                        return (
                            <div className='card' key={index}>
                                <div
                                    className='creator-img'
                                    style={{
                                        backgroundColor: item.bgColor.hex,
                                    }}
                                >
                                    <img src={item.picture.url} />
                                </div>
                                <div className='text-container'>
                                    <h1 className='title'>{item.name}</h1>
                                    {item.duty.map((role, index) => (
                                        <h4 key={index} className='role'>
                                            {role}
                                        </h4>
                                    ))}

                                    <p className='discription'>{item.bio}</p>
                                    <div
                                        className='social github'
                                        onClick={e =>
                                            window.open(
                                                `https://github.com/${item.githubUsername}`
                                            )
                                        }
                                    >
                                        Github <FiGithub />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Creators
