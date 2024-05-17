import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmTimeSlots = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = { value: '5pm - 6pm', showActive: 'flex', showInActive: 'flex' }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1437_34"
                style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingTop: 0,
                    paddingBottom: 0,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1437_30"
                    style={{
                        borderRadius: 30,
                        backgroundColor: 'rgba(255,255,255,1)',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: props.showInActive,
                        itemSpacing: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 10,
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginTop: 0,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        props.onInActiveClick && props.onInActiveClick(e)
                    }}
                >
                    <span
                        id="t18_1437_31"
                        style={{
                            fontFamily: 'Inter',
                            fontSize: 13,
                            fontWeight: 400,
                            color: 'rgba(0,0,0,1)',
                            letterSpacing: 0,
                            lineHeight: '15.732954025268555px',
                            textAlign: 'left',
                        }}
                    >
                        {props.value}
                    </span>
                </div>

                <div
                    id="t18_1437_32"
                    style={{
                        borderRadius: 30,
                        backgroundColor: 'rgba(186,15,23,1)',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: props.showActive,
                        itemSpacing: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 10,
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginBottom: 0,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        props.onActiveClick && props.onActiveClick(e)
                    }}
                >
                    <span
                        id="t18_1437_33"
                        style={{
                            fontFamily: 'Inter',
                            fontSize: 13,
                            fontWeight: 400,
                            color: 'rgba(255,255,255,1)',
                            letterSpacing: 0,
                            lineHeight: '15.732954025268555px',
                            textAlign: 'left',
                        }}
                    >
                        {props.value}
                    </span>
                </div>
            </div>
        </div>
    )
})
export default MmTimeSlots
