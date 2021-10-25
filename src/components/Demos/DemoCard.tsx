import React, { FC } from 'react'

// packages
import Markdown from 'markdown-to-jsx'

// utils
import { go } from '../utils'

// redux
import { ProjectModel } from 'src/redux/models/Projects'

// icons
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'
import { ImArrowUp2 } from '@react-icons/all-files/im/ImArrowUp2'

// commons
import Button, { ButtonWithArrow } from '../common/Button'
import Toucher from '../common/Toucher'

import './demo-card.scss'

interface DemoCardProps {
    demo: ProjectModel
    index: number
    showDetail: string
    setshowDetail: React.Dispatch<React.SetStateAction<string>>
}

const DemoCard: FC<DemoCardProps> = ({
    demo,
    index,
    setshowDetail,
    showDetail,
}) => {
    const onToucher = (m: number) => {
        if (m > 70) {
            setshowDetail(`${index}`)
        } else if (m < -70) {
            setshowDetail('')
        }
    }

    return (
        <Toucher
            className='demo-card'
            onToucher={m => onToucher(m)}
            ToucherDir='Y'
        >
            <div
                style={
                    demo.thumbnail
                        ? {
                              backgroundImage: `url(${demo.thumbnail.url})`,
                          }
                        : {}
                }
                className={`thumbnail ${showDetail ? "active" : ""}`}
            ></div>
            <div
                onMouseUp={() => setshowDetail(showDetail ? '' : `${index}`)}
                className={`details ${
                    showDetail === `${index}` ? 'focus' : ''
                }`}
            >
                <div
                    className={`arrow-up ${
                        showDetail === `${index}` ? 'active' : ''
                    }`}
                >
                    <ImArrowUp2 size={24} className='arrow-up-icon' />
                </div>
                <h2 className='title'>{demo.title}</h2>

                {/* description  */}
                {(demo.description && (
                    <Markdown className='description'>
                        {demo.description.markdown}
                    </Markdown>
                )) || <div className='description'>No Desc</div>}
                <div className='see-more'>
                    {demo.git && (
                        <Button
                            classname='giticon'
                            onClick={() => go(demo.git ? demo.git : '')}
                        >
                            GitHub <FiGithub />
                        </Button>
                    )}

                    <ButtonWithArrow
                        onClick={() => go(`/project/${demo.projectSlug}`)}
                    >
                        See More
                    </ButtonWithArrow>
                </div>
            </div>
        </Toucher>
    )
}

export default DemoCard
