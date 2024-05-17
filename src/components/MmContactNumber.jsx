import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmContactNumber = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        fieldName: 'Contact Number',
        showErrorMessage: 'none',
        errorMessage: 'Required Field',
        showStar: 'flex',
        inputBorderColor: 'black',
        value: '',
        countryCodes: ['+1', '+91'],
        selectPlaceHolder: '+91',
        countryCodeValue: '',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1027_676"
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
                    id="t18_1027_677"
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
                        id="t18_1027_678"
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
                            id="t18_1027_679"
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
                    id="t18_1027_680"
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
                        id="t18_1027_681"
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
                            id="t18_1027_682"
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
                                id="t18_1027_683"
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
                            id="t18_1027_684"
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
                                id="t18_1027_685"
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

                    <div
                        id="t18_1027_686"
                        style={{
                            height: 48,
                            width: 335,
                            borderRadius: 4,
                            backgroundColor: 'rgba(255,255,255,1)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 10,
                            paddingLeft: 0,
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
                        }}
                    >
                        <div
                            id="t18_1045_4763"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 10,
                                paddingLeft: 15,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 5,
                            }}
                        >
                            <select
                                name="cars"
                                id="t18_1027_690"
                                style={{
                                    width: 52,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    itemSpacing: 6,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    cursor: 'pointer',
                                }}
                                onChange={(val) => {
                                    val = val.target.value

                                    props.onChangeCountryCode &&
                                        props.onChangeCountryCode(val)
                                }}
                            >
                                <option value="" disabled selected>
                                    Select your option
                                </option>
                                {Array.isArray(props.countryCodes) &&
                                    props.countryCodes.map((item, index) => {
                                        return (
                                            <option
                                                value={item}
                                                selected={
                                                    item ==
                                                    props.countryCodeValue
                                                }
                                            >
                                                {item}
                                            </option>
                                        )
                                    })}
                            </select>
                        </div>

                        <input
                            id="t18_1027_693"
                            placeholder={props.fieldName}
                            value={props.value}
                            style={{
                                height: 39,
                                width: 255,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
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
                                marginLeft: 5,
                                marginRight: 0,
                                cursor: 'pointer',
                                fontFamily: 'Inter',
                                fontSize: 14,
                                color: 'rgba(0,0,0,1)',
                                fontWeight: 400,
                                textAlign: 'left',
                            }}
                            onChange={(val) => {
                                val = val.target.value

                                props.onChange && props.onChange(val)
                            }}
                            type="text"
                        ></input>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmContactNumber
