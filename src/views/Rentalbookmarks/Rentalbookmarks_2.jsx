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

const Rentalbookmarks_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_1282_1587')
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
                id="t18_1282_1587"
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
                    id="t18_1282_1588"
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
                        id="t18_1282_1589"
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
                        id="t18_1282_1592"
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
                            id="t18_1282_1593"
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
                                id="t18_1282_1594"
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
                                    id="t18_1282_1595"
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
                                    {'Account << Bookmarks'}
                                </span>
                            </div>
                        </div>
                    </div>

                    <MmServiceSelectorMd {...dl.changes.serviceSelectorMini} />

                    <div
                        id="t18_1282_1609"
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
                            id="t18_1282_1610"
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
                            <select
                                name="cars"
                                id="t18_1282_1611"
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
                                    marginLeft: 0,
                                    marginRight: 11.5,
                                    cursor: 'pointer',
                                }}
                                onChange={(val) => {
                                    val = val.target.value

                                    dl.changes.selectedBookmarkRentalType = val

                                    if (
                                        dl.changes.selectedBookmarkRentalType ==
                                        'Home rentals'
                                    ) {
                                        if (
                                            dl.changes.selectedBookmarkType ==
                                            'Wanted'
                                        ) {
                                            dl.functions.getBookmarkedNeedAHome(
                                                1
                                            )
                                        } else {
                                            dl.functions.getBookmarkedHomes(1)
                                        }
                                    }

                                    if (
                                        dl.changes.selectedBookmarkRentalType ==
                                        'Rooms/Roommates'
                                    ) {
                                        if (
                                            dl.changes.selectedBookmarkType ==
                                            'Wanted'
                                        ) {
                                            dl.functions.getBookmarkedNeedArooms(
                                                1
                                            )
                                        } else {
                                            dl.functions.getBookmarkedrooms(1)
                                        }
                                    }
                                }}
                            >
                                <option value="" disabled selected>
                                    Select your option
                                </option>
                                {Array.isArray(dl.changes.bookmarkRentelType) &&
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
                                id="t18_1282_1615"
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

                                    dl.changes.selectedBookmarkType = val

                                    if (
                                        dl.changes.selectedBookmarkRentalType ==
                                        'Home rentals'
                                    ) {
                                        if (
                                            dl.changes.selectedBookmarkType ==
                                            'Wanted'
                                        ) {
                                            dl.functions.getBookmarkedNeedAHome(
                                                1
                                            )
                                        } else {
                                            dl.functions.getBookmarkedHomes(1)
                                        }
                                    }

                                    if (
                                        dl.changes.selectedBookmarkRentalType ==
                                        'Rooms/Roommates'
                                    ) {
                                        if (
                                            dl.changes.selectedBookmarkType ==
                                            'Wanted'
                                        ) {
                                            dl.functions.getBookmarkedNeedArooms(
                                                1
                                            )
                                        } else {
                                            dl.functions.getBookmarkedrooms(1)
                                        }
                                    }
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
                        id="t18_1282_1619"
                        style={{
                            width: 900,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: dl.changes.roomsBookmarkVisible,
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
                                            <MmOfferedRoomCardMd
                                                {...item}
                                                {...dl.changes
                                                    .bookmarkedRoomList}
                                                onClickEdit={(val) => {}}
                                                onClickContact={(val) => {
                                                    val.stopPropagation()
                                                    dl.changes.contactUSForm.firstname =
                                                        dl.changes.userDetail.firstName
                                                    dl.changes.contactUSForm.lastname =
                                                        dl.changes.userDetail.lastName
                                                    dl.changes.contactUSForm.email =
                                                        dl.changes.userDetail.email
                                                    if (
                                                        dl.changes.userDetail
                                                            .phone.length > 12
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
                                                        'contactAdvertiserLg'
                                                    )
                                                }}
                                                onClickDelete={(val) => {}}
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
                                                onClickBookMark={(val) => {}}
                                                onClickRemoveBookMark={(
                                                    val
                                                ) => {
                                                    val.stopPropagation()
                                                    dl.functions.bookmarkAction(
                                                        'roomsList',
                                                        index,
                                                        'rooms'
                                                    )
                                                }}
                                                onClickPromote={(val) => {}}
                                            />
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>

                    <div
                        id="t18_1282_1622"
                        style={{
                            width: 900,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: dl.changes.needARoomBookmarkVisible,
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
                                            <MmWantedRoomCardMd
                                                {...item}
                                                {...dl.changes
                                                    .bookmarkedNeedARoomList}
                                                onClickEdit={(val) => {}}
                                                onClickContact={(val) => {
                                                    val.stopPropagation()
                                                    dl.changes.contactUSForm.firstname =
                                                        dl.changes.userDetail.firstName
                                                    dl.changes.contactUSForm.lastname =
                                                        dl.changes.userDetail.lastName
                                                    dl.changes.contactUSForm.email =
                                                        dl.changes.userDetail.email
                                                    if (
                                                        dl.changes.userDetail
                                                            .phone.length > 12
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
                                                        'contactAdvertiserLg'
                                                    )
                                                }}
                                                onClickDelete={(val) => {}}
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
                                                onClickBookmark={(val) => {}}
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
                                                onClickPromote={(val) => {}}
                                            />
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>

                    <div
                        id="t18_1282_1625"
                        style={{
                            width: 900,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: dl.changes.homesBookmarkVisible,
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
                                            <MmOfferedHomeCardMd
                                                {...item}
                                                {...dl.changes
                                                    .bookmarkedHomeList}
                                                onClickEdit={(val) => {}}
                                                onClickContact={(val) => {
                                                    val.stopPropagation()
                                                    dl.changes.contactUSForm.firstname =
                                                        dl.changes.userDetail.firstName
                                                    dl.changes.contactUSForm.lastname =
                                                        dl.changes.userDetail.lastName
                                                    dl.changes.contactUSForm.email =
                                                        dl.changes.userDetail.email
                                                    if (
                                                        dl.changes.userDetail
                                                            .phone.length > 12
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
                                                        'contactAdvertiserLg'
                                                    )
                                                }}
                                                onClickDelete={(val) => {}}
                                                onClickBookmark={(val) => {}}
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
                                                onClickPromote={(val) => {}}
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
                        id="t18_1282_1628"
                        style={{
                            width: 900,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: dl.changes.needAHomeBookmarkVisible,
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
                                            <MmWantedHomeCardMd
                                                {...item}
                                                {...dl.changes
                                                    .bookmarkedNeedAHomeList}
                                                onClickEdit={(val) => {}}
                                                onClickContact={(val) => {
                                                    val.stopPropagation()
                                                    dl.changes.contactUSForm.firstname =
                                                        dl.changes.userDetail.firstName
                                                    dl.changes.contactUSForm.lastname =
                                                        dl.changes.userDetail.lastName
                                                    dl.changes.contactUSForm.email =
                                                        dl.changes.userDetail.email
                                                    if (
                                                        dl.changes.userDetail
                                                            .phone.length > 12
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
                                                        'contactAdvertiserLg'
                                                    )
                                                }}
                                                onClickDelete={(val) => {}}
                                                onClickBookmark={(val) => {}}
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
                                                onClickPromote={(val) => {}}
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

                    <MmEmptyList {...dl.changes.bookmarkNodataVisible} />

                    <div
                        id="t18_1282_1631"
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
                            id="t18_1282_1632"
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
                            />
                        </div>
                    </div>

                    <div
                        id="t18_1282_1647"
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
                        <MmFooterMd {...dl.changes.iHaveAhomeForm.photos} />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Rentalbookmarks_2
