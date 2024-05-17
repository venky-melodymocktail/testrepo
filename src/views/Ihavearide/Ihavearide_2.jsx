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
import MmWantedRideCard from '../../components/MmWantedRideCard.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmWantedRideCardMd from '../../components/MmWantedRideCardMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmFilterMd from '../../components/MmFilterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmWantedRideCardS from '../../components/MmWantedRideCardS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmFilterS from '../../components/MmFilterS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmWantedRideCardXs from '../../components/MmWantedRideCardXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmFilterXs from '../../components/MmFilterXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'

const Ihavearide_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_872_6025')
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
                id="t18_872_6025"
                style={{
                    width: 900,
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 10,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_872_5786"
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
                        id="t18_872_5787"
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

                        <div
                            id="t18_872_5790"
                            style={{
                                height: 59,
                                width: 866,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 34,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderColor: 'rgba(207,206,206,1)',
                                borderBottomWidth: 1,
                                borderStyle: 'solid',
                            }}
                        >
                            <span
                                id="t18_872_5791"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginLeft: 0,
                                    marginRight: 5,
                                }}
                            >
                                Ride sharing
                            </span>

                            <div
                                id="t18_872_5792"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 5,
                                    marginRight: 5,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/83d78575792856e766bb4b65ca55e6822443925f.png' !=
                                '' ? (
                                    <img
                                        id="t18_872_5793"
                                        style={{
                                            height: 13,
                                            width: 7,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/83d78575792856e766bb4b65ca55e6822443925f.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/83d78575792856e766bb4b65ca55e6822443925f.png' !=
                                '' ? (
                                    <img
                                        id="t18_872_5794"
                                        style={{
                                            height: 13,
                                            width: 7,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginRight: 0,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/83d78575792856e766bb4b65ca55e6822443925f.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <span
                                id="t18_872_5795"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginLeft: 5,
                                    marginRight: 0,
                                }}
                            >
                                I have a Ride
                            </span>
                        </div>

                        <div
                            id="t18_1683_198"
                            style={{
                                width: 816,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 34,
                                paddingRight: 50,
                                paddingTop: 20,
                                paddingBottom: 20,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1683_199"
                                style={{
                                    width: 141,
                                    borderRadius: 7,
                                    backgroundColor: 'rgba(186,15,23,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 7.5,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.setUniversalFilters()
                                    dl.functions.modalsPlugin.openModal(
                                        'filter'
                                    )
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/826373dad5dd0e37209a226b39515b5d2478d996.png' !=
                                '' ? (
                                    <img
                                        id="t18_1683_200"
                                        style={{
                                            height: 12,
                                            width: 17,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/826373dad5dd0e37209a226b39515b5d2478d996.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_1683_201"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 20,
                                        fontWeight: 600,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '24.204544067382812px',
                                        textAlign: 'center',
                                        marginLeft: 5,
                                        marginRight: 0,
                                    }}
                                >
                                    Filters
                                </span>
                            </div>

                            <div
                                id="t18_1683_202"
                                style={{
                                    width: 690,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 7.5,
                                    marginRight: 0,
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {dl.changes.universalFiltersList.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmFilterMd
                                                        {...item}
                                                        {...dl.changes
                                                            .universalFiltersList}
                                                        onRemove={(val) => {
                                                            dl.changes.universalFiltersList.splice(
                                                                index,
                                                                1
                                                            )
                                                            dl.changes.universalFilter[
                                                                item.filterIndex
                                                            ].options[
                                                                item.optionIndex
                                                            ].selected = false
                                                            dl.functions.applyUniversalFilter()
                                                        }}
                                                    />
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_872_5820"
                            style={{
                                width: 880,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_872_5821"
                                style={{
                                    height: 55,
                                    width: 224,
                                    borderRadius: 30,
                                    backgroundColor: 'rgba(186,15,23,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    var userToken =
                                        dl.functions.common.getCookie(
                                            'userToken'
                                        )
                                    if (userToken) {
                                        dl.functions.viewsPlugin.showView(
                                            'listmyride'
                                        )
                                        var currentPath =
                                            dl.functions.common.getLastPath()
                                        dl.functions.onLoadFunctions[
                                            currentPath
                                        ]()
                                        var serviceSelector =
                                            dl.changes.serviceSelector.services

                                        for (var key in serviceSelector) {
                                            serviceSelector[key] =
                                                'rgba(186,15,23,1)'
                                        }

                                        serviceSelector['listmyride'] =
                                            'rgba(156,18,24,1)'
                                    } else {
                                        dl.functions.modalsPlugin.openModal(
                                            'loginLg'
                                        )
                                    }
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/41a7227774b5b1086601e797a1f6691e1f551b82.png' !=
                                '' ? (
                                    <img
                                        id="t18_872_5822"
                                        style={{
                                            height: 27,
                                            width: 27,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 5.5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/41a7227774b5b1086601e797a1f6691e1f551b82.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_872_5823"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 500,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
                                        textAlign: 'center',
                                        marginLeft: 5.5,
                                        marginRight: 0,
                                    }}
                                >
                                    List my Ride
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_872_5824"
                            style={{
                                width: 900,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingTop: 10,
                                paddingBottom: 10,
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
                                {dl.changes.haveARideList.map((item, index) => {
                                    return (
                                        <div>
                                            <MmWantedRideCardMd
                                                {...item}
                                                {...dl.changes.haveARideList}
                                                onClickContact={(val) => {
                                                    val.stopPropagation()
                                                    var id =
                                                        dl.changes
                                                            .haveARideList[
                                                            index
                                                        ]._id
                                                    dl.functions.contactUsAction(
                                                        id,
                                                        'rides',
                                                        'large'
                                                    )
                                                }}
                                                onClickBookmark={(val) => {
                                                    val.stopPropagation()
                                                    dl.functions.bookmarkAction(
                                                        'haveARideList',
                                                        index,
                                                        'rides'
                                                    )
                                                }}
                                                onClickRemoveBookmark={(
                                                    val
                                                ) => {
                                                    val.stopPropagation()
                                                    dl.functions.bookmarkAction(
                                                        'haveARideList',
                                                        index,
                                                        'rides'
                                                    )
                                                }}
                                                onClick={(val) => {
                                                    var rideId =
                                                        dl.changes
                                                            .haveARideList[
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
                                })}
                            </div>
                        </div>

                        <MmEmptyList {...dl.changes.haveARideNoDataVisible} />

                        <div
                            id="t18_872_5856"
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
                                marginBottom: 0,
                            }}
                        >
                            <MMPagination
                                total={dl.changes.paginationState.total}
                                active={dl.changes.paginationState.active}
                                onChange={(val) => {
                                    dl.functions.applyhaveARideFilter(val)
                                }}
                            />
                        </div>
                    </div>

                    <MmFooterMd />
                </div>
            </div>
        </div>
    )
})
export default Ihavearide_2
