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
import MmCompanionOff from '../../components/MmCompanionOff.jsx'
import MmCompanionWan from '../../components/MmCompanionWan.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmCompanionOffMd from '../../components/MmCompanionOffMd.jsx'
import MmCompanionWanMd from '../../components/MmCompanionWanMd.jsx'
import MmListingServiceMd from '../../components/MmListingServiceMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmCompanionOffS from '../../components/MmCompanionOffS.jsx'
import MmCompanionWanS from '../../components/MmCompanionWanS.jsx'
import MmListingServiceS from '../../components/MmListingServiceS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmCompanionOffXs from '../../components/MmCompanionOffXs.jsx'
import MmCompanionWanXs from '../../components/MmCompanionWanXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'
import MmListingServiceXs from '../../components/MmListingServiceXs.jsx'

const Travelcompanionlisting_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_1267_2668')
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
                id="t18_1267_2668"
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
                    id="t18_1267_2669"
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
                        id="t18_1267_2670"
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
                        id="t18_1267_2673"
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
                            id="t18_1267_2674"
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
                                id="t18_1267_2675"
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
                                    id="t18_1267_2676"
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
                        id="t18_1267_2690"
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
                            id="t18_1267_2691"
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
                                id="t18_1267_2692"
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

                                    dl.changes.selectedTCListingType = val
                                    if (val == 'Offered') {
                                        dl.functions.getWillBeATcListing(
                                            '6',
                                            '1'
                                        )
                                        dl.changes.offeredTCListingVisible =
                                            'none'
                                        dl.changes.wantedTcListingVisible =
                                            'flex'
                                    }

                                    if (val == 'Wanted') {
                                        dl.functions.getTcListing('6', '1')
                                        dl.changes.offeredTCListingVisible =
                                            'flex'
                                        dl.changes.wantedTcListingVisible =
                                            'none'
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
                                                            .selectedTCListingType
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
                        id="t18_1267_3296"
                        style={{
                            width: 900,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: dl.changes.wantedTcListingVisible,
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
                            {dl.changes.willBeATcListingList.map(
                                (item, index) => {
                                    return (
                                        <div>
                                            <MmCompanionOffMd
                                                {...item}
                                                {...dl.changes
                                                    .willBeATcListingList}
                                                onClickEdit={(val) => {
                                                    val.stopPropagation()
                                                    var tcId =
                                                        dl.changes
                                                            .willBeATcListingList[
                                                            index
                                                        ]._id
                                                    dl.functions.common.relativeRedirect(
                                                        `iwanttobetcform?tcId=${tcId}&mode=edit`,
                                                        true
                                                    )
                                                }}
                                                onClickContact={(val) => {}}
                                                onClickDelete={(val) => {
                                                    val.stopPropagation()
                                                    const run = async () => {
                                                        var body = {
                                                            id: dl.changes
                                                                .willBeATcListingList[
                                                                index
                                                            ]._id,
                                                            status: 'inactive',
                                                        }

                                                        var res =
                                                            await dl.functions.updateWillBeATc(
                                                                body,
                                                                true
                                                            )
                                                        if (res == 200) {
                                                            dl.functions.getWillBeATcListing(
                                                                '6',
                                                                '1'
                                                            )
                                                        }
                                                    }

                                                    run()
                                                }}
                                                onClick={(val) => {
                                                    var tcId =
                                                        dl.changes
                                                            .willBeATcListingList[
                                                            index
                                                        ]._id
                                                    dl.functions.common.relativeRedirect(
                                                        `offeredtcdetails?tcId=${tcId}`,
                                                        true
                                                    )
                                                }}
                                                onClickBookmark={(val) => {}}
                                                onClickRemoveBookmark={(
                                                    val
                                                ) => {}}
                                                onClickPromote={(val) => {
                                                    val.stopPropagation()
                                                    var tcId =
                                                        dl.changes
                                                            .willBeATcListingList[
                                                            index
                                                        ]._id
                                                    var title =
                                                        dl.changes
                                                            .willBeATcListingList[
                                                            index
                                                        ].city

                                                    dl.changes.promoteDetail.serviceType =
                                                        'willBeATravelCompanion'
                                                    dl.changes.promoteDetail.serviceId =
                                                        tcId
                                                    dl.changes.promoteDetail.title =
                                                        'Will be a Travel Companion to ' +
                                                        title
                                                    dl.changes.promoteDetail[
                                                        'navigationdetail'
                                                    ] =
                                                        'Travel Companion << Offered'
                                                    dl.functions.modalsPlugin.openModal(
                                                        'promoteLg'
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
                        id="t18_1267_3299"
                        style={{
                            width: 900,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: dl.changes.offeredTCListingVisible,
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
                            {dl.changes.tcListingList.map((item, index) => {
                                return (
                                    <div>
                                        <MmCompanionWanMd
                                            {...item}
                                            {...dl.changes.tcListingList}
                                            onClickEdit={(val) => {
                                                val.stopPropagation()
                                                var tcId =
                                                    dl.changes.tcListingList[
                                                        index
                                                    ]._id
                                                dl.functions.common.relativeRedirect(
                                                    `ineedatravelcompanionform?tcId=${tcId}&mode=edit`,
                                                    true
                                                )
                                            }}
                                            onClickContact={(val) => {}}
                                            onClickDelete={(val) => {
                                                val.stopPropagation()
                                                const run = async () => {
                                                    var body = {
                                                        id: dl.changes
                                                            .tcListingList[
                                                            index
                                                        ]._id,
                                                        status: 'inactive',
                                                    }

                                                    var res =
                                                        await dl.functions.updateTC(
                                                            body,
                                                            true
                                                        )
                                                    if (res == 200) {
                                                        dl.functions.getTcListing(
                                                            '6',
                                                            '1'
                                                        )
                                                    }
                                                }

                                                run()
                                            }}
                                            onClick={(val) => {
                                                var tcId =
                                                    dl.changes.tcListingList[
                                                        index
                                                    ]._id
                                                dl.functions.common.relativeRedirect(
                                                    `wantedtcdetails?tcId=${tcId}`,
                                                    true
                                                )
                                            }}
                                            onClickBookmark={(val) => {}}
                                            onClickRemoveBookmark={(val) => {}}
                                            onClickPromote={(val) => {
                                                val.stopPropagation()
                                                var tcId =
                                                    dl.changes.tcListingList[
                                                        index
                                                    ]._id
                                                var title =
                                                    dl.changes.tcListingList[
                                                        index
                                                    ].city
                                                dl.changes.promoteDetail.serviceType =
                                                    'travelCompanion'
                                                dl.changes.promoteDetail.serviceId =
                                                    tcId
                                                dl.changes.promoteDetail.title =
                                                    'Need a Travel Companion to ' +
                                                    title
                                                dl.changes.promoteDetail[
                                                    'navigationdetail'
                                                ] = 'Travel Companion << Wanted'
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

                    <MmEmptyList {...dl.changes.tcListingNoDataVisible} />

                    <div
                        id="t18_1359_139"
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

                    <div
                        id="t18_1267_2788"
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
export default Travelcompanionlisting_2
