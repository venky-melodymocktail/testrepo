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

import { useTheme, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'

import { Input } from '@mui/material'

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
]

const MaterialSelect = (props) => {
    if (props.style.height) {
        props.style.minHeight = props.style.height
        delete props.style.height
    }

    const [items, setItems] = React.useState([])

    useEffect(() => {
        setItems(props.value || [])
        // alert(state.dataSource)
    }, [])

    const ITEM_HEIGHT = props.style.height || 45
    const ITEM_PADDING_TOP = 8
    const MenuProps = {
        PaperProps: {
            style: {
                minHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: props.style.width || 300,
            },
        },
    }

    function getStyles(name, items, theme) {
        return {
            fontWeight:
                items.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        }
    }

    const theme = useTheme()

    const handleChange = (event) => {
        const {
            target: { value },
        } = event
        setItems(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        )
        // action.onChange(items)
        if (props.onChange) {
            props.onChange(items)
        }
    }

    return (
        <Observer>
            {() => (
                <div style={{ ...props.style }}>
                    <FormControl sx={{ m: 1, width: props.style.width || 300 }}>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={items}
                            onChange={(event) => {
                                handleChange(event)
                            }}
                            input={<Input disableUnderline={true} />}
                            renderValue={(selected) => (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: 0.5,
                                    }}
                                >
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                            {props.options.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    // style={getStyles(name, items, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            )}
        </Observer>
    )
}
export default MaterialSelect
