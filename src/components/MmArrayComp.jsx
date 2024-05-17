import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmArrayComp = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = { value: 'Swimming Pool' }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1320_233"
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    itemSpacing: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
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
                    id="t18_1319_211"
                    style={{
                        borderRadius: 10,
                        backgroundColor: 'rgba(248,246,246,1)',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        itemSpacing: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 10,
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <span
                        id="t18_1319_212"
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: 20,
                            fontWeight: 400,
                            color: 'rgba(0,0,0,1)',
                            letterSpacing: 0,
                            lineHeight: '30px',
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
export default MmArrayComp
