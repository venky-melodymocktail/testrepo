import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmFilterXs = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = { value: 'filter' }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1633_136"
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingRight: 7,
                    paddingBottom: 7,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1632_125"
                    style={{
                        height: 12,
                        borderRadius: 30,
                        backgroundColor: 'rgba(248,246,246,1)',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 10,
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <span
                        id="t18_1632_126"
                        style={{
                            fontFamily: 'Inter',
                            fontSize: 12,
                            fontWeight: 500,
                            color: 'rgba(113,113,113,1)',
                            letterSpacing: 0,
                            lineHeight: '14.522727012634277px',
                            textAlign: 'center',
                            marginLeft: 0,
                            marginRight: 7.5,
                        }}
                    >
                        {props.value}
                    </span>

                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/cross.png' !=
                    '' ? (
                        <img
                            id="t18_1632_127"
                            style={{
                                height: 9,
                                width: 9,
                                display: 'flex',
                                borderWidth: 0,
                                marginLeft: 7.5,
                                marginRight: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                props.onRemove && props.onRemove(e)
                            }}
                            src={
                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/cross.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    )
})
export default MmFilterXs
