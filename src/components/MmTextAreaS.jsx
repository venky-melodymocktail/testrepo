import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmTextAreaS = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        fieldName: 'Name',
        showErrorMessage: 'none',
        errorMessage: 'Required Field',
        showStar: 'flex',
        wordLimit: '0/1400 words',
        showWordLimit: 'flex',
        inputBorderColor: 'rgba(207,206,206,1)',
        value: '',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1237_1754"
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <div
                    id="t18_1236_1719"
                    style={{
                        width: 314,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginTop: 0,
                        marginBottom: 2,
                    }}
                >
                    <div
                        id="t18_1236_1720"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                            marginBottom: 3,
                        }}
                    >
                        <div
                            id="t18_1236_1721"
                            style={{
                                width: 314,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 1,
                            }}
                        >
                            <div
                                id="t18_1236_1722"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                }}
                            >
                                <span
                                    id="t18_1236_1723"
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
                                id="t18_1236_1724"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: props.showStar,
                                    paddingBottom: 3,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginRight: 0,
                                }}
                            >
                                <div
                                    id="t18_1236_1725"
                                    style={{
                                        width: 5,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                >
                                    <span
                                        id="t18_1236_1726"
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
                            id="t18_1236_1727"
                            style={{
                                width: 309,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: props.showErrorMessage,
                                paddingRight: 5,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 1,
                                marginBottom: 0,
                            }}
                        >
                            <span
                                id="t18_1236_1728"
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

                    <textarea
                        id="t18_1236_1729"
                        value={props.value}
                        style={{
                            height: 136,
                            width: 300,
                            borderRadius: 4,
                            backgroundColor: 'rgba(255,255,255,1)',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingLeft: 7,
                            paddingRight: 7,
                            paddingTop: 7,
                            paddingBottom: 7,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 1,
                            borderColor: props.inputBorderColor,
                            borderStyle: 'solid',
                            marginTop: 3,
                            marginBottom: 0,
                            cursor: 'pointer',
                            itemSpacing: 20,
                            fontFamily: 'Inter',
                            fontSize: 10,
                            color: 'rgba(0,0,0,1)',
                            fontWeight: 400,
                            textAlign: 'left',
                        }}
                        onChange={(val) => {
                            val = val.target.value
                            props.onChange && props.onChange(val)
                        }}
                    ></textarea>
                </div>

                <div
                    id="t18_1237_1752"
                    style={{
                        width: 314,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: props.showWordLimit,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginTop: 2,
                        marginBottom: 0,
                    }}
                >
                    <span
                        id="t18_2122_2"
                        style={{
                            fontFamily: 'Inter',
                            fontSize: 11,
                            fontWeight: 400,
                            color: 'rgba(113,113,113,1)',
                            letterSpacing: 0,
                            lineHeight: '13.3125px',
                            textAlign: 'right',
                            marginLeft: 0,
                            marginRight: 1.5,
                        }}
                    >
                        {props.value.length}
                    </span>

                    <span
                        id="t18_2122_3"
                        style={{
                            fontFamily: 'Inter',
                            fontSize: 11,
                            fontWeight: 400,
                            color: 'rgba(113,113,113,1)',
                            letterSpacing: 0,
                            lineHeight: '13.3125px',
                            textAlign: 'right',
                            marginLeft: 1.5,
                            marginRight: 1.5,
                        }}
                    >
                        /
                    </span>

                    <span
                        id="t18_1237_1753"
                        style={{
                            fontFamily: 'Inter',
                            fontSize: 11,
                            fontWeight: 400,
                            color: 'rgba(113,113,113,1)',
                            letterSpacing: 0,
                            lineHeight: '13.3125px',
                            textAlign: 'right',
                            marginLeft: 1.5,
                            marginRight: 1.5,
                        }}
                    >
                        {props.wordLimit}
                    </span>

                    <span
                        id="t18_2123_4"
                        style={{
                            fontFamily: 'Inter',
                            fontSize: 11,
                            fontWeight: 400,
                            color: 'rgba(113,113,113,1)',
                            letterSpacing: 0,
                            lineHeight: '13.3125px',
                            textAlign: 'right',
                            marginLeft: 1.5,
                            marginRight: 0,
                        }}
                    >
                        words
                    </span>
                </div>
            </div>
        </div>
    )
})
export default MmTextAreaS
