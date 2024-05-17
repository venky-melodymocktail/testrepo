import React, { useEffect, useState } from 'react'
import dl from '../../datalayer/state'
import { observer } from 'mobx-react'
import Lottie from 'react-lottie'

import MaterialSwitch from '../../components/main/MaterialSwitch.jsx'
import MaterialSelect from '../../components/main/MaterialSelect.jsx'
import ReactDraft from '../../components/main/ReactDraft.jsx'
import MaterialMenu from '../../components/main/MaterialMenu.jsx'
import MMPagination from '../../components/main/MMPagination.jsx'
import MMFilter from '../../components/main/MMFilter.jsx'
import MaterialDate from '../../components/main/MaterialDate.jsx'
import MaterialAutoComplete from '../../components/main/MaterialAutoComplete.jsx'
import MaterialRating from '../../components/main/MaterialRating.jsx'

import MmHeader from '../../components/MmHeader.jsx'
import MmOfferedRoomCard from '../../components/MmOfferedRoomCard.jsx'
import MmWantedRoomCard from '../../components/MmWantedRoomCard.jsx'
import MmOfferedHomeCard from '../../components/MmOfferedHomeCard.jsx'
import MmWantedHomeCard from '../../components/MmWantedHomeCard.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmOfferedRoomCardMd from '../../components/MmOfferedRoomCardMd.jsx'
import MmWantedRoomCardMd from '../../components/MmWantedRoomCardMd.jsx'
import MmOfferedHomeCardMd from '../../components/MmOfferedHomeCardMd.jsx'
import MmWantedHomeCardMd from '../../components/MmWantedHomeCardMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmListingServiceMd from '../../components/MmListingServiceMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmOfferedRoomCardS from '../../components/MmOfferedRoomCardS.jsx'
import MmOfferedHomeCardS from '../../components/MmOfferedHomeCardS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmListingServiceS from '../../components/MmListingServiceS.jsx'
import MmWantedHomeCardS from '../../components/MmWantedHomeCardS.jsx'
import MmWantedRoomCardS from '../../components/MmWantedRoomCardS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmOfferedRoomCardXs from '../../components/MmOfferedRoomCardXs.jsx'
import MmWantedRoomCardXs from '../../components/MmWantedRoomCardXs.jsx'
import MmOfferedHomeCardXs from '../../components/MmOfferedHomeCardXs.jsx'
import MmWantedHomeCardXs from '../../components/MmWantedHomeCardXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'
import MmListingServiceXs from '../../components/MmListingServiceXs.jsx'

const Rentallistings_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_1262_421')
            if (element) {
                element.style.transform = 'scale(' + scale + ')'
                element.style.transformOrigin = 'center top'
            }
            if (scale < 1) {
                element.style.marginBottom =
                    -(1 - scale) * element.offsetHeight + 'px'
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize() // Initial scale calculation

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div
            style={{
                justifyContent: 'center',
                display: 'flex',
                width: '100%',
                backgroundColor: '#fff',
            }}
        >
            <div
                id="t18_1262_421"
                style={{
                    width: 900,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 5,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1261_3"
                    style={{
                        width: 900,
                        backgroundColor: 'rgba(255,255,255,1.00)',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_1261_4"
                        style={{
                            height: 84,
                            backgroundColor: 'rgba(255,255,255,1.00)',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                        }}
                    >
                        <MmHeaderMd
                            {...dl.changes.userDetail}
                            onChangeAddress={(val) => {
                                dl.functions.modalsPlugin.openModal(
                                    'AddressPopupLg'
                                )
                            }}
                            onClickMenu={(val) => {
                                dl.functions.modalsPlugin.openModal(
                                    'navigationMd'
                                )
                            }}
                            onLogIn={(val) => {
                                dl.functions.viewsPlugin.showView('login')
                            }}
                            onClickProfile={(val) => {
                                dl.functions.viewsPlugin.showView('profile')
                                var currentPath =
                                    dl.functions.common.getLastPath()
                                dl.functions.onLoadFunctions[currentPath]()
                            }}
                        />
                    </div>

                    <div
                        id="t18_1261_7"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingBottom: 30,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_1261_8"
                            style={{
                                height: 28,
                                width: 840,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 30,
                                paddingRight: 30,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1261_9"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <span
                                    id="t18_1261_10"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 10,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '12.102272033691406px',
                                        textAlign: 'left',
                                    }}
                                >
                                    {'Account << My listings'}
                                </span>
                            </div>
                        </div>
                    </div>

                    <MmListingServiceMd
                        {...dl.changes.listingServiceSelector}
                    />

                    <div
                        id="t18_1261_24"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingTop: 30,
                            paddingBottom: 30,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_1261_25"
                            style={{
                                height: 57,
                                width: 840,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 30,
                                paddingRight: 30,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            {/* <select name="cars" id='t18_1261_26'
                style={{height:40,width:183,borderRadius:5,backgroundColor:"rgba(255,255,255,1.00)",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",display:"flex",paddingLeft:10,paddingRight:10,position:"relative",overflow:"visible",borderWidth:1,borderColor:"rgba(186,15,23,1)",borderStyle:"solid",marginLeft:0,marginRight:11.5,cursor:"pointer",}}

                
                onChange={(val)=>{
                    val = val.target.value
                    
                    dl.changes.selectedListingrentelType = val

if(dl.changes.selectedListingrentelType=="Rooms/Roommates"){
    if(dl.changes.selectedListingType=="Offered"){
        // alert('f1 room offered')
        dl.functions.getRoomListing("6", "1")
    }
    if(dl.changes.selectedListingType=="Wanted"){
        // alert('f1 room wanted')

        dl.functions.getneedARoomListing("6", "1")
    }
}

if(dl.changes.selectedListingrentelType=="Home rentals"){
    if(dl.changes.selectedListingType=="Offered"){
        // alert('f1 home offered')

        dl.functions.getHomeListing("6", "1")
    }
    if(dl.changes.selectedListingType=="Wanted"){
        // alert('f1 home wanted')

        dl.functions.getneedAHomeListing("6", "1")
    }
}
                }}
                >

<option value="" disabled selected>
              Select your option
            </option>
                {Array.isArray(dl.changes.bookmarkRentelType) && dl.changes.bookmarkRentelType.map((item, index) => {
                    return <option value={item}  selected={item==dl.changes.selectedListingrentelType}>{item}</option>;
                })}


            </select> */}

                            <select
                                name="cars"
                                id="t18_1262_404"
                                style={{
                                    height: 40,
                                    width: 183,
                                    borderRadius: 5,
                                    backgroundColor: 'rgba(255,255,255,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 1,
                                    borderColor: 'rgba(186,15,23,1)',
                                    borderStyle: 'solid',
                                    marginLeft: 11.5,
                                    marginRight: 0,
                                    cursor: 'pointer',
                                }}
                                onChange={(val) => {
                                    val = val.target.value

                                    dl.changes.selectedListingType = val
                                    // if(dl.changes.selectedListingrentelType=="Rooms/Roommates"){
                                    if (
                                        dl.changes.selectedListingType ==
                                        'Offered'
                                    ) {
                                        // alert('f2 room offered')

                                        dl.functions.getRoomListing('6', '1')
                                    }
                                    if (
                                        dl.changes.selectedListingType ==
                                        'Wanted'
                                    ) {
                                        // alert('f2 room wanted')

                                        dl.functions.getneedARoomListing(
                                            '6',
                                            '1'
                                        )
                                    }
                                    // }

                                    // if(dl.changes.selectedListingrentelType=="Home rentals"){
                                    //     if(dl.changes.selectedListingType=="Offered"){
                                    //         // alert('f2 home offered')

                                    //         dl.functions.getHomeListing("6", "1")
                                    //     }
                                    //     if(dl.changes.selectedListingType=="Wanted"){
                                    //         // alert('f2 home wanted')

                                    //         dl.functions.getneedAHomeListing("6", "1")
                                    //     }
                                    // }
                                }}
                            >
                                <option value="" disabled selected>
                                    Select your option
                                </option>
                                {Array.isArray(dl.changes.bookmarkType) &&
                                    dl.changes.bookmarkType.map(
                                        (item, index) => {
                                            return (
                                                <option
                                                    value={item}
                                                    selected={
                                                        item ==
                                                        dl.changes
                                                            .selectedListingType
                                                    }
                                                >
                                                    {item}
                                                </option>
                                            )
                                        }
                                    )}
                            </select>
                        </div>
                    </div>

                    <div
                        id="t18_1267_3075"
                        style={{
                            width: 900,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: dl.changes.roomlistingVisible,
                            paddingTop: 20,
                            paddingBottom: 30,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                            }}
                        >
                            {dl.changes.roomsListing.map((item, index) => {
                                return (
                                    <div>
                                        <MmOfferedRoomCardMd
                                            {...item}
                                            {...dl.changes.roomsListing}
                                            onClickEdit={(val) => {
                                                val.stopPropagation()
                                                if (
                                                    dl.changes.roomsListing[
                                                        index
                                                    ].rentalType == 'Home'
                                                ) {
                                                    var roomid =
                                                        dl.changes.roomsListing[
                                                            index
                                                        ]._id
                                                    dl.functions.common.relativeRedirect(
                                                        `listmyhomeform?homeId=${roomid}&mode=edit`,
                                                        true
                                                    )
                                                } else {
                                                    var roomid =
                                                        dl.changes.roomsListing[
                                                            index
                                                        ]._id
                                                    dl.functions.common.relativeRedirect(
                                                        `listmyroomform?roomId=${roomid}&mode=edit`,
                                                        true
                                                    )
                                                }

                                                //                 val.stopPropagation();
                                                // var roomid = dl.changes.roomsListing[index]._id
                                                // dl.functions.common.relativeRedirect(`listmyroomform?roomId=${roomid}&mode=edit`,true)
                                            }}
                                            onClickContact={(val) => {}}
                                            onClickDelete={(val) => {
                                                dl.functions.modalsPlugin.openModal(
                                                    'loading'
                                                )
                                                val.stopPropagation()
                                                const run = async () => {
                                                    var body = {
                                                        id: dl.changes
                                                            .roomsListing[index]
                                                            ._id,
                                                        status: 'inactive',
                                                    }
                                                    var res =
                                                        await dl.functions.updateRooms(
                                                            body
                                                        )
                                                    if (res == 200) {
                                                        dl.functions.getRoomListing(
                                                            '6',
                                                            1
                                                        )
                                                        dl.functions.modalsPlugin.closeModal(
                                                            'loading'
                                                        )
                                                    }
                                                }

                                                run()
                                            }}
                                            onClick={(val) => {
                                                if (
                                                    dl.changes.roomsListing[
                                                        index
                                                    ].rentalType == 'Home'
                                                ) {
                                                    var homeid =
                                                        dl.changes.roomsListing[
                                                            index
                                                        ]._id
                                                    dl.functions.common.relativeRedirect(
                                                        `offeredhomedetails?homeId=${homeid}`,
                                                        true
                                                    )
                                                } else {
                                                    var roomid =
                                                        dl.changes.roomsListing[
                                                            index
                                                        ]._id
                                                    dl.functions.common.relativeRedirect(
                                                        `offeredroomdetails?roomId=${roomid}`,
                                                        true
                                                    )
                                                }
                                                //                 var roomid = dl.changes.roomsListing[index]._id
                                                // dl.functions.common.relativeRedirect(`offeredroomdetails?roomId=${roomid}`,true)
                                            }}
                                            onClickBookMark={(val) => {}}
                                            onClickRemoveBookMark={(val) => {
                                                val.stopPropagation()
                                                dl.functions.bookmarkAction(
                                                    'roomsList',
                                                    index,
                                                    'rooms'
                                                )
                                            }}
                                            onClickPromote={(val) => {
                                                val.stopPropagation()
                                                var roomid =
                                                    dl.changes.roomsListing[
                                                        index
                                                    ]._id
                                                var title =
                                                    dl.changes.roomsListing[
                                                        index
                                                    ].title
                                                dl.changes.promoteDetail.serviceType =
                                                    'rental'
                                                dl.changes.promoteDetail.serviceId =
                                                    roomid
                                                dl.changes.promoteDetail.title =
                                                    title
                                                dl.changes.promoteDetail[
                                                    'navigationdetail'
                                                ] =
                                                    'Rentals & Properties << Rental << Offered'
                                                dl.functions.modalsPlugin.openModal(
                                                    'promoteLg'
                                                )
                                            }}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div
                        id="t18_1267_3087"
                        style={{
                            width: 900,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: dl.changes.needARoomListingVisible,
                            paddingTop: 20,
                            paddingBottom: 30,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                            }}
                        >
                            {dl.changes.needARoomListing.map((item, index) => {
                                return (
                                    <div>
                                        <MmWantedRoomCardMd
                                            {...item}
                                            {...dl.changes.needARoomListing}
                                            onClickEdit={(val) => {
                                                val.stopPropagation()
                                                if (
                                                    dl.changes.needARoomListing[
                                                        index
                                                    ].rentalType == 'Home'
                                                ) {
                                                    var homeId =
                                                        dl.changes
                                                            .needARoomListing[
                                                            index
                                                        ]._id
                                                    dl.functions.common.relativeRedirect(
                                                        `ineedahomeform?homeId=${homeId}&mode=edit`,
                                                        true
                                                    )
                                                } else {
                                                    var roomid =
                                                        dl.changes
                                                            .needARoomListing[
                                                            index
                                                        ]._id
                                                    dl.functions.common.relativeRedirect(
                                                        `ineedaroomform?roomId=${roomid}&mode=edit`,
                                                        true
                                                    )
                                                }
                                                //                 val.stopPropagation();
                                                // var roomid = dl.changes.needARoomListing[index]._id
                                                // dl.functions.common.relativeRedirect(`ineedaroomform?roomId=${roomid}&mode=edit`,true)
                                            }}
                                            onClickContact={(val) => {}}
                                            onClickDelete={(val) => {
                                                val.stopPropagation()
                                                const run = async () => {
                                                    var body = {
                                                        id: dl.changes
                                                            .needARoomListing[
                                                            index
                                                        ]._id,
                                                        status: 'inactive',
                                                    }
                                                    var res =
                                                        await dl.functions.updateNeedARoom(
                                                            body
                                                        )
                                                    if (res == 200) {
                                                        dl.functions.getneedARoomListing(
                                                            '6',
                                                            1
                                                        )
                                                    }
                                                }

                                                run()
                                            }}
                                            onClick={(val) => {
                                                if (
                                                    dl.changes.needARoomListing[
                                                        index
                                                    ].rentalType == 'Home'
                                                ) {
                                                    var homeid =
                                                        dl.changes
                                                            .needARoomListing[
                                                            index
                                                        ]._id
                                                    dl.functions.common.relativeRedirect(
                                                        `wantedhomedetails?homeId=${homeid}`,
                                                        true
                                                    )
                                                } else {
                                                    var roomid =
                                                        dl.changes
                                                            .needARoomListing[
                                                            index
                                                        ]._id
                                                    dl.functions.common.relativeRedirect(
                                                        `wantedroomdetails?roomId=${roomid}`,
                                                        true
                                                    )
                                                }
                                                //                 var roomid = dl.changes.needARoomListing[index]._id
                                                // dl.functions.common.relativeRedirect(`wantedroomdetails?roomId=${roomid}`,true)
                                            }}
                                            onClickBookmark={(val) => {}}
                                            onClickRemoveBookmark={(val) => {}}
                                            onClickPromote={(val) => {
                                                val.stopPropagation()
                                                var roomid =
                                                    dl.changes.needARoomListing[
                                                        index
                                                    ]._id
                                                var title =
                                                    dl.changes.needARoomListing[
                                                        index
                                                    ].title

                                                dl.changes.promoteDetail.serviceType =
                                                    'needarental'
                                                dl.changes.promoteDetail.serviceId =
                                                    roomid
                                                dl.changes.promoteDetail.title =
                                                    title
                                                dl.changes.promoteDetail[
                                                    'navigationdetail'
                                                ] =
                                                    'Rentals & Properties << Rental << Wanted'
                                                dl.functions.modalsPlugin.openModal(
                                                    'promoteLg'
                                                )
                                            }}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div
                        id="t18_1267_3078"
                        style={{
                            width: 900,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: dl.changes.homeListingVisible,
                            paddingTop: 20,
                            paddingBottom: 30,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                            }}
                        >
                            {dl.changes.homeRentelsListing.map(
                                (item, index) => {
                                    return (
                                        <div>
                                            <MmOfferedHomeCardMd
                                                {...item}
                                                {...dl.changes
                                                    .homeRentelsListing}
                                                onClickEdit={(val) => {
                                                    val.stopPropagation()
                                                    var roomid =
                                                        dl.changes
                                                            .homeRentelsListing[
                                                            index
                                                        ]._id
                                                    dl.functions.common.relativeRedirect(
                                                        `listmyhomeform?homeId=${roomid}&mode=edit`,
                                                        true
                                                    )
                                                }}
                                                onClickContact={(val) => {}}
                                                onClickDelete={(val) => {
                                                    val.stopPropagation()
                                                    const run = async () => {
                                                        var body = {
                                                            id: dl.changes
                                                                .homeRentelsListing[
                                                                index
                                                            ]._id,
                                                            status: 'inactive',
                                                        }
                                                        var res =
                                                            await dl.functions.updateHomeRental(
                                                                body
                                                            )
                                                        if (res == 200) {
                                                            dl.functions.getHomeListing(
                                                                '6',
                                                                1
                                                            )
                                                        }
                                                    }

                                                    run()
                                                }}
                                                onClickBookmark={(val) => {}}
                                                onClickRemoveBookmark={(
                                                    val
                                                ) => {}}
                                                onClickPromote={(val) => {
                                                    val.stopPropagation()
                                                    var homeid =
                                                        dl.changes
                                                            .homeRentelsListing[
                                                            index
                                                        ]._id
                                                    var title =
                                                        dl.changes
                                                            .homeRentelsListing[
                                                            index
                                                        ].title
                                                    dl.changes.promoteDetail.serviceType =
                                                        'home'
                                                    dl.changes.promoteDetail.serviceId =
                                                        homeid
                                                    dl.changes.promoteDetail.title =
                                                        title
                                                    dl.changes.promoteDetail[
                                                        'navigationdetail'
                                                    ] =
                                                        'Rentals & Properties << Home Rentals << Offered'
                                                    dl.functions.modalsPlugin.openModal(
                                                        'promoteLg'
                                                    )
                                                }}
                                                onClick={(val) => {
                                                    var homeid =
                                                        dl.changes
                                                            .homeRentelsListing[
                                                            index
                                                        ]._id
                                                    dl.functions.common.relativeRedirect(
                                                        `offeredhomedetails?homeId=${homeid}`,
                                                        true
                                                    )
                                                }}
                                            />
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>

                    <div
                        id="t18_1267_3081"
                        style={{
                            width: 900,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: dl.changes.needAHomeListingVisible,
                            paddingTop: 20,
                            paddingBottom: 30,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                            }}
                        >
                            {dl.changes.needAHomeListing.map((item, index) => {
                                return (
                                    <div>
                                        <MmWantedHomeCardMd
                                            {...item}
                                            {...dl.changes.needAHomeListing}
                                            onClickEdit={(val) => {
                                                val.stopPropagation()
                                                var homeId =
                                                    dl.changes.needAHomeListing[
                                                        index
                                                    ]._id
                                                dl.functions.common.relativeRedirect(
                                                    `ineedahomeform?homeId=${homeId}&mode=edit`,
                                                    true
                                                )
                                            }}
                                            onClickContact={(val) => {}}
                                            onClickDelete={(val) => {
                                                val.stopPropagation()
                                                const run = async () => {
                                                    var body = {
                                                        id: dl.changes
                                                            .needAHomeListing[
                                                            index
                                                        ]._id,
                                                        status: 'inactive',
                                                    }
                                                    var res =
                                                        await dl.functions.updateNeedAHome(
                                                            body
                                                        )
                                                    if (res == 200) {
                                                        dl.functions.getneedAHomeListing(
                                                            '6',
                                                            1
                                                        )
                                                    }
                                                }

                                                run()
                                            }}
                                            onClickBookmark={(val) => {}}
                                            onClickRemoveBookmark={(val) => {}}
                                            onClickPromote={(val) => {
                                                val.stopPropagation()
                                                var homeid =
                                                    dl.changes.needAHomeListing[
                                                        index
                                                    ]._id
                                                var title =
                                                    dl.changes.needAHomeListing[
                                                        index
                                                    ].title
                                                dl.changes.promoteDetail.serviceType =
                                                    'needahome'
                                                dl.changes.promoteDetail.serviceId =
                                                    homeid
                                                dl.changes.promoteDetail.title =
                                                    title
                                                dl.changes.promoteDetail[
                                                    'navigationdetail'
                                                ] =
                                                    'Rentals & Properties << Home Rentals << Wanted'
                                                dl.functions.modalsPlugin.openModal(
                                                    'promoteLg'
                                                )
                                            }}
                                            onClick={(val) => {
                                                var homeid =
                                                    dl.changes.needAHomeListing[
                                                        index
                                                    ]._id
                                                dl.functions.common.relativeRedirect(
                                                    `wantedhomedetails?homeId=${homeid}`,
                                                    true
                                                )
                                            }}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <MmEmptyList {...dl.changes.rentelistingNoDataVisible} />

                    <div
                        id="t18_1261_76"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_1261_77"
                            style={{
                                height: 56,
                                width: 890,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderColor: 'rgba(207,206,206,1)',
                                borderTopWidth: 1,
                                borderBottomWidth: 1,
                                borderStyle: 'solid',
                            }}
                        >
                            <MMPagination
                                total={dl.changes.paginationState.total}
                                active={dl.changes.paginationState.active}
                                onChange={(val) => {
                                    dl.changes.paginationState.active = val
                                    // if(dl.changes.selectedListingrentelType=="Rooms/Roommates"){
                                    if (
                                        dl.changes.selectedListingType ==
                                        'Offered'
                                    ) {
                                        dl.functions.getRoomListing('6', val)
                                    }
                                    if (
                                        dl.changes.selectedListingType ==
                                        'Wanted'
                                    ) {
                                        dl.functions.getneedARoomListing(
                                            '6',
                                            val
                                        )
                                    }
                                    // }

                                    // if(dl.changes.selectedListingrentelType=="Home rentals"){
                                    //     if(dl.changes.selectedListingType=="Offered"){
                                    //         dl.functions.getHomeListing("6", val)
                                    //     }
                                    //     if(dl.changes.selectedListingType=="Wanted"){
                                    //         dl.functions.getneedAHomeListing("6", val)
                                    //     }
                                    // }
                                }}
                            />
                        </div>
                    </div>

                    <div
                        id="t18_1261_92"
                        style={{
                            height: 84,
                            backgroundColor: 'rgba(255,255,255,1.00)',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginBottom: 0,
                        }}
                    >
                        <MmFooterMd />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Rentallistings_2
