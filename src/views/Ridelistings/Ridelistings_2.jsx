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
import MmListingRideOff from '../../components/MmListingRideOff.jsx'
import MmListingRideWan from '../../components/MmListingRideWan.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmListingRideOffMd from '../../components/MmListingRideOffMd.jsx'
import MmListingRideWanMd from '../../components/MmListingRideWanMd.jsx'
import MmListingServiceMd from '../../components/MmListingServiceMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmListingRideOffS from '../../components/MmListingRideOffS.jsx'
import MmListingRideWanS from '../../components/MmListingRideWanS.jsx'
import MmListingServiceS from '../../components/MmListingServiceS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmListingRideOffXs from '../../components/MmListingRideOffXs.jsx'
import MmListingRideWanXs from '../../components/MmListingRideWanXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'
import MmListingServiceXs from '../../components/MmListingServiceXs.jsx'

const Ridelistings_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_1263_2')
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
                id="t18_1263_2"
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
                    id="t18_1263_3"
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
                        id="t18_1263_4"
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
                        id="t18_1263_7"
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
                            id="t18_1263_8"
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
                                id="t18_1263_9"
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
                                    id="t18_1263_10"
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
                        id="t18_1263_24"
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
                            id="t18_1263_25"
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
                                id="t18_1263_30"
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
                                    cursor: 'pointer',
                                }}
                                onChange={(val) => {
                                    val = val.target.value

                                    dl.changes.selectedListingRideType = val

                                    if (
                                        dl.changes.selectedListingRideType ==
                                        'Offered'
                                    ) {
                                        dl.functions.getRideListing(
                                            'offered',
                                            '6',
                                            '1'
                                        )
                                    }

                                    if (
                                        dl.changes.selectedListingRideType ==
                                        'Wanted'
                                    ) {
                                        dl.functions.getRideListing(
                                            'wanted',
                                            '6',
                                            '1'
                                        )
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
                                                            .selectedListingRideType
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
                        id="t18_1267_3272"
                        style={{
                            width: 900,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: dl.changes.rideListingVisible,
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
                            {dl.changes.rideSharingListings.map(
                                (item, index) => {
                                    return (
                                        <div>
                                            <MmListingRideOffMd
                                                {...item}
                                                {...dl.changes
                                                    .rideSharingListings}
                                                onClickContact={(val) => {}}
                                                onClickDelete={(val) => {
                                                    val.stopPropagation()
                                                    const run = async () => {
                                                        var rideId =
                                                            dl.changes
                                                                .rideSharingListings[
                                                                index
                                                            ]._id
                                                        var body = {
                                                            id: rideId,
                                                            status: 'inactive',
                                                        }
                                                        var res =
                                                            await dl.functions.updateRide(
                                                                body
                                                            )
                                                        if (res == 200) {
                                                            dl.functions.getRideListing(
                                                                'offered',
                                                                '6',
                                                                '1'
                                                            )
                                                        }
                                                    }
                                                    run()
                                                }}
                                                onClickEdit={(val) => {
                                                    val.stopPropagation()
                                                    var rideId =
                                                        dl.changes
                                                            .rideSharingListings[
                                                            index
                                                        ]._id
                                                    dl.functions.common.relativeRedirect(
                                                        `listmyride?rideId=${rideId}&mode=edit`,
                                                        true
                                                    )
                                                }}
                                                onClickPromote={(val) => {
                                                    val.stopPropagation()
                                                    var rideId =
                                                        dl.changes
                                                            .rideSharingListings[
                                                            index
                                                        ]._id
                                                    var title =
                                                        dl.changes
                                                            .rideSharingListings[
                                                            index
                                                        ].title
                                                    dl.changes.promoteDetail.serviceType =
                                                        'rides'
                                                    dl.changes.payemtforService =
                                                        'rides'
                                                    dl.changes.promoteDetail.serviceId =
                                                        rideId
                                                    dl.changes.promoteDetail.title =
                                                        title
                                                    dl.changes.promoteDetail.navigationdetail =
                                                        'Ride Sharing << offered'
                                                    dl.functions.modalsPlugin.openModal(
                                                        'promoteLg'
                                                    )
                                                }}
                                                onClickBookmark={(val) => {}}
                                                onClickRemoveBookmark={(
                                                    val
                                                ) => {}}
                                                onClick={(val) => {
                                                    var rideId =
                                                        dl.changes
                                                            .rideSharingListings[
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
                        id="t18_1267_3275"
                        style={{
                            width: 900,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: dl.changes.needARideListingVisible,
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
                            {dl.changes.rideSharingListings.map(
                                (item, index) => {
                                    return (
                                        <div>
                                            <MmListingRideWanMd
                                                {...item}
                                                {...dl.changes
                                                    .rideSharingListings}
                                                onClickContact={(val) => {}}
                                                onClickDelete={(val) => {
                                                    val.stopPropagation()
                                                    const run = async () => {
                                                        var rideId =
                                                            dl.changes
                                                                .rideSharingListings[
                                                                index
                                                            ]._id
                                                        var body = {
                                                            id: rideId,
                                                            status: 'inactive',
                                                        }
                                                        var res =
                                                            await dl.functions.updateRide(
                                                                body
                                                            )
                                                        if (res == 200) {
                                                            dl.functions.getRideListing(
                                                                'wanted',
                                                                '6',
                                                                '1'
                                                            )
                                                        }
                                                    }
                                                    run()
                                                }}
                                                onClickEdit={(val) => {
                                                    val.stopPropagation()
                                                    var rideId =
                                                        dl.changes
                                                            .rideSharingListings[
                                                            index
                                                        ]._id
                                                    dl.functions.common.relativeRedirect(
                                                        `ineedaride?rideId=${rideId}&mode=edit`,
                                                        true
                                                    )
                                                }}
                                                onClickPromote={(val) => {
                                                    val.stopPropagation()
                                                    var rideId =
                                                        dl.changes
                                                            .rideSharingListings[
                                                            index
                                                        ]._id
                                                    var title =
                                                        dl.changes
                                                            .rideSharingListings[
                                                            index
                                                        ].title
                                                    dl.changes.promoteDetail.serviceType =
                                                        'needAride'
                                                    dl.changes.payemtforService =
                                                        'rides'
                                                    dl.changes.promoteDetail.serviceId =
                                                        rideId
                                                    dl.changes.promoteDetail.title =
                                                        title
                                                    dl.changes.promoteDetail.navigationdetail =
                                                        'Ride Sharing << wanted'
                                                    dl.functions.modalsPlugin.openModal(
                                                        'promoteLg'
                                                    )
                                                }}
                                                onClickBookmark={(val) => {}}
                                                onClickRemoveBookmark={(
                                                    val
                                                ) => {}}
                                                onClick={(val) => {
                                                    var rideId =
                                                        dl.changes
                                                            .rideSharingListings[
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

                    <MmEmptyList
                        {...dl.changes.rideSharingListingNoDataVisible}
                    />

                    <div
                        id="t18_1263_210"
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
                            id="t18_1263_211"
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
                                    if (
                                        dl.changes.selectedListingRideType ==
                                        'Offered'
                                    ) {
                                        dl.functions.getRideListing(
                                            'offered',
                                            '6',
                                            val
                                        )
                                    }

                                    if (
                                        dl.changes.selectedListingRideType ==
                                        'Wanted'
                                    ) {
                                        dl.functions.getRideListing(
                                            'wanted',
                                            '6',
                                            val
                                        )
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div
                        id="t18_1263_226"
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
export default Ridelistings_2
