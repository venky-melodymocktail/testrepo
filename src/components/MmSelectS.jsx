import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmSelectS = observer((mainprops) => {
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
                id="t18_1051_4819"
                style={{
                    width: 314,
                    flexDirection: 'column',
                    alignItems: 'flex-start',
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
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <div
                    id="t18_1051_4820"
                    style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        itemSpacing: 2,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginTop: 0,
                        marginBottom: 3,
                    }}
                >
                    <div
                        id="t18_1051_4821"
                        style={{
                            width: 314,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                            marginBottom: 1,
                        }}
                    >
                        <div
                            id="t18_1051_4822"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
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
                                marginLeft: 0,
                            }}
                        >
                            <span
                                id="t18_1051_4823"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'left',
                                }}
                            >
                                {props.fieldName}
                            </span>
                        </div>

                        <div
                            id="t18_1057_4878"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: props.showStar,
                                itemSpacing: 10,
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 3,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginRight: 0,
                            }}
                        >
                            <div
                                id="t18_1051_4824"
                                style={{
                                    width: 5,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
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
                                }}
                            >
                                <span
                                    id="t18_1051_4825"
                                    style={{
                                        fontFamily: 'Raleway',
                                        fontSize: 13,
                                        fontWeight: 700,
                                        color: 'rgba(255,130,75,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.26200008392334px',
                                        textAlign: 'left',
                                    }}
                                >
                                    *
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_1051_4826"
                        style={{
                            width: 309,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: props.showErrorMessage,
                            itemSpacing: 10,
                            paddingLeft: 0,
                            paddingRight: 5,
                            paddingTop: 0,
                            paddingBottom: 0,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 1,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_1051_4827"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 11,
                                fontWeight: 500,
                                color: 'rgba(186,15,23,1)',
                                letterSpacing: 0,
                                lineHeight: '13.3125px',
                                textAlign: 'left',
                            }}
                        >
                            {props.errorMessage}
                        </span>
                    </div>
                </div>

                <select
                    name="cars"
                    id="t18_1051_4828"
                    style={{
                        height: 38,
                        width: 314,
                        borderRadius: 4,
                        backgroundColor: 'rgba(255,255,255,1)',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        itemSpacing: 20,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 1,
                        borderColor: props.inputBorderColor,
                        borderStyle: 'solid',
                        marginTop: 3,
                        marginBottom: 0,
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
    )
})
export default MmSelectS
