import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmSelect = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        fieldName: 'Gender',
        showErrorMessage: 'none',
        errorMessage: 'Required Field',
        showStar: 'flex',
        inputBorderColor: 'black',
        options: ['option 1', 'option 2', 'option 3', 'option 4'],
        value: '',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1021_31"
                style={{
                    width: 575,
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    itemSpacing: 4,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <div
                    id="t18_1021_32"
                    style={{
                        width: 575,
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        itemSpacing: 10,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginTop: 0,
                        marginBottom: 2,
                    }}
                >
                    <div
                        id="t18_1021_33"
                        style={{
                            width: 340,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: props.showErrorMessage,
                            itemSpacing: 10,
                            paddingLeft: 0,
                            paddingRight: 5,
                            paddingTop: 2,
                            paddingBottom: 2,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <span
                            id="t18_1021_34"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 14,
                                fontWeight: 500,
                                color: 'rgba(186,15,23,1)',
                                letterSpacing: 0,
                                lineHeight: '16.94318199157715px',
                                textAlign: 'left',
                            }}
                        >
                            {props.errorMessage}
                        </span>
                    </div>
                </div>

                <div
                    id="t18_1021_35"
                    style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        itemSpacing: 16,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginTop: 2,
                        marginBottom: 0,
                    }}
                >
                    <div
                        id="t18_1021_36"
                        style={{
                            width: 214,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-end',
                            display: 'flex',
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginLeft: 0,
                            marginRight: 8,
                        }}
                    >
                        <div
                            id="t18_1021_37"
                            style={{
                                width: 208,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-end',
                                display: 'flex',
                                itemSpacing: 10,
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                            }}
                        >
                            <span
                                id="t18_1021_38"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 15,
                                    fontWeight: 700,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '18.15340805053711px',
                                    textAlign: 'right',
                                }}
                            >
                                {props.fieldName}
                            </span>
                        </div>

                        <div
                            id="t18_1021_39"
                            style={{
                                width: 6,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: props.showStar,
                                itemSpacing: 10,
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 4,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginRight: 0,
                            }}
                        >
                            <span
                                id="t18_1021_40"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 11,
                                    fontWeight: 600,
                                    color: 'rgba(255,130,75,1)',
                                    letterSpacing: 0,
                                    lineHeight: '13.3125px',
                                    textAlign: 'left',
                                }}
                            >
                                *
                            </span>
                        </div>
                    </div>

                    <select
                        name="cars"
                        id="t18_1021_41"
                        style={{
                            height: 48,
                            width: 325,
                            borderRadius: 4,
                            backgroundColor: 'rgba(255,255,255,1)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            display: 'flex',
                            itemSpacing: 20,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 0,
                            paddingBottom: 0,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 1,
                            borderColor: props.inputBorderColor,
                            borderStyle: 'solid',
                            marginLeft: 8,
                            marginRight: 0,
                            cursor: 'pointer',
                        }}
                        onChange={(val) => {
                            val = val.target.value

                            props.onChange && props.onChange(val)
                        }}
                    >
                        <option value="" disabled selected>
                            Select your option
                        </option>
                        {Array.isArray(props.options) &&
                            props.options.map((item, index) => {
                                return (
                                    <option
                                        value={item}
                                        selected={item == props.value}
                                    >
                                        {item}
                                    </option>
                                )
                            })}
                    </select>
                </div>
            </div>
        </div>
    )
})
export default MmSelect
