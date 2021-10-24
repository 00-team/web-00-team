import React, { FC, useEffect } from 'react'

// comons
import Button from '../common/Button'

// icons
import { HexCloseIcon } from '../common/HexIcon'

// select
import Select from 'react-select'
import { SelectStyle, SelectTheme } from '../utils'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
// models
import { ProjectTagsList, ProjectStatusList } from '../../redux/models/Projects'
import { StatusType, VersionType, TagsType } from '../../redux/models/Filters'
// actions
import {
    FilterStatus,
    FilterTags,
    FilterVersion,
    CkearFilters,
    GetProject,
} from '../../redux/actions'

interface FiltersProps {
    show: boolean
    close: () => void
}

// options
const VersionOpt = [
    { value: 'release', label: 'Release' },
    { value: 'beta', label: 'Beta' },
]

const CategoryOpt = ProjectTagsList.map(tag => ({
    value: tag,
    label: tag,
}))

const StatusOpt = ProjectStatusList.map(status => ({
    value: status,
    label: status,
}))

const Filters: FC<FiltersProps> = ({ show, close }) => {
    const dispatch = useDispatch()
    const FiltersState = useSelector((state: RootState) => state.Filters)

    useEffect(() => {
        console.log(FiltersState)
    }, [FiltersState])

    const ApplayFilters = () => {
        dispatch(GetProject())
    }

    const ClearFilters = () => {
        dispatch(CkearFilters())
        dispatch(GetProject())
    }

    return (
        <div
            className='filters-container'
            style={show ? { transform: 'translateX(0%)' } : {}}
        >
            <div className={`close-btn`} onClick={close}>
                <HexCloseIcon />
            </div>

            <h2 className='title'>Filters</h2>

            <div className='current-filters'>
                <span>Version: {FiltersState.version}</span>
                <span>Status: {FiltersState.status}</span>
                <span className='tags'>
                    Category:
                    {FiltersState.tags && (
                        <ul>
                            {FiltersState.tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                        </ul>
                    )}
                </span>
            </div>

            <div className='filter'>
                <span className='type'>Version:</span>
                <div className='option'>
                    <Select
                        options={VersionOpt}
                        styles={SelectStyle}
                        theme={SelectTheme}
                        onChange={value =>
                            value &&
                            dispatch(
                                FilterVersion(
                                    (value as { value: VersionType }).value
                                )
                            )
                        }
                        isClearable={true}
                    />
                </div>
            </div>
            <div className='filter'>
                <span className='type'>Status:</span>
                <div className='option'>
                    <Select
                        options={StatusOpt}
                        styles={SelectStyle}
                        theme={SelectTheme}
                        onChange={value =>
                            value &&
                            dispatch(
                                FilterStatus(
                                    (value as { value: StatusType }).value
                                )
                            )
                        }
                        isClearable={true}
                    />
                </div>
            </div>
            <div className='filter'>
                <span className='type'>Category:</span>
                <div className='option'>
                    <Select
                        options={CategoryOpt}
                        styles={SelectStyle}
                        isMulti={true}
                        theme={SelectTheme}
                        onChange={value =>
                            value &&
                            dispatch(
                                FilterTags(
                                    (value as { value: TagsType }[]).map(
                                        item => item.value
                                    )
                                )
                            )
                        }
                        isClearable={true}
                    />
                </div>
            </div>
            <div className='filter'>
                <span className='type'>Only Public Projects:</span>
            </div>

            <Button
                children='Applay Filters'
                classname='applay-btn'
                onClick={() => ApplayFilters()}
            />
            <Button
                children='Clear All'
                classname='clear-btn'
                onClick={() => ClearFilters()}
            />
        </div>
    )
}

export default Filters
