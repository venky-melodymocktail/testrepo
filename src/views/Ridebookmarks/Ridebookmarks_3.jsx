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

import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmServiceSelectorXs from '../../components/MmServiceSelectorXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmListingRideOffXs from '../../components/MmListingRideOffXs.jsx'
import MmListingRideWanXs from '../../components/MmListingRideWanXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmServiceSelectorS from '../../components/MmServiceSelectorS.jsx'
import MmListingRideOffS from '../../components/MmListingRideOffS.jsx'
import MmListingRideWanS from '../../components/MmListingRideWanS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmServiceSelectorMd from '../../components/MmServiceSelectorMd.jsx'
import MmListingRideOffMd from '../../components/MmListingRideOffMd.jsx'
import MmListingRideWanMd from '../../components/MmListingRideWanMd.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmHeader from '../../components/MmHeader.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmListingRideOff from '../../components/MmListingRideOff.jsx'
import MmListingRideWan from '../../components/MmListingRideWan.jsx'

const Ridebookmarks_3 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 620
            const element = document.getElementById('t18_1282_1918')
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
                id="t18_1282_1918"
                style={{
                    width: 620,
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
                    id="t18_1282_1919"
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
                        id="t18_1282_1920"
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
                            id="t18_1282_1921"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 14.5,
                            }}
                        >
                            <MmHeaderS
                                {...dl.changes.userDetail}
                                onChangeAddress={(val) => {
                                    dl.functions.modalsPlugin.openModal(
                                        'AddressPopupS'
                                    )
                                }}
                                onClickMenu={(val) => {}}
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

                            <div
                                id="t18_1282_1924"
                                style={{
                                    height: -4,
                                    width: 620,
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
                                    id="t18_1282_1925"
                                    style={{
                                        height: 22,
                                        width: 570,
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
                                        id="t18_1282_1926"
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
                                            id="t18_1282_1927"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 10,
                                                fontWeight: 500,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '12.102272033691406px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            {'Account << Bookmarks'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <MmServiceSelectorS
                                {...dl.changes.serviceSelectorMini}
                            />

                            <div
                                id="t18_1282_1941"
                                style={{
                                    height: 50,
                                    width: 620,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <div
                                    id="t18_1282_1942"
                                    style={{
                                        height: 47,
                                        width: 560,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
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
                                        id="t18_1282_1947"
                                        style={{
                                            height: 36,
                                            width: 170,
                                            borderRadius: 5,
                                            backgroundColor:
                                                'rgba(255,255,255,1.00)',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            paddingLeft: 5,
                                            paddingRight: 5,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 1,
                                            borderColor: 'rgba(186,15,23,1)',
                                            borderStyle: 'solid',
                                            cursor: 'pointer',
                                        }}
                                        onChange={(val) => {
                                            val = val.target.value

                                            dl.changes.selectedRideBookmarkType =
                                                val

                                            if (
                                                dl.changes
                                                    .selectedRideBookmarkType ==
                                                'Offered'
                                            ) {
                                                dl.changes.offeredRideVisible =
                                                    'flex'
                                                dl.changes.wantedRideVisible =
                                                    'none'
                                                dl.functions.getBookmarkedRides(
                                                    1
                                                )
                                            }

                                            if (
                                                dl.changes
                                                    .selectedRideBookmarkType ==
                                                'Wanted'
                                            ) {
                                                dl.changes.offeredRideVisible =
                                                    'none'
                                                dl.changes.wantedRideVisible =
                                                    'flex'
                                                dl.functions.getBookmarkedRides(
                                                    1
                                                )
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
                                id="t18_1282_2054"
                                style={{
                                    width: 620,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: dl.changes.offeredRideVisible,
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
                                    {dl.changes.bookmarkedRideList.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmListingRideOffS
                                                        {...item}
                                                        {...dl.changes
                                                            .bookmarkedRideList}
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
                                                        onClickEdit={(
                                                            val
                                                        ) => {}}
                                                        onClickPromote={(
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
                                                                    .bookmarkedRideList[
                                                                    index
                                                                ].bookmarkId
                                                            var body = {
                                                                bookmarkId: id,
                                                            }
                                                            dl.functions.deleteBookmark(
                                                                body
                                                            )
                                                        }}
                                                        onClick={(val) => {
                                                            var rideId =
                                                                dl.changes
                                                                    .bookmarkedRideList[
                                                                    index
                                                                ]._id
                                                            dl.functions.common.relativeRedirect(
                                                                `offeredride?rideId=${rideId}`,
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
                                id="t18_1282_2057"
                                style={{
                                    width: 620,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: dl.changes.wantedRideVisible,
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
                                    {dl.changes.bookmarkedRideList.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmListingRideWanS
                                                        {...item}
                                                        {...dl.changes
                                                            .bookmarkedRideList}
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
                                                        onClickEdit={(
                                                            val
                                                        ) => {}}
                                                        onClickPromote={(
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
                                                                    .bookmarkedRideList[
                                                                    index
                                                                ].bookmarkId
                                                            var body = {
                                                                bookmarkId: id,
                                                            }
                                                            dl.functions.deleteBookmark(
                                                                body
                                                            )
                                                        }}
                                                        onClick={(val) => {
                                                            var rideId =
                                                                dl.changes
                                                                    .bookmarkedRideList[
                                                                    index
                                                                ]._id
                                                            dl.functions.common.relativeRedirect(
                                                                `wantedride?rideId=${rideId}`,
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

                            <MmEmptyListS
                                {...dl.changes.bookmarkNodataVisible}
                            />

                            <div
                                id="t18_1282_1963"
                                style={{
                                    height: 38,
                                    width: 610,
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
                                                .selectedRideBookmarkType ==
                                            'Offered'
                                        ) {
                                            dl.changes.offeredRideVisible =
                                                'flex'
                                            dl.changes.wantedRideVisible =
                                                'none'
                                            dl.functions.getBookmarkedRides(
                                                Number(val)
                                            )
                                        }

                                        if (
                                            dl.changes
                                                .selectedRideBookmarkType ==
                                            'Wanted'
                                        ) {
                                            dl.changes.offeredRideVisible =
                                                'none'
                                            dl.changes.wantedRideVisible =
                                                'flex'
                                            dl.functions.getBookmarkedRides(
                                                Number(val)
                                            )
                                        }
                                    }}
                                />
                            </div>
                        </div>

                        <MmFooterS />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Ridebookmarks_3
