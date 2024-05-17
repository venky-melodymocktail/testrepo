import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmPhotoUploadS = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        fieldName: 'Name',
        showErrorMessage: 'none',
        errorMessage: 'Required Field',
        showStar: 'flex',
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
                id="t18_1236_1735"
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
                    id="t18_1236_1736"
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
                        id="t18_1236_1737"
                        style={{
                            width: 314,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
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
                            id="t18_1236_1738"
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
                                id="t18_1236_1739"
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
                            id="t18_1236_1740"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
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
                                id="t18_1236_1741"
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
                                    id="t18_1236_1742"
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
                        id="t18_1236_1743"
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
                            id="t18_1236_1744"
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
                            This field is required
                        </span>
                    </div>
                </div>

                <input
                    id="t18_1236_1745"
                    style={{
                        height: 136,
                        width: 300,
                        borderRadius: 4,
                        backgroundColor: 'rgba(255,255,255,1)',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        itemSpacing: 20,
                        paddingLeft: 7,
                        paddingRight: 7,
                        paddingTop: 7,
                        paddingBottom: 7,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 1,
                        borderColor: 'rgba(207,206,206,1)',
                        borderStyle: 'solid',
                        marginTop: 3,
                        marginBottom: 0,
                        cursor: 'pointer',
                    }}
                    onChange={(val) => {
                        val = val.target.files

                        props.onImageSelected && props.onImageSelected(val)
                    }}
                    type="file"
                    multiple
                ></input>
            </div>
        </div>
    )
})
export default MmPhotoUploadS
