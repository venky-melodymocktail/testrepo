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

const Travelcompanionlisting_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_1267_2911')
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
                id="t18_1267_2911"
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
                    id="t18_1267_2912"
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
                        id="t18_1267_2913"
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
                            id="t18_1267_2914"
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
                                id="t18_1267_2917"
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
                                    id="t18_1267_2918"
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
                                        id="t18_1267_2919"
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
                                            id="t18_1267_2920"
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
                                id="t18_1267_2934"
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
                                    id="t18_1267_2935"
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
                                        id="t18_1267_2936"
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
                                            cursor: 'pointer',
                                        }}
                                        onChange={(val) => {
                                            val = val.target.value

                                            dl.changes.selectedTCListingType =
                                                val
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
                                                dl.functions.getTcListing(
                                                    '6',
                                                    '1'
                                                )
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
                                id="t18_1267_3308"
                                style={{
                                    width: 400,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
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
                                                    <MmCompanionOffXs
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
                                                                    if (
                                                                        res ==
                                                                        200
                                                                    ) {
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
                                id="t18_1267_3311"
                                style={{
                                    width: 400,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
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
                                    {dl.changes.tcListingList.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmCompanionWanXs
                                                        {...item}
                                                        {...dl.changes
                                                            .tcListingList}
                                                        onClickEdit={(val) => {
                                                            val.stopPropagation()
                                                            var tcId =
                                                                dl.changes
                                                                    .tcListingList[
                                                                    index
                                                                ]._id
                                                            dl.functions.common.relativeRedirect(
                                                                `ineedatravelcompanionform?tcId=${tcId}&mode=edit`,
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
                                                                    if (
                                                                        res ==
                                                                        200
                                                                    ) {
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
                                                                dl.changes
                                                                    .tcListingList[
                                                                    index
                                                                ]._id
                                                            dl.functions.common.relativeRedirect(
                                                                `wantedtcdetails?tcId=${tcId}`,
                                                                true
                                                            )
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
                                                            var tcId =
                                                                dl.changes
                                                                    .tcListingList[
                                                                    index
                                                                ]._id
                                                            var title =
                                                                dl.changes
                                                                    .tcListingList[
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
                                                            ] =
                                                                'Travel Companion << Wanted'
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

                            <MmEmptyListXs
                                {...dl.changes.tcListingNoDataVisible}
                            />

                            <div
                                id="t18_1267_3016"
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
                                        if (
                                            dl.changes.selectedTCListingType ==
                                            'Offered'
                                        ) {
                                            dl.functions.getWillBeATcListing(
                                                '6',
                                                val
                                            )
                                            dl.changes.offeredTCListingVisible =
                                                'none'
                                            dl.changes.wantedTcListingVisible =
                                                'flex'
                                        }

                                        if (
                                            dl.changes.selectedTCListingType ==
                                            'Wanted'
                                        ) {
                                            dl.functions.getTcListing('6', val)
                                            dl.changes.offeredTCListingVisible =
                                                'flex'
                                            dl.changes.wantedTcListingVisible =
                                                'none'
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
export default Travelcompanionlisting_4
