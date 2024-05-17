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
import MmFooter from '../../components/MmFooter.jsx'
import MmOfferedRoomCard from '../../components/MmOfferedRoomCard.jsx'
import MmWantedRoomCard from '../../components/MmWantedRoomCard.jsx'
import MmOfferedHomeCard from '../../components/MmOfferedHomeCard.jsx'
import MmWantedHomeCard from '../../components/MmWantedHomeCard.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmServiceSelectorMd from '../../components/MmServiceSelectorMd.jsx'
import MmOfferedRoomCardMd from '../../components/MmOfferedRoomCardMd.jsx'
import MmWantedRoomCardMd from '../../components/MmWantedRoomCardMd.jsx'
import MmOfferedHomeCardMd from '../../components/MmOfferedHomeCardMd.jsx'
import MmWantedHomeCardMd from '../../components/MmWantedHomeCardMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmServiceSelectorXs from '../../components/MmServiceSelectorXs.jsx'
import MmOfferedRoomCardXs from '../../components/MmOfferedRoomCardXs.jsx'
import MmWantedRoomCardXs from '../../components/MmWantedRoomCardXs.jsx'
import MmOfferedHomeCardXs from '../../components/MmOfferedHomeCardXs.jsx'
import MmWantedHomeCardXs from '../../components/MmWantedHomeCardXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmServiceSelectorS from '../../components/MmServiceSelectorS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmOfferedRoomCardS from '../../components/MmOfferedRoomCardS.jsx'
import MmWantedRoomCardS from '../../components/MmWantedRoomCardS.jsx'
import MmOfferedHomeCardS from '../../components/MmOfferedHomeCardS.jsx'
import MmWantedHomeCardS from '../../components/MmWantedHomeCardS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'

const Rentalbookmarks_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_1282_1712')
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
                id="t18_1282_1712"
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
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1282_1713"
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
                        id="t18_1282_1714"
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
                            id="t18_1282_1715"
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
                                id="t18_1282_1718"
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
                                    id="t18_1282_1719"
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
                                        id="t18_1282_1720"
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
                                            id="t18_1282_1721"
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
                                            {'Account << Bookmarks'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <MmServiceSelectorXs
                                {...dl.changes.serviceSelectorMini}
                            />

                            <div
                                id="t18_1282_1735"
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
                                    id="t18_1282_1736"
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
                                    <select
                                        name="cars"
                                        id="t18_1282_1737"
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
                                            marginLeft: 0,
                                            marginRight: 11.5,
                                            cursor: 'pointer',
                                        }}
                                        onChange={(val) => {
                                            val = val.target.value

                                            dl.changes.selectedBookmarkRentalType =
                                                val

                                            if (
                                                dl.changes
                                                    .selectedBookmarkRentalType ==
                                                'Home rentals'
                                            ) {
                                                if (
                                                    dl.changes
                                                        .selectedBookmarkType ==
                                                    'Wanted'
                                                ) {
                                                    dl.functions.getBookmarkedNeedAHome(
                                                        1
                                                    )
                                                } else {
                                                    dl.functions.getBookmarkedHomes(
                                                        1
                                                    )
                                                }
                                            }

                                            if (
                                                dl.changes
                                                    .selectedBookmarkRentalType ==
                                                'Rooms/Roommates'
                                            ) {
                                                if (
                                                    dl.changes
                                                        .selectedBookmarkType ==
                                                    'Wanted'
                                                ) {
                                                    dl.functions.getBookmarkedNeedArooms(
                                                        1
                                                    )
                                                } else {
                                                    dl.functions.getBookmarkedrooms(
                                                        1
                                                    )
                                                }
                                            }
                                        }}
                                    >
                                        <option value="" disabled selected>
                                            Select your option
                                        </option>
                                        {Array.isArray(
                                            dl.changes.bookmarkRentelType
                                        ) &&
                                            dl.changes.bookmarkRentelType.map(
                                                (item, index) => {
                                                    return (
                                                        <option
                                                            value={item}
                                                            selected={
                                                                item ==
                                                                dl.changes
                                                                    .selectedBookmarkRentalType
                                                            }
                                                        >
                                                            {item}
                                                        </option>
                                                    )
                                                }
                                            )}
                                    </select>

                                    <select
                                        name="cars"
                                        id="t18_1282_1741"
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

                                            dl.changes.selectedBookmarkType =
                                                val

                                            if (
                                                dl.changes
                                                    .selectedBookmarkRentalType ==
                                                'Home rentals'
                                            ) {
                                                if (
                                                    dl.changes
                                                        .selectedBookmarkType ==
                                                    'Wanted'
                                                ) {
                                                    dl.functions.getBookmarkedNeedAHome(
                                                        1
                                                    )
                                                } else {
                                                    dl.functions.getBookmarkedHomes(
                                                        1
                                                    )
                                                }
                                            }

                                            if (
                                                dl.changes
                                                    .selectedBookmarkRentalType ==
                                                'Rooms/Roommates'
                                            ) {
                                                if (
                                                    dl.changes
                                                        .selectedBookmarkType ==
                                                    'Wanted'
                                                ) {
                                                    dl.functions.getBookmarkedNeedArooms(
                                                        1
                                                    )
                                                } else {
                                                    dl.functions.getBookmarkedrooms(
                                                        1
                                                    )
                                                }
                                            }
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
                                                                    .selectedBookmarkType
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
                                id="t18_1282_1745"
                                style={{
                                    width: 380,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: dl.changes.roomsBookmarkVisible,
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
                                    {dl.changes.bookmarkedRoomList.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmOfferedRoomCardXs
                                                        {...item}
                                                        {...dl.changes
                                                            .bookmarkedRoomList}
                                                        onClickEdit={(
                                                            val
                                                        ) => {}}
                                                        onClickContact={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            dl.changes.contactUSForm.firstname =
                                                                dl.changes.userDetail.firstName
                                                            dl.changes.contactUSForm.lastname =
                                                                dl.changes.userDetail.lastName
                                                            dl.changes.contactUSForm.email =
                                                                dl.changes.userDetail.email
                                                            if (
                                                                dl.changes
                                                                    .userDetail
                                                                    .phone
                                                                    .length > 12
                                                            ) {
                                                                dl.changes.contactUSForm.countryCode =
                                                                    '+91'
                                                                dl.changes.contactUSForm.phone =
                                                                    dl.changes.userDetail.phone.substring(
                                                                        3
                                                                    )
                                                            } else {
                                                                dl.changes.contactUSForm.countryCode =
                                                                    '+1'
                                                                dl.changes.contactUSForm.phone =
                                                                    dl.changes.userDetail.phone.substring(
                                                                        2
                                                                    )
                                                            }
                                                            dl.functions.modalsPlugin.openModal(
                                                                'contactAdvertiserS'
                                                            )
                                                        }}
                                                        onClickDelete={(
                                                            val
                                                        ) => {}}
                                                        onClick={(val) => {
                                                            var roomid =
                                                                dl.changes
                                                                    .bookmarkedRoomList[
                                                                    index
                                                                ]._id
                                                            dl.functions.common.relativeRedirect(
                                                                `offeredroomdetails?roomId=${roomid}`,
                                                                true
                                                            )
                                                        }}
                                                        onClickBookMark={(
                                                            val
                                                        ) => {
                                                            var id =
                                                                dl.changes
                                                                    .bookmarkedRoomList[
                                                                    index
                                                                ].bookmarkId
                                                            var body = {
                                                                bookmarkId: id,
                                                            }
                                                            dl.functions.deleteBookmark(
                                                                body
                                                            )
                                                        }}
                                                        onClickRemoveBookMark={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            var id =
                                                                dl.changes
                                                                    .bookmarkedRoomList[
                                                                    index
                                                                ].bookmarkId
                                                            var body = {
                                                                bookmarkId: id,
                                                            }
                                                            dl.functions.deleteBookmark(
                                                                body
                                                            )
                                                        }}
                                                        onClickPromote={(
                                                            val
                                                        ) => {}}
                                                    />
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </div>

                            <div
                                id="t18_1282_1748"
                                style={{
                                    width: 380,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display:
                                        dl.changes.needARoomBookmarkVisible,
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
                                    {dl.changes.bookmarkedNeedARoomList.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmWantedRoomCardXs
                                                        {...item}
                                                        {...dl.changes
                                                            .bookmarkedNeedARoomList}
                                                        onClickEdit={(
                                                            val
                                                        ) => {}}
                                                        onClickContact={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            dl.changes.contactUSForm.firstname =
                                                                dl.changes.userDetail.firstName
                                                            dl.changes.contactUSForm.lastname =
                                                                dl.changes.userDetail.lastName
                                                            dl.changes.contactUSForm.email =
                                                                dl.changes.userDetail.email
                                                            if (
                                                                dl.changes
                                                                    .userDetail
                                                                    .phone
                                                                    .length > 12
                                                            ) {
                                                                dl.changes.contactUSForm.countryCode =
                                                                    '+91'
                                                                dl.changes.contactUSForm.phone =
                                                                    dl.changes.userDetail.phone.substring(
                                                                        3
                                                                    )
                                                            } else {
                                                                dl.changes.contactUSForm.countryCode =
                                                                    '+1'
                                                                dl.changes.contactUSForm.phone =
                                                                    dl.changes.userDetail.phone.substring(
                                                                        2
                                                                    )
                                                            }
                                                            dl.functions.modalsPlugin.openModal(
                                                                'contactAdvertiserS'
                                                            )
                                                        }}
                                                        onClickDelete={(
                                                            val
                                                        ) => {}}
                                                        onClick={(val) => {
                                                            var roomid =
                                                                dl.changes
                                                                    .bookmarkedNeedARoomList[
                                                                    index
                                                                ]._id
                                                            dl.functions.common.relativeRedirect(
                                                                `wantedroomdetails?roomId=${roomid}`,
                                                                true
                                                            )
                                                        }}
                                                        onClickBookmark={(
                                                            val
                                                        ) => {}}
                                                        onClickRemoveBookmark={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            var id =
                                                                dl.changes
                                                                    .bookmarkedNeedARoomList[
                                                                    index
                                                                ].bookmarkId
                                                            var body = {
                                                                bookmarkId: id,
                                                            }
                                                            dl.functions.deleteBookmark(
                                                                body
                                                            )
                                                        }}
                                                        onClickPromote={(
                                                            val
                                                        ) => {}}
                                                    />
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </div>

                            <div
                                id="t18_1282_1751"
                                style={{
                                    width: 380,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: dl.changes.homesBookmarkVisible,
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
                                    {dl.changes.bookmarkedHomeList.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmOfferedHomeCardXs
                                                        {...item}
                                                        {...dl.changes
                                                            .bookmarkedHomeList}
                                                        onClickEdit={(
                                                            val
                                                        ) => {}}
                                                        onClickContact={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            dl.changes.contactUSForm.firstname =
                                                                dl.changes.userDetail.firstName
                                                            dl.changes.contactUSForm.lastname =
                                                                dl.changes.userDetail.lastName
                                                            dl.changes.contactUSForm.email =
                                                                dl.changes.userDetail.email
                                                            if (
                                                                dl.changes
                                                                    .userDetail
                                                                    .phone
                                                                    .length > 12
                                                            ) {
                                                                dl.changes.contactUSForm.countryCode =
                                                                    '+91'
                                                                dl.changes.contactUSForm.phone =
                                                                    dl.changes.userDetail.phone.substring(
                                                                        3
                                                                    )
                                                            } else {
                                                                dl.changes.contactUSForm.countryCode =
                                                                    '+1'
                                                                dl.changes.contactUSForm.phone =
                                                                    dl.changes.userDetail.phone.substring(
                                                                        2
                                                                    )
                                                            }
                                                            dl.functions.modalsPlugin.openModal(
                                                                'contactAdvertiserS'
                                                            )
                                                        }}
                                                        onClickDelete={(
                                                            val
                                                        ) => {}}
                                                        onClickBookmark={(
                                                            val
                                                        ) => {}}
                                                        onClickRemoveBookmark={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            var id =
                                                                dl.changes
                                                                    .bookmarkedHomeList[
                                                                    index
                                                                ].bookmarkId
                                                            var body = {
                                                                bookmarkId: id,
                                                            }
                                                            dl.functions.deleteBookmark(
                                                                body
                                                            )
                                                        }}
                                                        onClickPromote={(
                                                            val
                                                        ) => {}}
                                                        onClick={(val) => {
                                                            var homeid =
                                                                dl.changes
                                                                    .bookmarkedHomeList[
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
                                id="t18_1282_1754"
                                style={{
                                    width: 380,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display:
                                        dl.changes.needAHomeBookmarkVisible,
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
                                    {dl.changes.bookmarkedNeedAHomeList.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmWantedHomeCardXs
                                                        {...item}
                                                        {...dl.changes
                                                            .bookmarkedNeedAHomeList}
                                                        onClickEdit={(
                                                            val
                                                        ) => {}}
                                                        onClickContact={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            dl.changes.contactUSForm.firstname =
                                                                dl.changes.userDetail.firstName
                                                            dl.changes.contactUSForm.lastname =
                                                                dl.changes.userDetail.lastName
                                                            dl.changes.contactUSForm.email =
                                                                dl.changes.userDetail.email
                                                            if (
                                                                dl.changes
                                                                    .userDetail
                                                                    .phone
                                                                    .length > 12
                                                            ) {
                                                                dl.changes.contactUSForm.countryCode =
                                                                    '+91'
                                                                dl.changes.contactUSForm.phone =
                                                                    dl.changes.userDetail.phone.substring(
                                                                        3
                                                                    )
                                                            } else {
                                                                dl.changes.contactUSForm.countryCode =
                                                                    '+1'
                                                                dl.changes.contactUSForm.phone =
                                                                    dl.changes.userDetail.phone.substring(
                                                                        2
                                                                    )
                                                            }
                                                            dl.functions.modalsPlugin.openModal(
                                                                'contactAdvertiserS'
                                                            )
                                                        }}
                                                        onClickDelete={(
                                                            val
                                                        ) => {}}
                                                        onClickBookmark={(
                                                            val
                                                        ) => {}}
                                                        onClickRemoveBookmark={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            var id =
                                                                dl.changes
                                                                    .bookmarkedNeedAHomeList[
                                                                    index
                                                                ].bookmarkId
                                                            var body = {
                                                                bookmarkId: id,
                                                            }
                                                            dl.functions.deleteBookmark(
                                                                body
                                                            )
                                                        }}
                                                        onClickPromote={(
                                                            val
                                                        ) => {}}
                                                        onClick={(val) => {
                                                            var homeid =
                                                                dl.changes
                                                                    .bookmarkedNeedAHomeList[
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
                                {...dl.changes.bookmarkNodataVisible}
                            />

                            <div
                                id="t18_1282_1757"
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
                                        if (
                                            dl.changes
                                                .selectedBookmarkRentalType ==
                                            'Home rentals'
                                        ) {
                                            if (
                                                dl.changes
                                                    .selectedBookmarkType ==
                                                'Wanted'
                                            ) {
                                                dl.functions.getBookmarkedNeedAHome(
                                                    Number(val)
                                                )
                                            } else {
                                                dl.functions.getBookmarkedHomes(
                                                    Number(val)
                                                )
                                            }
                                        }

                                        if (
                                            dl.changes
                                                .selectedBookmarkRentalType ==
                                            'Rooms/Roommates'
                                        ) {
                                            if (
                                                dl.changes
                                                    .selectedBookmarkType ==
                                                'Wanted'
                                            ) {
                                                dl.functions.getBookmarkedNeedArooms(
                                                    Number(val)
                                                )
                                            } else {
                                                dl.functions.getBookmarkedrooms(
                                                    Number(val)
                                                )
                                            }
                                        }
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
export default Rentalbookmarks_4
