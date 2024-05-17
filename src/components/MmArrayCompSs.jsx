import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmArrayCompSs = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = { value: 'Swimming Pool' }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1591_289"
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    itemSpacing: 10,
                    paddingLeft: 0,
                    paddingRight: 8,
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
                    id="t18_1591_287"
                    style={{
                        height: 24,
                        borderRadius: 7,
                        backgroundColor: 'rgba(248,246,246,1)',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        itemSpacing: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 8,
                        paddingBottom: 8,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <span
                        id="t18_1591_288"
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: 16,
                            fontWeight: 400,
                            color: 'rgba(0,0,0,1)',
                            letterSpacing: 0,
                            lineHeight: '24px',
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
export default MmArrayCompSs
