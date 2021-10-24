import { StylesConfig, ThemeConfig } from 'react-select'

export const SelectStyle: StylesConfig = {
    menu: base => ({
        ...base,
        backgroundColor: '#121212',
    }),
    option: (base, props) => ({
        ...base,
        backgroundColor: props.isFocused ? '#272727' : '',
        color: props.isSelected ? '#fffa' : '#fff',
    }),
    input: base => ({
        ...base,
        color: '#fff',
    }),
    singleValue: base => ({
        ...base,
        color: '#fff',
    }),
    control: base => ({
        ...base,
        backgroundColor: '#121212',
        color: '#fff',
        border: 0,
        boxShadow: 'none',
    }),
    multiValue: base => ({
        ...base,
        backgroundColor: '#040404',
    }),
    multiValueLabel: base => ({
        ...base,
        color: '#fff',
        textTransform: 'capitalize',
    }),
    clearIndicator: base => ({
        ...base,
        color: '#fff',
    }),
}

export const SelectTheme = {
    colors: {
        primary: '#040404',
        primary25: '#272727',
        primary50: '#040404',
        danger: '#fff',
        dangerLight: '#f00',
        neutral10: '#040404',
        neutral20: '#fff',
        neutral50: '#fff',
        neutral60: '#fff7',
    },
    borderRadius: 5,
} as ThemeConfig
