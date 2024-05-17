import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmListingServiceMd = observer((mainprops) => {
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
                id="t18_1264_829"
                style={{
                    height: 100,
                    width: 880,
                    backgroundColor: 'rgba(248,246,246,1)',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    itemSpacing: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
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
                    id="t18_1264_830"
                    style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        itemSpacing: 23,
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
                        id="t18_1264_831"
                        style={{
                            borderRadius: 10,
                            backgroundColor: 'rgba(255,255,255,1)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 16,
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 1,
                            borderColor: props.services.rentalborderColor,
                            borderStyle: 'solid',
                            marginLeft: 0,
                            marginRight: 11.5,
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
                            id="t18_1264_832"
                            style={{
                                height: 47,
                                width: 47,
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
                                marginRight: 8,
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/rentalsActive.png' !=
                            '' ? (
                                <img
                                    id="t18_1264_833"
                                    style={{
                                        height: 47,
                                        width: 47,
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
                            id="t18_1264_834"
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
                                marginLeft: 8,
                                marginRight: 0,
                            }}
                        >
                            <span
                                id="t18_1264_835"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 17,
                                    fontWeight: 600,
                                    color: props.services.rentalText,
                                    letterSpacing: 0,
                                    lineHeight: '22px',
                                    textAlign: 'center',
                                }}
                            >
                                Rentals & Properties
                            </span>
                        </div>
                    </div>

                    <div
                        id="t18_1264_836"
                        style={{
                            borderRadius: 10,
                            backgroundColor: 'rgba(255,255,255,1)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 16,
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 1,
                            borderColor: props.services.rideSharingborderColor,
                            borderStyle: 'solid',
                            marginLeft: 11.5,
                            marginRight: 11.5,
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
                            id="t18_1264_837"
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
                                marginRight: 8,
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ridesActive.png' !=
                            '' ? (
                                <img
                                    id="t18_1264_838"
                                    style={{
                                        height: 47,
                                        width: 47,
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
                            id="t18_1264_839"
                            style={{
                                height: 44,
                                width: 62,
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
                                marginLeft: 8,
                                marginRight: 0,
                            }}
                        >
                            <span
                                id="t18_1264_840"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 17,
                                    fontWeight: 600,
                                    color: props.services.rideSharingText,
                                    letterSpacing: 0,
                                    lineHeight: '22px',
                                    textAlign: 'center',
                                }}
                            >
                                Ride sharing
                            </span>
                        </div>
                    </div>

                    <div
                        id="t18_1264_854"
                        style={{
                            borderRadius: 7,
                            backgroundColor: 'rgba(255,255,255,1)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 16,
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 1,
                            borderColor: props.services.visaQandAborderColor,
                            borderStyle: 'solid',
                            marginLeft: 11.5,
                            marginRight: 11.5,
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
                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/visaActive.png' !=
                        '' ? (
                            <img
                                id="t18_1264_855"
                                style={{
                                    height: 47,
                                    width: 47,
                                    display: 'flex',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                }}
                                src={
                                    'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/visaActive.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}

                        <span
                            id="t18_1264_856"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 18,
                                fontWeight: 600,
                                color: props.services.visaQandAText,
                                letterSpacing: 0,
                                lineHeight: '22px',
                                textAlign: 'center',
                                marginLeft: 8,
                                marginRight: 0,
                            }}
                        >
                            Visa & Immigration
                        </span>
                    </div>

                    <div
                        id="t18_1264_857"
                        style={{
                            borderRadius: 7,
                            backgroundColor: 'rgba(255,255,255,1)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 16,
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 1,
                            borderColor: props.services.TcborderColor,
                            borderStyle: 'solid',
                            marginLeft: 11.5,
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
                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/travelCompanionActive.png' !=
                        '' ? (
                            <img
                                id="t18_1264_858"
                                style={{
                                    height: 47,
                                    width: 47,
                                    display: 'flex',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                }}
                                src={
                                    'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/travelCompanionActive.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}

                        <span
                            id="t18_1264_859"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 18,
                                fontWeight: 600,
                                color: props.services.TcText,
                                letterSpacing: 0,
                                lineHeight: '22px',
                                textAlign: 'center',
                                marginLeft: 8,
                                marginRight: 0,
                            }}
                        >
                            Travel companion
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmListingServiceMd
