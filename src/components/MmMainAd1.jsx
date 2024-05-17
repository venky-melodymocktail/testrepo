import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmMainAd1 = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = { imageUrl: 'url(https://placehold.co/600x400)' }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1361_203"
                style={{
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
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1361_199"
                    style={{
                        height: 583,
                        width: 1440,
                        backgroundImage: props.imageUrl,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-end',
                        display: 'flex',
                        itemSpacing: 0,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        props.onClick && props.onClick(e)
                    }}
                >
                    <div
                        id="t18_1361_200"
                        style={{
                            height: 533,
                            width: 1340,
                            backgroundImage:
                                'linear-gradient(-180deg, rgba(113,113,113,0) 0%,rgba(38,50,56,0) 54%,rgba(0,0,0,1) 100%)',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-end',
                            display: 'none',
                            itemSpacing: 10,
                            paddingLeft: 100,
                            paddingRight: 0,
                            paddingTop: 0,
                            paddingBottom: 50,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_1361_201"
                            style={{
                                borderRadius: 5,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 10,
                                paddingLeft: 40,
                                paddingRight: 40,
                                paddingTop: 15,
                                paddingBottom: 15,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                props.onClickHere && props.onClickHere(e)
                            }}
                        >
                            <div
                                id="t18_1361_204"
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
                                }}
                            >
                                <span
                                    id="t18_1361_202"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '24.204544067382812px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Click here
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmMainAd1
