import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmListingServiceS = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        services: {
            rentalText: 'rgba(113,113,113,1)',
            rideSharingText: 'rgba(113,113,113,1)',
            visaQandAText: 'rgba(113,113,113,1)',
            TcText: 'rgba(113,113,113,1)',
            rentalborderColor: 'rgba(207,206,206,1)',
            rideSharingborderColor: 'rgba(207,206,206,1)',
            visaQandAborderColor: 'rgba(207,206,206,1)',
            TcborderColor: 'rgba(207,206,206,1)',
        },
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1264_910"
                style={{
                    height: 73,
                    width: 600,
                    backgroundColor: 'rgba(248,246,246,1)',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    itemSpacing: 10,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 10,
                    paddingBottom: 10,
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
                    id="t18_1264_911"
                    style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        itemSpacing: 14,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_1264_912"
                        style={{
                            height: 33,
                            borderRadius: 10,
                            backgroundColor: 'rgba(255,255,255,1)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 8,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 1,
                            borderColor: props.services.rentalborderColor,
                            borderStyle: 'solid',
                            marginLeft: 0,
                            marginRight: 7,
                            cursor: 'pointer',
                        }}
                        onClick={(e) => {
                            var selector =
                                dl.changes.listingServiceSelector.services
                            for (var key in selector) {
                                selector[key] = 'rgba(113,113,113,1)'
                            }
                            selector['rentalText'] = 'rgba(186,15,23,1)'
                            selector['rentalborderColor'] = 'rgba(186,15,23,1)'
                            dl.functions.viewsPlugin.showView('rentallistings')
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                    >
                        <div
                            id="t18_1264_913"
                            style={{
                                height: 30,
                                width: 30,
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
                                marginRight: 4,
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/rentalsActive.png' !=
                            '' ? (
                                <img
                                    id="t18_1264_914"
                                    style={{
                                        height: 30,
                                        width: 30,
                                        display: 'flex',
                                        borderWidth: 0,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/rentalsActive.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div
                            id="t18_1264_915"
                            style={{
                                width: 71,
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
                                marginLeft: 4,
                                marginRight: 0,
                            }}
                        >
                            <span
                                id="t18_1264_916"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: props.services.rentalText,
                                    letterSpacing: 0,
                                    lineHeight: '16px',
                                    textAlign: 'center',
                                }}
                            >
                                Rentals & Properties
                            </span>
                        </div>
                    </div>

                    <div
                        id="t18_1264_917"
                        style={{
                            height: 33,
                            borderRadius: 10,
                            backgroundColor: 'rgba(255,255,255,1)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 8,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 1,
                            borderColor: props.services.rideSharingborderColor,
                            borderStyle: 'solid',
                            marginLeft: 7,
                            marginRight: 7,
                            cursor: 'pointer',
                        }}
                        onClick={(e) => {
                            var selector =
                                dl.changes.listingServiceSelector.services
                            for (var key in selector) {
                                selector[key] = 'rgba(113,113,113,1)'
                            }
                            selector['rideSharingborderColor'] =
                                'rgba(186,15,23,1)'
                            selector['rideSharingText'] = 'rgba(186,15,23,1)'
                            dl.functions.viewsPlugin.showView('ridelistings')
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                    >
                        <div
                            id="t18_1264_918"
                            style={{
                                height: 30,
                                width: 30,
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
                                marginRight: 4,
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ridesActive.png' !=
                            '' ? (
                                <img
                                    id="t18_1264_919"
                                    style={{
                                        height: 30,
                                        width: 30,
                                        display: 'flex',
                                        borderWidth: 0,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ridesActive.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div
                            id="t18_1264_920"
                            style={{
                                width: 51,
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
                                marginLeft: 4,
                                marginRight: 0,
                            }}
                        >
                            <span
                                id="t18_1264_921"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: props.services.rideSharingText,
                                    letterSpacing: 0,
                                    lineHeight: '16px',
                                    textAlign: 'center',
                                }}
                            >
                                Ride sharing
                            </span>
                        </div>
                    </div>

                    <div
                        id="t18_1264_937"
                        style={{
                            height: 33,
                            borderRadius: 7,
                            backgroundColor: 'rgba(255,255,255,1)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 8,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 1,
                            borderColor: props.services.visaQandAborderColor,
                            borderStyle: 'solid',
                            marginLeft: 7,
                            marginRight: 7,
                            cursor: 'pointer',
                        }}
                        onClick={(e) => {
                            var selector =
                                dl.changes.listingServiceSelector.services
                            for (var key in selector) {
                                selector[key] = 'rgba(113,113,113,1)'
                            }
                            selector['visaQandAText'] = 'rgba(186,15,23,1)'
                            selector['visaQandAborderColor'] =
                                'rgba(186,15,23,1)'
                            dl.functions.viewsPlugin.showView(
                                'questionlistings'
                            )
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                    >
                        <div
                            id="t18_1264_938"
                            style={{
                                height: 30,
                                width: 30,
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
                                marginRight: 4,
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/visaActive.png' !=
                            '' ? (
                                <img
                                    id="t18_1264_939"
                                    style={{
                                        height: 30,
                                        width: 30,
                                        display: 'flex',
                                        borderWidth: 0,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/visaActive.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div
                            id="t18_1264_940"
                            style={{
                                width: 81,
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
                                marginLeft: 4,
                                marginRight: 0,
                            }}
                        >
                            <span
                                id="t18_1264_941"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: props.services.visaQandAText,
                                    letterSpacing: 0,
                                    lineHeight: '16px',
                                    textAlign: 'center',
                                }}
                            >
                                Visa & Immigration
                            </span>
                        </div>
                    </div>

                    <div
                        id="t18_1264_942"
                        style={{
                            height: 33,
                            borderRadius: 7,
                            backgroundColor: 'rgba(255,255,255,1)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 8,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 1,
                            borderColor: props.services.TcborderColor,
                            borderStyle: 'solid',
                            marginLeft: 7,
                            marginRight: 0,
                            cursor: 'pointer',
                        }}
                        onClick={(e) => {
                            var selector =
                                dl.changes.listingServiceSelector.services
                            for (var key in selector) {
                                selector[key] = 'rgba(113,113,113,1)'
                            }
                            selector['TcText'] = 'rgba(186,15,23,1)'
                            selector['TcborderColor'] = 'rgba(186,15,23,1)'
                            dl.functions.viewsPlugin.showView(
                                'travelcompanionlisting'
                            )
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                    >
                        <div
                            id="t18_1264_943"
                            style={{
                                height: 30,
                                width: 30,
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
                                marginRight: 4,
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/travelCompanionActive.png' !=
                            '' ? (
                                <img
                                    id="t18_1264_944"
                                    style={{
                                        height: 30,
                                        width: 30,
                                        display: 'flex',
                                        borderWidth: 0,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/travelCompanionActive.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div
                            id="t18_1264_945"
                            style={{
                                width: 76,
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
                                marginLeft: 4,
                                marginRight: 0,
                            }}
                        >
                            <span
                                id="t18_1264_946"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: props.services.TcText,
                                    letterSpacing: 0,
                                    lineHeight: '16px',
                                    textAlign: 'center',
                                }}
                            >
                                Travel companion
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmListingServiceS
