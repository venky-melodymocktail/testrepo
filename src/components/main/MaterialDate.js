import _ from 'lodash'
import { makeAutoObservable } from 'mobx'
import { Observer, observer } from 'mobx-react'
import React, {
    Component,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'
// import SelectState from './select.state';

import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import {
    ThemeProvider,
    createTheme,
    outlinedInputClasses,
    styled,
    useTheme,
} from '@mui/material'

const MaterialDate = (props) => {
    const outerTheme = useTheme()

    const customTheme = (outerTheme) =>
        createTheme({
            palette: {
                mode: outerTheme.palette.mode,
            },
            components: {
                MuiTextField: {
                    styleOverrides: {
                        root: {
                            '--TextField-brandBorderColor': props.style
                                .borderColor
                                ? props.style.borderColor
                                : '#E0E3E7',
                            '--TextField-brandBorderHoverColor': props.style
                                .borderColor
                                ? props.style.borderColor
                                : '#E0E3E7',
                            '--TextField-brandBorderFocusedColor': props.style
                                .borderColor
                                ? props.style.borderColor
                                : '#E0E3E7',
                            '& label.Mui-focused': {
                                color: 'var(--TextField-brandBorderFocusedColor)',
                            },
                        },
                    },
                },
                MuiOutlinedInput: {
                    styleOverrides: {
                        notchedOutline: {
                            borderColor: 'var(--TextField-brandBorderColor)',
                        },
                        root: {
                            [`&:hover .${outlinedInputClasses.notchedOutline}`]:
                                {
                                    borderColor:
                                        'var(--TextField-brandBorderHoverColor)',
                                },
                            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]:
                                {
                                    borderColor:
                                        'var(--TextField-brandBorderFocusedColor)',
                                },
                        },
                    },
                },
                MuiFilledInput: {
                    styleOverrides: {
                        root: {
                            '&:before, &:after': {
                                borderBottom:
                                    '2px solid var(--TextField-brandBorderColor)',
                            },
                            '&:hover:not(.Mui-disabled, .Mui-error):before': {
                                borderBottom:
                                    '2px solid var(--TextField-brandBorderHoverColor)',
                            },
                            '&.Mui-focused:after': {
                                borderBottom:
                                    '2px solid var(--TextField-brandBorderFocusedColor)',
                            },
                        },
                    },
                },
                MuiInput: {
                    styleOverrides: {
                        root: {
                            '&:before': {
                                borderBottom:
                                    '2px solid var(--TextField-brandBorderColor)',
                            },
                            '&:hover:not(.Mui-disabled, .Mui-error):before': {
                                borderBottom:
                                    '2px solid var(--TextField-brandBorderHoverColor)',
                            },
                            '&.Mui-focused:after': {
                                borderBottom:
                                    '2px solid var(--TextField-brandBorderFocusedColor)',
                            },
                        },
                    },
                },
            },
        })

    useEffect(() => {}, [])

    // var childstyle = null
    // if(props.props.children.length>0){
    //     childstyle = props.props.children[0].style
    //     console.log(childstyle)
    // }
    const [value, setValue] = useState(props.value)

    const onChangeValue = (val) => {
        // props.rating = val
        setValue(val)
        // props.value = new Date(val)
        // alert(val)
        props.onChange && props.onChange(val)
    }

    return (
        <Observer>
            {() => (
                <div
                    style={{
                        ...props.style,
                        position: 'relative',
                        borderWidth: 0,
                        padding: 0,
                    }}
                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label={props.placeholder}
                            slotProps={{ textField: { fullWidth: true } }}
                            value={value}
                            onChange={(newValue) => {
                                onChangeValue(newValue)
                            }}
                            renderInput={(params) => (
                                <ThemeProvider theme={customTheme(outerTheme)}>
                                    <TextField
                                        {...params}
                                        // sx={{ width: props.style.width }}

                                        fullWidth
                                    />
                                </ThemeProvider>
                            )}
                        />
                    </LocalizationProvider>
                </div>
            )}
        </Observer>
    )
}
export default MaterialDate
