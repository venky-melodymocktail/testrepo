import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmBookingServiceXs = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        services: {
            studyAbroadBorderColor: 'rgba(113,113,113,1)',
            visaImmigrationBOrderColor: 'rgba(113,113,113,1)',
            studyAbroadText: 'rgba(113,113,113,1)',
            visaText: 'rgba(113,113,113,1)',
        },
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1612_734"
                style={{
                    height: 53,
                    width: 400,
                    backgroundColor: 'rgba(248,246,246,1)',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    itemSpacing: 10,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 15,
                    paddingBottom: 15,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    borderColor: 'rgba(207,206,206,1)',
                    borderBottomWidth: 1,
                    borderStyle: 'solid',
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <div
                    id="t18_1612_735"
                    style={{
                        width: 131,
                        borderRadius: 7,
                        backgroundColor: 'rgba(255,255,255,1)',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        itemSpacing: 4,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 10,
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 1,
                        borderColor: props.services.studyAbroadBorderColor,
                        borderStyle: 'solid',
                        marginLeft: 0,
                        marginRight: 5,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        dl.functions.viewsPlugin.showView('studyabroadbookings')
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()
                        dl.changes.bookingselector.services.studyAbroadBorderColor =
                            'rgba(186,15,23,1)'
                        dl.changes.bookingselector.services.visaImmigrationBOrderColor =
                            'rgba(113,113,113,1)'
                        dl.changes.bookingselector.services.studyAbroadText =
                            'rgba(186,15,23,1)'
                        dl.changes.bookingselector.services.visaText =
                            'rgba(113,113,113,1)'
                    }}
                >
                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/studyAbroadActive.png' !=
                    '' ? (
                        <img
                            id="t18_1612_736"
                            style={{
                                height: 37,
                                width: 37,
                                display: 'flex',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 2,
                            }}
                            src={
                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/studyAbroadActive.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <div
                        id="t18_1615_741"
                        style={{
                            width: 90,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            itemSpacing: 10,
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginLeft: 2,
                            marginRight: 0,
                        }}
                    >
                        <span
                            id="t18_1612_737"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 14,
                                fontWeight: 500,
                                color: props.services.studyAbroadText,
                                letterSpacing: 0,
                                lineHeight: '22px',
                                textAlign: 'center',
                            }}
                        >
                            Study abroad
                        </span>
                    </div>
                </div>

                <div
                    id="t18_1612_738"
                    style={{
                        width: 168,
                        borderRadius: 7,
                        backgroundColor: 'rgba(255,255,255,1)',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        itemSpacing: 4,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 10,
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 1,
                        borderColor: props.services.visaImmigrationBOrderColor,
                        borderStyle: 'solid',
                        marginLeft: 5,
                        marginRight: 0,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        dl.functions.viewsPlugin.showView('visabookings')
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()
                        dl.changes.bookingselector.services.studyAbroadBorderColor =
                            'rgba(113,113,113,1)'
                        dl.changes.bookingselector.services.visaImmigrationBOrderColor =
                            'rgba(186,15,23,1)'
                        dl.changes.bookingselector.services.studyAbroadText =
                            'rgba(113,113,113,1)'
                        dl.changes.bookingselector.services.visaText =
                            'rgba(186,15,23,1)'
                    }}
                >
                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/visaActive.png' !=
                    '' ? (
                        <img
                            id="t18_1612_739"
                            style={{
                                height: 37,
                                width: 37,
                                display: 'flex',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 2,
                            }}
                            src={
                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/visaActive.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <div
                        id="t18_1615_742"
                        style={{
                            width: 127,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            itemSpacing: 10,
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginLeft: 2,
                            marginRight: 0,
                        }}
                    >
                        <span
                            id="t18_1612_740"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 14,
                                fontWeight: 600,
                                color: props.services.visaText,
                                letterSpacing: 0,
                                lineHeight: '22px',
                                textAlign: 'center',
                            }}
                        >
                            Visa & Immigration
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmBookingServiceXs
