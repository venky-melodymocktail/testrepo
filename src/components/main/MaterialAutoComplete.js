import _, { isArray } from 'lodash'
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

import {
    Autocomplete,
    Input,
    TextField,
    ThemeProvider,
    createTheme,
    outlinedInputClasses,
    useTheme,
} from '@mui/material'

const MaterialAutoComplete = (props) => {
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

    return (
        <Observer>
            {() => (
                <div
                    style={{
                        ...props.style,
                        paddingLeft: 0,
                        paddingRight: 0,
                        borderWidth: 0,
                    }}
                >
                    <Autocomplete
                        disablePortal
                        filterOptions={(x) => x}
                        id="combo-box-demo"
                        onChange={(event, newValue) => {
                            // setOptions(newValue ? [newValue, ...options] : options);
                            // setValue(newValue);
                            props.onSelect && props.onSelect(newValue)
                        }}
                        onInputChange={(event, newInputValue) => {
                            // alert(newInputValue);

                            props.onChange && props.onChange(newInputValue)
                        }}
                        options={props.options}
                        sx={{ width: props.style.width, borderColor: 'red' }}
                        renderInput={(params) => (
                            <ThemeProvider theme={customTheme(outerTheme)}>
                                {' '}
                                <TextField
                                    {...params}
                                    fullWidth
                                    label={props.placeholder}
                                />
                            </ThemeProvider>
                        )}
                    />
                </div>
            )}
        </Observer>
    )
}
export default MaterialAutoComplete
