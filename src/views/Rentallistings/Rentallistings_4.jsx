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

const Rentallistings_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_1262_423')
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
                id="t18_1262_423"
                style={{
                    width: 400,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 5,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginLeft: 15,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1261_185"
                    style={{
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
                        id="t18_1261_186"
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
                            id="t18_1261_187"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 10,
                            }}
                        >
                            <MmHeaderXs
                                {...dl.changes.userDetail}
                                onChangeAddress={(val) => {
                                    dl.functions.modalsPlugin.openModal(
                                        'AddressPopupS'
                                    )
                                }}
                                onLogIn={(val) => {
                                    dl.functions.viewsPlugin.showView('login')
                                }}
                                onClickProfile={(val) => {
                                    // dl.functions.viewsPlugin.showView("profile")
                                    // var currentPath = dl.functions.common.getLastPath()
                                    // dl.functions.onLoadFunctions[currentPath]()
                                    // var screens = [
                                    //     "rentallistings",
                                    //     "ridelistings",
                                    //     "travelcompanionlisting",
                                    //     "questionlistings",
                                    //     "studyabroadbookings",
                                    //     "visabookings",
                                    //     "rentalbookmarks",
                                    //     "ridebookmarks",
                                    //     "travelcompanionbookmarks",
                                    //     "moviebookmarks",
                                    //     "blogbookmarks",
                                    //     "questionbookmarks",
                                    // ]
                                    // var currentPath = dl.functions.common.getLastPath()
                                    // for(var i=0; i<screens.length; i++){
                                    //     if(screens[i]==currentPath){
                                    //     	val.stopPropagation();

                                    //     }
                                    // }

                                    dl.functions.modalsPlugin.openModal(
                                        'navigationXs'
                                    )
                                }}
                            />

                            <div
                                id="t18_1261_190"
                                style={{
                                    height: -4,
                                    width: 400,
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
                                    id="t18_1261_191"
                                    style={{
                                        height: 22,
                                        width: 350,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 20,
                                        paddingRight: 30,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1261_192"
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
                                            id="t18_1261_193"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 8,
                                                fontWeight: 500,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '9.681818008422852px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            {'Account << My listings'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <MmListingServiceXs
                                {...dl.changes.listingServiceSelector}
                            />

                            <div
                                id="t18_1262_419"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingTop: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <div
                                    id="t18_1261_207"
                                    style={{
                                        height: 37,
                                        width: 362,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingLeft: 19,
                                        paddingRight: 19,
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                >
                                    {/* <select name="cars" id='t18_1261_208'
                style={{height:36,width:134,borderRadius:5,backgroundColor:"rgba(255,255,255,1.00)",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",display:"flex",paddingLeft:5,paddingRight:5,position:"relative",overflow:"visible",borderWidth:0.5,borderColor:"rgba(186,15,23,1)",borderStyle:"solid",marginLeft:0,marginRight:11.5,cursor:"pointer",}}

                
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


            </select>
     */}

                                    <select
                                        name="cars"
                                        id="t18_1262_415"
                                        style={{
                                            height: 36,
                                            width: 134,
                                            borderRadius: 5,
                                            backgroundColor:
                                                'rgba(255,255,255,1.00)',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 5,
                                            paddingRight: 5,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0.5,
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
                                                dl.changes
                                                    .selectedListingType ==
                                                'Offered'
                                            ) {
                                                // alert('f2 room offered')

                                                dl.functions.getRoomListing(
                                                    '6',
                                                    '1'
                                                )
                                            }
                                            if (
                                                dl.changes
                                                    .selectedListingType ==
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
                                        {Array.isArray(
                                            dl.changes.bookmarkType
                                        ) &&
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
                                id="t18_1261_214"
                                style={{
                                    width: 380,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: dl.changes.roomlistingVisible,
                                    paddingLeft: 10,
                                    paddingRight: 10,
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
                                    {dl.changes.roomsListing.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmOfferedRoomCardXs
                                                        {...item}
                                                        {...dl.changes
                                                            .roomsListing}
                                                        onClickEdit={(val) => {
                                                            val.stopPropagation()
                                                            if (
                                                                dl.changes
                                                                    .roomsListing[
                                                                    index
                                                                ].rentalType ==
                                                                'Home'
                                                            ) {
                                                                var roomid =
                                                                    dl.changes
                                                                        .roomsListing[
                                                                        index
                                                                    ]._id
                                                                dl.functions.common.relativeRedirect(
                                                                    `listmyhomeform?homeId=${roomid}&mode=edit`,
                                                                    true
                                                                )
                                                            } else {
                                                                var roomid =
                                                                    dl.changes
                                                                        .roomsListing[
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
                                                        onClickContact={(
                                                            val
                                                        ) => {}}
                                                        onClickDelete={(
                                                            val
                                                        ) => {
                                                            dl.functions.modalsPlugin.openModal(
                                                                'loading'
                                                            )
                                                            val.stopPropagation()
                                                            const run =
                                                                async () => {
                                                                    var body = {
                                                                        id: dl
                                                                            .changes
                                                                            .roomsListing[
                                                                            index
                                                                        ]._id,
                                                                        status: 'inactive',
                                                                    }
                                                                    var res =
                                                                        await dl.functions.updateRooms(
                                                                            body
                                                                        )
                                                                    if (
                                                                        res ==
                                                                        200
                                                                    ) {
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
                                                                dl.changes
                                                                    .roomsListing[
                                                                    index
                                                                ].rentalType ==
                                                                'Home'
                                                            ) {
                                                                var homeid =
                                                                    dl.changes
                                                                        .roomsListing[
                                                                        index
                                                                    ]._id
                                                                dl.functions.common.relativeRedirect(
                                                                    `offeredhomedetails?homeId=${homeid}`,
                                                                    true
                                                                )
                                                            } else {
                                                                var roomid =
                                                                    dl.changes
                                                                        .roomsListing[
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
                                                        onClickBookMark={(
                                                            val
                                                        ) => {}}
                                                        onClickRemoveBookMark={(
                                                            val
                                                        ) => {}}
                                                        onClickPromote={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            var roomid =
                                                                dl.changes
                                                                    .roomsListing[
                                                                    index
                                                                ]._id
                                                            var title =
                                                                dl.changes
                                                                    .roomsListing[
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
                                                                'promoteS'
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
                                id="t18_1267_3054"
                                style={{
                                    width: 380,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: dl.changes.needARoomListingVisible,
                                    paddingLeft: 10,
                                    paddingRight: 10,
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
                                    {dl.changes.needARoomListing.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmWantedRoomCardXs
                                                        {...item}
                                                        {...dl.changes
                                                            .needARoomListing}
                                                        onClickEdit={(val) => {
                                                            val.stopPropagation()
                                                            if (
                                                                dl.changes
                                                                    .needARoomListing[
                                                                    index
                                                                ].rentalType ==
                                                                'Home'
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
                                                        onClickContact={(
                                                            val
                                                        ) => {}}
                                                        onClickDelete={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            const run =
                                                                async () => {
                                                                    var body = {
                                                                        id: dl
                                                                            .changes
                                                                            .needARoomListing[
                                                                            index
                                                                        ]._id,
                                                                        status: 'inactive',
                                                                    }
                                                                    var res =
                                                                        await dl.functions.updateNeedARoom(
                                                                            body
                                                                        )
                                                                    if (
                                                                        res ==
                                                                        200
                                                                    ) {
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
                                                                dl.changes
                                                                    .needARoomListing[
                                                                    index
                                                                ].rentalType ==
                                                                'Home'
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
                                                        onClickBookmark={(
                                                            val
                                                        ) => {}}
                                                        onClickRemoveBookmark={(
                                                            val
                                                        ) => {}}
                                                        onClickPromote={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            var roomid =
                                                                dl.changes
                                                                    .needARoomListing[
                                                                    index
                                                                ]._id
                                                            var title =
                                                                dl.changes
                                                                    .needARoomListing[
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
                                                                'promoteS'
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
                                id="t18_1267_3057"
                                style={{
                                    width: 380,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: dl.changes.homeListingVisible,
                                    paddingLeft: 10,
                                    paddingRight: 10,
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
                                                    <MmOfferedHomeCardXs
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
                                                        onClickContact={(
                                                            val
                                                        ) => {}}
                                                        onClickDelete={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            const run =
                                                                async () => {
                                                                    var body = {
                                                                        id: dl
                                                                            .changes
                                                                            .homeRentelsListing[
                                                                            index
                                                                        ]._id,
                                                                        status: 'inactive',
                                                                    }
                                                                    var res =
                                                                        await dl.functions.updateHomeRental(
                                                                            body
                                                                        )
                                                                    if (
                                                                        res ==
                                                                        200
                                                                    ) {
                                                                        dl.functions.getHomeListing(
                                                                            '6',
                                                                            1
                                                                        )
                                                                    }
                                                                }

                                                            run()
                                                        }}
                                                        onClickBookmark={(
                                                            val
                                                        ) => {}}
                                                        onClickRemoveBookmark={(
                                                            val
                                                        ) => {}}
                                                        onClickPromote={(
                                                            val
                                                        ) => {
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
                                                                'promoteS'
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
                                id="t18_1267_3060"
                                style={{
                                    width: 380,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: dl.changes.needAHomeListingVisible,
                                    paddingLeft: 10,
                                    paddingRight: 10,
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
                                    {dl.changes.needAHomeListing.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmWantedHomeCardXs
                                                        {...item}
                                                        {...dl.changes
                                                            .needAHomeListing}
                                                        onClickEdit={(val) => {
                                                            val.stopPropagation()
                                                            var homeId =
                                                                dl.changes
                                                                    .needAHomeListing[
                                                                    index
                                                                ]._id
                                                            dl.functions.common.relativeRedirect(
                                                                `ineedahomeform?homeId=${homeId}&mode=edit`,
                                                                true
                                                            )
                                                        }}
                                                        onClickContact={(
                                                            val
                                                        ) => {}}
                                                        onClickDelete={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            const run =
                                                                async () => {
                                                                    var body = {
                                                                        id: dl
                                                                            .changes
                                                                            .needAHomeListing[
                                                                            index
                                                                        ]._id,
                                                                        status: 'inactive',
                                                                    }
                                                                    var res =
                                                                        await dl.functions.updateNeedAHome(
                                                                            body
                                                                        )
                                                                    if (
                                                                        res ==
                                                                        200
                                                                    ) {
                                                                        dl.functions.getneedAHomeListing(
                                                                            '6',
                                                                            1
                                                                        )
                                                                    }
                                                                }

                                                            run()
                                                        }}
                                                        onClickBookmark={(
                                                            val
                                                        ) => {}}
                                                        onClickRemoveBookmark={(
                                                            val
                                                        ) => {}}
                                                        onClickPromote={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            var homeid =
                                                                dl.changes
                                                                    .needAHomeListing[
                                                                    index
                                                                ]._id
                                                            var title =
                                                                dl.changes
                                                                    .needAHomeListing[
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
                                                                'promoteS'
                                                            )
                                                        }}
                                                        onClick={(val) => {
                                                            var homeid =
                                                                dl.changes
                                                                    .needAHomeListing[
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
                                        }
                                    )}
                                </div>
                            </div>

                            <MmEmptyListXs
                                {...dl.changes.rentelistingNoDataVisible}
                            />

                            <div
                                id="t18_1261_258"
                                style={{
                                    height: 24,
                                    width: 390,
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
                                    marginBottom: 0,
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
                                            dl.functions.getRoomListing(
                                                '6',
                                                val
                                            )
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

                        <MmFooterXs />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Rentallistings_4
