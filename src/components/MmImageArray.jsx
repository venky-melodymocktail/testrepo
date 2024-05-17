import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmImageArray = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        url: 'url(https://upscready.s3.ap-south-1.amazonaws.com/d374f4e9-f2b1-4ff0-96eb-e7036b73c12f.png)',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1320_232"
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
                    marginBottom: 0,
                }}
            >
                {props.url?.slice(4, -1).trim() != '' ? (
                    <img
                        id="t18_1320_231"
                        style={{
                            height: 245.423828125,
                            width: 378,
                            display: 'flex',
                            borderWidth: 0,
                        }}
                        src={props.url?.slice(4, -1).trim()}
                    ></img>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
})
export default MmImageArray
