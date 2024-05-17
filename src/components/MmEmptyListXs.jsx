import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmEmptyListXs = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = { display: 'flex' }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1601_440"
                style={{
                    height: 'auto',
                    width: 400,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    itemSpacing: 30,
                    paddingLeft: 0,
                    paddingRight: 0,
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
                    id="t18_1601_441"
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: props.display,
                        itemSpacing: 30,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/emptyList.png' !=
                    '' ? (
                        <img
                            id="t18_1601_442"
                            style={{
                                height: 145,
                                width: 223,
                                display: 'flex',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 15,
                            }}
                            src={
                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/emptyList.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <div
                        id="t18_1601_443"
                        style={{
                            height: 52,
                            width: 181,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 5,
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 15,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_1601_444"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 14,
                                fontWeight: 500,
                                color: 'rgba(0,0,0,1)',
                                letterSpacing: 0,
                                lineHeight: '16.94318199157715px',
                                textAlign: 'left',
                                marginTop: 0,
                                marginBottom: 2.5,
                            }}
                        >
                            No records found
                        </span>

                        <div
                            id="t18_1601_445"
                            style={{
                                height: 30,
                                width: 181,
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
                                marginTop: 2.5,
                                marginBottom: 0,
                            }}
                        >
                            <span
                                id="t18_1601_446"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: 'rgba(167,167,167,1)',
                                    letterSpacing: 0,
                                    lineHeight: '14.522727012634277px',
                                    textAlign: 'center',
                                }}
                            >
                                We can’t find any item matching your search
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmEmptyListXs
