import React, { useState } from 'react'

// css
import './scss/projectsslider.scss'

// icons
import { FcPrevious, FcNext } from 'react-icons/fc'

import { ProjectModel } from '../../redux/models/Projects'

interface ProjectsSliderProps {
    images: ProjectModel[]
}

const ProjectsSlider = ({ images }: ProjectsSliderProps) => {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex === images.length - 1) {
            setSlideIndex(0)
        } else {
            setSlideIndex(slideIndex + 1)
        }
    }

    const prevSlide = () => {
        if (slideIndex === 0) {
            setSlideIndex(images.length - 1)
        } else {
            setSlideIndex(slideIndex - 1)
        }
    }

    const getYourClass = (index: number) => {
        if (index === slideIndex) return ' current'
        else if (
            index === slideIndex + 1 ||
            (slideIndex === images.length - 1 && index === 0)
        )
            return ' next'
        else if (
            index === slideIndex - 1 ||
            (slideIndex === 0 && index === images.length - 1)
        )
            return ' previous'
        else return ''
    }

    // const interval = setInterval(() => {
    //     nextSlide();
    // }, 2000);

    return (
        <div className='slider'>
            <div className='btns prev'>
                <FcPrevious size={60} onClick={prevSlide} />
            </div>
            <div className='btns next'>
                <FcNext size={60} onClick={nextSlide} />
            </div>
            <div className='container'>
                {images.map((obj, index) => {
                    console.log(obj, index)
                    return (
                        <div
                            className={'card-slide' + getYourClass(index)}
                            key={index}
                            onClick={() => setSlideIndex(index)}
                        >
                            <div className='overlay'></div>
                            <div className={'card'}>
                                <div className='title'>{obj.title}</div>
                                <img className='img' src={obj.thumbnail.url} />
                                <div className='discription fa'>
                                    <h5>{obj.description.markdown}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectsSlider
