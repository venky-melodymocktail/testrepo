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

const Ihavearide_3 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 620
            const element = document.getElementById('t18_872_6026')
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
                id="t18_872_6026"
                style={{
                    width: 620,
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
                    id="t18_872_5873"
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_872_5874"
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
                            id="t18_872_5877"
                            style={{
                                height: 40,
                                width: 599,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 21,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderColor: 'rgba(207,206,206,1)',
                                borderBottomWidth: 1,
                                borderStyle: 'solid',
                            }}
                        >
                            <span
                                id="t18_872_5878"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'left',
                                    marginLeft: 0,
                                    marginRight: 3,
                                }}
                            >
                                Ride sharing
                            </span>

                            <div
                                id="t18_872_5879"
                                style={{
                                    height: 10,
                                    width: 11,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 3,
                                    marginRight: 3,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/83d78575792856e766bb4b65ca55e6822443925f.png' !=
                                '' ? (
                                    <img
                                        id="t18_872_5880"
                                        style={{
                                            height: 9.28564453125,
                                            width: 5,
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
                                        id="t18_872_5881"
                                        style={{
                                            height: 9.28564453125,
                                            width: 5,
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
                                id="t18_872_5882"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'left',
                                    marginLeft: 3,
                                    marginRight: 0,
                                }}
                            >
                                I have a Ride
                            </span>
                        </div>

                        <div
                            id="t18_1683_190"
                            style={{
                                width: 549,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 21,
                                paddingRight: 50,
                                paddingTop: 20,
                                paddingBottom: 20,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1683_191"
                                style={{
                                    height: 15,
                                    width: 126,
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
                                        id="t18_1683_192"
                                        style={{
                                            height: 10.588134765625,
                                            width: 15,
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
                                    id="t18_1683_193"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '19.363636016845703px',
                                        textAlign: 'center',
                                        marginLeft: 5,
                                        marginRight: 0,
                                    }}
                                >
                                    Filters
                                </span>
                            </div>

                            <div
                                id="t18_1683_194"
                                style={{
                                    width: 449,
                                    flexDirection: 'row',
                                    alignItems: 'center',
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
                                                    <MmFilterS
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
                            id="t18_872_5894"
                            style={{
                                height: 51,
                                width: 600,
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
                                id="t18_872_5895"
                                style={{
                                    height: 40,
                                    width: 170,
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
                                            'loginS'
                                        )
                                    }
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/41a7227774b5b1086601e797a1f6691e1f551b82.png' !=
                                '' ? (
                                    <img
                                        id="t18_872_5896"
                                        style={{
                                            height: 20,
                                            width: 20,
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
                                    id="t18_872_5897"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 500,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
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
                            id="t18_872_5898"
                            style={{
                                width: 620,
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
                                            <MmWantedRideCardS
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
                                                        'small'
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

                        <MmEmptyListS {...dl.changes.haveARideNoDataVisible} />

                        <div
                            id="t18_872_5932"
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
                                    dl.functions.applyhaveARideFilter(val)
                                }}
                            />
                        </div>
                    </div>

                    <MmFooterS />
                </div>
            </div>
        </div>
    )
})
export default Ihavearide_3
